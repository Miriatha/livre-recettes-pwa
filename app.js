(() => {
  console.log("Application de recettes : app.js chargé");

  const formulaire = document.getElementById("formulaire-recette");
  const champNom = document.getElementById("nom-recette");
  const menuCategorie = document.getElementById("categorie-recette");
  const zoneMessage = document.getElementById("message-formulaire");
  const zoneRecettes = document.getElementById("liste-recettes");
  const boutonPrincipal = document.getElementById("bouton-enregistrer");
  const boutonAnnuler = document.getElementById("bouton-annuler-modification");
  const champIngredientNom = document.getElementById("ingredient-nom");
  const champIngredientQuantite = document.getElementById("ingredient-quantite");
  const menuIngredientUnite = document.getElementById("ingredient-unite");

  const elementsNecessaires = [
    ["#formulaire-recette", formulaire],
    ["#nom-recette", champNom],
    ["#categorie-recette", menuCategorie],
    ["#message-formulaire", zoneMessage],
    ["#liste-recettes", zoneRecettes],
    ["#bouton-enregistrer", boutonPrincipal],
    ["#bouton-annuler-modification", boutonAnnuler],
    ["#ingredient-nom", champIngredientNom],
    ["#ingredient-quantite", champIngredientQuantite],
    ["#ingredient-unite", menuIngredientUnite]
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
      const ingredient = document.createElement("p");
      const actions = document.createElement("div");
      const boutonModifier = document.createElement("button");
      const boutonSuppression = document.createElement("button");

      carte.className = "carte-recette";
      nom.textContent = recette.nom;
      categorie.textContent = `Catégorie : ${recette.categorie}`;
      const premierIngredient = obtenirPremierIngredient(recette);

      if (premierIngredient) {
        ingredient.className = "ingredient-recette";
        ingredient.textContent = `${premierIngredient.quantite} ${premierIngredient.unite} ${premierIngredient.nom}`;
      }

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

      if (premierIngredient) {
        carte.append(ingredient);
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

  function obtenirPremierIngredient(recette) {
    if (!Array.isArray(recette.ingredients)) {
      return null;
    }

    const premierIngredient = recette.ingredients[0];

    return ingredientEstValide(premierIngredient) ? premierIngredient : null;
  }

  function lirePremierIngredient() {
    const nom = champIngredientNom.value.trim();
    const quantiteTexte = champIngredientQuantite.value.trim();
    const unite = menuIngredientUnite.value;

    if (!nom && !quantiteTexte && !unite) {
      return { estValide: true, ingredients: [] };
    }

    if (!nom || !quantiteTexte || !unite) {
      return {
        estValide: false,
        message:
          "Veuillez compléter le nom, la quantité et l’unité de l’ingrédient."
      };
    }

    const quantite = Number(quantiteTexte);

    if (!Number.isFinite(quantite) || quantite <= 0) {
      return {
        estValide: false,
        message: "La quantité de l’ingrédient doit être un nombre supérieur à zéro."
      };
    }

    return {
      estValide: true,
      ingredients: [{ nom, quantite, unite }]
    };
  }

  function viderChampsIngredient() {
    champIngredientNom.value = "";
    champIngredientQuantite.value = "";
    menuIngredientUnite.value = "";
  }

  function remplirChampsIngredient(recette) {
    const premierIngredient = obtenirPremierIngredient(recette);

    if (!premierIngredient) {
      viderChampsIngredient();
      return;
    }

    champIngredientNom.value = premierIngredient.nom;
    champIngredientQuantite.value = premierIngredient.quantite;
    menuIngredientUnite.value = premierIngredient.unite;
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
        ingredients: Array.isArray(recette.ingredients) ? recette.ingredients : []
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
    viderChampsIngredient();
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
    remplirChampsIngredient(recette);
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

    const resultatIngredient = lirePremierIngredient();

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
})();
