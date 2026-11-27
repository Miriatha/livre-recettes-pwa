# Feuille de route officielle de cadrage
30 étapes principales, 8 compléments juridiques/conformité et un jalon de naming (02 bis ajouté) ; 8 validations utilisateur. Numéros conservés pour la traçabilité. État au 27/11/2026 : phases 1 et 2 clôturées, V1 approuvé (D15/D16). Audit historique partiel ; tests restants replanifiés explicitement. Étape 09 UX consolidée approuvée le 27/11/2026 ; voir D17 et la proposition consolidée.

| Phase | Étapes | Livrables |
|---|---|---|
| 1 — Préparation | 01 accès, sauvegarde et référentiel ; 02 cadrage ; 02 bis naming | Accès, documentation, identité provisoire |
| 2 — Études | 03 audit existant ; 04 benchmark concurrents ; 05 standards ; 05 bis audit juridique/réglementaire ; 06 benchmark IA ; 07 faisabilité commerciale ; 08 recommandations/périmètre | Rapports et V1 |
| 3 — Conception | 09 UX (V2) ; 10 charte/design system (V3) ; 11 maquettes/prototype (V4) ; 12 architecture technique/sécurité ; 12 bis confidentialité | Maquettes validées, ADR et modèles |
| 4 — Réalisation | 13 fondation et environnements ; 14 fonctionnalités ; 15 synchronisation/photos/hors ligne ; 16 IA ; 17 admin ; 17 bis interfaces légales ; 17 ter registres internes | Application testable et documentation |
| 5 — Validation | 18 tests ; 18 bis audit conformité ; 19 recette fonctionnelle (V5) et conformité/sécurité (V6) ; 20 livraison familiale (V7) ; 20 bis protection de la PI | Rapports, décision de publication et rollback |
| 6 — Bêta | 21 déploiement privé ; 21 bis protocole/consentement ; 22 suivi J7/30/60/90 ; 23 optimisation ; 23 bis clôture et données ; 24 bilan économique (V8) | Bilan et décision go/no-go |
| 7 — Option commerciale | 25 édition autonome ; 26 cadre légal commercial ; 27 marque/marketing ; 28 distribution/paiement ; 29 test marché ; 30 lancement | Uniquement si V8 positive et obligations satisfaites |

## Validations (aucune implicite)
V1 périmètre : conserver/améliorer/ajouter/retirer/reporter, coûts et risques.
V2 UX et navigation. V3 charte graphique. V4 prototype.
V5 recette fonctionnelle : parcours et non-régressions.
V6 sécurité/confidentialité/conformité avant bêta.
V7 publication familiale : plan de déploiement/rollback, accord explicite.
V8 commercialisation : preuves d'usage, économie, juridique et décision.
Le lancement bêta nécessite également accord explicite sur protocole, accès et dépenses. Les décisions de marque définitive précèdent toute diffusion publique sous ce nom.

## Prochain travail
Études 04–07 documentées, D14 modèle IA initial sous conditions, étape 08 périmètre approuvé (D15). V1 clôturé par D16 (26/11/2026) après revue PR #3 et accord sur report explicite des tests historiques : 13/18 sauvegarde/restauration, 14 menus/historique/minuteur/règles métier, 15 photos, 18–19 recette complète. Tests de référence avant reprise des modules. [Étape 09 UX consolidée](ux/09-architecture-ux-consolidee.md), V2 approuvée, prochaine étape 10 (V3), puis 11–12 ; réalisation cible à partir de 13 après les jalons de conception. Les réserves de conformité, tests IA et coûts restent aux jalons prévus. Les dépendances et la priorité des tâches pourront être affinées, sans supprimer les jalons.

## Consolidation des apprentissages
27/11/2026 : cinq missions documentaires terminées, S01–S04 consolidés, audit ciblé V1 sans changement de périmètre recommandé, V2 approuvée. S05 organise l'index permanent et les règles de consultation ; l'intégration de cette documentation est suivie dans la PR #4 ; son état effectif est celui de GitHub. Les preuves techniques et applicatives restent à produire aux jalons existants. Voir [index](connaissances/README.md).
