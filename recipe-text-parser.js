(function exposerParseurRecette(global, creerApi) {
  "use strict";

  const api = creerApi();

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  global.RecipeTextParser = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function creerParseurRecette() {
  "use strict";

  const limites = Object.freeze({
    texte: 100000,
    ingredients: 300,
    etapes: 300,
    instruction: 20000
  });
  const typesEtapes = new Set(["preparation", "cuisson", "repos", "service"]);
  const aliasSections = Object.freeze({
    ingredients: [
      "ingredient",
      "ingredients",
      "liste des ingredients",
      "ce qu il vous faut",
      "il vous faut"
    ],
    preparation: [
      "preparation",
      "etapes",
      "etapes de preparation",
      "instructions",
      "recette",
      "methode",
      "realisation",
      "marche a suivre"
    ],
    cuisson: ["cuisson", "pour la cuisson"],
    repos: ["repos", "temps de repos"],
    service: ["dressage", "finition", "service", "pour servir"],
    informations: [
      "informations",
      "infos",
      "details",
      "temps",
      "duree",
      "pour",
      "portions"
    ]
  });
  const indexSections = new Map(
    Object.entries(aliasSections).flatMap(([type, alias]) =>
      alias.map((titre) => [titre, type])
    )
  );
  const lignesParasites = [
    /^imprimer(?: la recette)?$/,
    /^ajouter aux favoris$/,
    /^partager$/,
    /^publicite$/,
    /^voir les commentaires$/,
    /^abonnez vous/,
    /^accepter (?:les )?cookies?$/,
    /^gerer (?:les )?cookies?$/,
    /^note\s*:\s*\d+(?:[.,]\d+)?\s*\/\s*5$/
  ];
  const verbesAction = {
    cuisson: /\b(cuire|enfourner|faire revenir|mijoter|griller|rotir|bouillir|chauffer|poeler)\b/,
    repos: /\b(laisser reposer|reserver au frais|refrigerer|mariner|laisser lever|laisser refroidir)\b/,
    service: /\b(servir|dresser|decorer|parsemer avant de servir)\b/,
    preparation: /\b(melanger|couper|eplucher|fouetter|incorporer|ajouter|verser|petrir|assaisonner|etaler|former)\b/
  };
  const unitesPrisesEnCharge = [
    {
      unite: "cuillère à soupe",
      motif: /^(c\.?\s*[aà]\s*soupe|cuill[eè]res?\s+[aà]\s+soupe|cs)\b\.?/i
    },
    {
      unite: "cuillère à café",
      motif: /^(c\.?\s*[aà]\s+caf[eé]|cuill[eè]res?\s+[aà]\s+caf[eé]|cc)\b\.?/i
    },
    { unite: "pièce", motif: /^(pi[eè]ces?|unit[eé]s?)\b/i },
    { unite: "tranche", motif: /^tranches?\b/i },
    { unite: "gousse", motif: /^gousses?\b/i },
    { unite: "pincée", motif: /^pinc[eé]es?\b/i },
    { unite: "boîte", motif: /^(bo[iî]tes?|conserves?)\b/i },
    { unite: "sachet", motif: /^sachets?\b/i },
    { unite: "pot", motif: /^pots?\b/i },
    { unite: "kg", motif: /^(kg|kilogrammes?)\b/i },
    { unite: "mg", motif: /^mg\b/i },
    { unite: "g", motif: /^(g|gr|grammes?)\b/i },
    { unite: "ml", motif: /^ml\b/i },
    { unite: "cl", motif: /^cl\b/i },
    { unite: "l", motif: /^(l|litres?)\b/i },
    { unite: "dl", motif: /^dl\b/i, convertirVers: "cl", facteur: 10 }
  ];
  const unitesConnuesNonPrisesEnCharge = [
    /^(feuilles?)\b/i,
    /^(branches?)\b/i,
    /^(verres?)\b/i,
    /^(bouquets?)\b/i,
    /^(tasses?)\b/i
  ];

  function normaliserPourComparaison(texte) {
    return typeof texte === "string"
      ? texte
          .trim()
          .replace(/[’']/g, " ")
          .replace(/\s+/g, " ")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[œŒ]/g, "oe")
          .replace(/[^a-zA-Z0-9%°\s]/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .toLocaleLowerCase("fr")
      : "";
  }

  function normaliserTextePourAnalyse(texte) {
    return texte
      .replace(/\r\n?/g, "\n")
      .replace(/[\u00a0\u202f]/g, " ")
      .split("\n")
      .map((ligne, index) => ({
        index,
        original: ligne,
        texte: ligne.trim().replace(/[\t ]+/g, " ")
      }));
  }

  function retirerMarqueurListe(texte) {
    return texte
      .replace(/^\s*(?:[-–—•*·]\s+|\d{1,3}[.)]\s+|(?:étape|etape)\s+\d+\s*[:.)-]?\s*)/i, "")
      .trim();
  }

  function reconnaitreSection(texte) {
    const cle = normaliserPourComparaison(texte);
    return indexSections.get(cle) || null;
  }

  function estLigneParasite(texte) {
    const normalise = normaliserPourComparaison(texte);
    return (
      /^(?:https?:\/\/|www\.)/i.test(texte.trim()) ||
      lignesParasites.some((motif) => motif.test(normalise))
    );
  }

  function detecterSections(lignes) {
    const typeParLigne = new Map();
    const titres = new Set();
    const detectedSections = [];
    let typeActuel = null;

    lignes.forEach((ligne) => {
      if (!ligne.texte) {
        typeParLigne.set(ligne.index, typeActuel);
        return;
      }

      const type = reconnaitreSection(ligne.texte);
      if (type) {
        typeActuel = type;
        ligne.estTitreSection = true;
        ligne.typeSection = type;
        if (!titres.has(type)) {
          titres.add(type);
          detectedSections.push({ type, title: ligne.texte, line: ligne.index + 1 });
        }
      }
      typeParLigne.set(ligne.index, typeActuel);
    });

    return { typeParLigne, detectedSections };
  }

  function convertirNombre(texte) {
    const fractions = { "½": 0.5, "¼": 0.25, "¾": 0.75 };
    if (Object.prototype.hasOwnProperty.call(fractions, texte)) {
      return fractions[texte];
    }
    if (/^\d+\/\d+$/.test(texte)) {
      const [numerateur, denominateur] = texte.split("/").map(Number);
      return denominateur > 0 ? numerateur / denominateur : null;
    }
    const nombre = Number(texte.replace(",", "."));
    return Number.isFinite(nombre) && nombre > 0 ? nombre : null;
  }

  function convertirDureeMinutes(texte) {
    const valeur = texte.trim().toLocaleLowerCase("fr");
    if (/\d+(?:[.,]\d+)?\s*(?:a|à|-)\s*\d/.test(normaliserPourComparaison(valeur))) {
      return { minutes: null, range: true };
    }

    const horaire = valeur.match(/\b(\d{1,2}):([0-5]\d)\b/);
    if (horaire) {
      return { minutes: Number(horaire[1]) * 60 + Number(horaire[2]), range: false };
    }

    const heuresEtMinutes = valeur.match(
      /\b(\d+)\s*(?:h|heures?)\s*([0-5]?\d)\s*(?:(?:min|minutes?)\b)?/
    );
    if (heuresEtMinutes) {
      return {
        minutes: Number(heuresEtMinutes[1]) * 60 + Number(heuresEtMinutes[2]),
        range: false
      };
    }

    const heures = valeur.match(/\b(\d+(?:[.,]\d+)?)\s*(?:h|heures?)\b/);
    const minutes = valeur.match(/\b(\d+)\s*(?:min|minutes?)\b/);
    if (!heures && !minutes) {
      const compacte = valeur.match(/\b(\d+)h([0-5]\d)\b/);
      return compacte
        ? { minutes: Number(compacte[1]) * 60 + Number(compacte[2]), range: false }
        : { minutes: null, range: false };
    }

    const total = (heures ? Number(heures[1].replace(",", ".")) * 60 : 0) +
      (minutes ? Number(minutes[1]) : 0);
    return Number.isFinite(total) && total > 0
      ? { minutes: Math.round(total), range: false }
      : { minutes: null, range: false };
  }

  function detecterPortions(lignes) {
    const candidats = [];
    const motifs = [
      { score: 5, motif: /nombre\s+de\s+portions?\s*:\s*(\d+)/i },
      { score: 4, motif: /portions?\s*:\s*(\d+)/i },
      { score: 4, motif: /pour\s*:\s*(\d+)/i },
      { score: 3, motif: /pour\s+(\d+)\s+(?:personnes?|portions?|convives?)/i },
      { score: 2, motif: /\b(\d+)\s+(?:personnes?|portions?|convives?)\b/i }
    ];

    lignes.forEach((ligne) => {
      motifs.forEach(({ score, motif }) => {
        const correspondance = ligne.texte.match(motif);
        const valeur = correspondance ? Number(correspondance[1]) : null;
        if (Number.isInteger(valeur) && valeur > 0 && valeur <= 1000) {
          candidats.push({ value: valeur, score, line: ligne.index });
        }
      });
    });
    candidats.sort((a, b) => b.score - a.score || a.line - b.line);
    const meilleur = candidats[0] || null;
    const ambiguous = meilleur
      ? candidats.some((candidat) => candidat.value !== meilleur.value && candidat.score >= meilleur.score - 1)
      : false;
    return { value: meilleur ? meilleur.value : null, ambiguous };
  }

  function detecterDifficulte(lignes) {
    const correspondances = {
      "tres facile": "Facile",
      facile: "Facile",
      moyen: "Moyenne",
      moyenne: "Moyenne",
      difficile: "Difficile"
    };

    for (const ligne of lignes) {
      const normalise = normaliserPourComparaison(ligne.texte);
      const explicite = normalise.match(/^(?:difficulte|niveau)\s+(tres facile|facile|moyen|moyenne|difficile)$/);
      const seul = /^(tres facile|facile|moyen|moyenne|difficile)$/.test(normalise)
        ? normalise
        : null;
      const valeur = explicite ? explicite[1] : seul;
      if (valeur) return correspondances[valeur];
    }
    return null;
  }

  function detecterTempsGlobaux(lignes) {
    const resultat = {
      preparationTimeMinutes: null,
      cookingTimeMinutes: null,
      restTimeMinutes: null,
      totalTimeMinutes: null
    };
    const definitions = [
      {
        propriete: "preparationTimeMinutes",
        motif: /^(?:temps\s+de\s+)?(?:préparation|preparation|prépa|prepa)\s*(?::|-)?\s+(.+)$/i
      },
      {
        propriete: "cookingTimeMinutes",
        motif: /^(?:temps\s+de\s+)?cuisson\s*(?::|-)?\s+(.+)$/i
      },
      {
        propriete: "restTimeMinutes",
        motif: /^(?:temps\s+de\s+)?(?:repos|réfrigération|refrigeration|marinade|levée|levee)\s*(?::|-)?\s+(.+)$/i
      },
      {
        propriete: "totalTimeMinutes",
        motif: /^(?:temps|durée|duree)\s+total(?:e)?\s*(?::|-)?\s+(.+)$/i
      }
    ];

    lignes.forEach((ligne) => {
      definitions.forEach((definition) => {
        if (resultat[definition.propriete] !== null) return;
        const correspondance = ligne.texte.match(definition.motif);
        if (!correspondance) return;
        const duree = convertirDureeMinutes(correspondance[1]);
        if (!duree.range && duree.minutes !== null) {
          resultat[definition.propriete] = duree.minutes;
        }
      });
    });
    return resultat;
  }

  function estLigneMetadonnee(texte) {
    const ligne = [{ texte, index: 0 }];
    return (
      detecterPortions(ligne).value !== null ||
      detecterDifficulte(ligne) !== null ||
      Object.values(detecterTempsGlobaux(ligne)).some((valeur) => valeur !== null)
    );
  }

  function titreEstPlausible(texte) {
    const normalise = normaliserPourComparaison(texte);
    return Boolean(
      normalise &&
      !reconnaitreSection(texte) &&
      !estLigneMetadonnee(texte) &&
      !estLigneParasite(texte) &&
      !/^\d+$/.test(normalise) &&
      texte.trim().length <= 180
    );
  }

  function detecterTitre(lignes) {
    for (const ligne of lignes) {
      const correspondance = ligne.texte.match(/^(?:titre|recette)\s*:\s*(.+)$/i);
      if (correspondance && titreEstPlausible(correspondance[1])) {
        return { value: correspondance[1].trim(), line: ligne.index, confidence: "high" };
      }
    }

    const premiereSection = lignes.find((ligne) => ligne.estTitreSection);
    const limite = premiereSection ? premiereSection.index : lignes.length;
    const candidat = lignes.find(
      (ligne) => ligne.index < limite && ligne.texte && titreEstPlausible(ligne.texte)
    );
    return candidat
      ? { value: candidat.texte, line: candidat.index, confidence: "medium" }
      : { value: "", line: -1, confidence: "none" };
  }

  function reconnaitreUnite(texte, unitesDisponibles) {
    for (const definition of unitesPrisesEnCharge) {
      const correspondance = texte.match(definition.motif);
      if (!correspondance) continue;
      const cible = definition.convertirVers || definition.unite;
      return {
        raw: correspondance[0].trim(),
        length: correspondance[0].length,
        unit: unitesDisponibles.has(cible) ? cible : null,
        factor: definition.facteur || 1,
        knownButUnsupported: !unitesDisponibles.has(cible)
      };
    }

    for (const motif of unitesConnuesNonPrisesEnCharge) {
      const correspondance = texte.match(motif);
      if (correspondance) {
        return {
          raw: correspondance[0].trim(),
          length: correspondance[0].length,
          unit: null,
          factor: 1,
          knownButUnsupported: true
        };
      }
    }
    return null;
  }

  function nettoyerNomIngredient(texte) {
    return texte
      .replace(/^\s*(?:de\s+|du\s+|des\s+|d[’']\s*)/i, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function analyserLigneIngredient(texte, options = {}) {
    const unitesDisponibles = new Set(options.availableUnits || []);
    const sourceLine = retirerMarqueurListe(texte);
    if (!sourceLine || sourceLine.length > limites.instruction || estLigneParasite(sourceLine)) {
      return null;
    }

    let restant = sourceLine;
    let rawQuantity = "";
    let quantity = null;
    let quantityIsRange = false;
    let approximateQuantity = false;
    const approximation = restant.match(/^(environ|approximativement|quelques)\s+/i);
    if (approximation) {
      rawQuantity = approximation[1];
      approximateQuantity = true;
      restant = restant.slice(approximation[0].length);
    }

    const multiplicateur = restant.match(/^(\d+)\s*[x×]\s*(\d+(?:[.,]\d+)?)\s+/i);
    const plage = restant.match(/^(\d+(?:[.,]\d+)?)\s*(?:à|a|-)\s*(\d+(?:[.,]\d+)?)\s+/i);
    const simple = restant.match(/^((?:\d+\/\d+)|[½¼¾]|\d+(?:[.,]\d+)?)\s*/);
    const article = restant.match(/^(un|une)\s+(?=(?:pinc[eé]es?|gousses?|bo[iî]tes?|pots?|sachets?|tranches?|cuill[eè]res?))/i);

    if (multiplicateur) {
      rawQuantity = `${multiplicateur[1]} x ${multiplicateur[2]}`;
      quantityIsRange = true;
      restant = restant.slice(multiplicateur[0].length);
    } else if (plage) {
      rawQuantity = `${plage[1]} à ${plage[2]}`;
      quantityIsRange = true;
      restant = restant.slice(plage[0].length);
    } else if (simple) {
      rawQuantity = simple[1];
      quantity = convertirNombre(simple[1]);
      restant = restant.slice(simple[0].length);
    } else if (article) {
      rawQuantity = article[1];
      quantity = 1;
      restant = restant.slice(article[0].length);
    }

    const uniteTrouvee = reconnaitreUnite(restant, unitesDisponibles);
    let unit = null;
    let rawUnit = "";
    let unknownUnit = false;
    let implicitUnit = false;
    if (uniteTrouvee) {
      rawUnit = uniteTrouvee.raw;
      unit = uniteTrouvee.unit;
      unknownUnit = uniteTrouvee.knownButUnsupported;
      restant = restant.slice(uniteTrouvee.length).trim();
      if (quantity !== null && uniteTrouvee.factor !== 1) {
        quantity *= uniteTrouvee.factor;
      }
    } else if (quantity !== null && Number.isInteger(quantity) && unitesDisponibles.has("pièce")) {
      unit = "pièce";
      implicitUnit = true;
    }

    let name = nettoyerNomIngredient(restant);
    if (unknownUnit && rawUnit) {
      name = `${rawUnit} ${restant}`.trim();
    }
    if (!name) {
      name = sourceLine;
      quantity = null;
      unit = null;
    }

    const normaliserNom = typeof options.normalizeIngredientName === "function"
      ? options.normalizeIngredientName
      : normaliserPourComparaison;
    const catalogue = Array.isArray(options.catalog) ? options.catalog : [];
    const nomNormalise = normaliserNom(name);
    const entreeCatalogue = catalogue.find(
      (ingredient) => ingredient && normaliserNom(ingredient.nom) === nomNormalise
    ) || null;

    return {
      name: entreeCatalogue ? entreeCatalogue.nom : name,
      quantity,
      unit,
      ingredientId: entreeCatalogue && typeof entreeCatalogue.id === "string"
        ? entreeCatalogue.id
        : null,
      sourceLine,
      rawQuantity,
      rawUnit,
      quantityIsRange,
      approximateQuantity,
      unknownUnit,
      implicitUnit,
      catalogMatch: Boolean(entreeCatalogue)
    };
  }

  function ligneContientVerbeAction(texte) {
    const normalise = normaliserPourComparaison(texte);
    return Object.values(verbesAction).some((motif) => motif.test(normalise));
  }

  function ligneIngredientForte(texte, options) {
    const ingredient = analyserLigneIngredient(texte, options);
    return Boolean(
      ingredient &&
      (ingredient.rawQuantity || ingredient.rawUnit || ingredient.unit) &&
      !ligneContientVerbeAction(texte)
    );
  }

  function construireBlocs(lignes) {
    const blocs = [];
    let bloc = [];
    lignes.forEach((ligne) => {
      if (!ligne.texte || ligne.estTitreSection) {
        if (bloc.length > 0) blocs.push(bloc);
        bloc = [];
      } else {
        bloc.push(ligne);
      }
    });
    if (bloc.length > 0) blocs.push(bloc);
    return blocs;
  }

  function detecterBlocIngredientsSecours(lignes, titre, sections, options) {
    const blocs = construireBlocs(
      lignes.filter(
        (ligne) =>
          ligne.index !== titre.line &&
          !estLigneMetadonnee(ligne.texte) &&
          !estLigneParasite(ligne.texte) &&
          !["preparation", "cuisson", "repos", "service"].includes(
            sections.typeParLigne.get(ligne.index)
          )
      )
    );

    for (let index = 0; index < blocs.length; index += 1) {
      const bloc = blocs[index];
      const lignesCourtes = bloc.filter(
        (ligne) => ligne.texte.length <= 120 && !ligneContientVerbeAction(ligne.texte)
      );
      const fortes = bloc.filter((ligne) => ligneIngredientForte(ligne.texte, options));
      const prochainBlocAvecActions = blocs
        .slice(index + 1)
        .some((suivant) => suivant.some((ligne) => ligneContientVerbeAction(ligne.texte)));
      if (
        bloc.length >= 2 &&
        lignesCourtes.length === bloc.length &&
        (fortes.length >= Math.ceil(bloc.length / 2) || prochainBlocAvecActions)
      ) {
        return bloc;
      }
    }
    return [];
  }

  function analyserIngredients(lignes, titre, sections, options) {
    let candidats = lignes.filter(
      (ligne) =>
        !ligne.estTitreSection &&
        ligne.texte &&
        sections.typeParLigne.get(ligne.index) === "ingredients" &&
        !ligneContientVerbeAction(ligne.texte) &&
        !estLigneParasite(ligne.texte)
    );
    let fallback = false;
    if (candidats.length === 0) {
      candidats = detecterBlocIngredientsSecours(lignes, titre, sections, options);
      fallback = candidats.length > 0;
    }

    const ingredients = candidats
      .slice(0, limites.ingredients)
      .map((ligne) => analyserLigneIngredient(ligne.texte, options))
      .filter(Boolean);
    return {
      ingredients,
      sourceLines: new Set(candidats.map((ligne) => ligne.index)),
      fallback,
      truncated: candidats.length > limites.ingredients
    };
  }

  function detecterTypeEtape(instruction, typeSection) {
    if (typesEtapes.has(typeSection)) return typeSection;
    const normalise = normaliserPourComparaison(instruction);
    for (const type of ["repos", "service", "cuisson", "preparation"]) {
      if (verbesAction[type].test(normalise)) return type;
    }
    return "preparation";
  }

  function detecterDureeEtape(instruction) {
    const plage = instruction.match(
      /\b\d+(?:[.,]\d+)?\s*(?:à|a|-)\s*\d+(?:[.,]\d+)?\s*(?:h|heures?|min|minutes?)\b/i
    );
    if (plage) return { seconds: null, range: true };
    const duree = convertirDureeMinutes(instruction);
    return {
      seconds: duree.minutes === null ? null : duree.minutes * 60,
      range: duree.range
    };
  }

  function analyserEtapes(lignes, sections, lignesIngredients) {
    let candidats = lignes.filter(
      (ligne) =>
        ligne.texte &&
        !ligne.estTitreSection &&
        !lignesIngredients.has(ligne.index) &&
        !estLigneMetadonnee(ligne.texte) &&
        !estLigneParasite(ligne.texte) &&
        typesEtapes.has(sections.typeParLigne.get(ligne.index))
    );
    let fallback = false;
    if (candidats.length === 0) {
      const dernierIngredient = lignesIngredients.size > 0
        ? Math.max(...lignesIngredients)
        : -1;
      candidats = lignes.filter(
        (ligne) =>
          ligne.index > dernierIngredient &&
          ligne.texte &&
          !ligne.estTitreSection &&
          !lignesIngredients.has(ligne.index) &&
          !estLigneMetadonnee(ligne.texte) &&
          !estLigneParasite(ligne.texte) &&
          ligneContientVerbeAction(ligne.texte)
      );
      fallback = candidats.length > 0;
    }

    const rangeDurations = [];
    const steps = candidats.slice(0, limites.etapes).map((ligne, index) => {
      const instruction = retirerMarqueurListe(ligne.texte).slice(0, limites.instruction);
      const duree = detecterDureeEtape(instruction);
      if (duree.range) rangeDurations.push(index + 1);
      return {
        id: `import-etape-${index + 1}`,
        ordre: index + 1,
        type: detecterTypeEtape(
          instruction,
          sections.typeParLigne.get(ligne.index)
        ),
        instruction,
        dureeSecondes: duree.seconds
      };
    });
    return {
      steps,
      fallback,
      rangeDurations,
      truncated: candidats.length > limites.etapes
    };
  }

  function creerAvertissements(contexte) {
    const avertissements = [];
    if (!contexte.title) avertissements.push("Titre non détecté.");
    if (contexte.portions === null) avertissements.push("Nombre de portions non détecté.");
    if (contexte.ingredients.length === 0) {
      avertissements.push("Aucun ingrédient détecté.");
    } else if (contexte.ingredientsFallback) {
      avertissements.push("Aucune section Ingrédients clairement reconnue : un bloc probable a été utilisé.");
    }
    if (contexte.steps.length === 0) {
      avertissements.push("Aucune instruction détectée.");
    } else if (contexte.stepsFallback) {
      avertissements.push("Aucune section Instructions clairement reconnue : les lignes d’action ont été utilisées.");
    }
    if (contexte.steps.length === 1) {
      avertissements.push("Les instructions ont été conservées dans une seule étape.");
    }
    if (contexte.portionsAmbiguous) {
      avertissements.push("Plusieurs nombres de portions possibles ont été trouvés.");
    }
    const unitesInconnues = contexte.ingredients.filter((ingredient) => ingredient.unknownUnit).length;
    if (unitesInconnues > 0) {
      avertissements.push(`${unitesInconnues} unité${unitesInconnues > 1 ? "s" : ""} non reconnue${unitesInconnues > 1 ? "s" : ""}.`);
    }
    const quantitesAVerifier = contexte.ingredients.filter(
      (ingredient) => ingredient.quantityIsRange || ingredient.approximateQuantity
    ).length;
    if (quantitesAVerifier > 0) {
      avertissements.push(`${quantitesAVerifier} quantité${quantitesAVerifier > 1 ? "s" : ""} à vérifier dans le formulaire.`);
    }
    const absentsCatalogue = contexte.ingredients.filter(
      (ingredient) => !ingredient.catalogMatch
    ).length;
    if (absentsCatalogue > 0) {
      avertissements.push(`${absentsCatalogue} ingrédient${absentsCatalogue > 1 ? "s" : ""} absent${absentsCatalogue > 1 ? "s" : ""} du catalogue.`);
    }
    if (contexte.rangeDurations.length > 0) {
      avertissements.push("Une durée sous forme de plage doit être vérifiée et ne crée pas de minuteur.");
    }
    if (contexte.truncatedIngredients || contexte.truncatedSteps) {
      avertissements.push("Le texte contient trop d’éléments : seuls les 300 premiers ont été conservés.");
    }
    return avertissements.slice(0, 10);
  }

  function parseRecipeText(rawText, options = {}) {
    if (typeof rawText !== "string") {
      throw new TypeError("Le texte de la recette doit être une chaîne de caractères.");
    }
    if (rawText.length > limites.texte) {
      const erreur = new Error("Le texte dépasse la limite de 100 000 caractères.");
      erreur.code = "TEXT_TOO_LONG";
      throw erreur;
    }
    if (!rawText.trim()) {
      const erreur = new Error("Collez le texte d’une recette avant de lancer l’analyse.");
      erreur.code = "EMPTY_TEXT";
      throw erreur;
    }

    const lignes = normaliserTextePourAnalyse(rawText);
    const sections = detecterSections(lignes);
    const titre = detecterTitre(lignes);
    const portions = detecterPortions(lignes);
    const temps = detecterTempsGlobaux(lignes);
    const difficulty = detecterDifficulte(lignes);
    const ingredientsAnalyse = analyserIngredients(lignes, titre, sections, options);
    const etapesAnalyse = analyserEtapes(
      lignes,
      sections,
      ingredientsAnalyse.sourceLines
    );
    const contexte = {
      title: titre.value,
      portions: portions.value,
      portionsAmbiguous: portions.ambiguous,
      ingredients: ingredientsAnalyse.ingredients,
      ingredientsFallback: ingredientsAnalyse.fallback,
      steps: etapesAnalyse.steps,
      stepsFallback: etapesAnalyse.fallback,
      rangeDurations: etapesAnalyse.rangeDurations,
      truncatedIngredients: ingredientsAnalyse.truncated,
      truncatedSteps: etapesAnalyse.truncated
    };
    const warnings = creerAvertissements(contexte);

    return {
      rawText,
      title: titre.value,
      portions: portions.value,
      difficulty,
      preparationTimeMinutes: temps.preparationTimeMinutes,
      cookingTimeMinutes: temps.cookingTimeMinutes,
      restTimeMinutes: temps.restTimeMinutes,
      totalTimeMinutes: temps.totalTimeMinutes,
      ingredients: ingredientsAnalyse.ingredients,
      steps: etapesAnalyse.steps,
      warnings,
      detectedSections: sections.detectedSections,
      confidenceSummary: {
        title: titre.confidence,
        ingredients: ingredientsAnalyse.ingredients.length === 0
          ? "none"
          : ingredientsAnalyse.fallback ? "medium" : "high",
        steps: etapesAnalyse.steps.length === 0
          ? "none"
          : etapesAnalyse.fallback ? "medium" : "high"
      },
      usable: ingredientsAnalyse.ingredients.length > 0 || etapesAnalyse.steps.length > 0
    };
  }

  return Object.freeze({
    LIMITS: limites,
    parseRecipeText,
    normalizeText: normaliserTextePourAnalyse,
    detectSections: detecterSections,
    parseIngredientLine: analyserLigneIngredient,
    parseDurationMinutes: convertirDureeMinutes,
    detectStepDuration: detecterDureeEtape
  });
});
