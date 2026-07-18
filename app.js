(() => {
  console.log("Application de recettes : app.js chargé");

  const boutonTest = document.getElementById("bouton-test");
  const resultatTest = document.getElementById("resultat-test");

  if (!boutonTest || !resultatTest) {
    console.error(
      "Application de recettes : le bouton ou la zone de résultat est introuvable."
    );
    return;
  }

  boutonTest.addEventListener("click", () => {
    resultatTest.textContent = "JavaScript fonctionne correctement";
  });
})();
