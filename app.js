(() => {
  console.log("Application de recettes : app.js chargé");

  const formulaire = document.getElementById("formulaire-recette");
  const champNom = document.getElementById("nom-recette");
  const menuCategorie = document.getElementById("categorie-recette");
  const zoneMessage = document.getElementById("message-formulaire");
  const zoneRecettes = document.getElementById("liste-recettes");

  if (!formulaire || !champNom || !menuCategorie || !zoneMessage || !zoneRecettes) {
    console.error(
      "Application de recettes : un élément nécessaire est introuvable dans la page."
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
      const boutonSuppression = document.createElement("button");

      carte.className = "carte-recette";
      nom.textContent = recette.nom;
      categorie.textContent = `Catégorie : ${recette.categorie}`;
      boutonSuppression.type = "button";
      boutonSuppression.className = "bouton-suppression";
      boutonSuppression.dataset.recetteId = recette.id;
      boutonSuppression.textContent = "Supprimer";

      boutonSuppression.addEventListener("click", () => {
        supprimerRecette(boutonSuppression.dataset.recetteId);
      });

      carte.append(nom, categorie, boutonSuppression);
      zoneRecettes.append(carte);
    });
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

    const recettesValides = donneesAnalysees.filter(recetteEstValide);

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

  function supprimerRecette(idRecette) {
    if (typeof idRecette !== "string" || idRecette.trim() === "") {
      console.error(
        "Application de recettes : l’identifiant de la recette à supprimer est invalide."
      );
      return;
    }

    const indexRecette = recettes.findIndex(
      (recette) => recette.id === idRecette
    );

    if (indexRecette === -1) {
      console.error(
        "Application de recettes : aucune recette ne correspond à cet identifiant."
      );
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
    afficherMessage("Recette supprimée avec succès.", "succes");
  }

  const recettes = chargerRecettes();
  let prochainIdentifiant = 1;

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

    const recette = {
      id: `recette-${Date.now()}-${prochainIdentifiant}`,
      nom,
      categorie
    };

    prochainIdentifiant += 1;
    recettes.push(recette);
    enregistrerRecettes();
    afficherRecettes();
    afficherMessage("La recette a été ajoutée.", "succes");

    champNom.value = "";
    menuCategorie.value = "";
    champNom.focus();
  });
})();
