# Architecture — exigences, non décision technique
## Existant
PWA statique HTML/CSS/JS, stockage local, service worker, GitHub Pages ; projet Supabase existant. Vérifier code, dépendances, stockage, tests, structure et configuration réelle lors de l'audit. Ne pas supposer que l'authentification est intégrée.

## Options à comparer
A. Refactoriser progressivement le JavaScript existant.
B. Reconstruire sur socle modulaire, réutiliser éléments éprouvés.
Évaluer dette, risque de régression, coût, maintenance, accessibilité, performances, testabilité et facilité d'évolution ; recommandation argumentée avant choix.

## Données et synchronisation
Comparer JSONB global versionné (option historique : profiles/app_state par utilisateur, révision optimiste) avec modèle relationnel recettes/ingrédients/menus/foyers. Décider identité foyer/personne, partage et invitations après analyse sécurité ; préférer identités individuelles si utile au contrôle d'accès, sans imposer cette migration. RLS systématique, tests croisés, clés publiques seulement dans client. Stockage local séparé par identité, schéma versionné, export portable, migration explicite, conflits détectés (aucun écrasement silencieux). Photos privées, accès signé/autorisé, compression et retrait EXIF. Évaluer IndexedDB, localStorage et stratégie offline.

## IA
Adaptateur fournisseur ; endpoint serveur authentifié ; secrets côté serveur ; validation structurée, réponse incertaine signalée, contrôle humain, quotas et journal de coût sans contenu. Dédupliquer demandes/consommation par identifiant idempotent. Aucun engagement de fournisseur.

## Exploitation
Séparer dev/test/production et secrets ; CI reproductible, verrouillage des versions de dépendances, tests de restauration. Évaluer GitHub Pages, hébergement statique alternatif et contraintes d'authentification, CGU et usage commercial avant choix. Prévoir architecture de configuration marque, i18n, stockage et fournisseur IA remplaçables. Pas de nouvelle infrastructure payante sans accord.
