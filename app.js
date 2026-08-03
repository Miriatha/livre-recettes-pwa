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
  const boutonSemainePrecedente = document.getElementById("semaine-precedente");
  const boutonSemaineSuivante = document.getElementById("semaine-suivante");
  const boutonRevenirAujourdhui = document.getElementById("revenir-aujourdhui");
  const plageDatesSemaine = document.getElementById("plage-dates-semaine");
  const boutonDupliquerSemainePrecedente = document.getElementById(
    "dupliquer-semaine-precedente"
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
  const sectionCatalogueIngredients = document.getElementById("section-catalogue-ingredients");
  const compteurCatalogueIngredients = document.getElementById("compteur-catalogue-ingredients");
  const formulaireAjoutCatalogue = document.getElementById("formulaire-ajout-catalogue");
  const champNouvelIngredientCatalogue = document.getElementById("nouvel-ingredient-catalogue");
  const menuCategorieNouvelIngredientCatalogue = document.getElementById("categorie-nouvel-ingredient-catalogue");
  const boutonAjouterIngredientCatalogue = document.getElementById("ajouter-ingredient-catalogue");
  const champRechercheCatalogueIngredients = document.getElementById("recherche-catalogue-ingredients");
  const filtreCategorieCatalogue = document.getElementById("filtre-categorie-catalogue");
  const zoneListeCatalogueIngredients = document.getElementById("liste-catalogue-ingredients");
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
  const selecteurRecetteMenuDialogue = document.getElementById(
    "selecteur-recette-menu-dialogue"
  );
  const selecteurRecetteMenuPanneau = document.getElementById(
    "selecteur-recette-menu-panneau"
  );
  const selecteurRecetteMenuTitre = document.getElementById(
    "selecteur-recette-menu-titre"
  );
  const boutonFermerSelecteurRecetteMenu = document.getElementById(
    "fermer-selecteur-recette-menu"
  );
  const champRechercheRecetteMenu = document.getElementById(
    "recherche-recette-menu"
  );
  const filtreCategorieRecetteMenu = document.getElementById(
    "filtre-categorie-recette-menu"
  );
  const filtreFavorisRecetteMenu = document.getElementById(
    "filtre-favoris-recette-menu"
  );
  const zoneResultatsRecettesMenu = document.getElementById(
    "resultats-recettes-menu"
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
  const navigationFormulaire = document.getElementById(
    "navigation-formulaire"
  );
  const sectionFormulaireInformations = document.getElementById(
    "section-formulaire-informations"
  );
  const sectionFormulaireIngredients = document.getElementById(
    "section-formulaire-ingredients"
  );
  const sectionFormulairePreparation = document.getElementById(
    "section-formulaire-preparation"
  );
  const sectionFormulaireNotes = document.getElementById(
    "section-formulaire-notes"
  );
  const actionsFormulaireRecette = document.getElementById(
    "actions-formulaire-recette"
  );
  const boutonPrincipal = document.getElementById("bouton-enregistrer");
  const boutonAnnuler = document.getElementById("bouton-annuler-modification");
  const boutonEffacerBrouillon = document.getElementById("effacer-brouillon");
  const listeIngredients = document.getElementById("liste-ingredients");
  const boutonAjouterIngredient = document.getElementById("ajouter-ingredient");
  const listeEtapesRecette = document.getElementById("liste-etapes-recette");
  const boutonAjouterEtapeRecette = document.getElementById(
    "ajouter-etape-recette"
  );
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
    ["#semaine-precedente", boutonSemainePrecedente],
    ["#semaine-suivante", boutonSemaineSuivante],
    ["#revenir-aujourdhui", boutonRevenirAujourdhui],
    ["#plage-dates-semaine", plageDatesSemaine],
    ["#dupliquer-semaine-precedente", boutonDupliquerSemainePrecedente],
    ["#formulaire-historique", formulaireHistorique],
    ["#historique-recette-nom", historiqueRecetteNom],
    ["#historique-date", champHistoriqueDate],
    ["#historique-appreciation", menuHistoriqueAppreciation],
    ["#historique-notes", champHistoriqueNotes],
    ["#annuler-historique", boutonAnnulerHistorique],
    ["#liste-historique", zoneListeHistorique],
    ["#section-catalogue-ingredients", sectionCatalogueIngredients],
    ["#compteur-catalogue-ingredients", compteurCatalogueIngredients],
    ["#formulaire-ajout-catalogue", formulaireAjoutCatalogue],
    ["#nouvel-ingredient-catalogue", champNouvelIngredientCatalogue],
    ["#categorie-nouvel-ingredient-catalogue", menuCategorieNouvelIngredientCatalogue],
    ["#ajouter-ingredient-catalogue", boutonAjouterIngredientCatalogue],
    ["#recherche-catalogue-ingredients", champRechercheCatalogueIngredients],
    ["#filtre-categorie-catalogue", filtreCategorieCatalogue],
    ["#liste-catalogue-ingredients", zoneListeCatalogueIngredients],
    ["#zone-impression", zoneImpression],
    ["#fiche-recette-dialogue", ficheRecetteDialogue],
    ["#fiche-recette-panneau", ficheRecettePanneau],
    ["#fiche-recette-titre", ficheRecetteTitre],
    ["#fiche-recette-contenu", ficheRecetteContenu],
    ["#fermer-fiche-recette", boutonFermerFicheRecette],
    ["#selecteur-recette-menu-dialogue", selecteurRecetteMenuDialogue],
    ["#selecteur-recette-menu-panneau", selecteurRecetteMenuPanneau],
    ["#selecteur-recette-menu-titre", selecteurRecetteMenuTitre],
    ["#fermer-selecteur-recette-menu", boutonFermerSelecteurRecetteMenu],
    ["#recherche-recette-menu", champRechercheRecetteMenu],
    ["#filtre-categorie-recette-menu", filtreCategorieRecetteMenu],
    ["#filtre-favoris-recette-menu", filtreFavorisRecetteMenu],
    ["#resultats-recettes-menu", zoneResultatsRecettesMenu],
    ["#vue-recettes", vueRecettes],
    ["#vue-formulaire", vueFormulaire],
    ["#vue-menu", vueMenu],
    ["#vue-courses", vueCourses],
    ["#vue-plus", vuePlus],
    ["#nouvelle-recette", boutonNouvelleRecette],
    ["#retour-aux-recettes", boutonRetourAuxRecettes],
    ["#navigation-formulaire", navigationFormulaire],
    ["#section-formulaire-informations", sectionFormulaireInformations],
    ["#section-formulaire-ingredients", sectionFormulaireIngredients],
    ["#section-formulaire-preparation", sectionFormulairePreparation],
    ["#section-formulaire-notes", sectionFormulaireNotes],
    ["#actions-formulaire-recette", actionsFormulaireRecette],
    ["#bouton-enregistrer", boutonPrincipal],
    ["#bouton-annuler-modification", boutonAnnuler],
    ["#effacer-brouillon", boutonEffacerBrouillon],
    ["#liste-ingredients", listeIngredients],
    ["#ajouter-ingredient", boutonAjouterIngredient],
    ["#liste-etapes-recette", listeEtapesRecette],
    ["#ajouter-etape-recette", boutonAjouterEtapeRecette],
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
  const sectionsFormulaire = new Map([
    ["section-formulaire-informations", sectionFormulaireInformations],
    ["section-formulaire-ingredients", sectionFormulaireIngredients],
    ["section-formulaire-preparation", sectionFormulairePreparation],
    ["section-formulaire-notes", sectionFormulaireNotes]
  ]);
  const boutonsNavigationFormulaire = Array.from(
    navigationFormulaire.querySelectorAll("button[data-section-formulaire]")
  );

  // Constantes et état interne
  const cleStockage = "livreRecettes.recettes";
  const cleStockageBrouillon = "livreRecettes.brouillon";
  const cleStockageMenuSemaine = "livreRecettes.menuSemaine";
  const cleStockageHistorique = "livreRecettes.historique";
  const cleStockageCatalogueIngredients =
    "livreRecettes.catalogueIngredients";
  const categoriesIngredients = Object.freeze([
    { id: "fruits-legumes", libelle: "Fruits et légumes" },
    { id: "viandes-charcuteries", libelle: "Viandes et charcuteries" },
    { id: "poissons-fruits-de-mer", libelle: "Poissons et fruits de mer" },
    { id: "produits-laitiers-oeufs", libelle: "Produits laitiers et œufs" },
    { id: "feculents-cereales-legumineuses", libelle: "Féculents, céréales et légumineuses" },
    { id: "boulangerie", libelle: "Boulangerie" },
    { id: "epicerie-salee", libelle: "Épicerie salée" },
    { id: "epicerie-sucree", libelle: "Épicerie sucrée" },
    { id: "condiments-huiles-epices", libelle: "Condiments, huiles et épices" },
    { id: "surgeles", libelle: "Surgelés" },
    { id: "boissons", libelle: "Boissons" },
    { id: "autres", libelle: "Autres" },
    { id: "a-classer", libelle: "À classer" }
  ]);
  const catalogueInitialParCategorie = Object.freeze({
    "fruits-legumes": "Abricot|Ail|Ananas|Artichaut|Asperge|Aubergine|Avocat|Banane|Betterave|Brocoli|Carotte|Céleri branche|Céleri-rave|Champignon de Paris|Chou blanc|Chou de Bruxelles|Chou-fleur|Chou kale|Chou rouge|Chou vert|Citron|Citron vert|Clémentine|Concombre|Courge butternut|Courgette|Échalote|Endive|Épinards frais|Fenouil|Fraise|Framboise|Haricot vert frais|Kiwi|Laitue|Mâche|Mangue|Melon|Myrtille|Navet|Nectarine|Oignon|Oignon rouge|Orange|Pamplemousse|Patate douce|Pêche|Petit pois frais|Poire|Poireau|Poivron jaune|Poivron rouge|Poivron vert|Pomme|Pomme de terre|Potimarron|Radis|Raisin|Roquette|Salade verte|Tomate|Tomate cerise",
    "viandes-charcuteries": "Agneau|Bacon|Bavette de bœuf|Blanc de poulet|Bœuf haché|Canard|Chair à saucisse|Chipolata|Côte de porc|Cuisse de canard|Cuisse de poulet|Dinde|Escalope de dinde|Escalope de poulet|Filet de bœuf|Filet mignon de porc|Foie de volaille|Jambon blanc|Jambon cru|Joue de bœuf|Lard fumé|Lardons|Magret de canard|Merguez|Palette de porc|Paupiette de veau|Porc haché|Poulet|Rôti de bœuf|Rôti de porc|Saucisse de Toulouse|Saucisson sec|Steak haché|Travers de porc|Veau|Viande hachée",
    "poissons-fruits-de-mer": "Anchois|Cabillaud|Calamar|Colin|Crabe|Crevette|Daurade|Filet de merlu|Gambas|Haddock|Hareng|Homard|Lieu noir|Lotte|Maquereau|Moule|Noix de Saint-Jacques|Palourde|Pavé de saumon|Poulpe|Saumon|Saumon fumé|Sardine|Sole|Surimi|Thon frais|Truite",
    "produits-laitiers-oeufs": "Beurre demi-sel|Beurre doux|Blanc d'œuf|Bleu d'Auvergne|Brie|Bûche de chèvre|Camembert|Cheddar|Chèvre frais|Comté|Cottage cheese|Coulommiers|Crème épaisse|Crème fraîche|Crème liquide|Emmental|Feta|Fromage blanc|Gruyère|Jaune d'œuf|Lait demi-écrémé|Lait écrémé|Lait entier|Lait fermenté|Lait ribot|Mascarpone|Mozzarella|Œuf|Parmesan|Petit-suisse|Raclette|Reblochon|Ricotta|Roquefort|Saint-Nectaire|Skyr|Yaourt nature",
    "feculents-cereales-legumineuses": "Avoine|Boulgour|Couscous|Farine complète|Farine de blé|Farine de maïs|Farine de riz|Fécule de pomme de terre|Flageolet|Flocons d'avoine|Gnocchi|Haricot blanc|Haricot noir|Haricot rouge|Lasagnes|Lentille corail|Lentille verte|Maïzena|Nouilles|Nouilles de riz|Pâtes|Penne|Pois cassé|Pois chiche|Polenta|Quinoa|Riz arborio|Riz basmati|Riz complet|Riz long|Riz rond|Semoule fine|Spaghetti|Tagliatelles|Vermicelles",
    boulangerie: "Baguette|Biscotte|Brioche|Croissant|Galette de sarrasin|Pain au chocolat|Pain burger|Pain complet|Pain de campagne|Pain de mie|Pain hot-dog|Pain pita|Pâte à pizza|Pâte brisée|Pâte feuilletée|Pâte filo|Pâte sablée|Tortilla de blé",
    "epicerie-salee": "Artichaut en conserve|Champignon en conserve|Chapelure|Cœur de palmier|Coulis de tomate|Crème de coco|Feuille de brick|Haricot vert en conserve|Lait de coco|Maïs en conserve|Miso|Olive noire|Olive verte|Petit pois en conserve|Poivron grillé en bocal|Purée de tomate|Sardine en boîte|Seitan|Tempeh|Thon en boîte|Tofu|Tomate pelée|Tomates concassées|Concentré de tomate|Soupe en brique|Ravioles|Gnocchi frais",
    "epicerie-sucree": "Abricot sec|Amande|Biscuit à la cuillère|Biscuit petit-beurre|Cacao en poudre|Caramel|Cassonade|Chocolat au lait|Chocolat blanc|Chocolat noir|Compote de pomme|Confiture|Cranberry séchée|Datte|Miel|Noisette|Noix|Noix de cajou|Noix de coco râpée|Noix de pécan|Pâte à tartiner|Pépites de chocolat|Pistache|Poudre d'amande|Pralin|Pruneau|Raisin sec|Sirop d'érable|Spéculoos|Sucre en poudre|Sucre glace|Sucre vanillé",
    "condiments-huiles-epices": "Ail semoule|Aneth|Anis étoilé|Basilic|Bouillon de bœuf|Bouillon de légumes|Bouillon de volaille|Cannelle|Câpre|Cardamome|Ciboulette|Clou de girofle|Coriandre|Cumin|Curcuma|Curry|Estragon|Fleur de sel|Fond de veau|Gingembre frais|Gingembre moulu|Graine de chia|Graine de courge|Graine de lin|Graine de pavot|Graine de sésame|Graine de tournesol|Harissa|Herbes de Provence|Huile de colza|Huile de noix|Huile de sésame|Huile de tournesol|Huile d'olive|Ketchup|Laurier|Mayonnaise|Menthe|Moutarde|Moutarde à l'ancienne|Muscade|Origan|Paprika|Paprika fumé|Persil|Piment de Cayenne|Piment d'Espelette|Poivre blanc|Poivre noir|Romarin|Sauce barbecue|Sauce soja|Sauce teriyaki|Sauce Worcestershire|Sel|Sirop de grenadine|Sriracha|Tabasco|Tapenade|Thym|Vinaigre balsamique|Vinaigre de cidre|Vinaigre de vin|Pesto",
    surgeles: "Brocoli surgelé|Cabillaud surgelé|Crevette surgelée|Épinards surgelés|Frites surgelées|Framboise surgelée|Fruits rouges surgelés|Glace à la vanille|Haricot vert surgelé|Mélange de légumes surgelés|Myrtille surgelée|Petits pois surgelés|Poisson pané|Pommes noisette|Purée surgelée|Saumon surgelé|Sorbet|Viande hachée surgelée",
    boissons: "Bière|Café|Café soluble|Cidre|Cognac|Cola|Eau de coco|Eau gazeuse|Eau plate|Infusion|Jus d'orange|Jus de pomme|Limonade|Porto|Rhum|Thé|Vin blanc|Vin rouge",
    autres: "Agar-agar|Bicarbonate alimentaire|Colorant alimentaire|Eau de fleur d'oranger|Extrait de vanille|Gélatine|Levure boulangère|Levure chimique|Protéine végétale texturée|Substitut d'œuf"
  });
  const catalogueIngredientsInitial = Object.freeze(
    categoriesIngredients.flatMap((categorie) =>
      (catalogueInitialParCategorie[categorie.id] || "").split("|").filter(Boolean).map((nom) =>
        Object.freeze({ nom, categorie: categorie.id })
      )
    )
  );
  const difficultes = ["Facile", "Moyenne", "Difficile"];
  const typesEtapes = Object.freeze([
    { valeur: "preparation", libelle: "Préparation" },
    { valeur: "cuisson", libelle: "Cuisson" },
    { valeur: "repos", libelle: "Repos" },
    { valeur: "service", libelle: "Service" }
  ]);
  const dureeMaximaleEtapeSecondes = 7 * 24 * 60 * 60;
  const joursSemaine = [
    { cle: "lundi", libelle: "Lundi" },
    { cle: "mardi", libelle: "Mardi" },
    { cle: "mercredi", libelle: "Mercredi" },
    { cle: "jeudi", libelle: "Jeudi" },
    { cle: "vendredi", libelle: "Vendredi" },
    { cle: "samedi", libelle: "Samedi" },
    { cle: "dimanche", libelle: "Dimanche" }
  ];
  const groupesRepasMenu = [
    {
      cle: "midi",
      libelle: "Midi",
      emplacements: [
        { cle: "midi.plat", libelle: "Plat" },
        { cle: "midi.dessert", libelle: "Dessert" }
      ]
    },
    {
      cle: "soir",
      libelle: "Soir",
      emplacements: [
        { cle: "soir.plat", libelle: "Plat" },
        { cle: "soir.dessert", libelle: "Dessert" }
      ]
    },
    {
      cle: "encas",
      libelle: "En-cas",
      emplacements: [{ cle: "encas", libelle: "En-cas" }]
    }
  ];
  const emplacementsMenu = groupesRepasMenu.flatMap(
    (groupe) => groupe.emplacements
  );
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
  let debutSemaineAffichee = obtenirDebutSemaine(obtenirDateLocaleAujourdhui());
  let menusHebdomadaires = creerStockageMenusVide();
  let historique = [];
  let catalogueIngredients = { version: 1, ingredients: [] };
  const recettesSelectionneesManuellement = new Set();
  let recettesSelectionneesParMenu = new Set();
  const portionsSouhaitees = new Map();
  let prochainIdentifiant = 1;
  let idRecetteEnModification = null;
  let prochainIdentifiantIngredient = 1;
  let prochainIdentifiantCatalogue = 1;
  let prochainIdentifiantHistorique = 1;
  let prochainIdentifiantEtape = 1;
  let idRecetteHistorique = null;
  let temporisationSauvegardeBrouillon = null;
  let titreDocumentAvantImpression = null;
  let temporisationNettoyageImpression = null;
  let idRecetteFicheOuverte = null;
  let elementDeclencheurFiche = null;
  let restaurerFocusFicheALaFermeture = true;
  let dateMenuCible = null;
  let emplacementMenuCible = null;
  let elementDeclencheurSelecteurMenu = null;
  let restaurerFocusSelecteurMenuALaFermeture = true;
  let listeCoursesEstAffichee = false;

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

  function naviguerVersSectionFormulaire(identifiantSection) {
    const section = sectionsFormulaire.get(identifiantSection);

    if (!section) {
      console.error(
        "Application de recettes : la section du formulaire demandée est inconnue."
      );
      return;
    }

    const animationsReduites =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof section.scrollIntoView === "function") {
      section.scrollIntoView({
        behavior: animationsReduites ? "auto" : "smooth",
        block: "start"
      });
    }

    const titre = section.querySelector("h3[tabindex='-1']");

    if (titre && typeof titre.focus === "function") {
      try {
        titre.focus({ preventScroll: true });
      } catch (erreur) {
        titre.focus();
      }
    }
  }

  // Menu de la semaine
  function creerEmplacementMenuVide() {
    return { recetteId: null, portions: null };
  }

  function creerJourMenuVide(date) {
    return {
      date,
      midi: {
        plat: creerEmplacementMenuVide(),
        dessert: creerEmplacementMenuVide()
      },
      soir: {
        plat: creerEmplacementMenuVide(),
        dessert: creerEmplacementMenuVide()
      },
      encas: creerEmplacementMenuVide()
    };
  }

  function creerMenuSemaineVide(debutSemaine) {
    return {
      debutSemaine,
      jours: joursSemaine.map((jour, index) => ({
        ...creerJourMenuVide(ajouterJoursDateLocale(debutSemaine, index)),
        cleJour: jour.cle
      }))
    };
  }

  function creerStockageMenusVide() {
    return { version: 2, semaines: {} };
  }

  function creerDateDepuisTexteLocal(texteDate) {
    if (!dateHistoriqueEstValide(texteDate)) {
      return null;
    }

    const [annee, mois, jour] = texteDate.split("-").map(Number);
    return new Date(annee, mois - 1, jour, 12);
  }

  function formaterDateLocale(date) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0")
    ].join("-");
  }

  function ajouterJoursDateLocale(texteDate, nombreJours) {
    const date = creerDateDepuisTexteLocal(texteDate);

    if (!date) {
      return texteDate;
    }

    date.setDate(date.getDate() + nombreJours);
    return formaterDateLocale(date);
  }

  function obtenirDebutSemaine(texteDate) {
    const date = creerDateDepuisTexteLocal(texteDate) || new Date();
    const decalageLundi = (date.getDay() + 6) % 7;

    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - decalageLundi);
    return formaterDateLocale(date);
  }

  function obtenirEmplacementMenu(jour, cleEmplacement) {
    if (!jour || !emplacementsMenu.some((item) => item.cle === cleEmplacement)) {
      return null;
    }

    if (cleEmplacement === "encas") {
      return jour.encas;
    }

    const [repas, type] = cleEmplacement.split(".");
    return jour[repas] ? jour[repas][type] : null;
  }

  function definirEmplacementMenu(jour, cleEmplacement, valeur) {
    if (cleEmplacement === "encas") {
      jour.encas = valeur;
      return;
    }

    const [repas, type] = cleEmplacement.split(".");
    jour[repas][type] = valeur;
  }

  function copierEmplacementMenu(emplacement) {
    return emplacement && typeof emplacement === "object"
      ? { ...emplacement }
      : creerEmplacementMenuVide();
  }

  function copierJourMenu(jour, nouvelleDate = jour.date) {
    const copie = { ...jour, date: nouvelleDate };

    copie.midi = {
      plat: copierEmplacementMenu(obtenirEmplacementMenu(jour, "midi.plat")),
      dessert: copierEmplacementMenu(obtenirEmplacementMenu(jour, "midi.dessert"))
    };
    copie.soir = {
      plat: copierEmplacementMenu(obtenirEmplacementMenu(jour, "soir.plat")),
      dessert: copierEmplacementMenu(obtenirEmplacementMenu(jour, "soir.dessert"))
    };
    copie.encas = copierEmplacementMenu(obtenirEmplacementMenu(jour, "encas"));
    return copie;
  }

  function copierMenuSemaine(menu, nouveauDebut = menu.debutSemaine) {
    return {
      ...menu,
      debutSemaine: nouveauDebut,
      jours: joursSemaine.map((jour, index) => {
        const source = menu.jours[index] || creerJourMenuVide(
          ajouterJoursDateLocale(menu.debutSemaine, index)
        );
        const copie = copierJourMenu(
          source,
          ajouterJoursDateLocale(nouveauDebut, index)
        );
        copie.cleJour = jour.cle;
        return copie;
      })
    };
  }

  function copierStockageMenus(stockage) {
    const copie = { ...stockage, version: 2, semaines: {} };

    Object.entries(stockage.semaines || {}).forEach(([debut, semaine]) => {
      copie.semaines[debut] = copierMenuSemaine(semaine, debut);
    });
    return copie;
  }

  function obtenirPortionsParDefautRecette(recetteId) {
    const recette = recettes.find((item) => item.id === recetteId);
    return convertirNombreEntier(recette && recette.portions, 1) || 1;
  }

  function normaliserEmplacementMenu(valeur, utiliserPortionsRecette = false) {
    if (valeur === null || valeur === undefined) {
      return creerEmplacementMenuVide();
    }

    const proprietes = valeur && typeof valeur === "object" && !Array.isArray(valeur)
      ? { ...valeur }
      : {};
    const recetteId = typeof valeur === "string"
      ? valeur
      : proprietes.recetteId || proprietes.id || proprietes.recipeId || null;

    if (!identifiantRecetteEstValide(recetteId)) {
      return { ...proprietes, recetteId: null, portions: null };
    }

    const portionsEnregistrees = convertirNombreEntier(proprietes.portions, 1);
    return {
      ...proprietes,
      recetteId,
      portions: portionsEnregistrees ||
        (utiliserPortionsRecette ? obtenirPortionsParDefautRecette(recetteId) : 1)
    };
  }

  function normaliserJourMenu(jour, date) {
    const source = jour && typeof jour === "object" && !Array.isArray(jour)
      ? jour
      : {};
    const resultat = { ...source, ...creerJourMenuVide(date), date };

    emplacementsMenu.forEach((emplacement) => {
      definirEmplacementMenu(
        resultat,
        emplacement.cle,
        normaliserEmplacementMenu(obtenirEmplacementMenu(source, emplacement.cle))
      );
    });
    return resultat;
  }

  function normaliserMenuSemaineV2(semaine, debutSemaine) {
    const source = semaine && typeof semaine === "object" && !Array.isArray(semaine)
      ? semaine
      : {};
    const joursSource = Array.isArray(source.jours) ? source.jours : [];
    const menu = creerMenuSemaineVide(debutSemaine);

    menu.jours = menu.jours.map((jourVide, index) => {
      const date = jourVide.date;
      const jourSource = joursSource.find((jour) => jour && jour.date === date) ||
        joursSource[index];
      const jourNormalise = normaliserJourMenu(jourSource, date);
      jourNormalise.cleJour = joursSemaine[index].cle;
      return jourNormalise;
    });
    return { ...source, ...menu };
  }

  function migrerMenuVersion1(menuAncien) {
    const stockage = creerStockageMenusVide();
    const semaine = creerMenuSemaineVide(debutSemaineAffichee);

    joursSemaine.forEach((jour, index) => {
      const ancienJour = menuAncien[jour.cle] || {};
      definirEmplacementMenu(
        semaine.jours[index],
        "midi.plat",
        normaliserEmplacementMenu(ancienJour.midi, true)
      );
      definirEmplacementMenu(
        semaine.jours[index],
        "soir.plat",
        normaliserEmplacementMenu(ancienJour.soir, true)
      );
    });
    stockage.semaines[debutSemaineAffichee] = semaine;
    return stockage;
  }

  function chargerMenusHebdomadaires() {
    let donneesEnregistrees;

    try {
      donneesEnregistrees = localStorage.getItem(cleStockageMenuSemaine);
    } catch (erreur) {
      console.warn("Application de recettes : les menus enregistrés sont inaccessibles. Des menus vides sont utilisés.");
      return creerStockageMenusVide();
    }

    if (donneesEnregistrees === null) {
      return creerStockageMenusVide();
    }

    let donnees;

    try {
      donnees = JSON.parse(donneesEnregistrees);
    } catch (erreur) {
      console.warn("Application de recettes : les menus enregistrés sont illisibles. Des menus vides sont utilisés.");
      return creerStockageMenusVide();
    }

    if (donnees && donnees.version === 2 && donnees.semaines && typeof donnees.semaines === "object") {
      const stockage = creerStockageMenusVide();
      Object.entries(donnees.semaines).forEach(([debut, semaine]) => {
        if (obtenirDebutSemaine(debut) === debut) {
          stockage.semaines[debut] = normaliserMenuSemaineV2(semaine, debut);
        }
      });
      return stockage;
    }

    if (donnees && (donnees.version === 1 || joursSemaine.some((jour) => donnees[jour.cle]))) {
      const stockageMigre = migrerMenuVersion1(donnees);
      enregistrerMenusHebdomadaires(stockageMigre);
      return stockageMigre;
    }

    console.warn("Application de recettes : les menus enregistrés sont invalides. Des menus vides sont utilisés.");
    return creerStockageMenusVide();
  }

  function enregistrerMenusHebdomadaires(stockage) {
    try {
      localStorage.setItem(cleStockageMenuSemaine, JSON.stringify(stockage));
      return true;
    } catch (erreur) {
      console.error("Application de recettes : les menus n’ont pas pu être sauvegardés localement.");
      return false;
    }
  }

  function obtenirMenuSemaineAffichee(stockage = menusHebdomadaires) {
    if (!stockage.semaines[debutSemaineAffichee]) {
      stockage.semaines[debutSemaineAffichee] = creerMenuSemaineVide(
        debutSemaineAffichee
      );
    }

    return stockage.semaines[debutSemaineAffichee];
  }

  function obtenirJourMenu(date, stockage = menusHebdomadaires) {
    return obtenirMenuSemaineAffichee(stockage).jours.find((jour) => jour.date === date) || null;
  }

  function emplacementMenuEstValide(date, cleEmplacement) {
    return Boolean(
      dateHistoriqueEstValide(date) &&
      obtenirJourMenu(date) &&
      emplacementsMenu.some((emplacement) => emplacement.cle === cleEmplacement)
    );
  }

  function obtenirOccurrencesMenuSemaineAffichee() {
    const occurrences = [];

    obtenirMenuSemaineAffichee().jours.forEach((jour) => {
      emplacementsMenu.forEach((definition) => {
        const emplacement = obtenirEmplacementMenu(jour, definition.cle);
        const recette = recettes.find((item) => item.id === (emplacement && emplacement.recetteId));
        if (recette) {
          occurrences.push({
            recette,
            portions: convertirNombreEntier(emplacement.portions, 1) ||
              obtenirPortionsParDefautRecette(recette.id)
          });
        }
      });
    });
    return occurrences;
  }

  function actualiserSelectionProvenantDuMenu() {
    recettesSelectionneesParMenu = new Set(
      obtenirOccurrencesMenuSemaineAffichee().map((occurrence) => occurrence.recette.id)
    );
  }

  function obtenirSelectionEffective() {
    return new Set([...recettesSelectionneesManuellement, ...recettesSelectionneesParMenu]);
  }

  function obtenirOccurrencesPourCourses() {
    const occurrencesMenu = obtenirOccurrencesMenuSemaineAffichee();
    const identifiantsMenu = new Set(
      occurrencesMenu.map((occurrence) => occurrence.recette.id)
    );
    const occurrencesManuelles = recettes
      .filter((recette) =>
        recettesSelectionneesManuellement.has(recette.id) &&
        !identifiantsMenu.has(recette.id)
      )
      .map((recette) => ({
        recette,
        portions: obtenirPortionsSouhaiteesRecette(recette)
      }));
    return [...occurrencesMenu, ...occurrencesManuelles];
  }

  function actualiserApresChangementMenu() {
    actualiserSelectionProvenantDuMenu();
    afficherMenuSemaine();
    mettreAJourResumeSelection();
    afficherRecettes();
    actualiserListeCoursesSiAffichee();
  }

  function appliquerStockageMenus(stockagePropose) {
    if (!enregistrerMenusHebdomadaires(stockagePropose)) {
      afficherErreurSauvegardeMenu();
      return false;
    }

    menusHebdomadaires = stockagePropose;
    return true;
  }

  function formaterPlageSemaine() {
    const debut = creerDateDepuisTexteLocal(debutSemaineAffichee);
    const fin = creerDateDepuisTexteLocal(
      ajouterJoursDateLocale(debutSemaineAffichee, 6)
    );
    const memeAnnee = debut.getFullYear() === fin.getFullYear();
    const memeMois = memeAnnee && debut.getMonth() === fin.getMonth();
    const formatFin = new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    if (memeMois) {
      return `${debut.getDate()} – ${formatFin.format(fin)}`;
    }

    const formatDebut = new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: memeAnnee ? undefined : "numeric"
    });
    return `${formatDebut.format(debut)} – ${formatFin.format(fin)}`;
  }

  function formaterTitreJour(date) {
    const valeur = creerDateDepuisTexteLocal(date);
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long"
    }).format(valeur).toLocaleUpperCase("fr-FR");
  }

  function enregistrerPortionsEmplacement(date, cleEmplacement, valeur, champ) {
    const portions = convertirNombreEntier(valeur, 1);

    if (portions === null || !emplacementMenuEstValide(date, cleEmplacement)) {
      const emplacementActuel = obtenirEmplacementMenu(
        obtenirJourMenu(date),
        cleEmplacement
      );
      champ.value = emplacementActuel && emplacementActuel.portions
        ? emplacementActuel.portions
        : 1;
      afficherMessage("Le nombre de portions doit être un entier supérieur à zéro.", "erreur");
      return;
    }

    const stockagePropose = copierStockageMenus(menusHebdomadaires);
    const emplacement = obtenirEmplacementMenu(
      obtenirJourMenu(date, stockagePropose),
      cleEmplacement
    );
    const portionsPrecedentes = emplacement.portions;
    emplacement.portions = portions;

    if (appliquerStockageMenus(stockagePropose)) {
      actualiserListeCoursesSiAffichee();
      afficherMessage("Nombre de portions enregistré pour ce repas.", "succes");
    } else {
      champ.value = portionsPrecedentes;
    }
  }

  function obtenirLibelleCompletEmplacement(cleEmplacement) {
    const groupe = groupesRepasMenu.find((item) =>
      item.emplacements.some((emplacement) => emplacement.cle === cleEmplacement)
    );
    const emplacement = emplacementsMenu.find((item) => item.cle === cleEmplacement);

    if (!groupe || !emplacement) {
      return "Emplacement";
    }

    return cleEmplacement === "encas"
      ? groupe.libelle
      : `${groupe.libelle} — ${emplacement.libelle}`;
  }

  function creerBoutonActionEmplacement(libelle, action) {
    const bouton = document.createElement("button");
    bouton.type = "button";
    bouton.textContent = libelle;
    bouton.addEventListener("click", action);
    return bouton;
  }

  function creerEmplacementRepasMenu(jour, definition) {
    const ligne = document.createElement("section");
    const libelle = document.createElement("p");
    const emplacement = obtenirEmplacementMenu(jour, definition.cle);
    const recette = recettes.find((item) => item.id === (emplacement && emplacement.recetteId));

    ligne.className = "emplacement-menu";
    libelle.className = "libelle-emplacement-menu";
    libelle.textContent = definition.libelle;
    ligne.append(libelle);

    if (!emplacement || !emplacement.recetteId) {
      const boutonAjouter = creerBoutonActionEmplacement("+ Ajouter", () => {
        ouvrirSelecteurRecetteMenu(jour.date, definition.cle, boutonAjouter);
      });
      boutonAjouter.className = "bouton-ajouter-recette-menu";
      boutonAjouter.setAttribute(
        "aria-label",
        `Ajouter une recette à l’emplacement ${obtenirLibelleCompletEmplacement(definition.cle)} du ${formaterTitreJour(jour.date).toLowerCase()}`
      );
      ligne.append(boutonAjouter);
      return ligne;
    }

    const contenu = document.createElement("div");
    const nom = document.createElement(recette ? "button" : "p");
    const zonePortions = document.createElement("div");
    const libellePortions = document.createElement("label");
    const champPortionsMenu = document.createElement("input");
    const actions = document.createElement("details");
    const resumeActions = document.createElement("summary");
    const contenuActions = document.createElement("div");
    const idPortions = `portions-menu-${jour.date}-${definition.cle.replace(".", "-")}`;

    contenu.className = "contenu-emplacement-menu";
    nom.className = "recette-menu-semaine";
    nom.textContent = recette
      ? obtenirTexteRecette(recette.nom).trim() || "Recette"
      : "Recette introuvable";
    if (recette) {
      nom.type = "button";
      nom.addEventListener("click", () => ouvrirFicheRecette(recette.id, nom));
    }
    zonePortions.className = "portions-menu";
    libellePortions.htmlFor = idPortions;
    libellePortions.textContent = "Portions";
    champPortionsMenu.id = idPortions;
    champPortionsMenu.type = "number";
    champPortionsMenu.min = "1";
    champPortionsMenu.step = "1";
    champPortionsMenu.inputMode = "numeric";
    champPortionsMenu.value = convertirNombreEntier(emplacement.portions, 1) || 1;
    champPortionsMenu.addEventListener("change", () => {
      enregistrerPortionsEmplacement(
        jour.date,
        definition.cle,
        champPortionsMenu.value,
        champPortionsMenu
      );
    });
    zonePortions.append(libellePortions, champPortionsMenu);

    actions.className = "actions-emplacement-menu";
    resumeActions.textContent = "Actions";
    contenuActions.className = "contenu-actions-emplacement-menu";
    if (recette) {
      contenuActions.append(
        creerBoutonActionEmplacement("Voir la recette", () =>
          ouvrirFicheRecette(recette.id, resumeActions)
        )
      );
    }
    contenuActions.append(
      creerBoutonActionEmplacement("Remplacer", () =>
        ouvrirSelecteurRecetteMenu(jour.date, definition.cle, resumeActions)
      ),
      creerBoutonActionEmplacement("Copier", () =>
        transfererEmplacementMenu(jour.date, definition.cle, false)
      ),
      creerBoutonActionEmplacement("Déplacer", () =>
        transfererEmplacementMenu(jour.date, definition.cle, true)
      ),
      creerBoutonActionEmplacement("Retirer", () =>
        retirerRecetteDuMenu(jour.date, definition.cle)
      )
    );
    actions.append(resumeActions, contenuActions);
    contenu.append(nom, zonePortions, actions);
    ligne.append(contenu);
    return ligne;
  }

  function creerGroupeRepasMenu(jour, groupe) {
    const section = document.createElement("section");
    const titre = document.createElement("h4");
    section.className = "repas-menu-semaine";
    titre.textContent = groupe.libelle.toLocaleUpperCase("fr-FR");
    section.append(titre);
    groupe.emplacements.forEach((definition) => {
      section.append(creerEmplacementRepasMenu(jour, definition));
    });
    return section;
  }

  function afficherMenuSemaine() {
    const menu = obtenirMenuSemaineAffichee();
    const dateAujourdhui = obtenirDateLocaleAujourdhui();
    zoneMenuSemaine.textContent = "";
    plageDatesSemaine.textContent = formaterPlageSemaine();

    menu.jours.forEach((jour) => {
      const blocJour = document.createElement("section");
      const enteteJour = document.createElement("div");
      const titreJour = document.createElement("h3");
      const boutonCopierJour = creerBoutonActionEmplacement("Copier la journée", () =>
        copierJourneeMenu(jour.date)
      );

      blocJour.className = "jour-menu-semaine";
      blocJour.id = `jour-menu-${jour.date}`;
      blocJour.dataset.date = jour.date;
      blocJour.classList.toggle("jour-actuel", jour.date === dateAujourdhui);
      enteteJour.className = "entete-jour-menu";
      titreJour.textContent = formaterTitreJour(jour.date);
      boutonCopierJour.className = "bouton-copier-journee";
      enteteJour.append(titreJour, boutonCopierJour);
      blocJour.append(enteteJour);

      groupesRepasMenu.forEach((groupe) => {
        blocJour.append(creerGroupeRepasMenu(jour, groupe));
      });
      zoneMenuSemaine.append(blocJour);
    });
  }

  function afficherErreurSauvegardeMenu() {
    afficherMessage(
      "Impossible d’enregistrer le menu sur cet appareil. Le changement n’a pas été appliqué.",
      "erreur"
    );
  }

  function effacerMenuSemaine() {
    if (!window.confirm("Effacer tous les repas du menu de la semaine ?")) {
      return;
    }

    const stockagePropose = copierStockageMenus(menusHebdomadaires);
    stockagePropose.semaines[debutSemaineAffichee] = creerMenuSemaineVide(
      debutSemaineAffichee
    );

    if (!appliquerStockageMenus(stockagePropose)) {
      return;
    }

    actualiserApresChangementMenu();
    afficherMessage("Menu de la semaine effacé.", "succes");
  }

  function jourMenuContientRecette(jour) {
    return emplacementsMenu.some((definition) => {
      const emplacement = obtenirEmplacementMenu(jour, definition.cle);
      return Boolean(emplacement && emplacement.recetteId);
    });
  }

  function demanderChoixMenu(message, choix) {
    const reponse = window.prompt(
      `${message}\n${choix.map((item, index) => `${index + 1}. ${item.libelle}`).join("\n")}`
    );

    if (reponse === null) {
      return null;
    }

    const index = Number(reponse) - 1;
    if (!Number.isInteger(index) || !choix[index]) {
      afficherMessage("Choix invalide. Aucune modification n’a été effectuée.", "erreur");
      return null;
    }
    return choix[index];
  }

  function demanderDestinationMenu(dateSource, cleSource, exclureJourSource = false) {
    const semaine = obtenirMenuSemaineAffichee();
    const joursPossibles = semaine.jours
      .filter((jour) => !exclureJourSource || jour.date !== dateSource)
      .map((jour) => ({ valeur: jour.date, libelle: formaterTitreJour(jour.date) }));
    const jourChoisi = demanderChoixMenu("Choisissez le jour cible :", joursPossibles);

    if (!jourChoisi) {
      return null;
    }

    const emplacementChoisi = demanderChoixMenu(
      "Choisissez l’emplacement cible :",
      emplacementsMenu.map((emplacement) => ({
        valeur: emplacement.cle,
        libelle: obtenirLibelleCompletEmplacement(emplacement.cle)
      }))
    );

    if (!emplacementChoisi ||
        (jourChoisi.valeur === dateSource && emplacementChoisi.valeur === cleSource)) {
      if (emplacementChoisi) {
        afficherMessage("La source et la destination sont identiques.", "erreur");
      }
      return null;
    }
    return { date: jourChoisi.valeur, cle: emplacementChoisi.valeur };
  }

  function transfererEmplacementMenu(dateSource, cleSource, deplacer) {
    if (!emplacementMenuEstValide(dateSource, cleSource)) {
      return;
    }

    const destination = demanderDestinationMenu(dateSource, cleSource);
    if (!destination) {
      return;
    }

    const stockagePropose = copierStockageMenus(menusHebdomadaires);
    const source = obtenirEmplacementMenu(
      obtenirJourMenu(dateSource, stockagePropose),
      cleSource
    );
    const cible = obtenirEmplacementMenu(
      obtenirJourMenu(destination.date, stockagePropose),
      destination.cle
    );

    if (!source || !source.recetteId) {
      afficherMessage("La recette source n’existe plus dans le menu.", "erreur");
      return;
    }

    if (cible && cible.recetteId &&
        !window.confirm("L’emplacement cible contient déjà une recette. La remplacer ?")) {
      return;
    }

    definirEmplacementMenu(
      obtenirJourMenu(destination.date, stockagePropose),
      destination.cle,
      copierEmplacementMenu(source)
    );
    if (deplacer) {
      definirEmplacementMenu(
        obtenirJourMenu(dateSource, stockagePropose),
        cleSource,
        creerEmplacementMenuVide()
      );
    }

    if (appliquerStockageMenus(stockagePropose)) {
      actualiserApresChangementMenu();
      afficherMessage(
        deplacer ? "Recette déplacée dans le menu." : "Recette copiée dans le menu.",
        "succes"
      );
    }
  }

  function copierJourneeMenu(dateSource) {
    const menu = obtenirMenuSemaineAffichee();
    const source = menu.jours.find((jour) => jour.date === dateSource);
    const choixJours = menu.jours
      .filter((jour) => jour.date !== dateSource)
      .map((jour) => ({ valeur: jour.date, libelle: formaterTitreJour(jour.date) }));
    const choix = demanderChoixMenu("Copier cette journée vers :", choixJours);

    if (!source || !choix) {
      return;
    }

    const stockagePropose = copierStockageMenus(menusHebdomadaires);
    const cible = obtenirJourMenu(choix.valeur, stockagePropose);
    if (jourMenuContientRecette(cible) &&
        !window.confirm("La journée cible contient déjà une recette. Remplacer ses cinq emplacements ?")) {
      return;
    }

    const semaineCible = obtenirMenuSemaineAffichee(stockagePropose);
    const indexCible = semaineCible.jours.findIndex((jour) => jour.date === choix.valeur);
    semaineCible.jours[indexCible] = copierJourMenu(source, choix.valeur);
    semaineCible.jours[indexCible].cleJour = joursSemaine[indexCible].cle;

    if (appliquerStockageMenus(stockagePropose)) {
      actualiserApresChangementMenu();
      afficherMessage("Journée copiée avec ses cinq emplacements.", "succes");
    }
  }

  function dupliquerSemainePrecedente() {
    const debutPrecedent = ajouterJoursDateLocale(debutSemaineAffichee, -7);
    const source = menusHebdomadaires.semaines[debutPrecedent] ||
      creerMenuSemaineVide(debutPrecedent);
    const cible = obtenirMenuSemaineAffichee();

    if (cible.jours.some(jourMenuContientRecette) &&
        !window.confirm("La semaine affichée contient déjà des recettes. Tout remplacer par la semaine précédente ?")) {
      return;
    }

    const stockagePropose = copierStockageMenus(menusHebdomadaires);
    stockagePropose.semaines[debutSemaineAffichee] = copierMenuSemaine(
      source,
      debutSemaineAffichee
    );
    if (appliquerStockageMenus(stockagePropose)) {
      actualiserApresChangementMenu();
      afficherMessage("Semaine précédente dupliquée.", "succes");
    }
  }

  function changerSemaine(nombreJours) {
    debutSemaineAffichee = ajouterJoursDateLocale(debutSemaineAffichee, nombreJours);
    actualiserApresChangementMenu();
  }

  function revenirAujourdhui() {
    const aujourdHui = obtenirDateLocaleAujourdhui();
    debutSemaineAffichee = obtenirDebutSemaine(aujourdHui);
    actualiserApresChangementMenu();

    const jourActuel = document.getElementById(`jour-menu-${aujourdHui}`);
    if (jourActuel && window.matchMedia("(max-width: 900px)").matches) {
      jourActuel.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });
    }
  }

  function mettreAJourCategoriesSelecteurRecetteMenu() {
    const categories = [];
    const categoriesVues = new Set();

    recettes.forEach((recette) => {
      const categorie = obtenirTexteRecette(recette.categorie).trim();

      if (categorie && !categoriesVues.has(categorie)) {
        categoriesVues.add(categorie);
        categories.push(categorie);
      }
    });

    filtreCategorieRecetteMenu.textContent = "";
    const optionToutes = document.createElement("option");

    optionToutes.value = "";
    optionToutes.textContent = "Toutes les catégories";
    filtreCategorieRecetteMenu.append(optionToutes);

    categories.forEach((categorie) => {
      const option = document.createElement("option");

      option.value = categorie;
      option.textContent = categorie;
      filtreCategorieRecetteMenu.append(option);
    });
  }

  function afficherResultatsSelecteurRecetteMenu() {
    zoneResultatsRecettesMenu.textContent = "";
    const recherche = normaliserRecherche(champRechercheRecetteMenu.value);
    const categorie = filtreCategorieRecetteMenu.value;
    let resultats = recettes.filter((recette) => {
      return !categorie || recette.categorie === categorie;
    });

    if (filtreFavorisRecetteMenu.checked) {
      resultats = resultats.filter((recette) => recette.favori === true);
    }

    if (recherche) {
      resultats = resultats.filter((recette) =>
        recetteCorrespondRecherche(recette, recherche)
      );
    }

    if (resultats.length === 0) {
      const messageVide = document.createElement("p");

      messageVide.className = "aucune-recette";
      messageVide.textContent = "Aucune recette ne correspond à votre recherche.";
      zoneResultatsRecettesMenu.append(messageVide);
      return;
    }

    resultats.forEach((recette) => {
      const bouton = document.createElement("button");
      const nom = document.createElement("span");
      const categorieRecette = obtenirTexteRecette(recette.categorie).trim();
      const informations = obtenirInformationsPratiques(recette);

      bouton.type = "button";
      bouton.className = "resultat-recette-menu";
      bouton.dataset.recetteId = recette.id;
      nom.className = "resultat-recette-menu-nom";
      nom.textContent = obtenirTexteRecette(recette.nom).trim() || "Recette";
      bouton.append(nom);

      if (categorieRecette) {
        const texteCategorie = document.createElement("span");

        texteCategorie.className = "resultat-recette-menu-details";
        texteCategorie.textContent = `Catégorie : ${categorieRecette}`;
        bouton.append(texteCategorie);
      }

      if (informations.length > 0) {
        const texteInformations = document.createElement("span");

        texteInformations.className = "resultat-recette-menu-details";
        texteInformations.textContent = informations.join(" • ");
        bouton.append(texteInformations);
      }

      if (recette.favori === true) {
        const indicationFavorite = document.createElement("span");

        indicationFavorite.className = "indication-favorite";
        indicationFavorite.textContent = "Favorite";
        bouton.append(indicationFavorite);
      }

      bouton.addEventListener("click", () => {
        affecterRecetteAuMenu(bouton.dataset.recetteId);
      });
      zoneResultatsRecettesMenu.append(bouton);
    });
  }

  function nettoyerSelecteurRecetteMenu(restaurerFocus = true) {
    const declencheur = elementDeclencheurSelecteurMenu;

    dateMenuCible = null;
    emplacementMenuCible = null;
    elementDeclencheurSelecteurMenu = null;
    champRechercheRecetteMenu.value = "";
    filtreCategorieRecetteMenu.value = "";
    filtreFavorisRecetteMenu.checked = false;
    zoneResultatsRecettesMenu.textContent = "";
    selecteurRecetteMenuTitre.textContent = "";
    document.body.classList.remove("selecteur-recette-menu-ouvert");

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

  function fermerSelecteurRecetteMenu(restaurerFocus = true) {
    restaurerFocusSelecteurMenuALaFermeture = restaurerFocus;

    if (
      selecteurRecetteMenuDialogue.open &&
      typeof selecteurRecetteMenuDialogue.close === "function"
    ) {
      selecteurRecetteMenuDialogue.close();
      return;
    }

    selecteurRecetteMenuDialogue.removeAttribute("open");
    nettoyerSelecteurRecetteMenu(restaurerFocus);
    restaurerFocusSelecteurMenuALaFermeture = true;
  }

  function ouvrirSelecteurRecetteMenu(date, cleEmplacement, declencheur) {
    if (!emplacementMenuEstValide(date, cleEmplacement)) {
      console.error(
        "Application de recettes : l’emplacement du menu à modifier est invalide."
      );
      return false;
    }

    if (ficheRecetteDialogue.open) {
      fermerFicheRecette(false);
    }

    dateMenuCible = date;
    emplacementMenuCible = cleEmplacement;
    elementDeclencheurSelecteurMenu = declencheur;
    champRechercheRecetteMenu.value = "";
    filtreFavorisRecetteMenu.checked = false;
    mettreAJourCategoriesSelecteurRecetteMenu();
    filtreCategorieRecetteMenu.value = "";
    selecteurRecetteMenuTitre.textContent =
      `Choisir une recette — ${formaterTitreJour(date)}, ${obtenirLibelleCompletEmplacement(cleEmplacement)}`;
    afficherResultatsSelecteurRecetteMenu();
    document.body.classList.add("selecteur-recette-menu-ouvert");

    try {
      if (!selecteurRecetteMenuDialogue.open) {
        if (typeof selecteurRecetteMenuDialogue.showModal === "function") {
          selecteurRecetteMenuDialogue.showModal();
        } else {
          selecteurRecetteMenuDialogue.setAttribute("open", "");
        }
      }
    } catch (erreur) {
      console.error(
        "Application de recettes : le sélecteur de recettes du menu n’a pas pu être ouvert."
      );
      nettoyerSelecteurRecetteMenu(false);
      return false;
    }

    champRechercheRecetteMenu.focus();
    return true;
  }

  function affecterRecetteAuMenu(idRecette) {
    const recette = recettes.find((recetteActuelle) => recetteActuelle.id === idRecette);

    if (
      !recette ||
      !emplacementMenuEstValide(dateMenuCible, emplacementMenuCible)
    ) {
      console.error(
        "Application de recettes : la recette ou l’emplacement du menu est invalide."
      );
      return;
    }

    const emplacementActuel = obtenirEmplacementMenu(
      obtenirJourMenu(dateMenuCible),
      emplacementMenuCible
    );

    if (emplacementActuel && emplacementActuel.recetteId === recette.id) {
      fermerSelecteurRecetteMenu();
      return;
    }

    const stockagePropose = copierStockageMenus(menusHebdomadaires);
    definirEmplacementMenu(
      obtenirJourMenu(dateMenuCible, stockagePropose),
      emplacementMenuCible,
      {
        recetteId: recette.id,
        portions: obtenirPortionsParDefautRecette(recette.id)
      }
    );

    if (!appliquerStockageMenus(stockagePropose)) {
      return;
    }

    fermerSelecteurRecetteMenu(false);
    actualiserApresChangementMenu();
    afficherMessage("Recette ajoutée au menu de la semaine.", "succes");
  }

  function retirerRecetteDuMenu(date, cleEmplacement) {
    if (!emplacementMenuEstValide(date, cleEmplacement)) {
      console.error(
        "Application de recettes : l’emplacement du menu à retirer est invalide."
      );
      return;
    }

    const stockagePropose = copierStockageMenus(menusHebdomadaires);
    definirEmplacementMenu(
      obtenirJourMenu(date, stockagePropose),
      cleEmplacement,
      creerEmplacementMenuVide()
    );

    if (!appliquerStockageMenus(stockagePropose)) {
      return;
    }

    actualiserApresChangementMenu();
    afficherMessage("Recette retirée du menu de la semaine.", "succes");
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
      const recetteSnapshot = recetteEstValide(entree.recetteSnapshot)
        ? copierRecettePourHistorique(entree.recetteSnapshot)
        : null;
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
        recetteSnapshot,
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

  function restaurerRecetteDepuisHistorique(entree) {
    if (!entree || !recetteEstValide(entree.recetteSnapshot)) {
      afficherMessage(
        "Cette ancienne entrée d’historique ne contient pas de version restaurable.",
        "erreur"
      );
      return;
    }

    if (
      !window.confirm(
        `Restaurer la version historique de « ${entree.recetteSnapshot.nom} » ?`
      )
    ) {
      return;
    }

    const recetteActuelleIndex = recettes.findIndex(
      (recette) => recette.id === entree.recetteId
    );
    const identifiantsUtilises = new Set(recettes.map((recette) => recette.id));
    const identifiantSnapshot = obtenirTexteRecette(
      entree.recetteSnapshot.id
    ).trim();
    const identifiant =
      recetteActuelleIndex !== -1
        ? entree.recetteId
        : identifiantSnapshot && !identifiantsUtilises.has(identifiantSnapshot)
          ? identifiantSnapshot
          : creerIdentifiantRecette(identifiantsUtilises);
    const recetteRestauree = {
      ...copierRecetteSansAnciennesInstructions(
        copierRecettePourHistorique(entree.recetteSnapshot)
      ),
      id: identifiant,
      ingredients: obtenirIngredientsValides(entree.recetteSnapshot).map(
        (ingredient) => ({ ...ingredient })
      ),
      etapes: copierEtapes(
        obtenirEtapesUtilisablesRecette(entree.recetteSnapshot)
      )
    };
    const recettesProposees = [...recettes];

    if (recetteActuelleIndex === -1) {
      recettesProposees.push(recetteRestauree);
    } else {
      recettesProposees[recetteActuelleIndex] = recetteRestauree;
    }

    if (!appliquerRecettes(recettesProposees)) {
      return;
    }

    portionsSouhaitees.delete(identifiant);
    afficherRecettes();
    afficherMenuSemaine();
    actualiserListeCoursesSiAffichee();
    afficherHistorique();
    afficherMessage("Version historique restaurée.", "succes");
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

      if (entree.recetteSnapshot) {
        const boutonRestaurer = document.createElement("button");

        boutonRestaurer.type = "button";
        boutonRestaurer.className = "bouton-restaurer-recette";
        boutonRestaurer.textContent = "Restaurer cette version";
        boutonRestaurer.addEventListener("click", () => {
          restaurerRecetteDepuisHistorique(entree);
        });
        carte.append(boutonRestaurer);
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

  function ajouterEtapesImpression(fiche, recette) {
    const etapes = obtenirEtapesUtilisablesRecette(recette);

    if (etapes.length === 0) {
      return;
    }

    const titreSection = document.createElement("h2");
    const liste = document.createElement("ol");

    titreSection.textContent = "Étapes de la recette";
    liste.className = "liste-etapes-impression";

    etapes.forEach((etape) => {
      const element = document.createElement("li");
      const enTete = document.createElement("p");
      const instruction = document.createElement("p");
      const duree = formaterDureeEtape(etape.dureeSecondes);

      enTete.className = "entete-etape-impression";
      enTete.textContent = duree
        ? `${obtenirLibelleTypeEtape(etape.type)} · ${duree}`
        : obtenirLibelleTypeEtape(etape.type);
      instruction.className = "instruction-etape-impression";
      instruction.textContent = etape.instruction;
      element.append(enTete, instruction);
      liste.append(element);
    });

    fiche.append(titreSection, liste);
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

    const notes = obtenirTexteRecette(recette.notes);
    const conseils = obtenirTexteRecette(recette.conseils);

    ajouterEtapesImpression(fiche, recette);

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

  function ajouterEtapesFicheRecette(recette) {
    const etapes = obtenirEtapesUtilisablesRecette(recette);

    if (etapes.length === 0) {
      return;
    }

    const section = document.createElement("section");
    const titre = document.createElement("h3");
    const liste = document.createElement("ol");

    section.className = "section-fiche-recette";
    titre.textContent = "Étapes de la recette";
    liste.className = "liste-etapes-recette";

    etapes.forEach((etape) => {
      const element = document.createElement("li");
      const informations = document.createElement("div");
      const type = document.createElement("span");
      const instruction = document.createElement("p");
      const dureeFormatee = formaterDureeEtape(etape.dureeSecondes);

      informations.className = "informations-etape";
      type.className = `type-etape type-etape-${obtenirTypeEtape(etape.type)}`;
      type.textContent = obtenirLibelleTypeEtape(etape.type);
      informations.append(type);

      if (dureeFormatee) {
        const duree = document.createElement("span");

        duree.className = "duree-etape";
        duree.textContent = dureeFormatee;
        informations.append(duree);
      }

      instruction.className = "instruction-etape";
      instruction.textContent = etape.instruction;
      element.append(informations, instruction);
      liste.append(element);
    });

    section.append(titre, liste);
    ficheRecetteContenu.append(section);
  }

  function rendreFicheRecette(recette) {
    const categorie = obtenirTexteRecette(recette.categorie).trim();
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
    ajouterEtapesFicheRecette(recette);

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

    if (selecteurRecetteMenuDialogue.open) {
      fermerSelecteurRecetteMenu(false);
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

    recettesSelectionneesManuellement.forEach((idRecette) => {
      if (!identifiantsRecettes.has(idRecette)) {
        console.error(
          "Application de recettes : un identifiant de recette sélectionnée est invalide et a été retiré."
        );
        recettesSelectionneesManuellement.delete(idRecette);
      }
    });

    actualiserSelectionProvenantDuMenu();
    const nombreRecettesSelectionnees = obtenirSelectionEffective().size;
    const nombreOccurrencesMenu = obtenirOccurrencesMenuSemaineAffichee().length;

    if (nombreRecettesSelectionnees === 0) {
      resumeSelectionRecettes.textContent = "Aucune recette sélectionnée.";
      return;
    }

    const texteSelection =
      nombreRecettesSelectionnees === 1
        ? "1 recette sélectionnée"
        : `${nombreRecettesSelectionnees} recettes sélectionnées`;

    resumeSelectionRecettes.textContent =
      nombreOccurrencesMenu === 0
        ? `${texteSelection}.`
        : `${texteSelection}, avec ${nombreOccurrencesMenu} ${
            nombreOccurrencesMenu === 1 ? "occurrence incluse" : "occurrences incluses"
          } par le menu affiché.`;
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
    const estIncluseParMenu = recettesSelectionneesParMenu.has(recette.id);

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
    caseSelection.checked =
      estIncluseParMenu || recettesSelectionneesManuellement.has(recette.id);
    caseSelection.disabled = estIncluseParMenu;
    libelleSelection.htmlFor = caseSelection.id;
    libelleSelection.textContent = "Sélectionner pour la liste de courses";
    selection.append(caseSelection, libelleSelection);

    if (estIncluseParMenu) {
      const indicationMenu = document.createElement("span");

      indicationMenu.className = "indication-selection-menu";
      indicationMenu.textContent = "Incluse par le menu";
      caseSelection.setAttribute(
        "aria-label",
        "Incluse par le menu de la semaine, cette recette ne peut pas être décochée."
      );
      selection.append(indicationMenu);
    }

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
        recettesSelectionneesManuellement.delete(idRecette);
        caseSelection.checked = false;
        mettreAJourResumeSelection();
        return;
      }

      if (recettesSelectionneesParMenu.has(idRecette)) {
        caseSelection.checked = true;
        return;
      }

      if (caseSelection.checked) {
        recettesSelectionneesManuellement.add(idRecette);
      } else {
        recettesSelectionneesManuellement.delete(idRecette);
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

  function typeEtapeEstValide(type) {
    return typesEtapes.some((typeEtape) => typeEtape.valeur === type);
  }

  function obtenirTypeEtape(type) {
    return typeEtapeEstValide(type) ? type : "preparation";
  }

  function obtenirLibelleTypeEtape(type) {
    const typeTrouve = typesEtapes.find(
      (typeEtape) => typeEtape.valeur === obtenirTypeEtape(type)
    );

    return typeTrouve.libelle;
  }

  function creerIdentifiantEtape(identifiantsUtilises = new Set()) {
    let identifiant;

    do {
      try {
        identifiant =
          globalThis.crypto && typeof globalThis.crypto.randomUUID === "function"
            ? globalThis.crypto.randomUUID()
            : "";
      } catch (erreur) {
        identifiant = "";
      }

      if (!identifiant) {
        identifiant = `etape-${Date.now()}-${prochainIdentifiantEtape}`;
        prochainIdentifiantEtape += 1;
      }
    } while (identifiantsUtilises.has(identifiant));

    return identifiant;
  }

  function normaliserDureeEtape(dureeSecondes) {
    if (
      typeof dureeSecondes !== "number" ||
      !Number.isInteger(dureeSecondes) ||
      dureeSecondes <= 0 ||
      dureeSecondes > dureeMaximaleEtapeSecondes
    ) {
      return null;
    }

    return dureeSecondes;
  }

  function normaliserEtapes(etapes) {
    if (!Array.isArray(etapes)) {
      return [];
    }

    const identifiantsUtilises = new Set();
    const etapesNormalisees = [];

    etapes.forEach((etape) => {
      if (!etape || typeof etape !== "object" || Array.isArray(etape)) {
        return;
      }

      const instruction = obtenirTexteRecette(etape.instruction).trim();

      if (!instruction) {
        return;
      }

      let identifiant = obtenirTexteRecette(etape.id).trim();

      if (!identifiant || identifiantsUtilises.has(identifiant)) {
        identifiant = creerIdentifiantEtape(identifiantsUtilises);
      }

      identifiantsUtilises.add(identifiant);
      etapesNormalisees.push({
        id: identifiant,
        ordre: etapesNormalisees.length + 1,
        type: obtenirTypeEtape(etape.type),
        instruction,
        dureeSecondes: normaliserDureeEtape(etape.dureeSecondes)
      });
    });

    return etapesNormalisees;
  }

  function convertirAnciennesInstructionsEnEtapes(recette) {
    const etapes = [];
    const preparation = obtenirTexteRecette(recette.preparation);
    const cuisson = obtenirTexteRecette(recette.cuisson);
    const suffixe = identifiantRecetteEstValide(recette.id)
      ? recette.id.replace(/[^a-zA-Z0-9_-]/g, "-")
      : "recette";

    if (preparation.trim()) {
      etapes.push({
        id: `etape-ancienne-${suffixe}-preparation`,
        ordre: etapes.length + 1,
        type: "preparation",
        instruction: preparation,
        dureeSecondes: null
      });
    }

    if (cuisson.trim()) {
      etapes.push({
        id: `etape-ancienne-${suffixe}-cuisson`,
        ordre: etapes.length + 1,
        type: "cuisson",
        instruction: cuisson,
        dureeSecondes: null
      });
    }

    return etapes;
  }

  function obtenirEtapesUtilisablesRecette(recette) {
    if (Array.isArray(recette.etapes)) {
      const etapesNormalisees = normaliserEtapes(recette.etapes);

      if (etapesNormalisees.length > 0) {
        return etapesNormalisees;
      }
    }

    return convertirAnciennesInstructionsEnEtapes(recette);
  }

  function copierEtapes(etapes) {
    return etapes.map((etape) => ({ ...etape }));
  }

  function formaterDureeEtape(dureeSecondes) {
    const duree = normaliserDureeEtape(dureeSecondes);

    if (duree === null) {
      return "";
    }

    const heures = Math.floor(duree / 3600);
    const minutes = Math.floor((duree % 3600) / 60);
    const secondes = duree % 60;
    const parties = [];

    if (heures > 0) {
      parties.push(`${heures} h`);
    }

    if (minutes > 0) {
      parties.push(`${minutes} min`);
    }

    if (secondes > 0) {
      parties.push(`${secondes} s`);
    }

    return parties.join(" ");
  }

  function obtenirTexteCompletEtapes(recette) {
    return obtenirEtapesUtilisablesRecette(recette)
      .map((etape) => etape.instruction)
      .join("\n");
  }

  function copierRecettePourHistorique(recette) {
    return {
      ...recette,
      ingredients: obtenirIngredientsValides(recette).map((ingredient) => ({
        ...ingredient
      })),
      etapes: copierEtapes(obtenirEtapesUtilisablesRecette(recette))
    };
  }

  function copierRecetteSansAnciennesInstructions(recette) {
    const recetteCopiee = { ...recette };

    delete recetteCopiee.preparation;
    delete recetteCopiee.cuisson;
    return recetteCopiee;
  }

  function normaliserRecherche(texte) {
    if (typeof texte !== "string") {
      return "";
    }

    return texte
      .trim()
      .replace(/\s+/g, " ")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[œŒ]/g, "oe")
      .toLocaleLowerCase("fr");
  }

  function normaliserNomIngredient(nom) {
    return normaliserRecherche(nom).replace(/\s+/g, " ");
  }

  function categorieIngredientEstValide(categorie) {
    return categoriesIngredients.some((element) => element.id === categorie);
  }

  function obtenirLibelleCategorieIngredient(categorie) {
    const categorieTrouvee = categoriesIngredients.find(
      (element) => element.id === categorie
    );

    return categorieTrouvee ? categorieTrouvee.libelle : "À classer";
  }

  function nettoyerNomCatalogue(nom) {
    return typeof nom === "string" ? nom.trim().replace(/\s+/g, " ") : "";
  }

  function creerIdentifiantCatalogue(identifiants = new Set()) {
    let identifiant;

    do {
      identifiant =
        "ingredient-" + Date.now() + "-" + prochainIdentifiantCatalogue;
      prochainIdentifiantCatalogue += 1;
    } while (identifiants.has(identifiant));

    return identifiant;
  }

  function copierCatalogue(catalogue) {
    return {
      version: 1,
      ingredients: catalogue.ingredients.map((ingredient) => ({ ...ingredient }))
    };
  }

  function verifierCatalogueInitial() {
    const noms = new Set();
    const doublons = catalogueIngredientsInitial.filter((ingredient) => {
      const nomNormalise = normaliserNomIngredient(ingredient.nom);
      const dejaVu = noms.has(nomNormalise);
      noms.add(nomNormalise);
      return dejaVu;
    });

    if (
      catalogueIngredientsInitial.length !== 384 ||
      doublons.length > 0 ||
      catalogueIngredientsInitial.some(
        (ingredient) => !categorieIngredientEstValide(ingredient.categorie)
      )
    ) {
      console.error(
        "Application de recettes : le catalogue initial est invalide (384 entrées uniques attendues)."
      );
    }
  }

  function reparerCatalogue(brut) {
    if (!brut || typeof brut !== "object" || Array.isArray(brut) ||
      brut.version !== 1 || !Array.isArray(brut.ingredients)) {
      return null;
    }

    const ingredients = [];
    const noms = new Map();
    const identifiants = new Set();
    let reparations = 0;
    let fusions = 0;

    brut.ingredients.forEach((element) => {
      const nom = nettoyerNomCatalogue(element && element.nom);
      if (!nom) {
        reparations += 1;
        return;
      }

      const nomNormalise = normaliserNomIngredient(nom);
      const categorie = categorieIngredientEstValide(element && element.categorie)
        ? element.categorie
        : "a-classer";
      let identifiant = element && typeof element.id === "string"
        ? element.id.trim()
        : "";

      if (!identifiant || identifiants.has(identifiant)) {
        identifiant = creerIdentifiantCatalogue(identifiants);
        reparations += 1;
      }

      const existant = noms.get(nomNormalise);
      if (existant) {
        fusions += 1;
        if (existant.categorie === "a-classer" && categorie !== "a-classer") {
          existant.categorie = categorie;
        }
        return;
      }

      const ingredient = { id: identifiant, nom, categorie };
      ingredients.push(ingredient);
      noms.set(nomNormalise, ingredient);
      identifiants.add(identifiant);
    });

    if (reparations || fusions) {
      console.warn(
        "Application de recettes : catalogue réparé en mémoire (" +
          reparations + " réparation(s), " + fusions + " fusion(s))."
      );
    }
    return { version: 1, ingredients };
  }

  function completerCatalogueAvecIngredients(catalogue, ingredientsAAjouter) {
    const candidat = copierCatalogue(catalogue);
    const noms = new Set(
      candidat.ingredients.map((ingredient) => normaliserNomIngredient(ingredient.nom))
    );
    const identifiants = new Set(candidat.ingredients.map((ingredient) => ingredient.id));
    let modifie = false;

    ingredientsAAjouter.forEach((ingredient) => {
      const nom = nettoyerNomCatalogue(ingredient.nom);
      const nomNormalise = normaliserNomIngredient(nom);
      if (!nom || noms.has(nomNormalise)) {
        return;
      }
      candidat.ingredients.push({
        id: creerIdentifiantCatalogue(identifiants),
        nom,
        categorie: categorieIngredientEstValide(ingredient.categorie)
          ? ingredient.categorie
          : "a-classer"
      });
      noms.add(nomNormalise);
      modifie = true;
    });
    return { catalogue: candidat, modifie };
  }

  function ingredientsRecettesPourCatalogue() {
    return recettes.flatMap((recette) =>
      obtenirIngredientsValides(recette).map((ingredient) => ({
        nom: ingredient.nom,
        categorie: "a-classer"
      }))
    );
  }

  function enregistrerCatalogue(catalogueCandidat) {
    try {
      localStorage.setItem(
        cleStockageCatalogueIngredients,
        JSON.stringify(catalogueCandidat)
      );
      return true;
    } catch (erreur) {
      console.warn(
        "Application de recettes : le catalogue d’ingrédients n’a pas pu être sauvegardé localement."
      );
      return false;
    }
  }

  function creerCatalogueInitialAvecIdentifiants() {
    const identifiants = new Set();
    return {
      version: 1,
      ingredients: catalogueIngredientsInitial.map((ingredient) => ({
        ...ingredient,
        id: creerIdentifiantCatalogue(identifiants)
      }))
    };
  }

  function chargerCatalogueIngredients() {
    verifierCatalogueInitial();
    let donneesEnregistrees;
    try {
      donneesEnregistrees = localStorage.getItem(cleStockageCatalogueIngredients);
    } catch (erreur) {
      console.warn("Application de recettes : le catalogue d’ingrédients est inaccessible. Un catalogue de secours est utilisé.");
      return completerCatalogueAvecIngredients(
        creerCatalogueInitialAvecIdentifiants(), ingredientsRecettesPourCatalogue()
      ).catalogue;
    }

    if (donneesEnregistrees === null) {
      const candidat = completerCatalogueAvecIngredients(
        creerCatalogueInitialAvecIdentifiants(), ingredientsRecettesPourCatalogue()
      ).catalogue;
      enregistrerCatalogue(candidat);
      return candidat;
    }

    let brut;
    try {
      brut = JSON.parse(donneesEnregistrees);
    } catch (erreur) {
      console.warn("Application de recettes : le catalogue d’ingrédients est illisible. La valeur existante n’est pas écrasée.");
      return completerCatalogueAvecIngredients(
        creerCatalogueInitialAvecIdentifiants(), ingredientsRecettesPourCatalogue()
      ).catalogue;
    }

    const catalogueRepare = reparerCatalogue(brut);
    if (!catalogueRepare) {
      console.warn("Application de recettes : le catalogue d’ingrédients est invalide. La valeur existante n’est pas écrasée.");
      return completerCatalogueAvecIngredients(
        creerCatalogueInitialAvecIdentifiants(), ingredientsRecettesPourCatalogue()
      ).catalogue;
    }

    const avecInitial = completerCatalogueAvecIngredients(
      catalogueRepare, catalogueIngredientsInitial
    );
    const avecRecettes = completerCatalogueAvecIngredients(
      avecInitial.catalogue, ingredientsRecettesPourCatalogue()
    );
    if ((avecInitial.modifie || avecRecettes.modifie) &&
      !enregistrerCatalogue(avecRecettes.catalogue)) {
      console.warn("Application de recettes : les compléments du catalogue n’ont pas pu être enregistrés.");
    }
    return avecRecettes.catalogue;
  }

  function trouverIngredientCatalogueParId(identifiant) {
    return typeof identifiant === "string"
      ? catalogueIngredients.ingredients.find((ingredient) => ingredient.id === identifiant) || null
      : null;
  }

  function trouverIngredientCatalogueParNom(nom) {
    const nomNormalise = normaliserNomIngredient(nom);
    return catalogueIngredients.ingredients.find(
      (ingredient) => normaliserNomIngredient(ingredient.nom) === nomNormalise
    ) || null;
  }

  function remplirOptionsCategories(menu, inclureOptionVide = true, libelleVide = "Choisir une catégorie") {
    menu.textContent = "";
    if (inclureOptionVide) {
      const optionVide = document.createElement("option");
      optionVide.value = "";
      optionVide.textContent = libelleVide;
      menu.append(optionVide);
    }
    categoriesIngredients.forEach((categorie) => {
      const option = document.createElement("option");
      option.value = categorie.id;
      option.textContent = categorie.libelle;
      menu.append(option);
    });
  }

  function afficherCatalogueIngredients() {
    const recherche = normaliserRecherche(champRechercheCatalogueIngredients.value);
    const categorie = filtreCategorieCatalogue.value;
    const ingredients = catalogueIngredients.ingredients.filter((ingredient) =>
      (!recherche || normaliserRecherche(ingredient.nom).includes(recherche)) &&
      (!categorie || ingredient.categorie === categorie)
    ).sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
    const aClasser = catalogueIngredients.ingredients.filter(
      (ingredient) => ingredient.categorie === "a-classer"
    ).length;
    compteurCatalogueIngredients.textContent = catalogueIngredients.ingredients.length === 0
      ? "Aucun ingrédient dans le catalogue."
      : aClasser === 0
        ? catalogueIngredients.ingredients.length + " ingrédients, aucun à classer."
        : catalogueIngredients.ingredients.length + " ingrédients, dont " + aClasser + " à classer.";
    zoneListeCatalogueIngredients.textContent = "";
    if (ingredients.length === 0) {
      const message = document.createElement("p");
      message.textContent = "Aucun ingrédient ne correspond à la recherche.";
      zoneListeCatalogueIngredients.append(message);
      return;
    }
    ingredients.forEach((ingredient) => {
      const ligne = document.createElement("div");
      const nom = document.createElement("p");
      const groupe = document.createElement("div");
      const label = document.createElement("label");
      const menu = document.createElement("select");
      const idMenu = "categorie-catalogue-" + ingredient.id;
      ligne.className = "ligne-catalogue-ingredient";
      nom.textContent = ingredient.nom;
      label.htmlFor = idMenu;
      label.textContent = "Catégorie";
      menu.id = idMenu;
      remplirOptionsCategories(menu, false);
      menu.value = ingredient.categorie;
      menu.addEventListener("change", () => {
        const candidat = copierCatalogue(catalogueIngredients);
        const cible = candidat.ingredients.find((element) => element.id === ingredient.id);
        cible.categorie = menu.value;
        if (!enregistrerCatalogue(candidat)) {
          menu.value = ingredient.categorie;
          afficherMessage("Impossible d’enregistrer le catalogue d’ingrédients sur cet appareil.", "erreur");
          return;
        }
        catalogueIngredients = candidat;
        afficherCatalogueIngredients();
        actualiserListeCoursesSiAffichee();
        afficherMessage("Catégorie de l’ingrédient mise à jour.", "succes");
      });
      groupe.className = "champ-formulaire";
      groupe.append(label, menu);
      ligne.append(nom, groupe);
      zoneListeCatalogueIngredients.append(ligne);
    });
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

  function regrouperIngredientsPourCourses(occurrencesPourCourses) {
    const groupesIngredients = new Map();

    occurrencesPourCourses.forEach((occurrence) => {
      const recette = occurrence.recette;
      const coefficientPortions = calculerCoefficientPortions(
        obtenirPortionsOriginales(recette),
        occurrence.portions
      );

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
          if (!groupeExistant.ingredientId && trouverIngredientCatalogueParId(ingredient.ingredientId)) {
            groupeExistant.ingredientId = ingredient.ingredientId;
          }
          return;
        }

        groupesIngredients.set(cleGroupe, {
          nom: ingredient.nom.trim(),
          unite: ingredient.unite,
          famille,
          quantiteReference,
          ingredientId: trouverIngredientCatalogueParId(ingredient.ingredientId)
            ? ingredient.ingredientId
            : null
        });
      });
    });

    return Array.from(groupesIngredients.values()).map((groupe) => {
      if (!groupe.famille) {
        return {
          nom: groupe.nom,
          unite: groupe.unite,
          quantite: groupe.quantiteReference,
          categorie: obtenirCategoriePourCourses(groupe)
        };
      }

      const affichage = choisirUniteAffichage(
        groupe.famille,
        groupe.quantiteReference
      );

      return {
          nom: groupe.nom,
          unite: affichage.unite,
          quantite: affichage.quantite,
          categorie: obtenirCategoriePourCourses(groupe)
      };
    });
  }

  function obtenirCategoriePourCourses(ingredient) {
    const parIdentifiant = trouverIngredientCatalogueParId(ingredient.ingredientId);
    if (parIdentifiant) {
      return parIdentifiant.categorie;
    }
    const parNom = trouverIngredientCatalogueParNom(ingredient.nom);
    return parNom ? parNom.categorie : "a-classer";
  }

  function formaterQuantitePourListe(quantite) {
    const quantiteArrondie = arrondirQuantite(quantite);

    return quantiteArrondie.toLocaleString("fr-FR", {
      maximumFractionDigits: 12,
      useGrouping: false
    });
  }

  function rendreListeCourses(afficherErreurSiSelectionVide = false) {
    mettreAJourResumeSelection();
    const occurrencesPourCourses = obtenirOccurrencesPourCourses();

    zoneListeCourses.textContent = "";

    if (occurrencesPourCourses.length === 0) {
      const messageAucuneSelection = document.createElement("p");

      messageAucuneSelection.textContent = "Aucune recette sélectionnée.";
      zoneListeCourses.append(messageAucuneSelection);

      if (afficherErreurSiSelectionVide) {
        afficherMessage(
          "Sélectionnez au moins une recette avant de générer la liste de courses.",
          "erreur"
        );
      }
      return;
    }

    const groupesIngredients = regrouperIngredientsPourCourses(occurrencesPourCourses);

    if (groupesIngredients.length === 0) {
      const messageAucunIngredient = document.createElement("p");

      messageAucunIngredient.textContent =
        "Les recettes sélectionnées ne contiennent aucun ingrédient.";
      zoneListeCourses.append(messageAucunIngredient);
      return;
    }

    categoriesIngredients.forEach((categorie) => {
      const groupesCategorie = groupesIngredients.filter(
        (groupe) => groupe.categorie === categorie.id
      );
      if (groupesCategorie.length === 0) {
        return;
      }
      const section = document.createElement("section");
      const titre = document.createElement("h3");
      const liste = document.createElement("ul");
      section.className = "liste-courses-categorie";
      titre.textContent = categorie.libelle;
      groupesCategorie.forEach((groupe) => {
        const ligne = document.createElement("li");
        ligne.textContent =
          formaterQuantitePourListe(groupe.quantite) + " " +
          groupe.unite + " " + groupe.nom;
        liste.append(ligne);
      });
      section.append(titre, liste);
      zoneListeCourses.append(section);
    });
  }

  function genererListeCourses() {
    listeCoursesEstAffichee = true;
    rendreListeCourses(true);
  }

  function actualiserListeCoursesSiAffichee() {
    if (listeCoursesEstAffichee) {
      rendreListeCourses();
    }
  }

  function recetteCorrespondRecherche(recette, recherche) {
    if (!recherche) {
      return true;
    }

    if (normaliserRecherche(recette.nom).includes(recherche)) {
      return true;
    }

    if (normaliserRecherche(obtenirTexteCompletEtapes(recette)).includes(recherche)) {
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
  function actualiserAideIngredientLigne(ligne) {
    const champ = ligne.querySelector(".ingredient-nom");
    const suggestions = ligne.querySelector(".suggestions-ingredients");
    const etat = ligne.querySelector(".etat-ingredient-catalogue");
    const zoneNouveau = ligne.querySelector(".etat-nouvel-ingredient");
    const menuCategorie = ligne.querySelector(".categorie-nouvel-ingredient");
    const recherche = normaliserNomIngredient(champ.value);
    const exact = trouverIngredientCatalogueParNom(champ.value);
    const associe = trouverIngredientCatalogueParId(ligne.dataset.ingredientId);

    if (associe && normaliserNomIngredient(associe.nom) !== recherche) {
      delete ligne.dataset.ingredientId;
    }
    if (exact) {
      ligne.dataset.ingredientId = exact.id;
      etat.textContent = obtenirLibelleCategorieIngredient(exact.categorie);
      zoneNouveau.hidden = true;
    } else if (recherche) {
      etat.textContent = "Nouvel ingrédient";
      zoneNouveau.hidden = false;
    } else {
      etat.textContent = "";
      zoneNouveau.hidden = true;
    }

    suggestions.textContent = "";
    if (!recherche) {
      suggestions.hidden = true;
      return;
    }
    const correspondances = catalogueIngredients.ingredients
      .filter((ingredient) => normaliserNomIngredient(ingredient.nom).includes(recherche))
      .sort((a, b) => {
        const aCommence = normaliserNomIngredient(a.nom).startsWith(recherche);
        const bCommence = normaliserNomIngredient(b.nom).startsWith(recherche);
        return aCommence === bCommence ? a.nom.localeCompare(b.nom, "fr") : aCommence ? -1 : 1;
      })
      .slice(0, 8);
    correspondances.forEach((ingredient) => {
      const bouton = document.createElement("button");
      const categorie = document.createElement("small");
      bouton.type = "button";
      bouton.className = "suggestion-ingredient";
      bouton.textContent = ingredient.nom;
      categorie.textContent = obtenirLibelleCategorieIngredient(ingredient.categorie);
      bouton.append(categorie);
      bouton.addEventListener("click", () => {
        champ.value = ingredient.nom;
        ligne.dataset.ingredientId = ingredient.id;
        actualiserAideIngredientLigne(ligne);
        suggestions.hidden = true;
        programmerSauvegardeBrouillon();
      });
      bouton.addEventListener("keydown", (evenement) => {
        const boutons = Array.from(suggestions.querySelectorAll("button"));
        const position = boutons.indexOf(bouton);
        if (evenement.key === "ArrowDown" && boutons[position + 1]) {
          evenement.preventDefault();
          boutons[position + 1].focus();
        } else if (evenement.key === "ArrowUp") {
          evenement.preventDefault();
          if (boutons[position - 1]) {
            boutons[position - 1].focus();
          } else {
            champ.focus();
          }
        } else if (evenement.key === "Escape") {
          evenement.preventDefault();
          suggestions.hidden = true;
          champ.focus();
        }
      });
      suggestions.append(bouton);
    });
    suggestions.hidden = correspondances.length === 0;
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
    const suggestions = document.createElement("div");
    const etatCatalogue = document.createElement("small");
    const zoneNouveau = document.createElement("div");
    const labelCategorieNouvelIngredient = document.createElement("label");
    const menuCategorieNouvelIngredient = document.createElement("select");

    prochainIdentifiantIngredient += 1;
    ligne.className = "ligne-ingredient";
    groupeNom.className = "champ-formulaire groupe-nom-ingredient";
    groupeQuantite.className = "champ-formulaire";
    groupeUnite.className = "champ-formulaire";

    labelNom.htmlFor = `ingredient-nom-${identifiant}`;
    labelNom.textContent = "Nom de l’ingrédient";
    champNomIngredient.id = labelNom.htmlFor;
    champNomIngredient.type = "text";
    champNomIngredient.className = "ingredient-nom";
    champNomIngredient.setAttribute("aria-autocomplete", "list");
    suggestions.className = "suggestions-ingredients";
    suggestions.setAttribute("role", "listbox");
    suggestions.hidden = true;
    etatCatalogue.className = "etat-ingredient-catalogue";
    zoneNouveau.className = "etat-nouvel-ingredient";
    zoneNouveau.hidden = true;
    labelCategorieNouvelIngredient.htmlFor = "categorie-nouvel-ingredient-" + identifiant;
    labelCategorieNouvelIngredient.textContent = "Catégorie du nouvel ingrédient";
    menuCategorieNouvelIngredient.id = labelCategorieNouvelIngredient.htmlFor;
    menuCategorieNouvelIngredient.className = "categorie-nouvel-ingredient";
    remplirOptionsCategories(menuCategorieNouvelIngredient);

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
      if (typeof ingredient.ingredientId === "string") {
        ligne.dataset.ingredientId = ingredient.ingredientId;
      }
      if (categorieIngredientEstValide(ingredient.categorieCatalogue)) {
        menuCategorieNouvelIngredient.value = ingredient.categorieCatalogue;
      }
    }

    champNomIngredient.addEventListener("input", () => {
      actualiserAideIngredientLigne(ligne);
    });
    champNomIngredient.addEventListener("keydown", (evenement) => {
      if (evenement.key === "Escape") {
        suggestions.hidden = true;
      } else if (evenement.key === "ArrowDown") {
        const premier = suggestions.querySelector("button");
        if (premier) {
          evenement.preventDefault();
          premier.focus();
        }
      }
    });
    menuCategorieNouvelIngredient.addEventListener("change", programmerSauvegardeBrouillon);
    groupeNom.append(
      labelNom,
      champNomIngredient,
      etatCatalogue,
      suggestions,
      zoneNouveau
    );
    zoneNouveau.append(labelCategorieNouvelIngredient, menuCategorieNouvelIngredient);
    groupeQuantite.append(labelQuantite, champQuantiteIngredient);
    groupeUnite.append(labelUnite, menuUniteIngredient);
    ligne.append(
      groupeNom,
      groupeQuantite,
      groupeUnite,
      boutonSupprimerIngredient
    );
    actualiserAideIngredientLigne(ligne);

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
      unite: ligne.querySelector(".ingredient-unite").value,
      ingredientId: ligne.dataset.ingredientId || null,
      categorieCatalogue: ligne.querySelector(".categorie-nouvel-ingredient").value
    }));
  }

  function renumeroterEtapesFormulaire() {
    const lignes = Array.from(
      listeEtapesRecette.querySelectorAll(".ligne-etape-recette")
    );

    lignes.forEach((ligne, index) => {
      const numero = index + 1;
      const titre = ligne.querySelector(".titre-etape");
      const menuType = ligne.querySelector(".etape-type");
      const instruction = ligne.querySelector(".etape-instruction");
      const heures = ligne.querySelector(".etape-duree-heures");
      const minutes = ligne.querySelector(".etape-duree-minutes");

      ligne.dataset.ordre = String(numero);
      titre.textContent = `Étape ${numero}`;
      menuType.id = `etape-${numero}-type`;
      instruction.id = `etape-${numero}-instruction`;
      heures.id = `etape-${numero}-heures`;
      minutes.id = `etape-${numero}-minutes`;
      ligne.querySelector(".label-etape-type").htmlFor = menuType.id;
      ligne.querySelector(".label-etape-instruction").htmlFor = instruction.id;
      ligne.querySelector(".label-etape-heures").htmlFor = heures.id;
      ligne.querySelector(".label-etape-minutes").htmlFor = minutes.id;
      ligne.querySelector(".monter-etape").disabled = index === 0;
      ligne.querySelector(".descendre-etape").disabled = index === lignes.length - 1;
    });
  }

  function creerLigneEtape(etape = {}) {
    const ligne = document.createElement("article");
    const entete = document.createElement("div");
    const titre = document.createElement("h4");
    const champs = document.createElement("div");
    const groupeType = document.createElement("div");
    const labelType = document.createElement("label");
    const menuType = document.createElement("select");
    const groupeInstruction = document.createElement("div");
    const labelInstruction = document.createElement("label");
    const instruction = document.createElement("textarea");
    const groupeDuree = document.createElement("fieldset");
    const legendeDuree = document.createElement("legend");
    const champsDuree = document.createElement("div");
    const groupeHeures = document.createElement("div");
    const labelHeures = document.createElement("label");
    const heures = document.createElement("input");
    const groupeMinutes = document.createElement("div");
    const labelMinutes = document.createElement("label");
    const minutes = document.createElement("input");
    const actions = document.createElement("div");
    const boutonMonter = document.createElement("button");
    const boutonDescendre = document.createElement("button");
    const boutonSupprimer = document.createElement("button");
    const identifiantsUtilises = new Set(
      Array.from(listeEtapesRecette.children).map(
        (element) => element.dataset.etapeId
      )
    );
    const identifiantPropose = obtenirTexteRecette(etape.id).trim();
    const identifiant =
      identifiantPropose && !identifiantsUtilises.has(identifiantPropose)
        ? identifiantPropose
        : creerIdentifiantEtape(identifiantsUtilises);
    const duree = normaliserDureeEtape(etape.dureeSecondes);

    ligne.className = "ligne-etape-recette";
    ligne.dataset.etapeId = identifiant;
    entete.className = "entete-ligne-etape";
    titre.className = "titre-etape";
    entete.append(titre);

    champs.className = "champs-etape";
    groupeType.className = "champ-formulaire champ-type-etape";
    labelType.className = "label-etape-type";
    labelType.textContent = "Type";
    menuType.className = "etape-type";
    typesEtapes.forEach((typeEtape) => {
      const option = document.createElement("option");

      option.value = typeEtape.valeur;
      option.textContent = typeEtape.libelle;
      menuType.append(option);
    });
    menuType.value = obtenirTypeEtape(etape.type);
    groupeType.append(labelType, menuType);

    groupeInstruction.className = "champ-formulaire champ-instruction-etape";
    labelInstruction.className = "label-etape-instruction";
    labelInstruction.textContent = "Instruction";
    instruction.className = "etape-instruction";
    instruction.placeholder = "Ex. : Mélanger doucement les ingrédients…";
    instruction.value = obtenirTexteRecette(etape.instruction);
    groupeInstruction.append(labelInstruction, instruction);

    groupeDuree.className = "duree-etape-formulaire";
    legendeDuree.textContent = "Durée facultative pour le futur minuteur";
    champsDuree.className = "champs-duree-etape";
    groupeHeures.className = "champ-formulaire";
    labelHeures.className = "label-etape-heures";
    labelHeures.textContent = "Heures";
    heures.className = "etape-duree-heures";
    heures.type = "number";
    heures.min = "0";
    heures.max = "168";
    heures.step = "1";
    heures.inputMode = "numeric";
    heures.value =
      typeof etape.heures === "string"
        ? etape.heures
        : duree === null
          ? ""
          : String(Math.floor(duree / 3600));
    groupeHeures.append(labelHeures, heures);
    groupeMinutes.className = "champ-formulaire";
    labelMinutes.className = "label-etape-minutes";
    labelMinutes.textContent = "Minutes";
    minutes.className = "etape-duree-minutes";
    minutes.type = "number";
    minutes.min = "0";
    minutes.max = "59";
    minutes.step = "1";
    minutes.inputMode = "numeric";
    minutes.value =
      typeof etape.minutes === "string"
        ? etape.minutes
        : duree === null
          ? ""
          : String(Math.floor((duree % 3600) / 60));
    groupeMinutes.append(labelMinutes, minutes);
    champsDuree.append(groupeHeures, groupeMinutes);
    groupeDuree.append(legendeDuree, champsDuree);

    actions.className = "actions-etape-recette";
    boutonMonter.type = "button";
    boutonMonter.className = "monter-etape";
    boutonMonter.textContent = "Monter";
    boutonMonter.setAttribute("aria-label", "Monter cette étape");
    boutonDescendre.type = "button";
    boutonDescendre.className = "descendre-etape";
    boutonDescendre.textContent = "Descendre";
    boutonDescendre.setAttribute("aria-label", "Descendre cette étape");
    boutonSupprimer.type = "button";
    boutonSupprimer.className = "supprimer-etape";
    boutonSupprimer.textContent = "Supprimer";
    boutonSupprimer.setAttribute("aria-label", "Supprimer cette étape");
    actions.append(boutonMonter, boutonDescendre, boutonSupprimer);
    champs.append(groupeType, groupeInstruction, groupeDuree);
    ligne.append(entete, champs, actions);

    boutonMonter.addEventListener("click", () => {
      const lignePrecedente = ligne.previousElementSibling;

      if (lignePrecedente) {
        listeEtapesRecette.insertBefore(ligne, lignePrecedente);
        renumeroterEtapesFormulaire();
        programmerSauvegardeBrouillon();
        boutonMonter.focus();
      }
    });
    boutonDescendre.addEventListener("click", () => {
      const ligneSuivante = ligne.nextElementSibling;

      if (ligneSuivante) {
        listeEtapesRecette.insertBefore(ligneSuivante, ligne);
        renumeroterEtapesFormulaire();
        programmerSauvegardeBrouillon();
        boutonDescendre.focus();
      }
    });
    boutonSupprimer.addEventListener("click", () => {
      ligne.remove();
      renumeroterEtapesFormulaire();
      programmerSauvegardeBrouillon();
    });

    return ligne;
  }

  function ajouterLigneEtape(etape) {
    const ligne = creerLigneEtape(etape);

    listeEtapesRecette.append(ligne);
    renumeroterEtapesFormulaire();
    return ligne;
  }

  function reinitialiserEtapesFormulaire(etapes) {
    listeEtapesRecette.textContent = "";
    const etapesAAfficher = Array.isArray(etapes) ? etapes : [];

    if (etapesAAfficher.length === 0) {
      ajouterLigneEtape();
      return;
    }

    etapesAAfficher.forEach((etape) => ajouterLigneEtape(etape));
  }

  function collecterEtapesBrouillon() {
    return Array.from(
      listeEtapesRecette.querySelectorAll(".ligne-etape-recette")
    ).map((ligne) => ({
      id: ligne.dataset.etapeId,
      type: ligne.querySelector(".etape-type").value,
      instruction: ligne.querySelector(".etape-instruction").value,
      heures: ligne.querySelector(".etape-duree-heures").value,
      minutes: ligne.querySelector(".etape-duree-minutes").value
    }));
  }

  function lireEtapesFormulaire() {
    const etapes = [];
    const identifiantsUtilises = new Set();
    const lignes = listeEtapesRecette.querySelectorAll(".ligne-etape-recette");

    for (const ligne of lignes) {
      const champInstruction = ligne.querySelector(".etape-instruction");
      const champHeures = ligne.querySelector(".etape-duree-heures");
      const champMinutes = ligne.querySelector(".etape-duree-minutes");
      const instruction = champInstruction.value.trim();
      const heuresTexte = champHeures.value.trim();
      const minutesTexte = champMinutes.value.trim();
      const dureeEstRenseignee = heuresTexte !== "" || minutesTexte !== "";

      if (!instruction && !dureeEstRenseignee) {
        continue;
      }

      if (!instruction) {
        return {
          estValide: false,
          message: "Ajoutez une instruction à toute étape qui possède une durée.",
          champ: champInstruction
        };
      }

      let dureeSecondes = null;

      if (dureeEstRenseignee) {
        const heures = heuresTexte === "" ? 0 : Number(heuresTexte);
        const minutes = minutesTexte === "" ? 0 : Number(minutesTexte);

        if (
          !Number.isInteger(heures) ||
          !Number.isInteger(minutes) ||
          heures < 0 ||
          minutes < 0 ||
          minutes > 59
        ) {
          return {
            estValide: false,
            message: "La durée d’une étape doit utiliser des heures et minutes entières positives.",
            champ: !Number.isInteger(heures) || heures < 0 ? champHeures : champMinutes
          };
        }

        dureeSecondes = heures * 3600 + minutes * 60;

        if (
          dureeSecondes <= 0 ||
          dureeSecondes > dureeMaximaleEtapeSecondes
        ) {
          return {
            estValide: false,
            message: "La durée d’une étape doit être comprise entre 1 minute et 7 jours.",
            champ: champHeures
          };
        }
      }

      let identifiant = obtenirTexteRecette(ligne.dataset.etapeId).trim();

      if (!identifiant || identifiantsUtilises.has(identifiant)) {
        identifiant = creerIdentifiantEtape(identifiantsUtilises);
        ligne.dataset.etapeId = identifiant;
      }

      identifiantsUtilises.add(identifiant);
      etapes.push({
        id: identifiant,
        ordre: etapes.length + 1,
        type: obtenirTypeEtape(ligne.querySelector(".etape-type").value),
        instruction,
        dureeSecondes
      });
    }

    if (etapes.length === 0) {
      return {
        estValide: false,
        message: "Ajoutez au moins une étape avec une instruction.",
        champ: listeEtapesRecette.querySelector(".etape-instruction")
      };
    }

    return { estValide: true, etapes };
  }

  function formulaireEstVide() {
    const ingredients = collecterIngredientsBrouillon();
    const etapes = collecterEtapesBrouillon();

    return (
      champNom.value === "" &&
      menuCategorie.value === "" &&
      champTempsPreparation.value === "" &&
      champTempsCuisson.value === "" &&
      champPortions.value === "" &&
      menuDifficulte.value === "" &&
      champNotes.value === "" &&
      champConseils.value === "" &&
      etapes.every(
        (etape) =>
          etape.instruction === "" &&
          etape.heures === "" &&
          etape.minutes === ""
      ) &&
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
      version: 2,
      mode: idRecetteEnModification === null ? "ajout" : "modification",
      recetteId: idRecetteEnModification,
      nom: champNom.value,
      categorie: menuCategorie.value,
      tempsPreparation: champTempsPreparation.value,
      tempsCuisson: champTempsCuisson.value,
      portions: champPortions.value,
      difficulte: menuDifficulte.value,
      ingredients: collecterIngredientsBrouillon(),
      etapes: collecterEtapesBrouillon(),
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

      ingredients.push({
        nom,
        quantite,
        unite,
        ingredientId: ligne.dataset.ingredientId || null,
        categorieCatalogue: ligne.querySelector(".categorie-nouvel-ingredient").value,
        menuCategorie: ligne.querySelector(".categorie-nouvel-ingredient")
      });
    }

    return { estValide: true, ingredients };
  }

  function resoudreIngredientsFormulaire(ingredients) {
    const candidat = copierCatalogue(catalogueIngredients);
    const parNom = new Map(
      candidat.ingredients.map((ingredient) => [
        normaliserNomIngredient(ingredient.nom),
        ingredient
      ])
    );
    const identifiants = new Set(candidat.ingredients.map((ingredient) => ingredient.id));
    const nouveauxIds = new Set();
    const ingredientsResolus = [];

    for (const ingredient of ingredients) {
      const nomNormalise = normaliserNomIngredient(ingredient.nom);
      let entree = trouverIngredientCatalogueParId(ingredient.ingredientId);
      if (!entree || normaliserNomIngredient(entree.nom) !== nomNormalise) {
        entree = parNom.get(nomNormalise) || null;
      }
      if (!entree) {
        if (!categorieIngredientEstValide(ingredient.categorieCatalogue)) {
          return {
            estValide: false,
            message: "Choisissez une catégorie pour le nouvel ingrédient « " + ingredient.nom + " ».",
            champ: ingredient.menuCategorie
          };
        }
        entree = {
          id: creerIdentifiantCatalogue(identifiants),
          nom: nettoyerNomCatalogue(ingredient.nom),
          categorie: ingredient.categorieCatalogue
        };
        candidat.ingredients.push(entree);
        parNom.set(nomNormalise, entree);
        nouveauxIds.add(entree.id);
      }
      ingredientsResolus.push({
        nom: entree.nom,
        quantite: ingredient.quantite,
        unite: ingredient.unite,
        ingredientId: entree.id
      });
    }
    return {
      estValide: true,
      catalogue: candidat,
      catalogueModifie: nouveauxIds.size > 0,
      ingredients: ingredientsResolus,
      ingredientsSansNouveauxIds: ingredientsResolus.map((ingredient) =>
        nouveauxIds.has(ingredient.ingredientId)
          ? { nom: ingredient.nom, quantite: ingredient.quantite, unite: ingredient.unite }
          : ingredient
      )
    };
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

    const etapesValides =
      brouillon.version === 1
        ? typeof brouillon.preparation === "string" &&
          typeof brouillon.cuisson === "string"
        : brouillon.version === 2 &&
          Array.isArray(brouillon.etapes) &&
          brouillon.etapes.every(
            (etape) =>
              etape &&
              typeof etape === "object" &&
              typeof etape.id === "string" &&
              typeof etape.type === "string" &&
              typeof etape.instruction === "string" &&
              typeof etape.heures === "string" &&
              typeof etape.minutes === "string"
          );

    return (
      (brouillon.version === 1 || brouillon.version === 2) &&
      (brouillon.mode === "ajout" || brouillon.mode === "modification") &&
      ((brouillon.mode === "ajout" && brouillon.recetteId === null) ||
        (brouillon.mode === "modification" &&
          typeof brouillon.recetteId === "string" &&
          brouillon.recetteId.trim() !== "")) &&
      champsTexte.every((champ) => typeof brouillon[champ] === "string") &&
      ingredientsValides &&
      etapesValides
    );
  }

  function convertirEtapesPourBrouillon(etapes) {
    return etapes.map((etape) => {
      const duree = normaliserDureeEtape(etape.dureeSecondes);

      return {
        id: etape.id,
        type: obtenirTypeEtape(etape.type),
        instruction: obtenirTexteRecette(etape.instruction),
        heures: duree === null ? "" : String(Math.floor(duree / 3600)),
        minutes:
          duree === null ? "" : String(Math.floor((duree % 3600) / 60))
      };
    });
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

    if (brouillon.version === 1) {
      return {
        ...brouillon,
        version: 2,
        etapes: convertirEtapesPourBrouillon(
          convertirAnciennesInstructionsEnEtapes(brouillon)
        )
      };
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
          ...(Array.isArray(recette.etapes)
            ? { etapes: normaliserEtapes(recette.etapes) }
            : {}),
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

    if (selecteurRecetteMenuDialogue.open) {
      afficherResultatsSelecteurRecetteMenu();
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
    reinitialiserEtapesFormulaire();

    if (supprimerLeBrouillon) {
      supprimerBrouillon();
    }
  }

  function restaurerBrouillon(brouillon) {
    remplirChampsPrincipaux(brouillon);
    reinitialiserLignesIngredient(brouillon.ingredients);
    reinitialiserEtapesFormulaire(brouillon.etapes);

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
    reinitialiserEtapesFormulaire(obtenirEtapesUtilisablesRecette(recette));
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
    recettesSelectionneesManuellement.delete(idRecette);
    const menusNettoyes = copierStockageMenus(menusHebdomadaires);
    let menuModifie = false;

    Object.values(menusNettoyes.semaines).forEach((semaine) => {
      semaine.jours.forEach((jour) => {
        emplacementsMenu.forEach((definition) => {
          const emplacement = obtenirEmplacementMenu(jour, definition.cle);
          if (emplacement && emplacement.recetteId === idRecette) {
            definirEmplacementMenu(jour, definition.cle, creerEmplacementMenuVide());
            menuModifie = true;
          }
        });
      });
    });

    if (menuModifie) {
      menusHebdomadaires = menusNettoyes;
      if (!enregistrerMenusHebdomadaires(menusHebdomadaires)) {
        console.warn(
          "Application de recettes : les menus nettoyés après la suppression n’ont pas pu être sauvegardés."
        );
      }
    }

    actualiserSelectionProvenantDuMenu();
    mettreAJourResumeSelection();
    afficherRecettes();
    afficherMenuSemaine();
    afficherHistorique();
    actualiserListeCoursesSiAffichee();

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
  catalogueIngredients = chargerCatalogueIngredients();
  menusHebdomadaires = chargerMenusHebdomadaires();
  historique = chargerHistorique();
  actualiserSelectionProvenantDuMenu();

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
  remplirOptionsCategories(menuCategorieNouvelIngredientCatalogue);
  remplirOptionsCategories(filtreCategorieCatalogue, true, "Toutes les catégories");
  afficherCatalogueIngredients();
  afficherVue("vue-menu");

  boutonsNavigation.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      afficherVue(bouton.dataset.vue, true);
    });
  });

  boutonsNavigationFormulaire.forEach((bouton) => {
    bouton.addEventListener("click", () => {
      naviguerVersSectionFormulaire(bouton.dataset.sectionFormulaire);
    });
  });

  boutonNouvelleRecette.addEventListener("click", () => {
    afficherVue("vue-formulaire", true);
  });

  boutonRetourAuxRecettes.addEventListener("click", () => {
    afficherVue("vue-recettes", true);
  });

  formulaireAjoutCatalogue.addEventListener("submit", (evenement) => {
    evenement.preventDefault();
    const nom = nettoyerNomCatalogue(champNouvelIngredientCatalogue.value);
    const categorie = menuCategorieNouvelIngredientCatalogue.value;
    const existant = trouverIngredientCatalogueParNom(nom);
    if (!nom || !categorieIngredientEstValide(categorie)) {
      afficherMessage("Veuillez indiquer un ingrédient et choisir une catégorie.", "erreur");
      return;
    }
    if (existant) {
      afficherMessage(
        "Cet ingrédient existe déjà dans le catalogue sous le nom « " +
          existant.nom + " ».",
        "erreur"
      );
      return;
    }
    const candidat = copierCatalogue(catalogueIngredients);
    candidat.ingredients.push({
      id: creerIdentifiantCatalogue(new Set(candidat.ingredients.map((ingredient) => ingredient.id))),
      nom,
      categorie
    });
    if (!enregistrerCatalogue(candidat)) {
      afficherMessage("Impossible d’enregistrer le catalogue d’ingrédients sur cet appareil.", "erreur");
      return;
    }
    catalogueIngredients = candidat;
    champNouvelIngredientCatalogue.value = "";
    menuCategorieNouvelIngredientCatalogue.value = "";
    afficherCatalogueIngredients();
    afficherMessage("Ingrédient ajouté au catalogue.", "succes");
  });

  champRechercheCatalogueIngredients.addEventListener("input", afficherCatalogueIngredients);
  filtreCategorieCatalogue.addEventListener("change", afficherCatalogueIngredients);

  document.addEventListener("click", (evenement) => {
    document.querySelectorAll(".ligne-ingredient").forEach((ligne) => {
      if (!ligne.contains(evenement.target)) {
        const suggestions = ligne.querySelector(".suggestions-ingredients");
        if (suggestions) {
          suggestions.hidden = true;
        }
      }
    });
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

  boutonFermerSelecteurRecetteMenu.addEventListener("click", () => {
    fermerSelecteurRecetteMenu();
  });

  selecteurRecetteMenuDialogue.addEventListener("cancel", (evenement) => {
    evenement.preventDefault();
    fermerSelecteurRecetteMenu();
  });

  selecteurRecetteMenuDialogue.addEventListener("close", () => {
    nettoyerSelecteurRecetteMenu(restaurerFocusSelecteurMenuALaFermeture);
    restaurerFocusSelecteurMenuALaFermeture = true;
  });

  selecteurRecetteMenuDialogue.addEventListener("click", (evenement) => {
    if (evenement.target === selecteurRecetteMenuDialogue) {
      fermerSelecteurRecetteMenu();
    }
  });

  champRechercheRecetteMenu.addEventListener("input", () => {
    afficherResultatsSelecteurRecetteMenu();
  });

  filtreCategorieRecetteMenu.addEventListener("change", () => {
    afficherResultatsSelecteurRecetteMenu();
  });

  filtreFavorisRecetteMenu.addEventListener("change", () => {
    afficherResultatsSelecteurRecetteMenu();
  });

  formulaire.addEventListener("submit", (evenement) => {
    evenement.preventDefault();

    const nom = champNom.value.trim();
    const categorie = menuCategorie.value;
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

    if (!resultatInformations.estValide) {
      afficherMessage(resultatInformations.message, "erreur");
      return;
    }

    const resultatEtapes = lireEtapesFormulaire();

    if (!resultatEtapes.estValide) {
      afficherMessage(resultatEtapes.message, "erreur");

      if (resultatEtapes.champ) {
        resultatEtapes.champ.focus();
      }

      return;
    }

    const resultatIngredient = lireIngredients();

    if (!resultatIngredient.estValide) {
      afficherMessage(resultatIngredient.message, "erreur");
      return;
    }
    const resolutionIngredients = resoudreIngredientsFormulaire(
      resultatIngredient.ingredients
    );
    if (!resolutionIngredients.estValide) {
      afficherMessage(resolutionIngredients.message, "erreur");
      resolutionIngredients.champ.focus();
      return;
    }
    let echecCatalogue = false;
    if (resolutionIngredients.catalogueModifie) {
      if (enregistrerCatalogue(resolutionIngredients.catalogue)) {
        catalogueIngredients = resolutionIngredients.catalogue;
        afficherCatalogueIngredients();
      } else {
        echecCatalogue = true;
      }
    }
    const ingredientsEnregistres = echecCatalogue
      ? resolutionIngredients.ingredientsSansNouveauxIds
      : resolutionIngredients.ingredients;

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
        ...copierRecetteSansAnciennesInstructions(recette),
        nom,
        categorie,
        ingredients: ingredientsEnregistres,
        etapes: copierEtapes(resultatEtapes.etapes),
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
      afficherMessage(
        echecCatalogue
          ? "La recette a été enregistrée, mais le catalogue d’ingrédients n’a pas pu être mis à jour."
          : "Recette modifiée avec succès.",
        echecCatalogue ? "erreur" : "succes"
      );
      return;
    }

    const recette = {
      id: creerIdentifiantRecette(),
      nom,
      categorie,
      ingredients: ingredientsEnregistres,
      etapes: copierEtapes(resultatEtapes.etapes),
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
    afficherMessage(
      echecCatalogue
        ? "La recette a été enregistrée, mais le catalogue d’ingrédients n’a pas pu être mis à jour."
        : "La recette a été ajoutée.",
      echecCatalogue ? "erreur" : "succes"
    );
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

  boutonAjouterEtapeRecette.addEventListener("click", () => {
    const ligne = ajouterLigneEtape();

    programmerSauvegardeBrouillon();
    ligne.querySelector(".etape-instruction").focus();
  });

  listeEtapesRecette.addEventListener(
    "invalid",
    (evenement) => {
      if (
        evenement.target.classList.contains("etape-duree-heures") ||
        evenement.target.classList.contains("etape-duree-minutes")
      ) {
        afficherMessage(
          "Veuillez vérifier la durée facultative de chaque étape.",
          "erreur"
        );
      }
    },
    true
  );

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

  boutonSemainePrecedente.addEventListener("click", () => {
    changerSemaine(-7);
  });

  boutonSemaineSuivante.addEventListener("click", () => {
    changerSemaine(7);
  });

  boutonRevenirAujourdhui.addEventListener("click", () => {
    revenirAujourdhui();
  });

  boutonDupliquerSemainePrecedente.addEventListener("click", () => {
    dupliquerSemainePrecedente();
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
      recetteSnapshot: copierRecettePourHistorique(recette),
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
