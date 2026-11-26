# Étape 05 bis — Audit juridique et réglementaire documentaire
Date : 26/11/2026. France et Union européenne. Analyse générale de cadrage, pas avis juridique individualisé ni certification de conformité. Hypothèses : développement personnel, bêta privée sur invitation (environ 10 foyers adultes, 90 jours), gratuite, pas de publicité, vente, précommande, contrepartie obligatoire en données ou monétisation ; commercialisation éventuelle après V8. Toute modification de ces hypothèses déclenche une réévaluation. Les contrats d'emploi, conditions souscrites, traitements réels et licences de ressources n'ont pas été vérifiés individuellement. Aucun changement de compte, dépôt de marque ou dépense.

## 1. Statut et responsabilité
Le développement personnel et un test réellement préparatoire non professionnel ne nécessitent a priori pas la création immédiate d'une entreprise. Ce n'est pas une exemption générale pour toute offre gratuite : réexaminer la qualification effective avant mise à disposition, offre professionnelle ou lancement de ventes. Déclarer l'activité via le guichet unique lorsque l'activité économique débute ; comparer EI/micro et société, qualification fiscale, TVA (y compris ventes numériques transfrontalières et rôle des boutiques), facturation, comptabilité, cotisations et CFE à l'étape 26. Pas de paiement ou précommande en bêta. [1–2]
Personne physique susceptible d'être responsable du traitement dès la bêta ; pas besoin de société pour être soumis au RGPD. Ne pas publier adresse privée ou identités dans Git. Vérifier mentions LCEN art. 1-1 selon caractère public et professionnel ; possibilité d'anonymat public de l'éditeur non professionnel sous conditions (identité fournie à l'hébergeur, coordonnées de celui-ci publiées), sans neutraliser l'information RGPD sur l'identité du responsable. La page PWA actuellement publique doit aussi faire l'objet de cette vérification. [3]
Avant lancement : vérifier contrat de travail, exclusivité, loyauté et confidentialité. CPI L113-9 : droits patrimoniaux logiciels créés dans fonctions ou sur instructions de l'employeur lui reviennent sauf stipulations contraires. Développer sur temps, matériel et comptes personnels, sans ressources/confidentiels employeur ; faire confirmer situation si ambiguë. [4–5]

## 2. RGPD : champ et bases
Art. 2(2)(c) et considérant 18 : exemption personnelle/domestique étroite ; ne pas s'en prévaloir pour un projet de bêta structurée avec perspective de marché. Appliquer protection des données dès conception (art. 25), minimisation et sécurité (art. 5/32). Pas de déclaration CNIL ordinaire préalable pour ce traitement courant, mais responsabilité démontrable. [6]
Registre art. 30 : exception <250 salariés ne couvre notamment pas les traitements réguliers ; tenir registre même en petit projet. [7]
Bases candidates à confirmer avec les fonctionnalités :
| Finalité | Données minimales | Base candidate |
|---|---|---|
| Compte, invitation, synchro, export | email, ID, appartenance foyer, recettes et préférences nécessaires | art. 6(1)(b) si nécessaire à l'accord de service |
| Sécurité, anti-abus, quotas | identifiant, événements techniques, horodatage, compteur | art. 6(1)(f), documenter nécessité et mise en balance ; obligation légale si applicable |
| Import IA demandé | image sélectionnée, texte, champs de recette | art. 6(1)(b) si nécessaire au service explicitement demandé, après information ; autres finalités séparées |
| Statistiques bêta individualisées/pseudonymisées | événements minimaux, ID pseudonyme | consentement libre et révocable choisi par projet ; refus sans perte de service |
| Feedback facultatif | texte et capture choisie | base à confirmer selon gestion du support et recherche ; information, pas d'envoi automatique de contenu privé |
| Droits et incidents | éléments strictement nécessaires | art. 6(1)(c) pour obligations |
Pseudonymisation n'est pas anonymisation. Pas de géolocalisation, contacts, téléphone, date de naissance, adresse postale ou profil médical dans la V1. Images, manuscrits et recettes peuvent révéler données de tiers et santé/allergies : ne pas solliciter de données art. 9 ni faire de profilage ; avertir d'éviter photos de personnes, noms identifiants, diagnostics et annotations sensibles ; si traitement de catégories particulières envisagé, déterminer exception art. 9 et base art. 6 avant mise en oeuvre, pas de présomption que consentement bêta suffit. Limiter permissions caméra/photos aux fichiers choisis, supprimer EXIF avant upload. [6,8]
DPO art. 37 : obligation non identifiée sous hypothèses (pas de surveillance systématique à grande échelle ni traitement massif sensible) ; réévaluer. AIPD art. 35 : screening documenté obligatoire comme démarche projet ; vérifier critères de risque élevé et listes CNIL, particulièrement IA et suivi utilisateurs, réaliser AIPD si requis ou doute significatif. [9]
Droits : procédure accès, rectification, effacement, limitation, opposition et portabilité selon applicabilité ; réponse en principe sous un mois, prolongation motivée possible avec information dans le premier mois. Vérification d'identité proportionnée ; export foyer ne doit pas exposer données d'autrui. Information art. 13/14 sur identité, finalités, bases, destinataires/transferts, durée, droits, réclamation CNIL, obligatoire/facultatif et autres mentions pertinentes. [6,10]

## 3. Conservation — propositions non validées
| Catégorie | Proposition à confirmer selon besoins/contrats |
|---|---|
| Compte et contenu utilisateur | Pendant activité ; export avant clôture, suppression selon procédure et échéance annoncée |
| Images brutes import IA | Suppression après extraction/validation ou délai de reprise court (ex. 24 h maximum côté application si réalisable) ; distinguer photo conservée à la demande et rétention prestataire |
| Journaux sécurité/quota | Fenêtre initiale 30–90 jours selon finalité ; pièces incident/obligation conservées séparément si nécessaire |
| Statistiques bêta | 90 jours et période de bilan définie ; ensuite agrégats réellement anonymes ou suppression |
| Sauvegardes | Rotation documentée, accès limité, suppression au cycle prévu, procédure de non-réintroduction des comptes effacés |
| Consentements/droits | Preuve proportionnée et durée justifiée par responsabilité/délais applicables |
Aucun délai ci-dessus n'est présenté comme obligation légale universelle. Tenir registre et preuves réels dans espace privé, pas dépôt public. Concevoir suppression de données locales et distantes, fichiers, files d'attente et traitement des sauvegardes. Consentement statistique séparé de l'accord de participation.

## 4. Traceurs et permissions
Article 82 Loi Informatique et Libertés : accès/écriture sur terminal, y compris localStorage/IndexedDB, sont concernés ; exemption possible pour opérations strictement nécessaires au service demandé ou transmission. Pas de bandeau général si exclusivement exemptés et information appropriée ; inventorier finalités, y compris SDK tiers. Statistiques non essentielles désactivées par défaut, choix accepter/refuser aussi simple, retrait accessible, preuve/version, pas de mur de consentement. Certaines mesures d'audience peuvent être exemptées sous conditions CNIL strictes ; ne pas présumer exemption pour analyse individualisée bêta. Permission technique OS ne remplace pas nécessairement consentement légal. [8,11–12]

## 5. Fournisseurs et transferts
Projet Supabase existant eu-west-2 (Londres) selon vérification antérieure. Royaume-Uni hors UE/EEE mais adéquation GDPR renouvelée en décembre 2025 par Commission : localisation britannique n'interdit pas le traitement, ne garantit pas la totalité des flux. Examiner hébergement UE continentale (ex. Francfort/Paris si offre disponible) comme simplification, sans migration automatique. Vérifier DPA art. 28 applicable et accepté, liste sous-traitants, support, sauvegardes, télémétrie, effacement, garanties transferts ultérieurs (adéquation, clauses contractuelles types et analyse de transfert si applicable). Le DPA Supabase publié prévoit stockage/traitement principal dans région choisie avec exceptions ; ne pas affirmer résidence exclusive. [13–14]
Même analyse pour hébergeur web, mails transactionnels, outils statistiques et fournisseur IA retenu. Pour benchmark IA : corpus synthétique, autorisé et dépourvu de données personnelles ; aucun envoi de contenu réel avant revue des conditions/DPA et localisation/rétention, usage pour entraînement, sous-traitants et suppression. Comptes grand public et API n'ont pas nécessairement mêmes conditions. Bloquer les intégrations ne permettant pas de respecter exigences.

## 6. Incidents et sécurité
Art. 32–34 RGPD : isolation foyers, tests RLS négatifs, MFA admin, clés secrètes serveur, restauration, minimisation logs, procédure incident ; documenter toute violation. Notification CNIL si risque pour droits/libertés, sans retard injustifié et si possible sous 72 h après connaissance ; informer personnes si risque élevé sauf exceptions. Délai ne concerne pas indistinctement tout bug. [15]
Préparer canal de signalement sécurité, inventaire composants et politique de mise à jour ; séparer obligations RGPD et CRA. Pas d'audit réel de conformité réalisé ici.

## 7. Propriété intellectuelle
CPI L111-1, L112-2, L113-9, L122-4/5 : protection du code/documentation originaux ; droit d'auteur ne protège pas simple idée, liste factuelle d'ingrédients ou méthode en tant que telle, mais formulation originale, photos, illustrations, mise en page et bases peuvent être protégées. Ne pas supposer que toutes recettes sont libres. Copie privée limitée notamment à source licite et usage privé du copiste, non collectif ; numérisation dans cloud, IA et partage entre foyers exigent analyse spécifique. Ne pas promettre que copie privée couvre transmission au fournisseur IA. Imports personnels privés uniquement, demander droit/autorisation, pas catalogue public de livres scannés, corpus benchmark autorisé, ne pas contourner paywalls ni reproduire bases concurrentes ; prévoir retrait de contenu litigieux. [16]
GitHub public ne signifie pas licence open source : inventaire audité sans fichier LICENSE, à revérifier ; droits de lecture/fork selon conditions GitHub et droits antérieurs maintenus. Passage privé n'efface pas forks/copies antérieures. Décider licence et visibilité avec propriétaire ; idéalement espace privé pour développement commercial et données/confidentiels, sans interrompre PWA historique. [17]
Inventorier fond olivier, icônes, photos, polices, code tiers, dépendances et corpus ; provenance, licence/version, conditions commerciales/attribution, obligations copyleft. Évaluer code généré IA : conditions contractuelles, risque similitudes et droits tiers, protection par droit d'auteur dépend de contribution humaine/originalité ; documenter choix et modifications humaines, ne pas promettre monopole sur sorties. Ne pas copier code Mealie/Tandoor sans revue licence.
Famijote et slogan restent provisoires ; proximité Mamijote déjà signalée mais recherche officielle de similarité non finalisée. Recherche INPI/EUIPO/TMview, usages, domaines, app stores et conseil CPI si doute avant diffusion publique sous marque. Un dépôt n'est pas garantie d'absence de droits antérieurs. E-Soleau facultative, 15 EUR jusqu'à 50 Mo selon tarif INPI consulté ; date certaine, pas titre exclusif. Archiver version et preuves en privé. [18–20]

## 8. AI Act — règlement UE 2024/1689 modifié
Import de recettes par OCR/vision structuré, sans décision sur personnes, ne semble ni interdit ni haut risque (art. 5/6 et annexes) dans périmètre actuel ; réévaluer si nutrition médicale ou autre finalité réglementée. Déterminer rôles fournisseur/intégrateur/déployeur selon architecture et commercialisation sous nom propre, et distinction simple OCR vs système IA. Respecter obligations applicables de maîtrise IA (art. 4 dans version applicable, à revérifier) et transparence (art. 50 ; règles de transparence entrées en application le 02/08/2026 selon Commission). [21–22]
Article 50(1) : information pour système conçu pour interaction directe avec personnes sauf évidence contextuelle. Art. 50(2) : marquage lisible machine des sorties synthétiques pour fournisseurs, avec exception notamment aide à édition standard ou sans modification substantielle entrée/sémantique ; ne pas déduire que toute extraction est automatiquement exemptée. Art. 50(4) texte public d'intérêt public distinct d'une fiche recette privée. Analyse finale selon fonctionnalité et versions consolidées/guides applicables. Mesures produit : signaler import assisté par IA avant envoi et sur brouillon, distinguer extraction/proposition, afficher incertitudes, obliger revue humaine des champs critiques avant enregistrement, ne pas inventer quantités, températures, allergènes. Documenter essais, limites et incidents ; pas de conseil médical ni garantie d'exactitude. Aucun marquage CE IA présumé obligatoire ici.

## 9. Cyber Resilience Act — règlement UE 2024/2847
Produits matériels/logiciels à éléments numériques, y compris solutions de traitement à distance nécessaires sous responsabilité fabricant, mis à disposition sur marché dans activité commerciale ; gratuité ou code public ne suffisent pas à exclure. SaaS autonome et PWA/édition installable à qualifier selon architecture et distribution, pas conclure automatiquement. Considérant 15 : intention de monétisation/contreparties en données peuvent être pertinentes. Art. 4 prévoit mise à disposition limitée de logiciel inachevé pour test avec signal visible de non-conformité et destination exclusive test, conditions à vérifier ; ce n'est pas une dispense générale de sécurité/RGPD ni nécessairement des notifications. [23]
Dates : notification art. 14 des vulnérabilités activement exploitées et incidents graves depuis 11/09/2026 ; obligations principales 11/12/2027. Si Famijote entre dans champ, examiner calendrier, notification initiale 24 h puis complément 72 h, rapport final selon type, support de sécurité, documentation technique, évaluation conformité, déclaration UE et marquage CE le cas échéant. Ne pas apposer CE sans démarche applicable. Préparer inventaire/SBOM, politique vulnérabilités, mises à jour et support ; revue de champ à 12/18 bis/26. [23–24]

## 10. Vente, accessibilité et responsabilité
Avant offre professionnelle : mentions légales et CGV, prix TTC, informations précontractuelles, compatibilité, fonctionnement et durée de fourniture, mises à jour, garanties de conformité numériques, médiateur, rétractation et exceptions strictes (L221-28, accord exprès et reconnaissance de perte pour contenu numérique payant selon conditions ; ne pas confondre service continu). Contrats numériques peuvent être couverts en cas de fourniture de données personnelles au-delà de celles strictement nécessaires à fourniture/obligations légales, même sans argent ; distinguer qualification bêta non professionnelle et offre gratuite professionnelle. Revoir règles de résiliation, obligations des boutiques, fiscalité et export à l'étape 26. [25–28]
Directive 2019/882 : accessibilité de services couverts dont commerce électronique depuis 28/06/2025 ; exemption des microentreprises fournissant services (définition UE effectif <10 et CA annuel ou bilan <=2 M EUR, différente du régime micro fiscal), vérifier service et transposition France, autres règles RGAA si champ. Maintenir WCAG 2.2 AA comme objectif volontaire même si exemption. [29–30]
Responsabilité civile : avertissements et bêta ne suppriment pas obligations ni responsabilité pour faute ; risque d'erreurs IA alimentaires, allergènes, cuisson, minuteurs ; protections techniques, information, correction, procédure support et évaluation assurance RC pro avant vente. Pas d'exclusion générale de responsabilité.

## 11. Plan d'action par jalon
| Moment | Livrable / contrôle |
|---|---|
| Maintenant | Dossier juridique, cadrage bêta, vérification contrat de travail et provenance ressources ; pas de société ni achat automatique |
| 06 benchmark IA | Corpus autorisé/synthétique, conditions fournisseurs, DPA/transferts avant données réelles |
| 12/12 bis | Cartographie flux, bases, registre, durées, séparation foyer, traceurs, AIPD screening, AI Act/CRA qualification et hébergement |
| 17 bis | Mentions, CGU/bêta, confidentialité, notice IA, droits, choix statistiques, versionnement |
| 17 ter | Registres privés : traitements, consentements, droits, incidents, licences, contrats, preuve d'antériorité |
| 18 bis / V6 | Vérification réelle droits, effacement, isolation, export, restauration, rétention, consentement, contrats ; risques résiduels et validation ; pas de bêta si blocage |
| 20 bis / avant diffusion publique | Recherche marque et licences finalisées, archive ; e-Soleau sur autorisation seulement |
| 21 bis | Accord de participation adulte, pas de vente/contrepartie obligatoire, affichage bêta et limites |
| 23 bis | Information fin bêta, export, effacement, bilan anonymisé, conservation justifiée |
| 26 / avant vente | Statut, fiscalité, CGV, conformité numérique, médiation, accessibilité et CRA selon champ, assurance, validation professionnelle ciblée |

## 12. Sources principales (consultées 26/11/2026)
[1] Service Public formalités EI https://entreprendre.service-public.fr/vosdroits/F36763
[2] E-commerce https://entreprendre.service-public.gouv.fr/vosdroits/F35883
[3] LCEN art. 1-1 https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049568614/2026-08-31
[4] CPI L113-9 https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818/2026-11-14
[5] Cumul salarié/micro https://entreprendre.service-public.gouv.fr/vosdroits/F23264
[6] RGPD https://eur-lex.europa.eu/eli/reg/2016/679/oj/fra
[7] CNIL art. 30 et chapitre IV https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4
[8] CNIL applications mobiles https://www.cnil.fr/fr/recommandations-applications-mobiles-modifiee ; https://cnil.fr/fr/permissions-applications-mobiles-recommandations-de-la-cnil-pour-respecter-la-vie-privee
[9] CNIL AIPD https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd ; https://www.cnil.fr/fr/realiser-une-analyse-dimpact-si-necessaire
[10] CNIL droits https://www.cnil.fr/fr/respecter-les-droits-des-personnes/professionnels-comment-repondre-une-demande-de-droit-dacces
[11] CNIL traceurs https://www.cnil.fr/fr/cookies-et-autres-traceurs/que-dit-la-loi ; https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite
[12] CNIL mesure audience https://www.cnil.fr/fr/mesurer-la-frequentation-de-vos-sites-web-et-de-vos-applications
[13] Commission adéquation UK https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en
[14] Supabase DPA https://supabase.com/legal/customer-resources/data-processing-addendum ; https://supabase.com/legal/privacy-resources/data-residency-and-transfers-faq
[15] CNIL violations https://www.cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre
[16] CPI https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069414/2026-08-14
[17] GitHub licences https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository
[18] INPI recherche https://www.inpi.fr/ressources/propriete-intellectuelle/rechercher-une-marque-base-marques
[19] INPI validité marque https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/conditions-de-validite-dune-marque
[20] INPI e-Soleau https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/deposer-une-e-soleau-ou-un-entiercement
[21] AI Act version consolidée https://eur-lex.europa.eu/eli/reg/2024/1689 ; texte initial https://eur-lex.europa.eu/eli/reg/2024/1689/oj
[22] Commission transparence 02/08/2026 https://commission.europa.eu/news-and-media/news/safer-and-more-transparent-ai-2026-08-02_fr
[23] CRA https://eur-lex.europa.eu/eli/reg/2024/2847/oj
[24] Commission calendrier CRA https://commission.europa.eu/news-and-media/news/safer-and-more-secure-digital-products-2026-09-11_en
[25] Code consommation numérique https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069565/LEGISCTA000044132835/2026-08-12/
[26] Rétractation https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000044563170/2026-07-29
[27] Service Public vente https://entreprendre.service-public.gouv.fr/vosdroits/F23455
[28] Médiation https://entreprendre.service-public.gouv.fr/vosdroits/F33338
[29] Directive accessibilité https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32019L0882
[30] Service Public accessibilité https://entreprendre.service-public.gouv.fr/actualites/A18669

## Limites et statut
Étude documentaire achevée sous hypothèses, sans avis d'avocat, ni validation contrats, ni recherche marque exhaustive, ni test RGPD, ni vérification finale du champ AI Act/CRA ; certaines pages législatives n'ont pas pu être ouvertes intégralement par l'outil de consultation, confirmer textes consolidés et guides au jalon pertinent. Les documents à produire ne sont pas encore des CGU finales ni un registre opérationnel. Priorité : poursuivre études sans données personnelles et réserver les contrôles bloquants aux jalons avant diffusion. Aucune dépense.
