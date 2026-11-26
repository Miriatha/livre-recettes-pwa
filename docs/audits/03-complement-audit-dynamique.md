# Étape 03 — Complément d'audit dynamique de la version historique

Date : 26/11/2026. Référence applicative : commit `b43f829cc547fe332f89995af881068b53795106`.
Branche documentaire de départ : `origin/docs/famijote-cadrage` (`2dde862`). Travail réalisé dans le worktree isolé et la branche locale `audit/famijote-audit-dynamique`. La différence entre ces deux commits ne contient que des documents : les sources applicatives exécutées sont donc celles de la référence historique.

## Périmètre et garde-fous

Audit en lecture/exécution locale uniquement. Aucun fichier applicatif, aucune configuration Supabase et aucune branche `main` n'ont été modifiés. Aucun service payant, aucun déploiement ni aucune publication de l'application n'ont été effectués. Les seules données saisies dans le navigateur étaient synthétiques : recette « Soupe fictive de test », « Carotte fictive », 4 portions, 10 min de préparation et 20 min de cuisson. Elles ne figurent pas dans Git.

Les termes employés ci-dessous sont intentionnellement séparés :

- **Fait vérifié** : observé pendant cette session, ou produit par une commande reproduisible indiquée.
- **Hypothèse / limite** : conclusion plausible mais non démontrée par cette session.
- **Recommandation** : action à évaluer avant une évolution, pas une décision de produit ou d'architecture.
- **Non réalisé** : test absent ; il ne doit pas être interprété comme réussi.

## Environnement et traçabilité

| Élément | Fait vérifié |
|---|---|
| Système d'exécution | Codex Cloud, worktree `/workspace/famijote-audit` |
| Branche de travail | `audit/famijote-audit-dynamique`, basée sur `origin/docs/famijote-cadrage` |
| État initial | propre sur cette branche de travail |
| JavaScript | Node `v24.22.3` |
| Serveur local | Python `3.12.14`, `python3 -m http.server 4173 --bind 127.0.0.1` |
| Navigateur | Chromium `156.0.8078.79` |
| Données réelles | aucune utilisée |

Les documents `AGENTS.md`, `docs/` et `docs/audits/03-audit-statique-existant.md` étaient présents et lus avant l'audit.

## Vérifications automatiques

### Syntaxe JavaScript — fait vérifié

Commandes exécutées depuis la racine du worktree :

```sh
node --check app.js
node --check recipe-text-parser.js
node --check service-worker.js
```

Résultat : code de sortie nul pour les trois commandes, sans sortie d'erreur.

### Tests existants — fait vérifié

```sh
node tests/recipe-text-parser.test.js
```

Résultat observé : `Tests du parseur de recette texte : réussis.`

Cela couvre le parseur texte et ses cas définis dans un unique fichier de tests. Ce résultat ne couvre pas les interactions DOM, le stockage local, le menu, les courses, la cuisine guidée, le service worker ou l'accessibilité.

### Outillage de mesure — fait vérifié / non réalisé

`lighthouse` et `pa11y` ne sont pas installés ; le dépôt ne contient ni `package.json`, ni verrouillage de dépendances, ni configuration de test e2e. Aucune dépendance n'a été installée pour ne pas transformer l'audit ni engager de coût. Il n'existe donc pas de score Lighthouse, de budget Web Vitals ni de rapport automatisé axe/Pa11y à rapporter.

## Tests fonctionnels locaux

Le serveur local a servi les ressources principales avec des réponses `200`, puis `304` après rechargement. Les ressources demandées comprenaient la page, CSS, parseur, `app.js`, manifeste, image de fond, icônes et `service-worker.js`.

| Parcours | Fait vérifié | Limite utile |
|---|---|---|
| Création de recette | Le formulaire accepte la recette fictive, affiche une validation positive et une carte de recette. | Une première tentative sans catégorie de nouvel ingrédient est refusée avec le message demandant cette catégorie ; la validation est donc effective. |
| Recherche, catégorie et favori | La fiche affiche les informations saisies ; le bouton bascule vers « Retirer des favoris ». | Les combinaisons de filtres et de gros catalogues n'ont pas été mesurées. |
| Portions | Le passage de 4 à 8 portions affiche `1000 g Carotte fictive` au lieu de `500 g`. | Un seul ingrédient/unité a été couvert. |
| Cuisine guidée | L'étape fictive est affichée ; le minuteur 20 min passe de `20:00` à `19:55` après environ 2,2 s ; l'action quitter/conserver propose ensuite une reprise. | Fin de minuteur, son, Wake Lock et arrière-plan mobile non vérifiés. |
| Menu hebdomadaire | La recette est sélectionnable pour lundi midi et apparaît avec ses portions et l'action de lancement. | Copie de journée, duplication de semaine et suppression ne sont pas exercées afin d'éviter des manipulations inutiles. |
| Courses | La génération affiche « Fruits et légumes » puis `500 g Carotte fictive`. | Agrégation de plusieurs recettes, coches et impression non couvertes. |
| Persistance locale | Après rechargement, la recette, le menu et l'encart de reprise de cuisine sont toujours présents. | Quota, corruption, concurrence inter-onglets, import/export et rollback non testés. |

Un incident d'automatisation est également factuel : cliquer plusieurs éléments d'une fiche qui se rerendait a détaché le nœud ciblé par l'outil de test. Une observation fraîche puis les clics séparés ont permis de poursuivre. Ce n'est pas une anomalie applicative établie.

## Ergonomie et accessibilité

### Ordinateur — faits vérifiés

La PWA a été examinée dans une fenêtre Chromium de 1200 × 864 px. La navigation latérale, la zone de reprise, les boutons de semaine et les deux premières cartes de jours étaient visibles sans chevauchement dans la zone initiale. Les libellés des contrôles parcourus sont explicites dans l'arbre d'accessibilité (par exemple, ajout d'une recette à un créneau daté, portions, lancement, recherche et fermeture des dialogues).

La navigation à la souris et le remplissage de formulaire ont fonctionné. Dans les sources, des styles `:focus-visible`, une bordure de focus de 3 px et plusieurs attributs `aria-live`, `aria-label` et `aria-labelledby` sont présents ; ils constituent un point favorable, pas une conformité démontrée.

### Simulation mobile — non réalisée

La simulation responsive réelle n'a pas pu être menée : les DevTools Chromium sont explicitement bloqués par la politique de l'environnement (« DevTools not allowed on this page »), et l'interface d'automatisation disponible ne fournit pas de réglage de viewport. Une tentative de redimensionnement à la fenêtre n'a pas abouti à une largeur mobile mesurable. Les règles CSS `@media (max-width: 900px)`, `@media (max-width: 40rem)` et `@media (max-width: 30rem)` existent, mais leur présence est une vérification statique, non un test mobile.

### Accessibilité — non réalisée / recommandations

Non réalisés : parcours intégral clavier (Tab, ordre, piège et retour de focus des dialogues), lecteur d'écran, zoom 200–400 %, contraste calculé, préférences de mouvement et audit automatisé WCAG.

Recommandations : valider ces parcours sur clavier et lecteur d'écran avant V1, puis ajouter axe/Pa11y ou équivalent dans une CI. Tester séparément les dialogues, annonces de confirmation, minuteur et formulaires denses sur un iPhone réel et un Android réel.

## PWA, cache et hors connexion

### Faits vérifiés

Le navigateur a chargé le manifeste, les icônes et `service-worker.js`. Après un rechargement connecté, le serveur HTTP local a été arrêté volontairement ; `curl` ne pouvait alors plus joindre `127.0.0.1:4173`. Un nouveau rechargement de l'onglet déjà visité a néanmoins rendu l'application, le menu et les données fictives : le parcours hors connexion du shell déjà mis en cache fonctionne dans Chromium local.

La lecture de `service-worker.js` confirme un précache des ressources essentielles, un cache `livre-recettes-static-v2`, une stratégie réseau puis cache pour les navigations et cache puis actualisation pour les ressources statiques. Le code client prévoit également une invitation à appliquer une mise à jour par `SKIP_WAITING`.

### Limites et tests non réalisés

La mise à jour contrôlée entre deux versions de service worker n'a pas été simulée, car elle demanderait de modifier/servir une nouvelle version des fichiers applicatifs. Pas de test d'installation via le navigateur, d'éviction de cache, de perte de cache, de reconnexion après modification, ni d'iPhone/Safari réel. Le fonctionnement hors connexion ne garantit donc pas encore le scénario de mise à jour ou le comportement iOS.

### Recommandations

Préparer un scénario de recette PWA reproductible : première visite, installation, passage hors ligne, rechargement, nouvelle version, invitation explicite, application de la mise à jour et retour à l'état cohérent. Harmoniser également la documentation PWA et la version de cache avant toute évolution publique.

## Performances et maintenabilité

### Faits vérifiés

| Sujet | Observation |
|---|---|
| Taille non compressée des sources principales | `app.js` 277 368 octets, `style.css` 46 660, `index.html` 27 595, parseur 26 445 ; total de ces fichiers et PWA/manifest : 382 327 octets. |
| Ressource la plus lourde recensée | `assets/images/fond-oliviers.webp` : 212 768 octets. |
| Organisation du code | `app.js` reste un monolithe de 8 408 lignes ; l'extraction par expression régulière relève 269 déclarations `function` en début de ligne et 418 occurrences liées aux fonctions/événements/sérialisation recherchées. |
| Partie déjà isolée | `recipe-text-parser.js` est séparé et son test Node passe. |
| Dépendances/outillage | aucune dépendance npm ni script de projet déclarés dans l'arbre audité. |

### Hypothèses prudentes

L'application semble utilisable avec le petit jeu de données de cette session. Il serait imprudent d'en déduire un bon temps de chargement sur réseau mobile, une fluidité garantie avec un catalogue conséquent ou une absence de fuite mémoire : aucune métrique de performance instrumentée ni aucun profil de CPU/mémoire n'a été produit. Le couplage de l'état, de la persistance, du rendu, des gestionnaires DOM et des règles métier dans `app.js` augmente vraisemblablement le coût et le risque d'une modification localisée.

### Recommandations

- Établir d'abord des mesures réelles sur profil mobile bridé (LCP, INP, CLS, taille transférée, mémoire) et un jeu de données synthétique plus volumineux.
- Définir des contrats de données et des tests de référence avant d'extraire les domaines recettes, planning, courses, cuisine guidée et persistance.
- Garder le parseur comme module indépendant ; compléter ses tests par les formats réellement attendus avant toute reprise.
- Introduire progressivement un linting, des tests DOM/e2e et une CI seulement après validation du socle cible, sans imposer de framework dans cet audit.

## Refactorisation progressive ou nouveau socle modulaire

| Option | Atouts | Risques / conditions | Avis issu des preuves disponibles |
|---|---|---|---|
| Refactorisation progressive | Conserve l'interface historique, le stockage local et les comportements déjà exercés ; limite le changement initial. | Le monolithe de 8 408 lignes rend les frontières difficiles à extraire ; chaque extraction doit être protégée par des tests de non-régression et des contrats de données. | Pertinente pour corriger/figer la référence et extraire le parseur ou des adaptateurs, mais peu attractive comme unique stratégie d'évolution majeure. |
| Nouveau socle modulaire | Permet de séparer les domaines, le rendu, le stockage, les tests et la PWA dès le départ ; facilite une future synchronisation multi-foyers. | Risque de perdre des règles implicites visibles seulement dans l'historique ; coût initial et nécessité d'une recette comparative systématique. | Préférence conditionnelle pour l'évolution V1, sur branche isolée, avec reprise sélective et tests de référence ; ce n'est pas l'autorisation de réécrire immédiatement. |

**Recommandation** : conserver la version historique comme oracle fonctionnel, construire un inventaire de parcours et de formats, puis décider au jalon V1. Une reconstruction ne doit démarrer qu'après la validation du périmètre et un plan de migration/retour arrière. Aucun choix de framework, de base de données ou d'hébergement ne découle de ce rapport.

## Éléments candidats à la réutilisation

| Élément | État et précaution |
|---|---|
| `recipe-text-parser.js` et ses tests | Le meilleur candidat direct : module séparé et testé ; élargir les cas de référence avant migration. |
| Modèles/règles de recettes, portions, menu et courses | Comportements exercés localement ; reprendre sous forme de contrats et tests, pas par copier-coller du monolithe. |
| Formats de persistance et import/export | À inventorier et versionner avant changement ; robustesse quota/corruption/concurrence non démontrée. |
| Stratégie PWA de base | Le précache et le rechargement hors ligne ont fonctionné localement ; reprendre le principe, puis valider les mises à jour et iOS. |
| Vocabulaire, navigation et direction visuelle | Utilisables comme référence produit/UX ; responsive et accessibilité mobile doivent être vérifiés sur appareils. |

## Conclusion et suite proposée

Les vérifications dynamiques minimales demandées sont positives pour le parseur, les parcours clés avec données fictives et le rechargement hors connexion Chromium. Elles ne suffisent pas à certifier l'accessibilité, la performance, la responsivité mobile ni la migration de données. Les points non réalisés ci-dessus restent des travaux explicites à planifier avant une décision V1.

La modification proposée à GitHub est strictement documentaire : ajout de ce fichier dans `docs/audits/`, sans changement de code applicatif, Supabase ou `main`. Retour arrière : retirer ce seul ajout documentaire de la branche de proposition.
