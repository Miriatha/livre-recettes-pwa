# Audits

## Étape 03 — Audit de la PWA historique
Référence : commit b43f829cc547fe332f89995af881068b53795106.
- [Audit statique](03-audit-statique-existant.md) : inventaire, code et Supabase en lecture seule.
- [Complément dynamique](03-complement-audit-dynamique.md) : exécution Codex Cloud (PR #2, commit fa88170), syntaxe, tests Node et parcours Chromium.
- Revue documentaire du 26/11/2026 : PR #2 intégrée uniquement dans la branche de cadrage ; aucun fichier applicatif modifié par cette PR. Les résultats d'exécution sont rapportés par Codex et n'ont pas été rejoués indépendamment lors de la revue.

### Conclusion provisoire
Les deux audits convergent vers un nouveau socle modulaire sur branche isolée avec reprise sélective des règles métier et du parseur. La PWA historique reste la référence de non-régression. Aucun choix de framework, modèle de données ou hébergement n'est arrêté ; décision après les benchmarks et V1.

### Points ouverts
- Mesures mobiles, Safari/iPhone réel, installation et mise à jour PWA, Lighthouse et accessibilité clavier/lecteur d'écran : non réalisés.
- Jeux de données volumineux, export/import/rollback, conflits, quotas, agrégation multi-recettes, fin du minuteur et son : non couverts par les parcours dynamiques rapportés.
- Le passage du minuteur de 20:00 à 19:55 après environ 2,2 secondes est une observation à reproduire avec horodatages contrôlés ; ne prouve ni exactitude ni défaut.
- Les comptages 273 et 269 de fonctions utilisent des critères différents ; retenir l'ordre de grandeur, non une métrique exacte.
- Configurations Supabase détaillées, droits et licences des ressources : à examiner.
Planifier les vérifications de référence utiles avant V1 et les tests de recette complets avant V5/V6. Ces limites n'empêchent pas de mener en parallèle les études 04 à 07 ; l'étape 03 reste partielle pour ces points.

## Audits suivants
Juridique, qualité, sécurité/conformité avant bêta, bilan. Méthode : préciser commit, environnement, commandes, preuves et limites, classer les risques et alternatives. Constats exploitables sensibles en espace privé. Aucun test destructif sur production.
