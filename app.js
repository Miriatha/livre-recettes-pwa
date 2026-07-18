(() => {
  console.log("Application de recettes : app.js chargé");

  const formulaire = document.getElementById("formulaire-recette");
  const champNom = document.getElementById("nom-recette");
  const menuCategorie = document.getElementById("categorie-recette");
  const zoneMessage = document.getElementById("message-formulaire");
  const zoneRecettes = document.getElementById("liste-recettes");
  const filtreCategorie = document.getElementById("filtre-categorie");
  const filtreFavoris = document.getElementById("filtre-favoris");
  const boutonPrincipal = document.getElementById("bouton-enregistrer");
  const boutonAnnuler = document.getElementById("bouton-annuler-modification");
  const listeIngredients = document.getElementById("liste-ingredients");
  const boutonAjouterIngredient = document.getElementById("ajouter-ingredient");
  const champPreparation = document.getElementById("instructions-preparation");
  const champCuisson = document.getElementById("instructions-cuisson");
  const champTempsPreparation = document.getElementById("temps-preparation");
  const champTempsCuisson = document.getElementById("temps-cuisson");
  const champPortions = document.getElementById("portions");
  const menuDifficulte = document.getElementById("difficulte");
  const champNotes = document.getElementById("notes");
  const champConseils = document.getElementById("conseils");

  const elementsNecessaires = [
    ["#formulaire-recette", formulaire],
    ["#nom-recette", champNom],
    ["#categorie-recette", menuCategorie],
    ["#message-formulaire", zoneMessage],
    ["#liste-recettes", zoneRecettes],
    ["#filtre-categorie", filtreCategorie],
    ["#filtre-favoris", filtreFavoris],
    ["#bouton-enregistrer", boutonPrincipal],
    ["#bouton-annuler-modification", boutonAnnuler],
    ["#liste-ingredients", listeIngredients],
    ["#ajouter-ingredient", boutonAjouterIngredient],
    ["#instructions-preparation", champPreparation],
    ["#instructions-cuisson", champCuisson],
    ["#temps-preparation", champTempsPreparation],
    ["#temps-cuisson", champTempsCuisson],
    ["#portions", champPortions],
    ["#difficulte", menuDifficulte],
    ["#notes", champNotes],
    ["#conseils", champConseils]
  ];
  const elementsManquants = elementsNecessaires
    .filter(([, element]) => !element)
    .map(([selecteur]) => selecteur);

  if (elementsManquants.length > 0) {
    console.error(
      `Application de recettes : élément(s) introuvable(s) dans la page : ${elementsManquants.join(
        ", "
      )}.`
    );
    return;
  }

  const cleStockage = "livreRecettes.recettes";
  const difficultes = ["Facile", "Moyenne", "Difficile"];
  const unitesIngredient = [
    "mg",
    "g",
    "kg",
    "ml",
    "cl",
    "l",
    "pièce",
    "tranche",
    "gousse",
    "cuillère à café",
    "cuillère à soupe",
    "pincée",
    "boîte",
    "pot",
    "sachet"
  ];

  function afficherMessage(texte, type) {
    zoneMessage.textContent = texte;
    zoneMessage.className = `message ${type}`;
  }

  function afficherRecettes() {
    zoneRecettes.textContent = "";

    if (recettes.length === 0) {
      const messageVide = document.createElement("p");
      messageVide.className = "aucune-recette";
      messageVide.textContent = "Aucune recette n’est encore enregistrée.";
      zoneRecettes.append(messageVide);
      return;
    }

    let recettesAffichees = filtreCategorie.value
      ? recettes.filter((recette) => recette.categorie === filtreCategorie.value)
      : recettes;

    if (filtreFavoris.checked) {
      recettesAffichees = recettesAffichees.filter(
        (recette) => recette.favori === true
      );
    }

    if (recettesAffichees.length === 0) {
      const messageVide = document.createElement("p");
      messageVide.className = "aucune-recette";
      messageVide.textContent = filtreFavoris.checked
        ? "Aucune recette favorite ne correspond aux filtres sélectionnés."
        : "Aucune recette ne correspond à cette catégorie.";
      zoneRecettes.append(messageVide);
      return;
    }

    recettesAffichees.forEach((recette) => {
      const carte = document.createElement("article");
      const nom = document.createElement("h3");
      const categorie = document.createElement("p");
      const actions = document.createElement("div");
      const boutonFavori = document.createElement("button");
      const boutonModifier = document.createElement("button");
      const boutonSuppression = document.createElement("button");

      const estFavorite = recette.favori === true;

      carte.className = estFavorite ? "carte-recette favorite" : "carte-recette";
      nom.textContent = recette.nom;
      categorie.textContent = `Catégorie : ${recette.categorie}`;
      const ingredients = obtenirIngredientsValides(recette);
      const preparation = obtenirTexteRecette(recette.preparation);
      const cuisson = obtenirTexteRecette(recette.cuisson);
      const notes = obtenirTexteRecette(recette.notes);
      const conseils = obtenirTexteRecette(recette.conseils);
      const informationsPratiques = obtenirInformationsPratiques(recette);

      actions.className = "actions-recette";
      boutonFavori.type = "button";
      boutonFavori.className = "bouton-favori";
      boutonFavori.dataset.recetteId = recette.id;
      boutonFavori.textContent = estFavorite
        ? "Retirer des favoris"
        : "Ajouter aux favoris";
      boutonModifier.type = "button";
      boutonModifier.className = "bouton-modifier";
      boutonModifier.dataset.recetteId = recette.id;
      boutonModifier.textContent = "Modifier";
      boutonSuppression.type = "button";
      boutonSuppression.className = "bouton-suppression";
      boutonSuppression.dataset.recetteId = recette.id;
      boutonSuppression.textContent = "Supprimer";

      if (estFavorite) {
        const indicationFavorite = document.createElement("span");
        indicationFavorite.className = "indication-favorite";
        indicationFavorite.textContent = "Favorite";
        nom.append(" ", indicationFavorite);
      }

      boutonFavori.addEventListener("click", () => {
        basculerFavori(boutonFavori.dataset.recetteId);
      });

      boutonModifier.addEventListener("click", () => {
        commencerModification(boutonModifier.dataset.recetteId);
      });

      boutonSuppression.addEventListener("click", () => {
        supprimerRecette(boutonSuppression.dataset.recetteId);
      });

      actions.append(boutonFavori, boutonModifier, boutonSuppression);
      carte.append(nom, categorie);

      if (ingredients.length > 0) {
        const titreIngredients = document.createElement("h4");
        const liste = document.createElement("ul");

        titreIngredients.className = "titre-ingredients-recette";
        titreIngredients.textContent = "Ingrédients";
        liste.className = "ingredients-recette";

        ingredients.forEach((ingredient) => {
          const element = document.createElement("li");
          element.textContent = `${ingredient.quantite} ${ingredient.unite} ${ingredient.nom}`;
          liste.append(element);
        });

        carte.append(titreIngredients, liste);
      }

      if (informationsPratiques.length > 0) {
        const titreInformations = document.createElement("h4");
        const listeInformations = document.createElement("ul");

        titreInformations.className = "titre-instructions-recette";
        titreInformations.textContent = "Informations pratiques";
        listeInformations.className = "informations-pratiques-recette";

        informationsPratiques.forEach((information) => {
          const element = document.createElement("li");
          element.textContent = information;
          listeInformations.append(element);
        });

        carte.append(titreInformations, listeInformations);
      }

      if (preparation) {
        const titrePreparation = document.createElement("h4");
        const textePreparation = document.createElement("p");

        titrePreparation.className = "titre-instructions-recette";
        titrePreparation.textContent = "Préparation";
        textePreparation.className = "instructions-recette";
        textePreparation.textContent = preparation;
        carte.append(titrePreparation, textePreparation);
      }

      if (cuisson) {
        const titreCuisson = document.createElement("h4");
        const texteCuisson = document.createElement("p");

        titreCuisson.className = "titre-instructions-recette";
        titreCuisson.textContent = "Cuisson";
        texteCuisson.className = "instructions-recette";
        texteCuisson.textContent = cuisson;
        carte.append(titreCuisson, texteCuisson);
      }

      if (notes) {
        const titreNotes = document.createElement("h4");
        const texteNotes = document.createElement("p");

        titreNotes.className = "titre-instructions-recette";
        titreNotes.textContent = "Notes personnelles";
        texteNotes.className = "instructions-recette notes-conseils-recette";
        texteNotes.textContent = notes;
        carte.append(titreNotes, texteNotes);
      }

      if (conseils) {
        const titreConseils = document.createElement("h4");
        const texteConseils = document.createElement("p");

        titreConseils.className = "titre-instructions-recette";
        titreConseils.textContent = "Conseils et astuces";
        texteConseils.className = "instructions-recette notes-conseils-recette";
        texteConseils.textContent = conseils;
        carte.append(titreConseils, texteConseils);
      }

      carte.append(actions);
      zoneRecettes.append(carte);
    });
  }

  function ingredientEstValide(ingredient) {
    return (
      ingredient &&
      typeof ingredient === "object" &&
      typeof ingredient.nom === "string" &&
      ingredient.nom.trim() !== "" &&
      typeof ingredient.quantite === "number" &&
      Number.isFinite(ingredient.quantite) &&
      ingredient.quantite > 0 &&
      typeof ingredient.unite === "string" &&
      ingredient.unite.trim() !== ""
    );
  }

  function obtenirIngredientsValides(recette) {
    if (!Array.isArray(recette.ingredients)) {
      return [];
    }

    return recette.ingredients.filter(ingredientEstValide);
  }

  function obtenirTexteRecette(texte) {
    return typeof texte === "string" ? texte : "";
  }

  function convertirNombreEntier(valeur, minimum) {
    if (
      valeur === null ||
      valeur === undefined ||
      (typeof valeur === "string" && valeur.trim() === "")
    ) {
      return null;
    }

    const nombre = Number(valeur);

    return Number.isInteger(nombre) && nombre >= minimum ? nombre : null;
  }

  function obtenirDifficulte(difficulte) {
    return difficultes.includes(difficulte) ? difficulte : "";
  }

  function obtenirInformationsPratiques(recette) {
    const tempsPreparation = convertirNombreEntier(recette.tempsPreparation, 0);
    const tempsCuisson = convertirNombreEntier(recette.tempsCuisson, 0);
    const portions = convertirNombreEntier(recette.portions, 1);
    const difficulte = obtenirDifficulte(recette.difficulte);
    const informations = [];

    if (tempsPreparation !== null) {
      informations.push(`Préparation : ${tempsPreparation} min`);
    }

    if (tempsCuisson !== null) {
      informations.push(
        tempsCuisson === 0 ? "Cuisson : Sans cuisson" : `Cuisson : ${tempsCuisson} min`
      );
    }

    if (portions !== null) {
      informations.push(`Portions : ${portions}`);
    }

    if (difficulte) {
      informations.push(`Difficulté : ${difficulte}`);
    }

    return informations;
  }

  function lireInformationsPratiques() {
    const tempsPreparation = convertirNombreEntier(champTempsPreparation.value, 0);
    const tempsCuisson = convertirNombreEntier(champTempsCuisson.value, 0);
    const portions = convertirNombreEntier(champPortions.value, 1);
    const difficulte = obtenirDifficulte(menuDifficulte.value);

    if (tempsPreparation === null) {
      return { estValide: false, message: "Le temps de préparation doit être un entier positif ou nul." };
    }

    if (tempsCuisson === null) {
      return { estValide: false, message: "Le temps de cuisson doit être un entier positif ou nul." };
    }

    if (portions === null) {
      return { estValide: false, message: "Le nombre de portions doit être un entier supérieur ou égal à 1." };
    }

    if (!difficulte) {
      return { estValide: false, message: "Veuillez choisir une difficulté." };
    }

    return {
      estValide: true,
      tempsPreparation,
      tempsCuisson,
      portions,
      difficulte
    };
  }

  function creerLigneIngredient(ingredient) {
    const identifiant = prochainIdentifiantIngredient;
    const ligne = document.createElement("div");
    const groupeNom = document.createElement("div");
    const groupeQuantite = document.createElement("div");
    const groupeUnite = document.createElement("div");
    const labelNom = document.createElement("label");
    const labelQuantite = document.createElement("label");
    const labelUnite = document.createElement("label");
    const champNomIngredient = document.createElement("input");
    const champQuantiteIngredient = document.createElement("input");
    const menuUniteIngredient = document.createElement("select");
    const boutonSupprimerIngredient = document.createElement("button");
    const optionVide = document.createElement("option");

    prochainIdentifiantIngredient += 1;
    ligne.className = "ligne-ingredient";
    groupeNom.className = "champ-formulaire";
    groupeQuantite.className = "champ-formulaire";
    groupeUnite.className = "champ-formulaire";

    labelNom.htmlFor = `ingredient-nom-${identifiant}`;
    labelNom.textContent = "Nom de l’ingrédient";
    champNomIngredient.id = labelNom.htmlFor;
    champNomIngredient.type = "text";
    champNomIngredient.className = "ingredient-nom";

    labelQuantite.htmlFor = `ingredient-quantite-${identifiant}`;
    labelQuantite.textContent = "Quantité";
    champQuantiteIngredient.id = labelQuantite.htmlFor;
    champQuantiteIngredient.type = "number";
    champQuantiteIngredient.min = "0";
    champQuantiteIngredient.step = "any";
    champQuantiteIngredient.className = "ingredient-quantite";

    labelUnite.htmlFor = `ingredient-unite-${identifiant}`;
    labelUnite.textContent = "Unité";
    menuUniteIngredient.id = labelUnite.htmlFor;
    menuUniteIngredient.className = "ingredient-unite";
    optionVide.value = "";
    optionVide.textContent = "Choisir une unité";
    menuUniteIngredient.append(optionVide);

    unitesIngredient.forEach((unite) => {
      const option = document.createElement("option");
      option.value = unite;
      option.textContent = unite;
      menuUniteIngredient.append(option);
    });

    boutonSupprimerIngredient.type = "button";
    boutonSupprimerIngredient.className = "bouton-supprimer-ingredient";
    boutonSupprimerIngredient.textContent = "Supprimer cet ingrédient";
    boutonSupprimerIngredient.addEventListener("click", () => {
      supprimerLigneIngredient(ligne);
    });

    if (ingredientEstValide(ingredient)) {
      champNomIngredient.value = ingredient.nom;
      champQuantiteIngredient.value = ingredient.quantite;
      menuUniteIngredient.value = ingredient.unite;
    }

    groupeNom.append(labelNom, champNomIngredient);
    groupeQuantite.append(labelQuantite, champQuantiteIngredient);
    groupeUnite.append(labelUnite, menuUniteIngredient);
    ligne.append(
      groupeNom,
      groupeQuantite,
      groupeUnite,
      boutonSupprimerIngredient
    );

    return ligne;
  }

  function ajouterLigneIngredient(ingredient) {
    const ligne = creerLigneIngredient(ingredient);
    listeIngredients.append(ligne);
    return ligne;
  }

  function supprimerLigneIngredient(ligne) {
    if (listeIngredients.children.length > 1) {
      ligne.remove();
      return;
    }

    ligne.querySelector(".ingredient-nom").value = "";
    ligne.querySelector(".ingredient-quantite").value = "";
    ligne.querySelector(".ingredient-unite").value = "";
  }

  function reinitialiserLignesIngredient(ingredients) {
    listeIngredients.textContent = "";
    const ingredientsValides = Array.isArray(ingredients)
      ? ingredients.filter(ingredientEstValide)
      : [];

    if (ingredientsValides.length === 0) {
      ajouterLigneIngredient();
      return;
    }

    ingredientsValides.forEach((ingredient) => {
      ajouterLigneIngredient(ingredient);
    });
  }

  function lireIngredients() {
    const ingredients = [];
    const lignes = listeIngredients.querySelectorAll(".ligne-ingredient");

    for (const ligne of lignes) {
      const nom = ligne.querySelector(".ingredient-nom").value.trim();
      const quantiteTexte = ligne
        .querySelector(".ingredient-quantite")
        .value.trim();
      const unite = ligne.querySelector(".ingredient-unite").value;

      if (!nom && !quantiteTexte && !unite) {
        continue;
      }

      if (!nom || !quantiteTexte || !unite) {
        return {
          estValide: false,
          message:
            "Veuillez compléter ou vider entièrement chaque ligne d’ingrédient."
        };
      }

      const quantite = Number(quantiteTexte);

      if (!Number.isFinite(quantite) || quantite <= 0) {
        return {
          estValide: false,
          message:
            "Chaque quantité doit être un nombre supérieur à zéro."
        };
      }

      ingredients.push({ nom, quantite, unite });
    }

    return { estValide: true, ingredients };
  }

  function recetteEstValide(recette) {
    return (
      recette &&
      typeof recette === "object" &&
      typeof recette.id === "string" &&
      typeof recette.nom === "string" &&
      recette.nom.trim() !== "" &&
      typeof recette.categorie === "string" &&
      recette.categorie.trim() !== ""
    );
  }

  function chargerRecettes() {
    let donneesEnregistrees;

    try {
      donneesEnregistrees = localStorage.getItem(cleStockage);
    } catch (erreur) {
      console.warn(
        "Application de recettes : les recettes enregistrées sont illisibles. La liste démarre vide."
      );
      return [];
    }

    if (donneesEnregistrees === null) {
      console.warn(
        "Application de recettes : aucune recette enregistrée n’a été trouvée. La liste démarre vide."
      );
      return [];
    }

    let donneesAnalysees;

    try {
      donneesAnalysees = JSON.parse(donneesEnregistrees);
    } catch (erreur) {
      console.warn(
        "Application de recettes : les recettes enregistrées sont invalides. La liste démarre vide."
      );
      return [];
    }

    if (!Array.isArray(donneesAnalysees)) {
      console.warn(
        "Application de recettes : les recettes enregistrées ne forment pas une liste. La liste démarre vide."
      );
      return [];
    }

    const recettesValides = donneesAnalysees
      .filter(recetteEstValide)
      .map((recette) => ({
        ...recette,
        ingredients: obtenirIngredientsValides(recette),
        preparation: obtenirTexteRecette(recette.preparation),
        cuisson: obtenirTexteRecette(recette.cuisson),
        notes: obtenirTexteRecette(recette.notes),
        conseils: obtenirTexteRecette(recette.conseils),
        favori: recette.favori === true,
        tempsPreparation: convertirNombreEntier(recette.tempsPreparation, 0),
        tempsCuisson: convertirNombreEntier(recette.tempsCuisson, 0),
        portions: convertirNombreEntier(recette.portions, 1),
        difficulte: obtenirDifficulte(recette.difficulte)
      }));

    if (recettesValides.length !== donneesAnalysees.length) {
      console.warn(
        "Application de recettes : certaines recettes enregistrées sont invalides et ne sont pas affichées."
      );
    }

    return recettesValides;
  }

  function enregistrerRecettes() {
    try {
      localStorage.setItem(cleStockage, JSON.stringify(recettes));
    } catch (erreur) {
      console.warn(
        "Application de recettes : les recettes n’ont pas pu être sauvegardées localement."
      );
    }
  }

  function basculerFavori(idRecette) {
    if (typeof idRecette !== "string" || idRecette.trim() === "") {
      console.error(
        "Application de recettes : l’identifiant de la recette favorite est invalide."
      );
      return;
    }

    const recette = recettes.find((recetteActuelle) => {
      return recetteActuelle.id === idRecette;
    });

    if (!recette) {
      console.error(
        "Application de recettes : aucune recette ne correspond à cet identifiant."
      );
      return;
    }

    recette.favori = recette.favori !== true;
    enregistrerRecettes();
    afficherRecettes();
    afficherMessage(
      recette.favori
        ? "Recette ajoutée aux favoris."
        : "Recette retirée des favoris.",
      "succes"
    );
  }

  function revenirAuModeAjout() {
    idRecetteEnModification = null;
    champNom.value = "";
    menuCategorie.value = "";
    reinitialiserLignesIngredient();
    champPreparation.value = "";
    champCuisson.value = "";
    champNotes.value = "";
    champConseils.value = "";
    champTempsPreparation.value = "";
    champTempsCuisson.value = "";
    champPortions.value = "";
    menuDifficulte.value = "";
    boutonPrincipal.textContent = "Ajouter la recette";
    boutonAnnuler.hidden = true;
  }

  function commencerModification(idRecette) {
    if (typeof idRecette !== "string" || idRecette.trim() === "") {
      console.error(
        "Application de recettes : l’identifiant de la recette à modifier est invalide."
      );
      revenirAuModeAjout();
      return;
    }

    const recette = recettes.find((recetteActuelle) => {
      return recetteActuelle.id === idRecette;
    });

    if (!recette) {
      console.error(
        "Application de recettes : aucune recette ne correspond à cet identifiant."
      );
      revenirAuModeAjout();
      return;
    }

    idRecetteEnModification = recette.id;
    champNom.value = recette.nom;
    menuCategorie.value = recette.categorie;
    reinitialiserLignesIngredient(obtenirIngredientsValides(recette));
    champPreparation.value = obtenirTexteRecette(recette.preparation);
    champCuisson.value = obtenirTexteRecette(recette.cuisson);
    champNotes.value = obtenirTexteRecette(recette.notes);
    champConseils.value = obtenirTexteRecette(recette.conseils);
    champTempsPreparation.value = convertirNombreEntier(recette.tempsPreparation, 0) ?? "";
    champTempsCuisson.value = convertirNombreEntier(recette.tempsCuisson, 0) ?? "";
    champPortions.value = convertirNombreEntier(recette.portions, 1) ?? "";
    menuDifficulte.value = obtenirDifficulte(recette.difficulte);
    boutonPrincipal.textContent = "Enregistrer les modifications";
    boutonAnnuler.hidden = false;
    champNom.focus();
    afficherMessage("Modification de la recette en cours.", "succes");
  }

  function supprimerRecette(idRecette) {
    if (typeof idRecette !== "string" || idRecette.trim() === "") {
      console.error(
        "Application de recettes : l’identifiant de la recette à supprimer est invalide."
      );
      revenirAuModeAjout();
      return;
    }

    const indexRecette = recettes.findIndex(
      (recette) => recette.id === idRecette
    );

    if (indexRecette === -1) {
      console.error(
        "Application de recettes : aucune recette ne correspond à cet identifiant."
      );
      revenirAuModeAjout();
      return;
    }

    const recette = recettes[indexRecette];
    const confirmation = window.confirm(
      `Supprimer la recette « ${recette.nom} » ?`
    );

    if (!confirmation) {
      return;
    }

    recettes.splice(indexRecette, 1);
    enregistrerRecettes();
    afficherRecettes();

    if (idRecetteEnModification === idRecette) {
      revenirAuModeAjout();
    }

    afficherMessage("Recette supprimée avec succès.", "succes");
  }

  const recettes = chargerRecettes();
  let prochainIdentifiant = 1;
  let idRecetteEnModification = null;
  let prochainIdentifiantIngredient = 1;

  reinitialiserLignesIngredient();
  afficherRecettes();

  formulaire.addEventListener("submit", (evenement) => {
    evenement.preventDefault();

    const nom = champNom.value.trim();
    const categorie = menuCategorie.value;
    const preparation = champPreparation.value.trim();
    const cuisson = champCuisson.value.trim();
    const notes = champNotes.value.trim();
    const conseils = champConseils.value.trim();
    const resultatInformations = lireInformationsPratiques();

    if (!nom || !categorie) {
      afficherMessage(
        "Veuillez indiquer le nom de la recette et choisir une catégorie.",
        "erreur"
      );
      return;
    }

    if (!preparation) {
      afficherMessage(
        "Veuillez indiquer les instructions de préparation.",
        "erreur"
      );
      return;
    }

    if (!resultatInformations.estValide) {
      afficherMessage(resultatInformations.message, "erreur");
      return;
    }

    const resultatIngredient = lireIngredients();

    if (!resultatIngredient.estValide) {
      afficherMessage(resultatIngredient.message, "erreur");
      return;
    }

    if (idRecetteEnModification !== null) {
      const recette = recettes.find((recetteActuelle) => {
        return recetteActuelle.id === idRecetteEnModification;
      });

      if (!recette) {
        console.error(
          "Application de recettes : la recette à modifier est introuvable."
        );
        revenirAuModeAjout();
        return;
      }

      recette.nom = nom;
      recette.categorie = categorie;
      recette.ingredients = resultatIngredient.ingredients;
      recette.preparation = preparation;
      recette.cuisson = cuisson;
      recette.notes = notes;
      recette.conseils = conseils;
      recette.tempsPreparation = resultatInformations.tempsPreparation;
      recette.tempsCuisson = resultatInformations.tempsCuisson;
      recette.portions = resultatInformations.portions;
      recette.difficulte = resultatInformations.difficulte;
      enregistrerRecettes();
      afficherRecettes();
      revenirAuModeAjout();
      afficherMessage("Recette modifiée avec succès.", "succes");
      champNom.focus();
      return;
    }

    const recette = {
      id: `recette-${Date.now()}-${prochainIdentifiant}`,
      nom,
      categorie,
      ingredients: resultatIngredient.ingredients,
      preparation,
      cuisson,
      notes,
      conseils,
      favori: false,
      tempsPreparation: resultatInformations.tempsPreparation,
      tempsCuisson: resultatInformations.tempsCuisson,
      portions: resultatInformations.portions,
      difficulte: resultatInformations.difficulte
    };

    prochainIdentifiant += 1;
    recettes.push(recette);
    enregistrerRecettes();
    afficherRecettes();
    revenirAuModeAjout();
    afficherMessage("La recette a été ajoutée.", "succes");

    champNom.focus();
  });

  boutonAnnuler.addEventListener("click", () => {
    revenirAuModeAjout();
    afficherMessage("Modification annulée.", "succes");
    champNom.focus();
  });

  boutonAjouterIngredient.addEventListener("click", () => {
    const ligne = ajouterLigneIngredient();
    ligne.querySelector(".ingredient-nom").focus();
  });

  filtreCategorie.addEventListener("change", () => {
    afficherRecettes();
  });

  filtreFavoris.addEventListener("change", () => {
    afficherRecettes();
  });

  champPreparation.addEventListener("invalid", () => {
    if (!champPreparation.value.trim()) {
      afficherMessage(
        "Veuillez indiquer les instructions de préparation.",
        "erreur"
      );
    }
  });

  [champTempsPreparation, champTempsCuisson, champPortions, menuDifficulte].forEach(
    (champ) => {
      champ.addEventListener("invalid", () => {
        afficherMessage(
          "Veuillez vérifier les informations pratiques demandées.",
          "erreur"
        );
      });
    }
  );
})();
