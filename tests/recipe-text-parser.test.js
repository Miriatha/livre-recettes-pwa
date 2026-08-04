"use strict";

const assert = require("node:assert/strict");
const {
  parseRecipeText,
  parseIngredientLine,
  parseDurationMinutes
} = require("../recipe-text-parser.js");

const availableUnits = [
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
const catalog = [
  { id: "ingredient-abricot", nom: "Abricot" },
  { id: "ingredient-sel", nom: "Sel" }
];
const options = { availableUnits, catalog };

function verifierExempleClassique() {
  const resultat = parseRecipeText(`Gâteau au yaourt

Pour 6 personnes
Préparation : 10 min
Cuisson : 30 min

Ingrédients
1 pot de yaourt
2 pots de sucre
3 pots de farine
3 œufs
1 sachet de levure chimique

Préparation
1. Mélanger le yaourt et les œufs.
2. Ajouter le sucre et la farine.
3. Incorporer la levure.
4. Cuire 30 minutes à 180 °C.`, options);

  assert.equal(resultat.title, "Gâteau au yaourt");
  assert.equal(resultat.portions, 6);
  assert.equal(resultat.preparationTimeMinutes, 10);
  assert.equal(resultat.cookingTimeMinutes, 30);
  assert.equal(resultat.ingredients.length, 5);
  assert.equal(resultat.steps.length, 4);
  assert.equal(resultat.steps[3].dureeSecondes, 1800);
  assert.match(resultat.steps[3].instruction, /180 °C/);
}

function verifierDetectionSansSections() {
  const resultat = parseRecipeText(`Pâte à crêpes
250 g farine
4 oeufs
50 cl lait
1 pincée sel

Mélanger la farine et les œufs.
Ajouter progressivement le lait.
Laisser reposer 1 heure.`, options);

  assert.equal(resultat.title, "Pâte à crêpes");
  assert.equal(resultat.ingredients.length, 4);
  assert.equal(resultat.steps.length, 3);
  assert.equal(resultat.steps[2].type, "repos");
  assert.equal(resultat.steps[2].dureeSecondes, 3600);
  assert.ok(resultat.warnings.some((message) => message.includes("bloc probable")));
}

function verifierIngredientsSansQuantite() {
  const resultat = parseRecipeText(`Salade de tomates

Tomates
Mozzarella
Basilic
Huile d’olive
Sel et poivre

Couper les tomates et la mozzarella.
Ajouter le basilic.
Assaisonner selon le goût.`, options);

  assert.equal(resultat.ingredients.length, 5);
  assert.ok(resultat.ingredients.every((ingredient) => ingredient.quantity === null));
  assert.ok(resultat.ingredients.every((ingredient) => ingredient.unit === null));
  assert.equal(resultat.steps.length, 3);
}

function verifierPlages() {
  const resultat = parseRecipeText(`Pommes rôties

4 pommes
20 à 25 g de beurre
Sucre au goût

Cuire 20 à 25 minutes à 180 °C.`, options);
  const beurre = resultat.ingredients[1];

  assert.equal(beurre.rawQuantity, "20 à 25");
  assert.equal(beurre.quantity, null);
  assert.equal(beurre.unit, "g");
  assert.equal(resultat.steps[0].dureeSecondes, null);
  assert.match(resultat.steps[0].instruction, /180 °C/);
  assert.ok(resultat.warnings.some((message) => message.includes("plage")));
}

function verifierFormatsDeQuantitesEtCatalogue() {
  assert.equal(parseIngredientLine("1/2 litre de lait", options).quantity, 0.5);
  assert.equal(parseIngredientLine("1,5 kg de pommes", options).quantity, 1.5);
  assert.equal(parseIngredientLine("½ l de lait", options).quantity, 0.5);
  assert.equal(parseIngredientLine("3 c. à soupe d’huile", options).unit, "cuillère à soupe");
  assert.equal(parseIngredientLine("une pincée de sel", options).quantity, 1);
  assert.equal(parseIngredientLine("une pincée de sel", options).unit, "pincée");
  const lot = parseIngredientLine("2 x 400 g de tomates concassées", options);
  assert.equal(lot.rawQuantity, "2 x 400");
  assert.equal(lot.quantity, null);
  assert.equal(lot.unit, "g");
  assert.equal(lot.name, "tomates concassées");
  const feuilles = parseIngredientLine("Quelques feuilles de basilic", options);
  assert.equal(feuilles.quantity, null);
  assert.equal(feuilles.unknownUnit, true);
  assert.equal(feuilles.name, "feuilles de basilic");
  const connu = parseIngredientLine("2 pièces Abricot", options);
  assert.equal(connu.ingredientId, "ingredient-abricot");
  assert.equal(connu.name, "Abricot");
}

function verifierMetadonneesEtDurees() {
  const resultat = parseRecipeText(`Titre : Brioche
Nombre de portions : 8
Difficulté : moyenne
Préparation : 00:45
Cuisson : 1 h 30
Temps de repos : 2 heures 15 minutes
Temps total : 4 h

Ingrédients
500 g de farine

Repos
Laisser lever 1h30.
Service
Servir.`, options);

  assert.equal(resultat.title, "Brioche");
  assert.equal(resultat.portions, 8);
  assert.equal(resultat.difficulty, "Moyenne");
  assert.equal(resultat.preparationTimeMinutes, 45);
  assert.equal(resultat.cookingTimeMinutes, 90);
  assert.equal(resultat.restTimeMinutes, 135);
  assert.equal(resultat.totalTimeMinutes, 240);
  assert.equal(resultat.steps[0].type, "repos");
  assert.equal(resultat.steps[0].dureeSecondes, 5400);
  assert.equal(resultat.steps[1].type, "service");
  assert.equal(parseDurationMinutes("1 h 30").minutes, 90);
  assert.equal(parseDurationMinutes("1h30 min").minutes, 90);
}

function verifierTitreAbsentUniteInconnueEtParasites() {
  const resultat = parseRecipeText(`INGRÉDIENTS :
2 bouquets de persil
Sel

Publicité
https://exemple.test/recette

INSTRUCTIONS :
1) Mélanger le persil et le sel.`, options);

  assert.equal(resultat.title, "");
  assert.equal(resultat.portions, null);
  assert.equal(resultat.ingredients.length, 2);
  assert.equal(resultat.ingredients[0].unknownUnit, true);
  assert.match(resultat.ingredients[0].name, /bouquets de persil/i);
  assert.equal(resultat.steps.length, 1);
  assert.ok(resultat.warnings.some((message) => message.includes("Titre non détecté")));
  assert.ok(resultat.warnings.some((message) => message.includes("unité")));
  assert.ok(resultat.steps.every((etape) => !etape.instruction.includes("Publicité")));
}

function verifierTexteNonExploitableEtLimites() {
  const nonRecette = parseRecipeText("Bonjour\n\nCeci est une simple note.", options);
  assert.equal(nonRecette.usable, false);

  const nombreusesLignes = Array.from(
    { length: 305 },
    (_, index) => `${index + 1} g ingrédient ${index + 1}`
  ).join("\n");
  const limite = parseRecipeText(
    `Recette limitée\n\nIngrédients\n${nombreusesLignes}\n\nPréparation\nMélanger.`,
    options
  );
  assert.equal(limite.ingredients.length, 300);
  assert.ok(limite.warnings.some((message) => message.includes("300 premiers")));
}

function verifierAbsenceDinventionEtSecurite() {
  const sansPortions = parseRecipeText("Titre : Soupe\n\nIngrédients\nSel\n\nPréparation\nMélanger.", options);
  assert.equal(sansPortions.portions, null);
  assert.equal(sansPortions.difficulty, null);
  assert.throws(() => parseRecipeText("   ", options), { code: "EMPTY_TEXT" });
  assert.throws(
    () => parseRecipeText("x".repeat(100001), options),
    { code: "TEXT_TOO_LONG" }
  );
  const html = parseRecipeText("Titre : <img src=x onerror=alert(1)>\n\nPréparation\nMélanger.", options);
  assert.equal(html.title, "<img src=x onerror=alert(1)>");
}

verifierExempleClassique();
verifierDetectionSansSections();
verifierIngredientsSansQuantite();
verifierPlages();
verifierFormatsDeQuantitesEtCatalogue();
verifierMetadonneesEtDurees();
verifierTitreAbsentUniteInconnueEtParasites();
verifierTexteNonExploitableEtLimites();
verifierAbsenceDinventionEtSecurite();

console.log("Tests du parseur de recette texte : réussis.");
