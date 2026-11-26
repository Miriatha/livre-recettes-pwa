# Cahier des charges initial
Statut : inventaire historique et exigences candidates ; périmètre final soumis à V1 après audit et benchmark. Les fonctionnalités historiques doivent être vérifiées et leur suppression soumise à accord.

| ID | Besoin | Priorité indicative | Critère d'acceptation |
|---|---|---|---|
| F01 | Carnet : créer, éditer, supprimer, consulter, photo, catégories, recherche, favoris | P0 | Parcours complets, confirmation des suppressions, données persistantes |
| F02 | Ingrédients structurés, unités, portions, catalogue catégorisé | P0 | Quantités ajustées, associations déterministes, inconnus explicitement classables |
| F03 | Menu hebdomadaire, accueil par défaut | P0 | Navigation jour/semaine ; midi plat/dessert, soir plat/dessert, encas ; portions par occurrence, assignation rapide, copie/déplacement, duplication |
| F04 | Courses automatiques | P0 | Agrégation par ingrédient et unité compatible, portions et toutes occurrences prises en compte, classement ; pas de fusion ambiguë |
| F05 | Recettes en étapes et cuisine guidée | P0 | Étapes ordonnées préparation/cuisson/repos/service, durée optionnelle par étape ; lancement depuis chaque emplacement du menu, portions planifiées |
| F06 | Minuteur | P0 | Un minuteur actif, pause/reprise, confirmation remplacement, persistance par horodatage, navigation et reprise de session ; alerte si supportée, aucune garantie iOS en arrière-plan |
| F07 | Export/import JSON complet et PDF recette | P0 | Validation format/version, confirmation, sauvegarde préalable, rollback ; PDF lisible, objectif une page si contenu compatible |
| F08 | PWA et fonctionnement hors ligne | P0 | Installation PC/iPhone, cache maîtrisé, mise à jour signalée, accès au cœur local ; synchronisation différée sans perte |
| F09 | Foyers privés, authentification et synchronisation | P0 | Isolation testée entre foyers, invitations, gestion explicite des conflits et accès local séparé |
| F10 | Import texte et IA photo | P0 bêta | Texte imprimé/manuscrit, capture et plusieurs images ; préremplir titre, portions, ingrédients, unités, étapes et durées, montrer les incertitudes ; validation humaine obligatoire |
| F11 | Tableau de bord admin et retours | P1 bêta | Accès admin strict, mesures agrégées/pseudonymisées, quotas, erreurs, feedback volontaire, CSV sans contenu privé |
| F12 | Aide, onboarding et démo | P1 | Découvrir l'outil avec exemples fictifs, aide contextuelle et retours accessibles |
| F13 | Import URL/PDF, traduction, distribution autonome | P2 | À évaluer, aucun engagement |

## Référence historique à contrôler
Étape 29 : catalogue annoncé de 384 ingrédients, 13 catégories ; localStorage livreRecettes.catalogueIngredients version 1 ; résolution par ID puis nom normalisé exact puis repli ; aucun rapprochement sémantique silencieux.
Étapes 30–32 : menu cinq emplacements, portions, liste de courses, étapes structurées et cuisine guidée ; étape 33 export/import complet, 33b ergonomie, 33c unités additionnelles et alerte ; 34 import texte ; OCR abandonné ; 35 PWA, 35b fond oliviers. Vérifier précisément avec code et tests ; ne pas assimiler cet historique à un audit réussi.

## Contraintes
Français d'abord, responsive PC/iPhone, interface accessible, pas de perte de données, pas de secrets côté client. Les exigences de performance, confidentialité et coût sont dans les documents associés. Modifications fonctionnelles soumises à V1.
