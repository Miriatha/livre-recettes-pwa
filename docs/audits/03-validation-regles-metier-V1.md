# Complément V1 — règles métier historiques

26/11/2026. Référence applicative `b43f829cc547fe332f89995af881068b53795106`, branche documentaire de départ `9e88323`, branche isolée `audit/famijote-validation-v1`. Les fichiers applicatifs comparés (`app.js`, `index.html`, `recipe-text-parser.js`) sont identiques à la référence. Node v24.22.3. Aucun accès Supabase, donnée personnelle, déploiement ou changement applicatif.

Ce complément distingue lecture statique, tests isolés et parcours navigateur. Il ne reprend pas les tests déjà réussis. Le précédent audit reste la preuve des parcours Chromium qui y sont décrits. Un script temporaire hors dépôt a extrait les constantes et fonctions originales de `app.js` et les a exécutées dans Node avec des objets fictifs ; cela teste les calculs, pas leur intégration à l'interface ni leur persistance.

## Catalogue et associations

**Test isolé.** Comptage du catalogue initial : 384 noms, 13 catégories, aucun doublon après normalisation historique. Répartition dans l'ordre du code : fruits/légumes 62, viandes 36, poissons 27, produits laitiers/œufs 37, féculents 35, boulangerie 18, épicerie salée 27, sucrée 32, condiments 64, surgelés 18, boissons 18, autres 10, à classer 0. Les variantes proches comme Gnocchi/Gnocchi frais ou ingrédients frais/surgelés restent distinctes ; absence de doublon normalisé ne prouve pas l'absence de doublon sémantique.

26 unités : mg, g, kg, ml, cl, l, pièce, botte, filet, bouquet, poignée, tranche, feuille, branche, tige, pousse, cm, zeste, jus, gousse, cuillère à café, cuillère à soupe, pincée, boîte, pot, sachet.

**Lecture du code.** `livreRecettes.catalogueIngredients` contient `{version:1, ingredients:[{id,nom,categorie}]}`. La normalisation retire espaces superflus, accents, casse et transforme œ en oe. La résolution de catégorie des courses cherche l'ID puis le nom exact normalisé puis « à classer ». Le regroupement utilise le nom normalisé et la famille d'unité, pas l'ID. Le catalogue invalide est utilisé en secours sans écraser sa valeur brute. Un test isolé de réparation avec « Épice » et « epice » a produit une seule entrée avec le premier ID et la catégorie renseignée du second : fusion effective, à prendre en compte lors d'une migration.

## Portions, unités et courses

| Scénario fictif | Attendu manuel | Résultat isolé obtenu |
|---|---|---|
| 500 g pour 4 portions, demander 8 | 1 000 g | 1 000 g |
| 0,5 unité pour 4, demander 2 | 0,25 | 0,25 |
| 1 unité pour 3, demander 1 | 1/3 | 0,333333333333 affiché |
| Recette A : 500 g/4 portions demandées 8 ; B : 0,5 kg/2 demandées 1 | 1,25 kg | 1,25 kg |
| Même nom : 1 pièce dans A, 250 ml dans B | 2 pièces et 125 ml séparés | 2 pièces et 125 ml séparés |
| Ingrédient à quantité `null` | exclu du calcul historique | exclu |

La formule est quantité × portions demandées / portions initiales. Les portions sont des entiers ≥ 1 ; si invalides, le coefficient retombe à 1 dans le calcul interne. Affichage arrondi à 12 décimales. Conversions seules : mg/g/kg et ml/cl/l ; autres unités regroupées uniquement à l'identique. La catégorie du groupe testé est celle du catalogue. Le rendu source parcourt les catégories dans l'ordre du catalogue et produit des éléments `li` textuels : aucune case de courses n'y apparaît ; la persistance de coches de courses ne peut donc pas être présumée. La sélection de recettes possède quant à elle des cases, distinctes des articles de courses.

**Risque moyen.** Les quantités manquantes sont exclues silencieusement de l'agrégation interne : prévoir une indication explicite dans Famijote. **Risque moyen.** Le regroupement par nom normalisé peut fusionner des identités différentes portant le même nom ; prévoir des tests et une décision explicite sur l'identité. Les résultats isolés ne démontrent pas les parcours écran ni les cas de valeurs limites complètes.

## Menu et historique

**Lecture statique.** Cinq emplacements par jour : midi plat/dessert, soir plat/dessert et en-cas. Le code contient des fonctions de copie/déplacement, duplication et suppression, et un historique séparé `livreRecettes.historique` avec date, appréciation entière de 1 à 5 et possibilité de restaurer un snapshot de recette. Certaines anciennes entrées ne contiennent pas de snapshot restaurable. La précédente session avait vérifié un seul créneau, sa persistance et une liste de courses.

**Non réalisés dans ce complément :** exercices des cinq créneaux, copie, déplacement, suppression, duplication jour/semaine et conservation des portions et de l'historique. Aucun succès n'est affirmé pour ces parcours.

## Minuteur

**Test isolé à horloge simulée.** Échéance fixée à 1 200 000 ms : à 0, 2 200, 5 000 et 1 200 001 ms, la fonction originale retourne respectivement 1 200, 1 198, 1 195 et 0 secondes. Elle calcule `max(0, ceil((finPrevue - Date.now())/1000))` ; pause stocke les secondes restantes, reprise établit une nouvelle échéance. Le remplacement d'un minuteur d'une autre étape est soumis à confirmation dans le code.

L'ancien relevé « 20:00 puis 19:55 après attente de 2,2 s » comprenait des interactions et latences supplémentaires non chronométrées entre les observations. L'essai contrôlé ne reproduit pas une avance de cinq secondes en 2,2 secondes ; il ne prouve cependant pas que le navigateur n'a aucun défaut. **Non réalisés :** pause/reprise, remplacement, expiration avec alerte et restauration en navigateur ; test réel de suspension et limites OS. Ne pas promettre une alarme en arrière-plan iPhone.

## Sauvegarde, restauration et photos

**Lecture statique.** Export JSON : `application: "livre-recettes-pwa"`, `formatVersion: 1`, `exportedAt`, `appDataVersion`, `summary`, `data` avec `recipes`, `draft`, `menuWeeks`, `history`, `ingredientCatalog`, `guidedCookingSession`. Les données locales sont stockées sous les six clés `livreRecettes.recettes`, `.brouillon`, `.menuSemaine`, `.historique`, `.catalogueIngredients`, `.cuisineGuidee`. Limite de fichier : 20 Mio. Validation de l'identifiant, version, date, présence et structure ; aperçu et confirmation ; téléchargement de sécurité tenté avant remplacement. En cas d'échec d'écriture, le code tente de restaurer les anciennes valeurs et signale si ce retour est incomplet. Ces mécanismes sont observés dans les sources et ne constituent pas une preuve de restauration réussie.

**Photos :** aucune fonctionnalité de photo de recette repérée dans `app.js` ou `index.html` par recherche de `photo` et `image` ; une icône d'application est présente. Aucune photo fictive n'a été importée ; absence de fonctionnalité à confirmer par exploration complète avant d'en faire une règle définitive. La photo privée prévue en V1 requiert un contrat de format, taille, sauvegarde et migration à concevoir.

**Non réalisés :** export/restauration comparés, fichiers invalides/incomplets/incompatibles, conservation après échec et injection d'erreur de stockage pour vérifier le rollback. Aucun format historique autre que celui identifié ci-dessus n'est garanti compatible.

## Non-régression et décision

À automatiser avant reprise : catalogue 384/13, unicité et rapprochement exact, identités ambiguës, conversions et arrondis, valeurs manquantes, portions, occurrences multiples et catégories ; cinq créneaux, copies/déplacements et historique ; minuteur à horloge contrôlée avec pause/reprise/rechargement/expiration ; export-import comparé et échecs/rollback ; images fictives et limites de stockage. Préserver le parseur séparé, les exemples de règles et formats historiques sous contrats testés ; ne pas reprendre aveuglément les comportements silencieux identifiés.

Les tests approfondis de performance, accessibilité et mobile sont reportés aux étapes prévues. La passe demandée reste incomplète sur menu, sauvegarde, photo et minuteur intégré. **Recommandation : ne pas considérer la réserve D15 levée ni clôturer V1 sur ce seul rapport.** Le périmètre reste approuvé ; terminer ces vérifications ou obtenir une acceptation explicite de leur report avant développement cible.
