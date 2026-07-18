(() => {
  console.log("Application de recettes : app.js chargé");

  const formulaire = document.getElementById("formulaire-recette");
  const champNom = document.getElementById("nom-recette");
  const menuCategorie = document.getElementById("categorie-recette");
  const zoneMessage = document.getElementById("message-formulaire");
  const zoneRecettes = document.getElementById("liste-recettes");
  const boutonPrincipal = document.getElementById("bouton-enregistrer");
  const boutonAnnuler = document.getElementById("bouton-annuler-modification");
  const listeIngredients = document.getElementById("liste-ingredients");
  const boutonAjouterIngredient = document.getElementById("ajouter-ingredient");

  const elementsNecessaires = [
    ["#formulaire-recette", formulaire],
    ["#nom-recette", champNom],
    ["#categorie-recette", menuCategorie],
    ["#message-formulaire", zoneMessage],
    ["#liste-recettes", zoneRecettes],
    ["#bouton-enregistrer", boutonPrincipal],
    ["#bouton-annuler-modification", boutonAnnuler],
    ["#liste-ingredients", listeIngredients],
    ["#ajouter-ingredient", boutonAjouterIngredient]
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

    recettes.forEach((recette) => {
      const carte = document.createElement("article");
      const nom = document.createElement("h3");
      const categorie = document.createElement("p");
      const actions = document.createElement("div");
      const boutonModifier = document.createElement("button");
      const boutonSuppression = document.createElement("button");

      carte.className = "carte-recette";
      nom.textContent = recette.nom;
      categorie.textContent = `Catégorie : ${recette.categorie}`;
      const ingredients = obtenirIngredientsValides(recette);

      actions.className = "actions-recette";
      boutonModifier.type = "button";
      boutonModifier.className = "bouton-modifier";
      boutonModifier.dataset.recetteId = recette.id;
      boutonModifier.textContent = "Modifier";
      boutonSuppression.type = "button";
      boutonSuppression.className = "bouton-suppression";
      boutonSuppression.dataset.recetteId = recette.id;
      boutonSuppression.textContent = "Supprimer";

      boutonModifier.addEventListener("click", () => {
        commencerModification(boutonModifier.dataset.recetteId);
      });

      boutonSuppression.addEventListener("click", () => {
        supprimerRecette(boutonSuppression.dataset.recetteId);
      });

      actions.append(boutonModifier, boutonSuppression);
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
        ingredients: obtenirIngredientsValides(recette)
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

  function revenirAuModeAjout() {
    idRecetteEnModification = null;
    champNom.value = "";
    menuCategorie.value = "";
    reinitialiserLignesIngredient();
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

    if (!nom || !categorie) {
      afficherMessage(
        "Veuillez indiquer le nom de la recette et choisir une catégorie.",
        "erreur"
      );
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
      ingredients: resultatIngredient.ingredients
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
})();
