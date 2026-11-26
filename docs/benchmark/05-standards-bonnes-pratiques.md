# Étape 05 — Référentiel de bonnes pratiques et critères vérifiables
Date : 26/11/2026. Étude documentaire réalisée, prescriptions candidates à intégrer aux jalons V1–V6. Aucun test de conformité ni changement applicatif. Les normes techniques, recommandations ergonomiques, objectifs internes et obligations légales sont distincts ; étape 05 bis pour l'applicabilité juridique. Les références en fin de document sont des sources officielles consultées à cette date.

## 1. Accessibilité — WCAG 2.2 AA
Cible projet : tous critères A et AA applicables, pas uniquement cette sélection. [1–3]
| ID | Critère / règle | Acceptation |
|---|---|---|
| A01 | 1.4.3 contraste texte | 4,5:1 courant, 3:1 grand texte selon définition WCAG (18 pt ou 14 pt gras, équivalents CSS) ; exceptions normatives |
| A02 | 1.4.11 contraste non textuel | 3:1 pour informations visuelles requises des composants/états et graphiques concernés, exceptions normatives |
| A03 | 1.4.1 couleur | États, erreurs, sync et alertes IA aussi exprimés par texte/symbole |
| A04 | 1.4.4 et 1.4.10 | Texte à 200%, reflow à 320 CSS px de large (ou 256 CSS px de haut pour écriture verticale selon critère), exceptions prévues ; pas de perte de contenu/fonction |
| A05 | 2.1.1/2.1.2/2.4.3/2.4.7/2.4.11 | Clavier, absence de piège, ordre de focus, focus visible et pas totalement masqué par contenu créé par auteur |
| A06 | 2.5.7/2.5.8 | Alternative au glisser-déposer ; cible 24x24 CSS px minimum ou exception admise ; objectif interne 44x44 CSS px pour actions tactiles fréquentes, inspiré HIG 44 pt (unités distinctes) |
| A07 | 1.3.1/4.1.2/4.1.3 | HTML sémantique, nom/rôle/état, messages de statut accessibles, dialogues et retour focus |
| A08 | 3.3.1–3.3.3, 3.3.7/3.3.8 | Erreurs identifiées et aide à correction ; éviter resaisie ; authentification accessible avec collage et gestionnaire de mots de passe |
| A09 | 1.1.1, 2.2.1, 2.3.1 | Alternatives images utiles, décoratives ignorées ; limites de temps interface réglables sauf exceptions ; éviter flash dangereux |
Vérifier également langue, titres, liens, cohérence navigation, orientation, espacement texte, nom visible dans nom accessible et autres critères applicables. Minuteur culinaire demandé par utilisateur distinct d'un délai imposé pour accomplir une tâche.
Appliquer sur fond crème/olive : couleurs de texte et contrôles suffisamment foncées ; vérifier contraste sur tous états, photos et fonds réels ; fonds décoratifs discrets, cartes opaques si nécessaire. Respecter zoom, taille préférée, mouvement réduit ; pas de couleur seule. Texte 16–18 CSS px de base et 20–24+ en mode cuisson = propositions internes, non normes. Mesure axe ou Pa11y + manuel clavier, lecteur écran (VoiceOver iOS/Safari, NVDA Windows navigateur supporté), zoom/reflow et contraste. Aucun score automatique ne démontre à lui seul la conformité. [3]

## 2. UX — Apple HIG et Nielsen Norman Group
Apple guide les apps natives ; transposer les principes, pas les contraintes en points au Web. [4–6] NN/g fournit des heuristiques, pas des seuils obligatoires. [7]
| ID | Principe | Application Famijote |
|---|---|---|
| U01 | Visibilité de l'état | Enregistrement local, synchronisation en attente/échouée, hors connexion, analyse IA et quota explicites ; ne jamais afficher « synchronisé » sans confirmation serveur |
| U02 | Langage réel | Menu, repas, portions, rayons, recettes ; unités françaises, décimales adaptées ; distinguer quantité inconnue et zéro |
| U03 | Contrôle utilisateur | Annuler, retour, brouillons, prévisualisation d'import, confirmation suppression/restauration destructive ; undo quand réversible |
| U04 | Cohérence | Navigation stable, composants/tokens communs ; libellés accessibles même avec icônes ; 5 entrées proposées à V2, action Ajouter distincte si elle ouvre un formulaire plutôt qu'une destination |
| U05 | Prévention des erreurs | Validation de champs, unités compatibles, avertissement doublons non destructif, confirmation changement de minuteur ; aucun remplacement silencieux |
| U06 | Reconnaissance | Recherche au moment d'assigner un repas, ingrédients visibles dans cuisson, contexte portions et semaine ; éviter mémorisation |
| U07 | Efficacité | Raccourcis/favoris, duplication jour/semaine, actions accessibles clavier et tactile ; pas de geste exclusif |
| U08 | Sobriété | Hiérarchie nette, une action dominante par vue, détail à la demande ; éviter surcharge de la page menu |
| U09 | Récupération | Erreur en français avec cause exploitable et action de reprise ; préserver données en échec |
| U10 | Aide | Onboarding court et facultatif, exemple fictif, aide contextuelle, contact et feedback |
Mobile : barre de navigation stable avec libellés, zones sûres iPhone, clavier virtuel, portrait/paysage, pas de fonction uniquement au survol ; bureau : navigation latérale possible et utilisation efficace de la largeur. Garder mêmes concepts et données sans reproduire exactement la disposition. Candidats V2/V4 : menu → choix recette/portions → cuisson ; photo → aperçu/correction → enregistrement ; menu → courses → coches/ajouts manuels ; retour d'une interruption vers session active. Tester tâches identiques avec novices, nombre d'actions, erreurs, temps et réussite ; objectifs à calibrer, pas de seuil universel.

## 3. PWA, données hors ligne et synchronisation
[8–12] Cache Storage pour ressources statiques versionnées ; IndexedDB candidat pour données structurées/photos et file de mutations asynchrone, plutôt que JSON global localStorage. Ce choix n'est pas arrêté avant étape 12. Les quotas, éviction et disponibilité diffèrent selon navigateur ; persistance demandée si disponible sans garantie. Une sauvegarde distante/export reste indispensable.
| ID | Exigence candidate | Validation |
|---|---|---|
| W01 | HTTPS, manifest, icônes, scope/start_url cohérents, instructions d'installation par plateforme | Installation réelle Safari/iPhone, Chrome/Android et bureau supporté |
| W02 | Hors ligne après première préparation réussie | Afficher disponibilité ; lire recettes/menus et modifier seulement selon périmètre offline validé ; import IA distant indisponible avec message |
| W03 | Versions cohérentes | Cache par version, ressources fingerprintées si build, activation contrôlée, pas de reload forcé pendant saisie/cuisson ; tester N→N+1 et rollback |
| W04 | Sync explicite | File persistante, identifiants idempotents, retries bornés, révisions/transactions, conflits signalés ; tester deux appareils et coupure réseau |
| W05 | Isolation | Cache privé partitionné par compte/foyer, aucune réponse auth/API personnelle dans cache statique ; purger à déconnexion/changement d'identité après traitement des modifications en attente et information utilisateur |
| W06 | Robustesse | Quota, éviction, corruption, interruption et reconnexion ; export/version/validation/restauration ; aucun écrasement silencieux |
Ne pas dépendre exclusivement de Background Sync ou notifications pour les fonctions critiques ; reprise au retour au premier plan. Une PWA offline ne garantit pas authentification initiale hors ligne, données jamais téléchargées ni disponibilité IA.

## 4. Cuisine guidée et minuteur
MDN confirme limitation des callbacks en arrière-plan et Wake Lock conditionnel. [13–14]
- Calculer le temps restant à partir de l'échéance persistée, non du nombre de ticks ; pause/reprise et changement d'étape ; relecture après visibilité/rechargement ; gérer expiration et changement d'horloge explicitement.
- Un seul minuteur actif reste règle de référence ; minuteurs simultanés non validés. Signal visuel accessible, son si autorisé, Wake Lock facultatif et libéré à la sortie.
- Ne pas promettre son à écran verrouillé, app fermée, mode silencieux ou suspendue. Afficher limitation au moment utile ; minuteur système externe recommandé lorsque alarme garantie nécessaire.
- Test déterministe via horloge simulée : départ, progression, pause, reprise, remplacement, expiration, reload, retour premier plan et variation d'horloge ; test iPhone réel pour comportement OS. Reproduire observation historique 20:00→19:55 en ~2,2 s avant conclusion.

## 5. Performances et écoconception
Core Web Vitals [15] : LCP <=2,5 s ; INP <=200 ms ; CLS <=0,1. Objectifs « bons » au 75e percentile des visites réelles, mobile et bureau séparément. Lighthouse laboratoire n'est pas preuve d'INP réel ni de conformité terrain ; distinguer TBT et INP. Bêta de petite taille : statistiques exploratoires uniquement, pas de collecte non essentielle sans base/consentement approprié.
- Profil de test documenté : appareil, navigateur, réseau, CPU, commit, cache froid/chaud ; jeu synthétique 100/500 recettes et photos ; répéter et donner médiane et dispersion. Cibles supplémentaires proposées : affichage utile <3 s sur profil convenu, import moyen <15 s avec p95 à mesurer. Aucun résultat actuel.
- Dimensionner, compresser et charger les photos à la demande ; définir tailles d'image, réserver dimensions, éviter transfert du contenu non consulté. Réutiliser fond existant si licence et poids acceptables ; ne pas multiplier polices/dépendances. Limiter requêtes, traitements en arrière-plan, synchronisations et conservation inutiles. Fixer budgets d'octets après prototype ; comparer mesures plutôt que promettre valeur universelle.

## 6. Sécurité web et IA
[16–22] Contrôle d'accès côté serveur à chaque requête, refus par défaut ; pas de confiance dans identité, rôle ou compteur transmis par le client. Si Supabase choisi : RLS et grants minimaux, politiques d'appartenance foyer, tests négatifs entre deux comptes et anonymous, stockage privé ; aucune clé secret/service_role dans client, seules clés publishable adaptées. Auth et MFA admin, gestion récupération. Vérifier documentation actuelle avant implémentation.
- Entrées recettes/IA/import JSON traitées comme données non fiables ; schéma versionné et limites taille/profondeur ; échappement contextuel, pas de HTML exécuté ni eval ; protections CSP/headers à évaluer avec hébergeur.
- Photos : validation réelle format/taille, nom serveur sûr, retrait EXIF et compression, stockage privé, limites upload ; tests fichiers corrompus et erreurs.
- IA : documents et images peuvent contenir instructions hostiles ; extraction sans outils privilégiés ni accès autres foyers, résultat strictement validé côté code, aucun enregistrement automatique ; incertitudes par champ, source et revue humaine, ne pas inventer quantités/températures/allergènes. Quotas atomiques serveur, idempotence, plafond global, retries limités, pas de contenu privé dans logs. Pas de garantie d'élimination du risque d'injection.
- Dépendances minimales, verrouillage des versions, scan dépendances et secrets, CI sans données réelles ; résultats exploitables en espace privé. Déploiements reproductibles, backups/restauration, rollback et incidents.
- GitHub Pages : conditions interdisent hébergement de SaaS commercial et déconseillent transactions sensibles comme mots de passe ; évaluer alternative avant authentification/diffusion commerciale, ne pas modifier hébergement maintenant. [23]

## 7. Stratégie de test et jalons
Playwright couvre Chromium, Firefox, WebKit et émulation de profils mobiles [24–25] ; ne remplace pas Safari iPhone réel. Automatisation progressive après architecture validée.
| Niveau | Exemples | Jalon |
|---|---|---|
| Référence historique | Portions, agrégation, duplications, parseur, minuteur, formats JSON et restauration | Avant V1, compléter cas de référence utiles |
| UX/Design | Tâches import/menu/courses/cuisson, clavier, contrastes tokens, zoom, safe areas | V2–V4 |
| Unitaire/intégration | Calculs, schémas, stockage, transactions, révision, horloge, erreurs, quota | 13–18 |
| E2E | Flux synthétiques, Chromium/Firefox/WebKit, mobile émulé, réseau offline, reprise | 18–19 |
| Appareils réels | iPhone/Safari installé et navigateur, bureau ; Android si disponible, préciser matrice support | V5/V6 |
| Sécurité/conformité | Tests d'accès négatifs, secret scan, restauration, droits et consentement | V6 |
| Publication | CI réussie, diff relu, sauvegarde, retour arrière, validation propriétaire | V7 |
Critères de sortie : preuves associées aux exigences, aucun défaut bloquant connu ni vulnérabilité haute/critique non corrigée, pas de perte silencieuse reproductible, exceptions et risques résiduels documentés. Les tests de performance et accessibilité sont à répéter sur la version cible. Pas de conformité, rapidité ou sécurité proclamée sans résultats.

## 8. Décisions et limites
Les exigences mesurables ci-dessus complètent le cahier des charges et les documents qualité/sécurité ; la cible WCAG AA et les principes déjà approuvés restent. Les 44 CSS px, IndexedDB, tailles de texte, scénarios, outillage et seuils internes sont des recommandations à formaliser aux jalons concernés ; aucun framework ni hébergeur arrêté. Étape 05 documentaire terminée, étape 05 bis juridique à conduire. Aucun logiciel installé, test exécuté ou coût engagé ici. Revalider versions de standards/documentations lors de l'implémentation.

## Sources
[1] W3C WCAG 2.2 https://www.w3.org/TR/wcag/
[2] W3C nouveautés https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/
[3] WAI évaluation https://www.w3.org/WAI/test-evaluate/
[4] Apple HIG boutons https://developer.apple.com/design/human-interface-guidelines/buttons
[5] Apple HIG accessibilité https://developer.apple.com/design/human-interface-guidelines/accessibility
[6] Apple HIG navigation et texte https://developer.apple.com/design/human-interface-guidelines/tab-bars ; https://developer.apple.com/design/human-interface-guidelines/typography
[7] NN/g Jakob Nielsen, heuristiques https://www.nngroup.com/articles/ten-usability-heuristics/
[8] web.dev offline data https://web.dev/learn/pwa/offline-data
[9] web.dev cache/mises à jour https://web.dev/learn/pwa/caching ; https://web.dev/learn/pwa/update
[10] MDN quotas https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
[11] MDN IndexedDB https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[12] MDN installation PWA https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable
[13] MDN Page Visibility https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
[14] MDN Screen Wake Lock https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API
[15] web.dev Web Vitals https://web.dev/articles/vitals
[16] OWASP authorization https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
[17] OWASP XSS https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
[18] OWASP upload https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html
[19] OWASP GenAI prompt injection https://genai.owasp.org/llm2026/llm012026-prompt-injection/
[20] Supabase RLS https://supabase.com/docs/guides/database/postgres/row-level-security
[21] Supabase clés https://supabase.com/docs/guides/getting-started/api-keys
[22] Supabase API https://supabase.com/docs/guides/api/securing-your-api
[23] GitHub Pages limites https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/github-pages-limits
[24] Playwright navigateurs https://playwright.dev/docs/browsers
[25] Playwright émulation https://playwright.dev/docs/emulation
