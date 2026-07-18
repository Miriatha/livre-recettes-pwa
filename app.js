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

  const recettes = [];
  let prochainIdentifiant = 1;

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

      carte.className = "carte-recette";
      nom.textContent = recette.nom;
      categorie.textContent = `Catégorie : ${recette.categorie}`;

      carte.append(nom, categorie);
      zoneRecettes.append(carte);
    });
  }

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
    afficherRecettes();
    afficherMessage("La recette a été ajoutée.", "succes");

    champNom.value = "";
    menuCategorie.value = "";
    champNom.focus();
  });
})();
