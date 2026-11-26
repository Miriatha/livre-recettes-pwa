# Étape 03 — Audit statique de la version historique
Date : 26/11/2026. Référence auditée : main, commit b43f829cc547fe332f89995af881068b53795106. Statut : audit statique réalisé, audit dynamique et recette sur appareils à compléter. Aucune modification du code ni de Supabase.

## Méthode et périmètre
Inventaire GitHub de l'arbre du commit ; lecture des sources app.js, index.html, style.css, recipe-text-parser.js, tests/recipe-text-parser.test.js, service-worker.js, manifest.webmanifest, PWA.md. Analyse textuelle des fonctions, API et points de stockage. Consultation en lecture seule de l'inventaire Supabase (schéma public, migrations, Edge Functions, conseillers). Aucun accès aux recettes/identités réelles. Rapport public volontairement expurgé des détails de sécurité opérationnels.

## Résultats vérifiés dans les sources
| Fichier | Lignes (découpage par saut de ligne, ligne terminale comprise) |
|---|---:|
| app.js | 8408 |
| style.css | 2734 |
| index.html | 574 |
| recipe-text-parser.js | 775 |
| tests/recipe-text-parser.test.js | 233 |
| service-worker.js | 152 |
| manifest.webmanifest | 33 |
| Total | 12909 |

app.js : fonction englobante, 273 déclarations de fonctions repérées par analyse textuelle ; références DOM, état, persistance, navigation et règles métier dans le même fichier. Aucun package.json, lockfile, workflow CI ni suite e2e dans l'arbre audité. Parseur texte déjà séparé et exportable vers Node ; suite existante de neuf fonctions de vérification (un seul fichier, pas neuf suites indépendantes). Tests de parsing, limites, absence d'invention de métadonnées et conservation littérale d'une chaîne HTML. Aucun test exécuté dans cette session.
- Stockage : six familles de clés locales (recettes, brouillons, menus, historique, catalogue, cuisine guidée), JSON et localStorage. Pas d'IndexedDB ni intégration Supabase repérée dans les sources applicatives inspectées. Export/import versionné, validation, limites et tentative de rollback présents. Vérifier robustesse en cas de quota, interruption, corruption et accès concurrent.
- Fonctions identifiées statiquement : recettes, filtres, favoris, menus/portions, sélecteur de recettes, courses/agrégation, historique/snapshots, fiche imprimable, catalogue, étapes, cuisine guidée/minuteur, import de texte, export/import, PWA. La présence de code ne prouve pas le fonctionnement. Photo et comportements détaillés à confirmer par tests.
- Minuteur : mécanismes de persistance, recalcul, signal audio et Wake Lock présents. Aucune garantie de fonctionnement en arrière-plan sur iOS.
- HTML : sections et dialogues nommés, navigation bureau/mobile, attributs aria-live ; points favorables mais pas de conformité accessibilité démontrée.
- DOM : 174 occurrences textContent, 177 createElement ; pas d'occurrence innerHTML, outerHTML ou document.write dans app.js. Ce constat est favorable mais ne constitue pas un audit XSS complet.
- PWA : manifest, icônes, service worker avec cache statique local, navigation réseau puis cache, ressources statiques cache puis actualisation, mise à jour par message. Risque de version mixte à tester lors d'une publication. PWA.md mentionne v1 alors que service-worker.js utilise v2. Fond olivier présent ; droits à vérifier.
- Supabase : aucune table dans public, migration ou Edge Function listée. Authentification et synchronisation applicatives non intégrées à la référence inspectée. Un avertissement du conseiller sécurité à traiter en privé ; aucun avertissement performance (non significatif sans tables). Ne pas assimiler un schéma public vide à une absence de comptes Auth, buckets ou données dans d'autres schémas. Auth, storage, permissions et configurations détaillées à vérifier avant migration.

## Risques et recommandations
| Priorité | Sujet | Action |
|---|---|---|
| Haute | Couplage UI, données, logique métier | Isoler domaines recettes, planning, courses, cuisine guidée, import, persistence |
| Haute | Couverture automatique faible hors parseur | Tests de référence et contrats des formats ; e2e et CI |
| Haute | Persistance locale et futures données multi-foyers | Adaptateur stockage, transactions/révisions, RLS et tests inter-foyers |
| Haute | Migration et conflits | Inventaire local/serveur ; préservation main ; export/rollback ; aucun écrasement |
| Haute | Import IA et coûts | Benchmark séparé, contrôle humain, quotas serveur, secret côté serveur |
| Moyenne | Cache/version PWA et iOS | Tests upgrade, offline, reconnexion, iPhone réel |
| Moyenne | Accessibilité/UX | Tests clavier, lecteurs d'écran, contrastes et responsive |
| Moyenne | Documentation et droits | Mettre à jour PWA.md, clarifier licences et fond avant diffusion |

## Arbitrage provisoire
A : refactorisation progressive du monolithe. Avantage : continuité ; inconvénient : démêler des responsabilités fortement regroupées et introduire des interfaces de stockage/test dans l'existant.
B : nouveau socle modulaire sur branche isolée avec reprise sélective des règles, données, parseur et design. Avantage : séparation des responsabilités, tests et évolution ; inconvénient : risque de régression et coût initial, à contrôler par tests de référence.
Préférence provisoire B (pas de réécriture aveugle) ; pas de décision framework, langage, schéma SQL ni hébergement à ce stade. Confirmer après audit dynamique, benchmarks et V1. Conserver la version stable et ne fusionner/déployer qu'après accord applicable.

## Blocage et complément obligatoire
Tentative de clonage en environnement local d'analyse : git 2.47.3, Node 22.16.0 disponibles mais DNS github.com indisponible ; clone échoué avant récupération. Aucun test de syntaxe, Node, navigateur ou Lighthouse exécuté ici. Les tests précédemment signalés par Codex ne remplacent pas une exécution sur le commit audité. Le site public et l'iPhone ne sont pas testés dans cette session.
Compléter dans Codex Cloud (lecture seule, même commit) : node --check app.js ; node --check recipe-text-parser.js ; node --check service-worker.js ; node tests/recipe-text-parser.test.js ; serveur HTTP local et smoke tests si navigateur disponible ; scénarios ajout/édition/recherche, menus/portions/courses, étapes/minuteur, export/restore, offline/update avec données fictives. Relever commandes, versions, résultats, exceptions, captures anonymes ; ne pas modifier main, installer de services payants ni ajouter de secrets. Si navigateur absent, signaler plutôt que simuler un succès. Safari iPhone réel à valider séparément. Consigner le complément avant conclusion définitive de l'étape 03.
