# Sécurité
## Exigences minimales
- Propriétaire contrôle comptes et récupération ; MFA/clé d'accès admin ; moindre privilège et revue des accès.
- Aucun secret dans Git, client ou journaux ; rotation si exposé. Auth par invitation pour bêta ; rôles admin vérifiés côté serveur, ne pas faire confiance aux métadonnées utilisateur modifiables.
- RLS sur toutes tables exposées, politiques SELECT/INSERT/UPDATE/DELETE appropriées, stockage photos privé ; vérifier accès anonyme et entre deux foyers. Tests de refus, pas seulement succès.
- Entrées et sorties validées, protection XSS/injection, dépendances auditées, sessions et erreurs maîtrisées, limites anti-abus.
- Import IA : données minimales, EXIF supprimé, rétention limitée, pas de secrets/recettes dans logs ; ne pas envoyer aux fournisseurs sans base et information appropriées.
- Quotas et dépenses serveur, idempotence, plafonds bloquants ; alertes seules insuffisantes.
- Sauvegardes, restauration testée, export/suppression, environnement de test séparé, aucune donnée réelle dans tests sans nécessité et accord.

## Incidents
Détecter, isoler, révoquer accès/rotation, préserver éléments utiles en espace privé, évaluer impact, restaurer, corriger et documenter. Évaluer notification à autorité et personnes selon RGPD ; délai de 72h si applicable (à confirmer par audit juridique). Ne pas publier de détails exploitables. Registre réel en espace privé.

## Porte V6
Tests d'isolation, analyse de dépendances, revue configuration auth, secrets, storage et coûts, droits RGPD, restauration, documentation et risques résiduels. Aucun feu vert automatique ; résultats réels nécessaires.
