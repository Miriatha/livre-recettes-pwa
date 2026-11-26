# Qualité et critères d'acceptation
Cibles proposées, non mesurées ; établir baseline et protocole lors des audits.
| Critère | Cible initiale | Mesure |
|---|---|---|
| Chargement initial | <3 s sur profil réseau/appareil défini | Lighthouse et appareils réels, préciser métrique |
| Import IA moyen | <15 s | De requête à brouillon utilisable, préciser réseau et p95 |
| Coût import réussi | <=0,005 EUR | Coûts totaux / imports réussis, retries inclus |
| Import sans correction | >=90% imprimés lisibles | Échantillon de référence ; aucun champ critique inventé |
| Vulnérabilités hautes/critiques connues | 0 non corrigée au jalon | Analyse dépendances, revue, tests d'autorisation |
| Perte/écrasement silencieux | 0 scénario reproductible | Tests conflits, interruptions, restauration |
| Parcours essentiels | 100% des parcours recensés automatisés si réalisable | Matrice exigences-tests, justifier exceptions |
| Accessibilité | WCAG 2.2 AA visée | axe + vérification manuelle clavier, zoom, contraste, lecteurs écran |
| Fidélisation J30 | >=50% cible exploratoire | Définir actif et cohorte ; petit effectif, pas de généralisation |

## Stratégie
Tests unitaires (quantités, unités, parseur, planification, minuteur), intégration stockage/auth/RLS, e2e Playwright ou équivalent, régression responsive, réseau lent/offline/reconnexion, imports corrompus, restauration et droits. Test réel Safari iPhone nécessaire pour PWA, son et arrière-plan ; ne pas assimiler Chromium à iOS. Vérifier utilisateurs distincts, données fictives uniquement. Vérifier retours d'erreur, absence de fuite et confidentialité admin. Relecture distincte et audit humain si nécessaire. Rapport avec commandes, versions, résultats, limites, captures synthétiques, sévérité et corrections.
