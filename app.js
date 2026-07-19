(() => {
  console.log("Application de recettes : app.js chargé");

  // Références DOM
  const formulaire = document.getElementById("formulaire-recette");
  const champNom = document.getElementById("nom-recette");
  const menuCategorie = document.getElementById("categorie-recette");
  const zoneMessage = document.getElementById("message-formulaire");
  const zoneRecettes = document.getElementById("liste-recettes");
  const filtreCategorie = document.getElementById("filtre-categorie");
  const filtreFavoris = document.getElementById("filtre-favoris");
  const champRecherche = document.getElementById("recherche-recettes");
  const resumeSelectionRecettes = document.getElementById(
    "resume-selection-recettes"
  );
  const boutonGenererListeCourses = document.getElementById(
    "generer-liste-courses"
  );
  const zoneListeCourses = document.getElementById("liste-courses");
  const zoneMenuSemaine = document.getElementById("menu-semaine");
  const boutonEffacerMenuSemaine = document.getElementById(
    "effacer-menu-semaine"
  );
  const formulaireHistorique = document.getElementById("formulaire-historique");
  const historiqueRecetteNom = document.getElementById(
    "historique-recette-nom"
  );
  const champHistoriqueDate = document.getElementById("historique-date");
  const menuHistoriqueAppreciation = document.getElementById(
    "historique-appreciation"
  );
  const champHistoriqueNotes = document.getElementById("historique-notes");
  const boutonAnnulerHistorique = document.getElementById("annuler-historique");
  const zoneListeHistorique = document.getElementById("liste-historique");
  const zoneImpression = document.getElementById("zone-impression");
  const ficheRecetteDialogue = document.getElementById(
    "fiche-recette-dialogue"
  );
  const ficheRecettePanneau = document.getElementById(
    "fiche-recette-panneau"
  );
  const ficheRecetteTitre = document.getElementById("fiche-recette-titre");
  const ficheRecetteContenu = document.getElementById(
    "fiche-recette-contenu"
  );
  const boutonFermerFicheRecette = document.getElementById(
    "fermer-fiche-recette"
  );
  const vueRecettes = document.getElementById("vue-recettes");
  const vueFormulaire = document.getElementById("vue-formulaire");
  const vueMenu = document.getElementById("vue-menu");
  const vueCourses = document.getElementById("vue-courses");
  const vuePlus = document.getElementById("vue-plus");
  const boutonNouvelleRecette = document.getElementById("nouvelle-recette");
  const boutonRetourAuxRecettes = document.getElementById(
    "retour-aux-recettes"
  );
  const boutonPrincipal = document.getElementById("bouton-enregistrer");
  const boutonAnnuler = document.getElementById("bouton-annuler-modification");
  const boutonEffacerBrouillon = document.getElementById("effacer-brouillon");
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

  const identifiantsVuesConnues = [
    "vue-recettes",
    "vue-formulaire",
    "vue-menu",
    "vue-courses",
    "vue-plus"
  ];
  const destinationsNavigationPrincipale = [
    "vue-recettes",
    "vue-menu",
    "vue-courses",
    "vue-plus"
  ];

  const elementsNecessaires = [
    ["#formulaire-recette", formulaire],
    ["#nom-recette", champNom],
    ["#categorie-recette", menuCategorie],
    ["#message-formulaire", zoneMessage],
    ["#liste-recettes", zoneRecettes],
    ["#filtre-categorie", filtreCategorie],
    ["#filtre-favoris", filtreFavoris],
    ["#recherche-recettes", champRecherche],
    ["#resume-selection-recettes", resumeSelectionRecettes],
    ["#generer-liste-courses", boutonGenererListeCourses],
    ["#liste-courses", zoneListeCourses],
    ["#menu-semaine", zoneMenuSemaine],
    ["#effacer-menu-semaine", boutonEffacerMenuSemaine],
    ["#formulaire-historique", formulaireHistorique],
    ["#historique-recette-nom", historiqueRecetteNom],
    ["#historique-date", champHistoriqueDate],
    ["#historique-appreciation", menuHistoriqueAppreciation],
    ["#historique-notes", champHistoriqueNotes],
    ["#annuler-historique", boutonAnnulerHistorique],
    ["#liste-historique", zoneListeHistorique],
    ["#zone-impression", zoneImpression],
    ["#fiche-recette-dialogue", ficheRecetteDialogue],
    ["#fiche-recette-panneau", ficheRecettePanneau],
    ["#fiche-recette-titre", ficheRecetteTitre],
    ["#fiche-recette-contenu", ficheRecetteContenu],
    ["#fermer-fiche-recette", boutonFermerFicheRecette],
    ["#vue-recettes", vueRecettes],
    ["#vue-formulaire", vueFormulaire],
    ["#vue-menu", vueMenu],
    ["#vue-courses", vueCourses],
    ["#vue-plus", vuePlus],
    ["#nouvelle-recette", boutonNouvelleRecette],
    ["#retour-aux-recettes", boutonRetourAuxRecettes],
    ["#bouton-enregistrer", boutonPrincipal],
    ["#bouton-annuler-modification", boutonAnnuler],
    ["#effacer-brouillon", boutonEffacerBrouillon],
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
    const identifiantsVuesManquants = identifiantsVuesConnues.filter(
      (identifiantVue) => elementsManquants.includes(`#${identifiantVue}`)
    );

    if (identifiantsVuesManquants.length > 0) {
      console.error(
        `Application de recettes : conteneur(s) de vue manquant(s) : ${identifiantsVuesManquants.join(
          ", "
        )}.`
      );
    }

    console.error(
      `Application de recettes : élément(s) introuvable(s) dans la page : ${elementsManquants.join(
        ", "
      )}.`
    );
    return;
  }

  const vues = new Map([
    ["vue-recettes", vueRecettes],
    ["vue-formulaire", vueFormulaire],
    ["vue-menu", vueMenu],
    ["vue-courses", vueCourses],
    ["vue-plus", vuePlus]
  ]);
  const navigationsPrincipales = [
    {
      nom: "ordinateur",
      element: document.querySelector(".navigation-bureau")
    },
    {
      nom: "mobile",
      element: document.querySelector(".navigation-mobile")
    }
  ];

  function validerNavigationPrincipale(navigation) {
    if (!navigation.element) {
      console.error(
        `Application de recettes : la navigation ${navigation.nom} est introuvable.`
      );
      return false;
    }

    const boutons = Array.from(navigation.element.querySelectorAll("button"));

    if (boutons.length !== destinationsNavigationPrincipale.length) {
      console.error(
        `Application de recettes : la navigation ${navigation.nom} doit contenir exactement ${destinationsNavigationPrincipale.length} boutons.`
      );
      return false;
    }

    const boutonSansClasse = boutons.find(
      (bouton) => !bouton.classList.contains("bouton-navigation")
    );

    if (boutonSansClasse) {
      console.error(
        `Application de recettes : la navigation ${navigation.nom} contient un bouton sans la classe bouton-navigation.`
      );
      return false;
    }

    const boutonSansType = boutons.find((bouton) => bouton.type !== "button");

    if (boutonSansType) {
      console.error(
        `Application de recettes : la navigation ${navigation.nom} contient un bouton qui n’est pas de type button.`
      );
      return false;
    }

    const destinationAbsente = boutons.find(
      (bouton) => !bouton.dataset.vue || bouton.dataset.vue.trim() === ""
    );

    if (destinationAbsente) {
      console.error(
        `Application de recettes : la navigation ${navigation.nom} contient un bouton sans valeur data-vue.`
      );
      return false;
    }

    const destinations = boutons.map((bouton) => bouton.dataset.vue);
    const destinationInvalide = destinations.find(
      (destination) =>
        !destinationsNavigationPrincipale.includes(destination)
    );

    if (destinationInvalide) {
      console.error(
        `Application de recettes : la navigation ${navigation.nom} contient la valeur data-vue invalide : ${destinationInvalide}.`
      );
      return false;
    }

    const destinationDupliquee = destinations.find(
      (destination, index) => destinations.indexOf(destination) !== index
    );

    if (destinationDupliquee) {
      console.error(
        `Application de recettes : la navigation ${navigation.nom} contient deux boutons pour ${destinationDupliquee}.`
      );
      return false;
    }

    const destinationManquante = destinationsNavigationPrincipale.find(
      (destination) => !destinations.includes(destination)
    );

    if (destinationManquante) {
      console.error(
        `Application de recettes : la navigation ${navigation.nom} ne contient pas la destination ${destinationManquante}.`
      );
      return false;
    }

    return true;
  }

  const navigationEstValide = navigationsPrincipales.every(
    validerNavigationPrincipale
  );

  if (!navigationEstValide) {
    console.error(
      "Application de recettes : la navigation des vues est incomplète ou invalide."
    );
    return;
  }

  const boutonsNavigation = navigationsPrincipales.flatMap((navigation) =>
    Array.from(navigation.element.querySelectorAll(".bouton-navigation"))
  );

  // Constantes et état interne
  const cleStockage = "livreRecettes.recettes";
  const cleStockageBrouillon = "livreRecettes.brouillon";
  const cleStockageMenuSemaine = "livreRecettes.menuSemaine";
  const cleStockageHistorique = "livreRecettes.historique";
  const difficultes = ["Facile", "Moyenne", "Difficile"];
  const joursSemaine = [
    { cle: "lundi", libelle: "Lundi" },
    { cle: "mardi", libelle: "Mardi" },
    { cle: "mercredi", libelle: "Mercredi" },
    { cle: "jeudi", libelle: "Jeudi" },
    { cle: "vendredi", libelle: "Vendredi" },
    { cle: "samedi", libelle: "Samedi" },
    { cle: "dimanche", libelle: "Dimanche" }
  ];
  const repasSemaine = [
    { cle: "midi", libelle: "Midi" },
    { cle: "soir", libelle: "Soir" }
  ];
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
  const conversionsUnites = {
    masse: {
      reference: "g",
      facteurs: {
        mg: 0.001,
        g: 1,
        kg: 1000
      }
    },
    volume: {
      reference: "ml",
      facteurs: {
        ml: 1,
        cl: 10,
        l: 1000
      }
    }
  };

  let recettes = [];
  let menuSemaine = creerMenuSemaineVide();
  let historique = [];
  const recettesSelectionnees = new Set();
  const portionsSouhaitees = new Map();
  let prochainIdentifiant = 1;
  let idRecetteEnModification = null;
  let prochainIdentifiantIngredient = 1;
  let prochainIdentifiantHistorique = 1;
  let idRecetteHistorique = null;
  let temporisationSauvegardeBrouillon = null;
  let titreDocumentAvantImpression = null;
  let temporisationNettoyageImpression = null;
  let idRecetteFicheOuverte = null;
  let elementDeclencheurFiche = null;
  let restaurerFocusFicheALaFermeture = true;

  // Fonctions génériques
  function afficherMessage(texte, type) {
    zoneMessage.textContent = texte;
    zoneMessage.className = `message ${type}`;
  }

  function afficherVue(nomVue, deplacerFocus = false) {
    const vueDemandee = vues.get(nomVue);

    if (!vueDemandee) {
      console.error(
        "Application de recettes : la vue demandée est inconnue."
      );
      return false;
    }

    vues.forEach((vue, identifiantVue) => {
      vue.hidden = identifiantVue !== nomVue;
    });

    boutonsNavigation.forEach((bouton) => {
      const estActive = bouton.dataset.vue === nomVue;

      bouton.classList.toggle("actif", estActive);

      if (estActive) {
        bouton.setAttribute("aria-current", "page");
      } else {
        bouton.removeAttribute("aria-current");
      }
    });

    if (deplacerFocus) {
      const titre = vueDemandee.querySelector("h2[tabindex='-1']");

      if (titre && typeof titre.focus === "function") {
        titre.focus();
      }
    }

    return true;
  }

  // Menu de la semaine
  function creerMenuSemaineVide() {
    const menu = { version: 1 };

    joursSemaine.forEach((jour) => {
      menu[jour.cle] = { midi: null, soir: null };
    });

    return menu;
  }

  function emplacementMenuSemaineEstValide(identifiant) {
    return identifiant === null || identifiantRecetteEstValide(identifiant);
  }

  function menuSemaineEstValide(menu) {
    return (
      menu &&
      typeof menu === "object" &&
      !Array.isArray(menu) &&
      menu.version === 1 &&
      joursSemaine.every((jour) => {
        const repasDuJour = menu[jour.cle];

        return (
          repasDuJour &&
          typeof repasDuJour === "object" &&
          !Array.isArray(repasDuJour) &&
          repasSemaine.every((repas) =>
            emplacementMenuSemaineEstValide(repasDuJour[repas.cle])
          )
        );
      })
    );
  }

  function copierMenuSemaine(menu) {
    const copie = creerMenuSemaineVide();

    joursSemaine.forEach((jour) => {
      repasSemaine.forEach((repas) => {
        copie[jour.cle][repas.cle] = menu[jour.cle][repas.cle];
      });
    });

    return copie;
  }

  function chargerMenuSemaine() {
    let donneesEnregistrees;

    try {
      donneesEnregistrees = localStorage.getItem(cleStockageMenuSemaine);
    } catch (erreur) {
      console.warn(
        "Application de recettes : le menu de la semaine enregistré est inaccessible. Un menu vide est utilisé."
      );
      return creerMenuSemaineVide();
    }

    if (donneesEnregistrees === null) {
      return creerMenuSemaineVide();
    }

    let menu;

    try {
      menu = JSON.parse(donneesEnregistrees);
    } catch (erreur) {
      console.warn(
        "Application de recettes : le menu de la semaine enregistré est illisible. Un menu vide est utilisé."
      );
      return creerMenuSemaineVide();
    }

    if (!menuSemaineEstValide(menu)) {
      console.warn(
        "Application de recettes : le menu de la semaine enregistré est invalide. Un menu vide est utilisé."
      );
      return creerMenuSemaineVide();
    }

    return copierMenuSemaine(menu);
  }

  function enregistrerMenuSemaine(menuAEnregistrer) {
    try {
      localStorage.setItem(
        cleStockageMenuSemaine,
        JSON.stringify(menuAEnregistrer)
      );
      return true;
    } catch (erreur) {
      console.error(
        "Application de recettes : le menu de la semaine n’a pas pu être sauvegardé localement."
      );
      return false;
    }
  }

  function menuSemaineEstIdentique(menuA, menuB) {
    return joursSemaine.every((jour) =>
      repasSemaine.every(
        (repas) =>
          menuA[jour.cle][repas.cle] === menuB[jour.cle][repas.cle]
      )
    );
  }

  function nettoyerMenuSemaine(menu, recettesDisponibles) {
    const recettesParIdentifiant = new Set(
      recettesDisponibles.map((recette) => recette.id)
    );
    const menuNettoye = creerMenuSemaineVide();

    joursSemaine.forEach((jour) => {
      repasSemaine.forEach((repas) => {
        const identifiant = menu[jour.cle][repas.cle];

        menuNettoye[jour.cle][repas.cle] = recettesParIdentifiant.has(
          identifiant
        )
          ? identifiant
          : null;
      });
    });

    return menuNettoye;
  }

  function obtenirLibelleRecettePourMenu(recette) {
    const nom =
      typeof recette.nom === "string" && recette.nom.trim()
        ? recette.nom.trim()
        : "Recette sans nom";
    const categorie =
      typeof recette.categorie === "string" && recette.categorie.trim()
        ? recette.categorie.trim()
        : "Catégorie non renseignée";

    return `${nom} — ${categorie}`;
  }

  function modifierEmplacementMenuSemaine(jour, repas, identifiant) {
    const menuPropose = copierMenuSemaine(menuSemaine);
    const valeurPrecedente = menuSemaine[jour][repas];

    menuPropose[jour][repas] = identifiant;

    if (!enregistrerMenuSemaine(menuPropose)) {
      afficherMessage(
        "Impossible d’enregistrer le menu sur cet appareil. Le changement n’a pas été appliqué.",
        "erreur"
      );
      return false;
    }

    menuSemaine = menuPropose;
    return valeurPrecedente !== identifiant;
  }

  function creerSelecteurRepasMenu(jour, repas) {
    const groupe = document.createElement("div");
    const libelle = document.createElement("label");
    const menu = document.createElement("select");
    const optionVide = document.createElement("option");

    groupe.className = "repas-menu-semaine";
    menu.id = `menu-semaine-${jour.cle}-${repas.cle}`;
    menu.dataset.jour = jour.cle;
    menu.dataset.repas = repas.cle;
    libelle.htmlFor = menu.id;
    libelle.textContent = repas.libelle;
    optionVide.value = "";
    optionVide.textContent = "Aucune recette";
    menu.append(optionVide);

    recettes.forEach((recette) => {
      const option = document.createElement("option");

      option.value = recette.id;
      option.textContent = obtenirLibelleRecettePourMenu(recette);
      menu.append(option);
    });

    menu.value = menuSemaine[jour.cle][repas.cle] || "";
    menu.addEventListener("change", () => {
      const identifiant = menu.value || null;
      const recetteExiste =
        identifiant === null ||
        recettes.some((recette) => recette.id === identifiant);

      if (!recetteExiste) {
        menu.value = menuSemaine[jour.cle][repas.cle] || "";
        return;
      }

      const changementApplique = modifierEmplacementMenuSemaine(
        jour.cle,
        repas.cle,
        identifiant
      );

      if (!changementApplique) {
        menu.value = menuSemaine[jour.cle][repas.cle] || "";
        return;
      }

      afficherMessage("Menu de la semaine mis à jour.", "succes");
    });

    groupe.append(libelle, menu);
    return groupe;
  }

  function afficherMenuSemaine() {
    zoneMenuSemaine.textContent = "";

    joursSemaine.forEach((jour) => {
      const blocJour = document.createElement("section");
      const titreJour = document.createElement("h3");

      blocJour.className = "jour-menu-semaine";
      titreJour.textContent = jour.libelle;
      blocJour.append(titreJour);

      repasSemaine.forEach((repas) => {
        blocJour.append(creerSelecteurRepasMenu(jour, repas));
      });

      zoneMenuSemaine.append(blocJour);
    });
  }

  function effacerMenuSemaine() {
    if (!window.confirm("Effacer tous les repas du menu de la semaine ?")) {
      return;
    }

    const menuVide = creerMenuSemaineVide();

    if (!enregistrerMenuSemaine(menuVide)) {
      afficherMessage(
        "Impossible d’enregistrer le menu sur cet appareil. Le changement n’a pas été appliqué.",
        "erreur"
      );
      return;
    }

    menuSemaine = menuVide;
    afficherMenuSemaine();
    afficherMessage("Menu de la semaine effacé.", "succes");
  }

  // Historique des recettes cuisinées
  function obtenirDateLocaleAujourdhui() {
    const date = new Date();
    const annee = date.getFullYear();
    const mois = String(date.getMonth() + 1).padStart(2, "0");
    const jour = String(date.getDate()).padStart(2, "0");

    return `${annee}-${mois}-${jour}`;
  }

  function dateHistoriqueEstValide(date) {
    if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return false;
    }

    const [annee, mois, jour] = date.split("-").map(Number);
    const dateVerifiee = new Date(annee, mois - 1, jour);

    return (
      dateVerifiee.getFullYear() === annee &&
      dateVerifiee.getMonth() === mois - 1 &&
      dateVerifiee.getDate() === jour
    );
  }

  function appreciationHistoriqueEstValide(appreciation) {
    return (
      typeof appreciation === "number" &&
      Number.isInteger(appreciation) &&
      appreciation >= 1 &&
      appreciation <= 5
    );
  }

  function dateHeureHistoriqueEstValide(dateHeure) {
    return (
      typeof dateHeure === "string" &&
      dateHeure.trim() !== "" &&
      Number.isFinite(Date.parse(dateHeure))
    );
  }

  function creerIdentifiantHistorique(identifiantsUtilises) {
    let identifiant;

    do {
      identifiant = `historique-${Date.now()}-${prochainIdentifiantHistorique}`;
      prochainIdentifiantHistorique += 1;
    } while (identifiantsUtilises.has(identifiant));

    return identifiant;
  }

  function entreeHistoriqueEstExploitable(entree) {
    return (
      entree &&
      typeof entree === "object" &&
      !Array.isArray(entree) &&
      dateHistoriqueEstValide(entree.date) &&
      appreciationHistoriqueEstValide(entree.appreciation)
    );
  }

  function obtenirTexteHistorique(texte) {
    return typeof texte === "string" ? texte : "";
  }

  function chargerHistorique() {
    let donneesEnregistrees;

    try {
      donneesEnregistrees = localStorage.getItem(cleStockageHistorique);
    } catch (erreur) {
      console.warn(
        "Application de recettes : l’historique enregistré est inaccessible. Un historique vide est utilisé."
      );
      return [];
    }

    if (donneesEnregistrees === null) {
      return [];
    }

    let donneesAnalysees;

    try {
      donneesAnalysees = JSON.parse(donneesEnregistrees);
    } catch (erreur) {
      console.warn(
        "Application de recettes : l’historique enregistré est illisible. Un historique vide est utilisé."
      );
      return [];
    }

    if (!Array.isArray(donneesAnalysees)) {
      console.warn(
        "Application de recettes : l’historique enregistré ne forme pas une liste. Un historique vide est utilisé."
      );
      return [];
    }

    const identifiantsUtilises = new Set();
    let nombreEntreesIgnorees = 0;
    let nombreIdentifiantsRepares = 0;
    const entreesValides = donneesAnalysees.reduce((entrees, entree) => {
      if (!entreeHistoriqueEstExploitable(entree)) {
        nombreEntreesIgnorees += 1;
        return entrees;
      }

      let identifiant = entree.id;

      if (
        !identifiantRecetteEstValide(identifiant) ||
        identifiantsUtilises.has(identifiant)
      ) {
        identifiant = creerIdentifiantHistorique(identifiantsUtilises);
        nombreIdentifiantsRepares += 1;
      }

      identifiantsUtilises.add(identifiant);
      entrees.push({
        id: identifiant,
        recetteId: identifiantRecetteEstValide(entree.recetteId)
          ? entree.recetteId
          : "",
        recetteNom: obtenirTexteHistorique(entree.recetteNom),
        recetteCategorie: obtenirTexteHistorique(entree.recetteCategorie),
        date: entree.date,
        appreciation: entree.appreciation,
        notes: obtenirTexteHistorique(entree.notes),
        creeLe: dateHeureHistoriqueEstValide(entree.creeLe)
          ? entree.creeLe
          : `${entree.date}T00:00:00.000Z`
      });

      return entrees;
    }, []);

    if (nombreEntreesIgnorees > 0) {
      console.warn(
        `Application de recettes : ${nombreEntreesIgnorees} entrée(s) d’historique invalide(s) ont été ignorée(s).`
      );
    }

    if (nombreIdentifiantsRepares > 0) {
      console.warn(
        `Application de recettes : ${nombreIdentifiantsRepares} identifiant(s) d’historique ont été réparé(s).`
      );
    }

    return entreesValides;
  }

  function enregistrerHistorique(historiqueAEnregistrer) {
    try {
      localStorage.setItem(
        cleStockageHistorique,
        JSON.stringify(historiqueAEnregistrer)
      );
      return true;
    } catch (erreur) {
      console.error(
        "Application de recettes : l’historique n’a pas pu être sauvegardé localement."
      );
      return false;
    }
  }

  function fermerFormulaireHistorique() {
    formulaireHistorique.reset();
    formulaireHistorique.hidden = true;
    historiqueRecetteNom.textContent = "";
    idRecetteHistorique = null;
  }

  function ouvrirFormulaireHistorique(idRecette) {
    const recette = recettes.find((recetteActuelle) => recetteActuelle.id === idRecette);

    if (!recette) {
      console.error(
        "Application de recettes : la recette à ajouter à l’historique est introuvable."
      );
      return;
    }

    idRecetteHistorique = recette.id;
    formulaireHistorique.hidden = false;
    historiqueRecetteNom.textContent = `Recette sélectionnée : ${recette.nom}`;
    champHistoriqueDate.value = obtenirDateLocaleAujourdhui();
    menuHistoriqueAppreciation.value = "";
    champHistoriqueNotes.value = "";
    afficherVue("vue-plus");
    champHistoriqueDate.focus();

    if (typeof formulaireHistorique.scrollIntoView === "function") {
      formulaireHistorique.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function formaterDateHistorique(date) {
    const [annee, mois, jour] = date.split("-").map(Number);

    return new Date(annee, mois - 1, jour).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  function afficherHistorique() {
    zoneListeHistorique.textContent = "";

    if (historique.length === 0) {
      const messageVide = document.createElement("p");

      messageVide.textContent = "Aucune recette cuisinée n’est encore enregistrée.";
      zoneListeHistorique.append(messageVide);
      return;
    }

    const entreesTriees = [...historique].sort((entreeA, entreeB) => {
      const comparaisonDate = entreeB.date.localeCompare(entreeA.date);

      if (comparaisonDate !== 0) {
        return comparaisonDate;
      }

      return Date.parse(entreeB.creeLe) - Date.parse(entreeA.creeLe);
    });

    entreesTriees.forEach((entree) => {
      const carte = document.createElement("article");
      const titre = document.createElement("h3");
      const recetteActuelle = recettes.find(
        (recette) => recette.id === entree.recetteId
      );
      const nom = recetteActuelle
        ? obtenirTexteHistorique(recetteActuelle.nom) || "Recette sans nom"
        : obtenirTexteHistorique(entree.recetteNom) || "Recette sans nom";
      const categorie = recetteActuelle
        ? obtenirTexteHistorique(recetteActuelle.categorie)
        : obtenirTexteHistorique(entree.recetteCategorie);
      const date = document.createElement("p");
      const appreciation = document.createElement("p");

      carte.className = "entree-historique";
      titre.textContent = nom;
      date.textContent = `Préparée le ${formaterDateHistorique(entree.date)}`;
      appreciation.textContent = `Appréciation : ${entree.appreciation}/5`;
      carte.append(titre);

      if (categorie) {
        const texteCategorie = document.createElement("p");

        texteCategorie.textContent = `Catégorie : ${categorie}`;
        carte.append(texteCategorie);
      }

      carte.append(date, appreciation);

      if (entree.notes) {
        const notes = document.createElement("p");

        notes.className = "notes-historique";
        notes.textContent = entree.notes;
        carte.append(notes);
      }

      if (!recetteActuelle) {
        const recetteSupprimee = document.createElement("p");

        recetteSupprimee.className = "recette-historique-supprimee";
        recetteSupprimee.textContent = "Recette supprimée du livre";
        carte.append(recetteSupprimee);
      }

      zoneListeHistorique.append(carte);
    });
  }

  // Impression d'une recette
  function ajouterSectionImpression(fiche, titre, texte) {
    const titreSection = document.createElement("h2");
    const contenu = document.createElement("p");

    titreSection.textContent = titre;
    contenu.className = "texte-impression";
    contenu.textContent = texte;
    fiche.append(titreSection, contenu);
  }

  function construireFicheImpression(recette) {
    zoneImpression.textContent = "";

    const fiche = document.createElement("article");
    const titre = document.createElement("h1");
    const categorie = obtenirTexteRecette(recette.categorie);
    const portionsOriginales = obtenirPortionsOriginales(recette);
    const portionsSouhaiteesRecette =
      portionsOriginales === null
        ? null
        : convertirNombreEntier(portionsSouhaitees.get(recette.id), 1);
    const portionsUtilisees =
      portionsSouhaiteesRecette === null
        ? portionsOriginales
        : portionsSouhaiteesRecette;
    const coefficientPortions = calculerCoefficientPortions(
      portionsOriginales,
      portionsUtilisees
    );
    const quantitesSontAdaptees =
      portionsOriginales !== null &&
      portionsUtilisees !== portionsOriginales;
    const informations = [];
    const tempsPreparation = convertirNombreEntier(recette.tempsPreparation, 0);
    const tempsCuisson = convertirNombreEntier(recette.tempsCuisson, 0);
    const difficulte = obtenirDifficulte(recette.difficulte);

    fiche.className = "fiche-impression";
    titre.textContent = obtenirTexteRecette(recette.nom) || "Recette";
    fiche.append(titre);

    if (categorie) {
      const texteCategorie = document.createElement("p");

      texteCategorie.textContent = `Catégorie : ${categorie}`;
      fiche.append(texteCategorie);
    }

    if (tempsPreparation !== null) {
      informations.push(`Préparation : ${tempsPreparation} min`);
    }

    if (tempsCuisson !== null) {
      informations.push(
        tempsCuisson === 0 ? "Cuisson : Sans cuisson" : `Cuisson : ${tempsCuisson} min`
      );
    }

    if (portionsUtilisees !== null) {
      informations.push(`Portions : ${portionsUtilisees}`);
    }

    if (difficulte) {
      informations.push(`Difficulté : ${difficulte}`);
    }

    if (informations.length > 0) {
      const titreInformations = document.createElement("h2");
      const listeInformations = document.createElement("div");

      titreInformations.textContent = "Informations pratiques";
      listeInformations.className = "informations-impression";

      informations.forEach((information) => {
        const element = document.createElement("p");

        element.textContent = information;
        listeInformations.append(element);
      });

      fiche.append(titreInformations, listeInformations);
    }

    if (quantitesSontAdaptees) {
      const indicationPortions = document.createElement("p");

      indicationPortions.className = "indication-impression-portions";
      indicationPortions.textContent = `Quantités adaptées pour ${portionsUtilisees} portions`;
      fiche.append(indicationPortions);
    }

    const ingredients = obtenirIngredientsValides(recette);

    if (ingredients.length > 0) {
      const titreIngredients = document.createElement("h2");
      const listeIngredients = document.createElement("ul");

      titreIngredients.textContent = "Ingrédients";

      ingredients.forEach((ingredient) => {
        const element = document.createElement("li");
        const quantiteAdaptee = calculerQuantiteAdaptee(
          ingredient.quantite,
          coefficientPortions
        );

        element.textContent = `${formaterQuantitePourListe(quantiteAdaptee)} ${ingredient.unite} ${ingredient.nom}`;
        listeIngredients.append(element);
      });

      fiche.append(titreIngredients, listeIngredients);
    }

    const preparation = obtenirTexteRecette(recette.preparation);
    const cuisson = obtenirTexteRecette(recette.cuisson);
    const notes = obtenirTexteRecette(recette.notes);
    const conseils = obtenirTexteRecette(recette.conseils);

    if (preparation) {
      ajouterSectionImpression(fiche, "Préparation", preparation);
    }

    if (cuisson) {
      ajouterSectionImpression(fiche, "Cuisson", cuisson);
    }

    if (notes) {
      ajouterSectionImpression(fiche, "Notes personnelles", notes);
    }

    if (conseils) {
      ajouterSectionImpression(fiche, "Conseils et astuces", conseils);
    }

    zoneImpression.append(fiche);
  }

  function nettoyerModeImpression() {
    if (temporisationNettoyageImpression !== null) {
      clearTimeout(temporisationNettoyageImpression);
      temporisationNettoyageImpression = null;
    }

    document.body.classList.remove("mode-impression");
    zoneImpression.textContent = "";

    if (titreDocumentAvantImpression !== null) {
      document.title = titreDocumentAvantImpression;
      titreDocumentAvantImpression = null;
    }
  }

  function imprimerRecette(idRecette) {
    const recette = recettes.find((recetteActuelle) => recetteActuelle.id === idRecette);

    if (!recette) {
      console.error(
        "Application de recettes : la recette à imprimer est introuvable."
      );
      afficherMessage(
        "Impossible de préparer cette recette pour l’impression.",
        "erreur"
      );
      return;
    }

    nettoyerModeImpression();
    construireFicheImpression(recette);
    titreDocumentAvantImpression = document.title;
    document.title = obtenirTexteRecette(recette.nom) || document.title;
    document.body.classList.add("mode-impression");
    temporisationNettoyageImpression = setTimeout(
      nettoyerModeImpression,
      60000
    );

    if (typeof window.print !== "function") {
      console.error(
        "Application de recettes : l’impression native est indisponible dans ce navigateur."
      );
      nettoyerModeImpression();
      afficherMessage(
        "Impossible de préparer cette recette pour l’impression.",
        "erreur"
      );
      return;
    }

    try {
      window.print();
    } catch (erreur) {
      console.error(
        "Application de recettes : l’impression native n’a pas pu être lancée."
      );
      nettoyerModeImpression();
      afficherMessage(
        "Impossible de préparer cette recette pour l’impression.",
        "erreur"
      );
    }
  }

  // Fiche détaillée d’une recette
  function ajouterSectionTexteFicheRecette(titre, texte, classeTexte) {
    const section = document.createElement("section");
    const titreSection = document.createElement("h3");
    const contenu = document.createElement("p");

    section.className = "section-fiche-recette";
    titreSection.textContent = titre;
    contenu.className = classeTexte;
    contenu.textContent = texte;
    section.append(titreSection, contenu);
    ficheRecetteContenu.append(section);
  }

  function ajouterInformationsPratiquesFicheRecette(
    recette,
    portionsOriginales,
    portionsAffichees
  ) {
    const informations = [];
    const tempsPreparation = convertirNombreEntier(recette.tempsPreparation, 0);
    const tempsCuisson = convertirNombreEntier(recette.tempsCuisson, 0);
    const difficulte = obtenirDifficulte(recette.difficulte);

    if (tempsPreparation !== null) {
      informations.push(`Préparation : ${tempsPreparation} min`);
    }

    if (tempsCuisson !== null) {
      informations.push(
        tempsCuisson === 0
          ? "Cuisson : Sans cuisson"
          : `Cuisson : ${tempsCuisson} min`
      );
    }

    if (portionsOriginales !== null) {
      informations.push(`Portions d’origine : ${portionsOriginales}`);

      if (portionsAffichees !== portionsOriginales) {
        informations.push(`Portions affichées : ${portionsAffichees}`);
      }
    }

    if (difficulte) {
      informations.push(`Difficulté : ${difficulte}`);
    }

    if (informations.length === 0) {
      return;
    }

    const section = document.createElement("section");
    const titre = document.createElement("h3");
    const liste = document.createElement("ul");

    section.className = "section-fiche-recette";
    titre.textContent = "Informations pratiques";
    liste.className = "informations-pratiques-recette";

    informations.forEach((information) => {
      const element = document.createElement("li");

      element.textContent = information;
      liste.append(element);
    });

    section.append(titre, liste);
    ficheRecetteContenu.append(section);
  }

  function ajouterIngredientsFicheRecette(recette, coefficientPortions) {
    const ingredients = obtenirIngredientsValides(recette);

    if (ingredients.length === 0) {
      return;
    }

    const section = document.createElement("section");
    const titre = document.createElement("h3");
    const liste = document.createElement("ul");

    section.className = "section-fiche-recette";
    titre.textContent = "Ingrédients";
    liste.className = "liste-ingredients-fiche";

    ingredients.forEach((ingredient) => {
      const element = document.createElement("li");
      const quantiteAdaptee = calculerQuantiteAdaptee(
        ingredient.quantite,
        coefficientPortions
      );

      element.textContent = `${formaterQuantitePourListe(quantiteAdaptee)} ${ingredient.unite} ${ingredient.nom}`;
      liste.append(element);
    });

    section.append(titre, liste);
    ficheRecetteContenu.append(section);
  }

  function rendreFicheRecette(recette) {
    const categorie = obtenirTexteRecette(recette.categorie).trim();
    const preparation = obtenirTexteRecette(recette.preparation).trim();
    const cuisson = obtenirTexteRecette(recette.cuisson).trim();
    const notes = obtenirTexteRecette(recette.notes).trim();
    const conseils = obtenirTexteRecette(recette.conseils).trim();
    const portionsOriginales = obtenirPortionsOriginales(recette);
    const portionsAffichees = obtenirPortionsSouhaiteesRecette(recette);
    const coefficientPortions = obtenirCoefficientPortionsRecette(recette);
    const quantitesSontAdaptees =
      portionsOriginales !== null &&
      portionsAffichees !== portionsOriginales;
    const boutonFavori = document.createElement("button");
    const boutonModifier = document.createElement("button");
    const actionsPrincipales = document.createElement("div");
    const actionsSecondaires = document.createElement("details");
    const resumeActions = document.createElement("summary");
    const contenuActions = document.createElement("div");
    const boutonAjouterHistorique = document.createElement("button");
    const boutonImprimer = document.createElement("button");
    const boutonSuppression = document.createElement("button");

    ficheRecetteTitre.textContent =
      obtenirTexteRecette(recette.nom).trim() || "Recette";
    ficheRecetteContenu.textContent = "";

    if (categorie) {
      const texteCategorie = document.createElement("p");

      texteCategorie.className = "categorie-fiche-recette";
      texteCategorie.textContent = `Catégorie : ${categorie}`;
      ficheRecetteContenu.append(texteCategorie);
    }

    const statutFavori = document.createElement("p");

    statutFavori.className = "statut-fiche-recette";
    statutFavori.textContent =
      recette.favori === true ? "Statut : Favorite" : "Statut : Non favorite";
    ficheRecetteContenu.append(statutFavori);

    ajouterInformationsPratiquesFicheRecette(
      recette,
      portionsOriginales,
      portionsAffichees
    );
    ficheRecetteContenu.append(actionsPrincipales);

    if (quantitesSontAdaptees) {
      const indicationPortions = document.createElement("p");

      indicationPortions.className = "indication-portions-adaptees";
      indicationPortions.textContent = `Quantités affichées pour ${portionsAffichees} portions`;
      ficheRecetteContenu.append(indicationPortions);
    }

    const zoneAdaptationPortions = creerZoneAdaptationPortions(
      recette,
      portionsOriginales,
      portionsAffichees
    );

    if (zoneAdaptationPortions) {
      ficheRecetteContenu.append(zoneAdaptationPortions);
    }

    ajouterIngredientsFicheRecette(recette, coefficientPortions);

    if (preparation) {
      ajouterSectionTexteFicheRecette(
        "Préparation",
        preparation,
        "instructions-recette"
      );
    }

    if (cuisson) {
      ajouterSectionTexteFicheRecette(
        "Cuisson",
        cuisson,
        "instructions-recette"
      );
    }

    if (notes) {
      ajouterSectionTexteFicheRecette(
        "Notes personnelles",
        notes,
        "instructions-recette notes-conseils-recette"
      );
    }

    if (conseils) {
      ajouterSectionTexteFicheRecette(
        "Conseils et astuces",
        conseils,
        "instructions-recette notes-conseils-recette"
      );
    }

    actionsPrincipales.className = "actions-fiche-recette-principales";
    boutonFavori.type = "button";
    boutonFavori.className = "bouton-favori";
    boutonFavori.textContent =
      recette.favori === true ? "Retirer des favoris" : "Ajouter aux favoris";
    boutonModifier.type = "button";
    boutonModifier.className = "bouton-modifier";
    boutonModifier.textContent = "Modifier";
    actionsPrincipales.append(boutonModifier, boutonFavori);

    actionsSecondaires.className = "fiche-recette-actions-secondaires";
    resumeActions.textContent = "Actions";
    contenuActions.className = "contenu-actions-fiche-recette";
    boutonAjouterHistorique.type = "button";
    boutonAjouterHistorique.className = "bouton-ajouter-historique";
    boutonAjouterHistorique.textContent = "Ajouter à l’historique";
    boutonImprimer.type = "button";
    boutonImprimer.className = "bouton-imprimer";
    boutonImprimer.textContent = "Imprimer / PDF";
    boutonSuppression.type = "button";
    boutonSuppression.className = "bouton-suppression";
    boutonSuppression.textContent = "Supprimer";
    contenuActions.append(
      boutonAjouterHistorique,
      boutonImprimer,
      boutonSuppression
    );
    actionsSecondaires.append(resumeActions, contenuActions);
    ficheRecetteContenu.append(actionsSecondaires);

    boutonFavori.addEventListener("click", () => {
      basculerFavori(recette.id);
    });

    boutonModifier.addEventListener("click", () => {
      fermerFicheRecette(false);
      commencerModification(recette.id);
    });

    boutonAjouterHistorique.addEventListener("click", () => {
      fermerFicheRecette(false);
      ouvrirFormulaireHistorique(recette.id);
    });

    boutonImprimer.addEventListener("click", () => {
      imprimerRecette(recette.id);
    });

    boutonSuppression.addEventListener("click", () => {
      supprimerRecette(recette.id);
    });
  }

  function nettoyerFicheRecette(restaurerFocus = true) {
    const declencheur = elementDeclencheurFiche;

    ficheRecetteContenu.querySelectorAll("details[open]").forEach((details) => {
      details.open = false;
    });
    ficheRecetteTitre.textContent = "";
    ficheRecetteContenu.textContent = "";
    idRecetteFicheOuverte = null;
    elementDeclencheurFiche = null;
    document.body.classList.remove("fiche-recette-ouverte");

    if (
      restaurerFocus &&
      declencheur &&
      declencheur.isConnected &&
      !declencheur.disabled &&
      typeof declencheur.focus === "function"
    ) {
      declencheur.focus();
    }
  }

  function fermerFicheRecette(restaurerFocus = true) {
    restaurerFocusFicheALaFermeture = restaurerFocus;

    if (
      ficheRecetteDialogue.open &&
      typeof ficheRecetteDialogue.close === "function"
    ) {
      ficheRecetteDialogue.close();
      return;
    } else {
      ficheRecetteDialogue.removeAttribute("open");
    }

    nettoyerFicheRecette(restaurerFocus);
    restaurerFocusFicheALaFermeture = true;
  }

  function actualiserFicheRecetteOuverte() {
    if (idRecetteFicheOuverte === null) {
      return;
    }

    const recette = recettes.find(
      (recetteActuelle) => recetteActuelle.id === idRecetteFicheOuverte
    );

    if (!recette) {
      fermerFicheRecette();
      return;
    }

    const focusEtaitDansLaFiche = ficheRecetteDialogue.contains(
      document.activeElement
    );

    rendreFicheRecette(recette);

    if (
      focusEtaitDansLaFiche &&
      typeof boutonFermerFicheRecette.focus === "function"
    ) {
      boutonFermerFicheRecette.focus();
    }
  }

  function ouvrirFicheRecette(idRecette, declencheur) {
    if (typeof idRecette !== "string" || idRecette.trim() === "") {
      console.error(
        "Application de recettes : l’identifiant de la recette à ouvrir est invalide."
      );
      afficherMessage("Impossible d’ouvrir cette recette.", "erreur");
      return false;
    }

    const recette = recettes.find(
      (recetteActuelle) => recetteActuelle.id === idRecette
    );

    if (!recette) {
      console.error(
        "Application de recettes : la recette à ouvrir est introuvable."
      );
      afficherMessage("Impossible d’ouvrir cette recette.", "erreur");
      return false;
    }

    idRecetteFicheOuverte = recette.id;
    elementDeclencheurFiche =
      declencheur && typeof declencheur.focus === "function"
        ? declencheur
        : null;
    rendreFicheRecette(recette);
    ficheRecettePanneau.scrollTop = 0;
    ficheRecetteContenu.scrollTop = 0;
    document.body.classList.add("fiche-recette-ouverte");

    try {
      if (!ficheRecetteDialogue.open) {
        if (typeof ficheRecetteDialogue.showModal === "function") {
          ficheRecetteDialogue.showModal();
        } else {
          ficheRecetteDialogue.setAttribute("open", "");
        }
      }
    } catch (erreur) {
      console.error(
        "Application de recettes : la fiche de recette n’a pas pu être ouverte."
      );
      nettoyerFicheRecette(false);
      afficherMessage("Impossible d’ouvrir cette recette.", "erreur");
      return false;
    }

    boutonFermerFicheRecette.focus();
    return true;
  }

  // Affichage des recettes, filtres et sélection
  function mettreAJourResumeSelection() {
    const identifiantsRecettes = new Set(recettes.map((recette) => recette.id));

    recettesSelectionnees.forEach((idRecette) => {
      if (!identifiantsRecettes.has(idRecette)) {
        console.error(
          "Application de recettes : un identifiant de recette sélectionnée est invalide et a été retiré."
        );
        recettesSelectionnees.delete(idRecette);
      }
    });

    const nombreRecettesSelectionnees = recettesSelectionnees.size;

    resumeSelectionRecettes.textContent =
      nombreRecettesSelectionnees === 0
        ? "Aucune recette sélectionnée."
        : nombreRecettesSelectionnees === 1
          ? "1 recette sélectionnée."
          : `${nombreRecettesSelectionnees} recettes sélectionnées.`;
  }

  function creerCarteRecetteCompacte(recette) {
    const carte = document.createElement("article");
    const nom = document.createElement("h3");
    const categorie = obtenirTexteRecette(recette.categorie).trim();
    const informationsPratiques = obtenirInformationsPratiques(recette);
    const portionsOriginales = obtenirPortionsOriginales(recette);
    const portionsAffichees = obtenirPortionsSouhaiteesRecette(recette);
    const quantitesSontAdaptees =
      portionsOriginales !== null &&
      portionsAffichees !== portionsOriginales;
    const selection = document.createElement("div");
    const caseSelection = document.createElement("input");
    const libelleSelection = document.createElement("label");
    const actions = document.createElement("div");
    const boutonFavori = document.createElement("button");
    const boutonVoirRecette = document.createElement("button");
    const estFavorite = recette.favori === true;

    carte.className = estFavorite ? "carte-recette favorite" : "carte-recette";
    carte.dataset.recetteId = recette.id;
    nom.textContent = obtenirTexteRecette(recette.nom).trim() || "Recette";

    if (estFavorite) {
      const indicationFavorite = document.createElement("span");

      indicationFavorite.className = "indication-favorite";
      indicationFavorite.textContent = "Favorite";
      nom.append(" ", indicationFavorite);
    }

    carte.append(nom);

    if (categorie) {
      const texteCategorie = document.createElement("p");

      texteCategorie.className = "categorie-recette";
      texteCategorie.textContent = "Catégorie : " + categorie;
      carte.append(texteCategorie);
    }

    if (informationsPratiques.length > 0) {
      const texteInformations = document.createElement("p");

      texteInformations.className = "informations-pratiques-compactes";
      texteInformations.textContent = informationsPratiques.join(" • ");
      carte.append(texteInformations);
    }

    if (quantitesSontAdaptees) {
      const indicationPortions = document.createElement("p");

      indicationPortions.className = "indication-portions-adaptees";
      indicationPortions.textContent =
        "Quantités affichées pour " + portionsAffichees + " portions";
      carte.append(indicationPortions);
    }

    selection.className = "selection-recette";
    caseSelection.id = "selection-recette-" + recette.id;
    caseSelection.type = "checkbox";
    caseSelection.dataset.recetteId = recette.id;
    caseSelection.checked = recettesSelectionnees.has(recette.id);
    libelleSelection.htmlFor = caseSelection.id;
    libelleSelection.textContent = "Sélectionner pour la liste de courses";
    selection.append(caseSelection, libelleSelection);

    actions.className = "actions-carte-recette";
    boutonFavori.type = "button";
    boutonFavori.className = "bouton-favori";
    boutonFavori.dataset.recetteId = recette.id;
    boutonFavori.textContent = estFavorite
      ? "Retirer des favoris"
      : "Ajouter aux favoris";
    boutonVoirRecette.type = "button";
    boutonVoirRecette.className = "bouton-voir-recette";
    boutonVoirRecette.dataset.recetteId = recette.id;
    boutonVoirRecette.textContent = "Voir la recette";
    actions.append(boutonFavori, boutonVoirRecette);
    carte.append(selection, actions);

    boutonFavori.addEventListener("click", () => {
      basculerFavori(boutonFavori.dataset.recetteId);
    });

    boutonVoirRecette.addEventListener("click", () => {
      ouvrirFicheRecette(
        boutonVoirRecette.dataset.recetteId,
        boutonVoirRecette
      );
    });

    caseSelection.addEventListener("change", () => {
      const idRecette = caseSelection.dataset.recetteId;
      const recetteExiste = recettes.some(
        (recetteActuelle) => recetteActuelle.id === idRecette
      );

      if (!recetteExiste) {
        console.error(
          "Application de recettes : la recette à sélectionner est introuvable."
        );
        recettesSelectionnees.delete(idRecette);
        caseSelection.checked = false;
        mettreAJourResumeSelection();
        return;
      }

      if (caseSelection.checked) {
        recettesSelectionnees.add(idRecette);
      } else {
        recettesSelectionnees.delete(idRecette);
      }

      mettreAJourResumeSelection();
    });

    return carte;
  }

  function afficherRecettes() {
    zoneRecettes.textContent = "";
    mettreAJourResumeSelection();
    const recherche = normaliserRecherche(champRecherche.value);

    if (recettes.length === 0) {
      const messageVide = document.createElement("p");

      messageVide.className = "aucune-recette";
      messageVide.textContent = "Aucune recette n’est encore enregistrée.";
      zoneRecettes.append(messageVide);
      actualiserFicheRecetteOuverte();
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

    if (recherche) {
      recettesAffichees = recettesAffichees.filter((recette) =>
        recetteCorrespondRecherche(recette, recherche)
      );
    }

    if (recettesAffichees.length === 0) {
      const messageVide = document.createElement("p");

      messageVide.className = "aucune-recette";
      messageVide.textContent = recherche
        ? "Aucune recette ne correspond à votre recherche et aux filtres sélectionnés."
        : filtreFavoris.checked
          ? "Aucune recette favorite ne correspond aux filtres sélectionnés."
          : "Aucune recette ne correspond à cette catégorie.";
      zoneRecettes.append(messageVide);
      actualiserFicheRecetteOuverte();
      return;
    }

    recettesAffichees.forEach((recette) => {
      zoneRecettes.append(creerCarteRecetteCompacte(recette));
    });

    actualiserFicheRecetteOuverte();
  }
  // Validation et normalisation des données
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

  function normaliserRecherche(texte) {
    if (typeof texte !== "string") {
      return "";
    }

    return texte
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("fr");
  }

  function normaliserNomIngredient(nom) {
    return normaliserRecherche(nom).replace(/\s+/g, " ");
  }

  function obtenirPortionsOriginales(recette) {
    return recette ? convertirNombreEntier(recette.portions, 1) : null;
  }

  function calculerCoefficientPortions(portionsOriginales, portionsVoulues) {
    const original = convertirNombreEntier(portionsOriginales, 1);
    const souhaitees = convertirNombreEntier(portionsVoulues, 1);

    return original !== null && souhaitees !== null ? souhaitees / original : 1;
  }

  function calculerQuantiteAdaptee(quantite, coefficient) {
    return quantite * coefficient;
  }

  function obtenirPortionsSouhaiteesRecette(recette) {
    const portionsOriginales = obtenirPortionsOriginales(recette);

    if (portionsOriginales === null) {
      portionsSouhaitees.delete(recette.id);
      return null;
    }

    const portionsSouhaiteesRecette = convertirNombreEntier(
      portionsSouhaitees.get(recette.id),
      1
    );

    if (portionsSouhaiteesRecette === null) {
      portionsSouhaitees.delete(recette.id);
      return portionsOriginales;
    }

    return portionsSouhaiteesRecette;
  }

  function obtenirCoefficientPortionsRecette(recette) {
    return calculerCoefficientPortions(
      obtenirPortionsOriginales(recette),
      obtenirPortionsSouhaiteesRecette(recette)
    );
  }

  function adapterPortions(idRecette, valeurPortions) {
    const portions = convertirNombreEntier(valeurPortions, 1);

    if (portions === null) {
      afficherMessage(
        "Le nombre de portions souhaité doit être un entier supérieur ou égal à 1.",
        "erreur"
      );
      return;
    }

    const recette = recettes.find((recetteActuelle) => recetteActuelle.id === idRecette);

    if (!recette || obtenirPortionsOriginales(recette) === null) {
      console.error(
        "Application de recettes : la recette dont les portions doivent être adaptées est introuvable ou invalide."
      );
      return;
    }

    portionsSouhaitees.set(recette.id, portions);
    afficherRecettes();
    afficherMessage(`Quantités adaptées pour ${portions} portions.`, "succes");
  }

  function reinitialiserPortions(idRecette) {
    const recette = recettes.find((recetteActuelle) => recetteActuelle.id === idRecette);

    if (!recette) {
      console.error(
        "Application de recettes : la recette dont les portions doivent être réinitialisées est introuvable."
      );
      return;
    }

    portionsSouhaitees.delete(recette.id);
    afficherRecettes();
    afficherMessage(
      "Quantités réinitialisées aux portions d’origine.",
      "succes"
    );
  }

  function creerZoneAdaptationPortions(
    recette,
    portionsOriginales,
    portionsSouhaiteesRecette
  ) {
    if (portionsOriginales === null) {
      return null;
    }

    const zone = document.createElement("section");
    const titre = document.createElement("h4");
    const actions = document.createElement("div");
    const champ = document.createElement("input");
    const libelle = document.createElement("label");
    const boutonAdapter = document.createElement("button");

    zone.className = "adaptation-portions";
    titre.textContent = "Adapter les quantités";
    actions.className = "actions-adaptation-portions";
    champ.id = `portions-souhaitees-${recette.id}`;
    champ.className = "champ-portions-souhaitees";
    champ.type = "number";
    champ.min = "1";
    champ.step = "1";
    champ.value = portionsSouhaiteesRecette;
    champ.dataset.recetteId = recette.id;
    libelle.htmlFor = champ.id;
    libelle.textContent = "Portions souhaitées";
    boutonAdapter.type = "button";
    boutonAdapter.className = "bouton-adapter-portions";
    boutonAdapter.dataset.recetteId = recette.id;
    boutonAdapter.textContent = "Adapter";

    boutonAdapter.addEventListener("click", () => {
      adapterPortions(boutonAdapter.dataset.recetteId, champ.value);
    });

    actions.append(libelle, champ, boutonAdapter);

    if (portionsSouhaiteesRecette !== portionsOriginales) {
      const boutonReinitialiser = document.createElement("button");

      boutonReinitialiser.type = "button";
      boutonReinitialiser.className = "bouton-reinitialiser-portions";
      boutonReinitialiser.dataset.recetteId = recette.id;
      boutonReinitialiser.textContent = "Revenir aux portions d’origine";
      boutonReinitialiser.addEventListener("click", () => {
        reinitialiserPortions(boutonReinitialiser.dataset.recetteId);
      });
      actions.append(boutonReinitialiser);
    }

    zone.append(titre, actions);
    return zone;
  }

  // Liste de courses
  function obtenirConversionUnite(unite) {
    for (const [famille, conversion] of Object.entries(conversionsUnites)) {
      if (Object.prototype.hasOwnProperty.call(conversion.facteurs, unite)) {
        return { famille, conversion };
      }
    }

    return null;
  }

  function arrondirQuantite(quantite) {
    return Number(quantite.toFixed(12));
  }

  function estProcheDeMultiple(quantite, multiple) {
    const multipleLePlusProche = Math.round(quantite / multiple) * multiple;
    const tolerance = 1e-9 * Math.max(1, Math.abs(quantite));

    return Math.abs(quantite - multipleLePlusProche) <= tolerance;
  }

  function choisirUniteAffichage(famille, quantiteReference) {
    const quantite = arrondirQuantite(quantiteReference);

    if (famille === "masse") {
      if (quantite >= 1000) {
        return { quantite: quantite / 1000, unite: "kg" };
      }

      if (quantite >= 1) {
        return { quantite, unite: "g" };
      }

      return { quantite: quantite * 1000, unite: "mg" };
    }

    if (famille === "volume") {
      if (quantite >= 1000) {
        return { quantite: quantite / 1000, unite: "l" };
      }

      if (estProcheDeMultiple(quantite, 10)) {
        return { quantite: quantite / 10, unite: "cl" };
      }

      return { quantite, unite: "ml" };
    }

    return { quantite, unite: "" };
  }

  function regrouperIngredientsPourCourses(recettesPourCourses) {
    const groupesIngredients = new Map();

    recettesPourCourses.forEach((recette) => {
      const coefficientPortions = obtenirCoefficientPortionsRecette(recette);

      obtenirIngredientsValides(recette).forEach((ingredient) => {
        const nomNormalise = normaliserNomIngredient(ingredient.nom);
        const conversionUnite = obtenirConversionUnite(ingredient.unite);
        const famille = conversionUnite ? conversionUnite.famille : null;
        const cleUnite = famille
          ? `famille:${famille}`
          : `unite:${ingredient.unite}`;
        const cleGroupe = JSON.stringify([nomNormalise, cleUnite]);
        const groupeExistant = groupesIngredients.get(cleGroupe);
        const quantiteAdaptee = calculerQuantiteAdaptee(
          ingredient.quantite,
          coefficientPortions
        );
        const quantiteReference = conversionUnite
          ? quantiteAdaptee * conversionUnite.conversion.facteurs[ingredient.unite]
          : quantiteAdaptee;

        if (groupeExistant) {
          groupeExistant.quantiteReference += quantiteReference;
          return;
        }

        groupesIngredients.set(cleGroupe, {
          nom: ingredient.nom.trim(),
          unite: ingredient.unite,
          famille,
          quantiteReference
        });
      });
    });

    return Array.from(groupesIngredients.values()).map((groupe) => {
      if (!groupe.famille) {
        return {
          nom: groupe.nom,
          unite: groupe.unite,
          quantite: groupe.quantiteReference
        };
      }

      const affichage = choisirUniteAffichage(
        groupe.famille,
        groupe.quantiteReference
      );

      return {
        nom: groupe.nom,
        unite: affichage.unite,
        quantite: affichage.quantite
      };
    });
  }

  function formaterQuantitePourListe(quantite) {
    const quantiteArrondie = arrondirQuantite(quantite);

    return quantiteArrondie.toLocaleString("fr-FR", {
      maximumFractionDigits: 12,
      useGrouping: false
    });
  }

  function genererListeCourses() {
    mettreAJourResumeSelection();
    const recettesPourCourses = recettes.filter((recette) =>
      recettesSelectionnees.has(recette.id)
    );

    zoneListeCourses.textContent = "";

    if (recettesPourCourses.length === 0) {
      const messageAucuneSelection = document.createElement("p");

      messageAucuneSelection.textContent = "Aucune recette sélectionnée.";
      zoneListeCourses.append(messageAucuneSelection);
      afficherMessage(
        "Sélectionnez au moins une recette avant de générer la liste de courses.",
        "erreur"
      );
      return;
    }

    const groupesIngredients = regrouperIngredientsPourCourses(recettesPourCourses);

    if (groupesIngredients.length === 0) {
      const messageAucunIngredient = document.createElement("p");

      messageAucunIngredient.textContent =
        "Les recettes sélectionnées ne contiennent aucun ingrédient.";
      zoneListeCourses.append(messageAucunIngredient);
      return;
    }

    const liste = document.createElement("ul");

    groupesIngredients.forEach((groupe) => {
      const ligne = document.createElement("li");

      ligne.textContent = `${formaterQuantitePourListe(groupe.quantite)} ${groupe.unite} ${groupe.nom}`;
      liste.append(ligne);
    });

    zoneListeCourses.append(liste);
  }

  function recetteCorrespondRecherche(recette, recherche) {
    if (!recherche) {
      return true;
    }

    if (normaliserRecherche(recette.nom).includes(recherche)) {
      return true;
    }

    return obtenirIngredientsValides(recette).some((ingredient) =>
      normaliserRecherche(ingredient.nom).includes(recherche)
    );
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

  // Ingrédients du formulaire et brouillon
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

    if (ingredient && typeof ingredient === "object") {
      champNomIngredient.value =
        typeof ingredient.nom === "string" ? ingredient.nom : "";
      champQuantiteIngredient.value =
        typeof ingredient.quantite === "string" ||
        typeof ingredient.quantite === "number"
          ? String(ingredient.quantite)
          : "";
      menuUniteIngredient.value =
        typeof ingredient.unite === "string" &&
        unitesIngredient.includes(ingredient.unite)
          ? ingredient.unite
          : "";
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
      programmerSauvegardeBrouillon();
      return;
    }

    ligne.querySelector(".ingredient-nom").value = "";
    ligne.querySelector(".ingredient-quantite").value = "";
    ligne.querySelector(".ingredient-unite").value = "";
    programmerSauvegardeBrouillon();
  }

  function reinitialiserLignesIngredient(ingredients) {
    listeIngredients.textContent = "";
    const ingredientsAAfficher = Array.isArray(ingredients) ? ingredients : [];

    if (ingredientsAAfficher.length === 0) {
      ajouterLigneIngredient();
      return;
    }

    ingredientsAAfficher.forEach((ingredient) => {
      ajouterLigneIngredient(ingredient);
    });
  }

  function collecterIngredientsBrouillon() {
    return Array.from(
      listeIngredients.querySelectorAll(".ligne-ingredient")
    ).map((ligne) => ({
      nom: ligne.querySelector(".ingredient-nom").value,
      quantite: ligne.querySelector(".ingredient-quantite").value,
      unite: ligne.querySelector(".ingredient-unite").value
    }));
  }

  function formulaireEstVide() {
    const ingredients = collecterIngredientsBrouillon();

    return (
      champNom.value === "" &&
      menuCategorie.value === "" &&
      champTempsPreparation.value === "" &&
      champTempsCuisson.value === "" &&
      champPortions.value === "" &&
      menuDifficulte.value === "" &&
      champPreparation.value === "" &&
      champCuisson.value === "" &&
      champNotes.value === "" &&
      champConseils.value === "" &&
      ingredients.every(
        (ingredient) =>
          ingredient.nom === "" &&
          ingredient.quantite === "" &&
          ingredient.unite === ""
      )
    );
  }

  function collecterBrouillon() {
    return {
      version: 1,
      mode: idRecetteEnModification === null ? "ajout" : "modification",
      recetteId: idRecetteEnModification,
      nom: champNom.value,
      categorie: menuCategorie.value,
      tempsPreparation: champTempsPreparation.value,
      tempsCuisson: champTempsCuisson.value,
      portions: champPortions.value,
      difficulte: menuDifficulte.value,
      ingredients: collecterIngredientsBrouillon(),
      preparation: champPreparation.value,
      cuisson: champCuisson.value,
      notes: champNotes.value,
      conseils: champConseils.value
    };
  }

  function supprimerBrouillon() {
    if (temporisationSauvegardeBrouillon !== null) {
      clearTimeout(temporisationSauvegardeBrouillon);
      temporisationSauvegardeBrouillon = null;
    }

    try {
      localStorage.removeItem(cleStockageBrouillon);
    } catch (erreur) {
      console.error(
        "Application de recettes : le brouillon n’a pas pu être supprimé localement."
      );
    }
  }

  function enregistrerBrouillon() {
    if (idRecetteEnModification === null && formulaireEstVide()) {
      supprimerBrouillon();
      return;
    }

    try {
      localStorage.setItem(
        cleStockageBrouillon,
        JSON.stringify(collecterBrouillon())
      );
    } catch (erreur) {
      console.error(
        "Application de recettes : le brouillon n’a pas pu être sauvegardé localement."
      );
    }
  }

  function programmerSauvegardeBrouillon() {
    if (temporisationSauvegardeBrouillon !== null) {
      clearTimeout(temporisationSauvegardeBrouillon);
    }

    temporisationSauvegardeBrouillon = setTimeout(() => {
      temporisationSauvegardeBrouillon = null;
      enregistrerBrouillon();
    }, 400);
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

  function brouillonEstValide(brouillon) {
    if (
      !brouillon ||
      typeof brouillon !== "object" ||
      Array.isArray(brouillon)
    ) {
      return false;
    }

    const champsTexte = [
      "nom",
      "categorie",
      "tempsPreparation",
      "tempsCuisson",
      "portions",
      "difficulte",
      "preparation",
      "cuisson",
      "notes",
      "conseils"
    ];
    const ingredientsValides =
      Array.isArray(brouillon.ingredients) &&
      brouillon.ingredients.every(
        (ingredient) =>
          ingredient &&
          typeof ingredient === "object" &&
          typeof ingredient.nom === "string" &&
          typeof ingredient.quantite === "string" &&
          typeof ingredient.unite === "string"
      );

    return (
      brouillon.version === 1 &&
      (brouillon.mode === "ajout" || brouillon.mode === "modification") &&
      ((brouillon.mode === "ajout" && brouillon.recetteId === null) ||
        (brouillon.mode === "modification" &&
          typeof brouillon.recetteId === "string" &&
          brouillon.recetteId.trim() !== "")) &&
      champsTexte.every((champ) => typeof brouillon[champ] === "string") &&
      ingredientsValides
    );
  }

  function chargerBrouillon() {
    let donneesEnregistrees;

    try {
      donneesEnregistrees = localStorage.getItem(cleStockageBrouillon);
    } catch (erreur) {
      console.warn(
        "Application de recettes : le brouillon enregistré est inaccessible. Le formulaire démarre vide."
      );
      return null;
    }

    if (donneesEnregistrees === null) {
      return null;
    }

    let brouillon;

    try {
      brouillon = JSON.parse(donneesEnregistrees);
    } catch (erreur) {
      console.warn(
        "Application de recettes : le brouillon enregistré est illisible. Le formulaire démarre vide."
      );
      return null;
    }

    if (!brouillonEstValide(brouillon)) {
      console.warn(
        "Application de recettes : le brouillon enregistré est invalide. Le formulaire démarre vide."
      );
      return null;
    }

    return brouillon;
  }

  // Chargement et sauvegarde des données
  function identifiantRecetteEstValide(identifiant) {
    return typeof identifiant === "string" && identifiant.trim() !== "";
  }

  function creerIdentifiantRecette(identifiantsUtilises) {
    const identifiants = identifiantsUtilises || new Set(
      recettes.map((recette) => recette.id)
    );
    let identifiant;

    do {
      identifiant = `recette-${Date.now()}-${prochainIdentifiant}`;
      prochainIdentifiant += 1;
    } while (identifiants.has(identifiant));

    return identifiant;
  }

  function recetteEstValide(recette) {
    return (
      recette &&
      typeof recette === "object" &&
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

    const identifiantsUtilises = new Set();
    let nombreIdentifiantsRepares = 0;
    const recettesValides = donneesAnalysees
      .filter(recetteEstValide)
      .map((recette) => {
        let identifiant = recette.id;

        if (
          !identifiantRecetteEstValide(identifiant) ||
          identifiantsUtilises.has(identifiant)
        ) {
          identifiant = creerIdentifiantRecette(identifiantsUtilises);
          nombreIdentifiantsRepares += 1;
        }

        identifiantsUtilises.add(identifiant);

        return {
          ...recette,
          id: identifiant,
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
        };
      });

    if (recettesValides.length !== donneesAnalysees.length) {
      console.warn(
        "Application de recettes : certaines recettes enregistrées sont invalides et ne sont pas affichées."
      );
    }

    if (nombreIdentifiantsRepares > 0) {
      console.warn(
        `Application de recettes : ${nombreIdentifiantsRepares} identifiant(s) de recette ont été réparé(s).`
      );
    }

    return recettesValides;
  }

  function enregistrerRecettes(recettesAEnregistrer) {
    try {
      localStorage.setItem(cleStockage, JSON.stringify(recettesAEnregistrer));
      return true;
    } catch (erreur) {
      console.warn(
        "Application de recettes : les recettes n’ont pas pu être sauvegardées localement."
      );
      return false;
    }
  }

  function appliquerRecettes(recettesProposees) {
    if (!enregistrerRecettes(recettesProposees)) {
      afficherMessage(
        "Impossible d’enregistrer les recettes sur cet appareil. Aucune modification n’a été appliquée.",
        "erreur"
      );
      return false;
    }

    recettes = recettesProposees;
    return true;
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

    const favori = recette.favori !== true;
    const recettesProposees = recettes.map((recetteActuelle) =>
      recetteActuelle.id === idRecette
        ? { ...recetteActuelle, favori }
        : recetteActuelle
    );

    if (!appliquerRecettes(recettesProposees)) {
      return;
    }

    afficherRecettes();
    afficherMessage(
      favori
        ? "Recette ajoutée aux favoris."
        : "Recette retirée des favoris.",
      "succes"
    );
  }

  // Formulaire, ingrédients et brouillon
  function obtenirValeurChamp(valeur) {
    return typeof valeur === "string" || typeof valeur === "number"
      ? String(valeur)
      : "";
  }

  function remplirChampsPrincipaux(donnees) {
    champNom.value = obtenirTexteRecette(donnees.nom);
    menuCategorie.value = obtenirTexteRecette(donnees.categorie);
    champPreparation.value = obtenirTexteRecette(donnees.preparation);
    champCuisson.value = obtenirTexteRecette(donnees.cuisson);
    champNotes.value = obtenirTexteRecette(donnees.notes);
    champConseils.value = obtenirTexteRecette(donnees.conseils);
    champTempsPreparation.value = obtenirValeurChamp(donnees.tempsPreparation);
    champTempsCuisson.value = obtenirValeurChamp(donnees.tempsCuisson);
    champPortions.value = obtenirValeurChamp(donnees.portions);
    menuDifficulte.value = obtenirTexteRecette(donnees.difficulte);
  }

  function viderChampsPrincipaux() {
    remplirChampsPrincipaux({});
  }

  function activerModeAjout() {
    idRecetteEnModification = null;
    boutonPrincipal.textContent = "Ajouter la recette";
    boutonAnnuler.hidden = true;
  }

  function revenirAuModeAjout(supprimerLeBrouillon = false) {
    activerModeAjout();
    viderChampsPrincipaux();
    reinitialiserLignesIngredient();

    if (supprimerLeBrouillon) {
      supprimerBrouillon();
    }
  }

  function restaurerBrouillon(brouillon) {
    remplirChampsPrincipaux(brouillon);
    reinitialiserLignesIngredient(brouillon.ingredients);

    if (brouillon.mode === "modification") {
      const recetteExiste = recettes.some(
        (recette) => recette.id === brouillon.recetteId
      );

      if (recetteExiste) {
        idRecetteEnModification = brouillon.recetteId;
        boutonPrincipal.textContent = "Enregistrer les modifications";
        boutonAnnuler.hidden = false;
        afficherMessage("Brouillon restauré automatiquement.", "succes");
        return;
      }

      activerModeAjout();
      afficherMessage(
        "Le brouillon a été restauré en mode ajout car la recette d’origine n’existe plus.",
        "succes"
      );
      return;
    }

    activerModeAjout();
    afficherMessage("Brouillon restauré automatiquement.", "succes");
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
    remplirChampsPrincipaux({
      ...recette,
      tempsPreparation: convertirNombreEntier(recette.tempsPreparation, 0) ?? "",
      tempsCuisson: convertirNombreEntier(recette.tempsCuisson, 0) ?? "",
      portions: convertirNombreEntier(recette.portions, 1) ?? "",
      difficulte: obtenirDifficulte(recette.difficulte)
    });
    reinitialiserLignesIngredient(obtenirIngredientsValides(recette));
    boutonPrincipal.textContent = "Enregistrer les modifications";
    boutonAnnuler.hidden = false;
    afficherVue("vue-formulaire");
    champNom.focus();
    afficherMessage("Modification de la recette en cours.", "succes");
    programmerSauvegardeBrouillon();
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

    const recettesProposees = recettes.filter(
      (recetteActuelle) => recetteActuelle.id !== idRecette
    );

    if (!appliquerRecettes(recettesProposees)) {
      return;
    }

    portionsSouhaitees.delete(idRecette);
    recettesSelectionnees.delete(idRecette);
    const menuNettoye = nettoyerMenuSemaine(menuSemaine, recettesProposees);

    if (!menuSemaineEstIdentique(menuSemaine, menuNettoye)) {
      menuSemaine = menuNettoye;

      if (!enregistrerMenuSemaine(menuSemaine)) {
        console.warn(
          "Application de recettes : le menu de la semaine nettoyé après la suppression n’a pas pu être sauvegardé."
        );
      }
    }

    mettreAJourResumeSelection();
    afficherRecettes();
    afficherMenuSemaine();
    afficherHistorique();

    const formulaireHistoriqueOuvert = idRecetteHistorique === idRecette;

    if (idRecetteEnModification === idRecette) {
      revenirAuModeAjout(true);
    }

    if (formulaireHistoriqueOuvert) {
      fermerFormulaireHistorique();
      afficherMessage("La recette sélectionnée n’existe plus.", "erreur");
      return;
    }

    afficherMessage("Recette supprimée avec succès.", "succes");
  }

  // Écouteurs d’événements et initialisation
  recettes = chargerRecettes();
  menuSemaine = nettoyerMenuSemaine(chargerMenuSemaine(), recettes);
  historique = chargerHistorique();

  const brouillon = chargerBrouillon();

  if (brouillon) {
    restaurerBrouillon(brouillon);
  } else {
    revenirAuModeAjout();
  }

  mettreAJourResumeSelection();
  afficherRecettes();
  afficherMenuSemaine();
  afficherHistorique();
  afficherVue("vue-recettes");

  boutonsNavigation.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      afficherVue(bouton.dataset.vue, true);
    });
  });

  boutonNouvelleRecette.addEventListener("click", () => {
    afficherVue("vue-formulaire", true);
  });

  boutonRetourAuxRecettes.addEventListener("click", () => {
    afficherVue("vue-recettes", true);
  });

  boutonFermerFicheRecette.addEventListener("click", () => {
    fermerFicheRecette();
  });

  ficheRecetteDialogue.addEventListener("cancel", (evenement) => {
    evenement.preventDefault();
    fermerFicheRecette();
  });

  ficheRecetteDialogue.addEventListener("close", () => {
    nettoyerFicheRecette(restaurerFocusFicheALaFermeture);
    restaurerFocusFicheALaFermeture = true;
  });

  ficheRecetteDialogue.addEventListener("click", (evenement) => {
    if (evenement.target === ficheRecetteDialogue) {
      fermerFicheRecette();
    }
  });

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

      const recetteProposee = {
        ...recette,
        nom,
        categorie,
        ingredients: resultatIngredient.ingredients,
        preparation,
        cuisson,
        notes,
        conseils,
        tempsPreparation: resultatInformations.tempsPreparation,
        tempsCuisson: resultatInformations.tempsCuisson,
        portions: resultatInformations.portions,
        difficulte: resultatInformations.difficulte
      };
      const recettesProposees = recettes.map((recetteActuelle) =>
        recetteActuelle.id === recetteProposee.id
          ? recetteProposee
          : recetteActuelle
      );

      if (!appliquerRecettes(recettesProposees)) {
        return;
      }

      portionsSouhaitees.delete(recetteProposee.id);
      afficherRecettes();
      afficherMenuSemaine();
      afficherHistorique();
      revenirAuModeAjout(true);
      afficherVue("vue-recettes");
      afficherMessage("Recette modifiée avec succès.", "succes");
      return;
    }

    const recette = {
      id: creerIdentifiantRecette(),
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

    const recettesProposees = [...recettes, recette];

    if (!appliquerRecettes(recettesProposees)) {
      return;
    }

    afficherRecettes();
    afficherMenuSemaine();
    revenirAuModeAjout(true);
    afficherVue("vue-recettes");
    afficherMessage("La recette a été ajoutée.", "succes");
  });

  boutonAnnuler.addEventListener("click", () => {
    revenirAuModeAjout(true);
    afficherVue("vue-recettes");
    afficherMessage("Modification annulée.", "succes");
  });

  boutonAjouterIngredient.addEventListener("click", () => {
    const ligne = ajouterLigneIngredient();
    programmerSauvegardeBrouillon();
    ligne.querySelector(".ingredient-nom").focus();
  });

  boutonEffacerBrouillon.addEventListener("click", () => {
    const formulaireContientDesInformations =
      idRecetteEnModification !== null || !formulaireEstVide();

    if (
      formulaireContientDesInformations &&
      !window.confirm("Effacer le brouillon et vider le formulaire ?")
    ) {
      return;
    }

    supprimerBrouillon();
    revenirAuModeAjout();
    afficherMessage("Brouillon effacé.", "succes");
  });

  formulaire.addEventListener("input", () => {
    programmerSauvegardeBrouillon();
  });

  formulaire.addEventListener("change", () => {
    programmerSauvegardeBrouillon();
  });

  boutonGenererListeCourses.addEventListener("click", () => {
    genererListeCourses();
  });

  boutonEffacerMenuSemaine.addEventListener("click", () => {
    effacerMenuSemaine();
  });

  formulaireHistorique.addEventListener("submit", (evenement) => {
    evenement.preventDefault();

    const recette = recettes.find(
      (recetteActuelle) => recetteActuelle.id === idRecetteHistorique
    );
    const date = champHistoriqueDate.value;
    const appreciation = Number(menuHistoriqueAppreciation.value);
    const notes = champHistoriqueNotes.value.trim();

    if (!recette) {
      fermerFormulaireHistorique();
      afficherMessage("La recette sélectionnée n’existe plus.", "erreur");
      return;
    }

    if (!dateHistoriqueEstValide(date)) {
      afficherMessage("Veuillez indiquer une date valide.", "erreur");
      return;
    }

    if (!appreciationHistoriqueEstValide(appreciation)) {
      afficherMessage("Veuillez choisir une appréciation entre 1 et 5.", "erreur");
      return;
    }

    const identifiantsUtilises = new Set(
      historique.map((entree) => entree.id)
    );
    const entree = {
      id: creerIdentifiantHistorique(identifiantsUtilises),
      recetteId: recette.id,
      recetteNom: recette.nom,
      recetteCategorie: recette.categorie,
      date,
      appreciation,
      notes,
      creeLe: new Date().toISOString()
    };
    const historiquePropose = [...historique, entree];

    if (!enregistrerHistorique(historiquePropose)) {
      afficherMessage(
        "Impossible d’enregistrer l’historique sur cet appareil.",
        "erreur"
      );
      return;
    }

    historique = historiquePropose;
    fermerFormulaireHistorique();
    afficherHistorique();
    afficherMessage("Recette ajoutée à l’historique.", "succes");
  });

  boutonAnnulerHistorique.addEventListener("click", () => {
    fermerFormulaireHistorique();
    afficherMessage("Ajout à l’historique annulé.", "succes");
  });

  window.addEventListener("afterprint", () => {
    nettoyerModeImpression();
  });

  filtreCategorie.addEventListener("change", () => {
    afficherRecettes();
  });

  filtreFavoris.addEventListener("change", () => {
    afficherRecettes();
  });

  champRecherche.addEventListener("input", () => {
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
