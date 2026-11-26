# Méthodologie
## Rôles
Propriétaire : arbitrage fonctionnel, UX, budget, publication, actions irréversibles. Coordination IA : cadrage, recherche, synthèse et suivi ; agent développement : code/tests ; relecture qualité et sécurité distincte si disponible. Ne pas présenter ces rôles comme des agents déjà exécutés.

## Cycle
1. Exigence identifiée et critères d'acceptation.
2. Analyse du code et choix documentés ; petit lot, branche dédiée.
3. Implémentation dans environnement isolé, données fictives.
4. Tests reproductibles ; revue diff et risques ; contre-expertise si disponible.
5. PR avec résultats, limites et plan de retour arrière.
6. Validation requise selon AGENTS.md ; intégration puis déploiement uniquement sur accord applicable.
7. Changelog, décisions, documentation à jour.

## Gestion des accès
GitHub : dépôt historique public, accès lecture vérifié, droits d'écriture déclarés ; branche main préservée. Supabase : connexion et statut actif vérifiés précédemment ; schéma/politiques non encore audités. Codex Cloud : environnement dédié configuré selon utilisateur, test d'onboarding signalé réussi ; exécution indépendante à vérifier. PWA : URL connue, rendu interactif à contrôler. Aucune recette à sauvegarder selon propriétaire, mais autres données locales/serveur à inventorier avant migration. Sauvegarder code et données existantes pertinentes avant opération destructive.

## Documentation
Décisions datées, critères et preuves versionnés ; les documents confidentiels restent dans un espace privé contrôlé par le propriétaire. Les PR et branches publiques ne sont pas un espace privé. Vérifier protection de main, licences et visibilité ; pas de changement de visibilité sans accord.
