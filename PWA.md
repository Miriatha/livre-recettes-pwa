# Fonctionnement PWA

Le fichier `manifest.webmanifest` décrit l’application installable et ses icônes. Le fichier `service-worker.js` met en cache uniquement les fichiers statiques locaux nécessaires au démarrage.

Le cache courant s’appelle `livre-recettes-static-v1`. Après une modification publiée de HTML, CSS, JavaScript, du manifest ou des icônes, incrémenter `CACHE_VERSION` dans `service-worker.js` (`v2`, puis `v3`, etc.). L’application proposera alors « Mettre à jour » ou « Plus tard ».

Pour tester : servir le dossier en HTTP local, ouvrir les outils de développement du navigateur, puis vérifier les sections **Manifest**, **Service Workers** et **Cache Storage** de l’onglet **Application**. Après une première visite en ligne, activer le mode hors connexion et recharger la page.

Pendant le développement, l’onglet **Application > Service Workers** permet de désenregistrer le service worker et **Storage** permet de supprimer uniquement les caches. Ne pas effacer les données du site si les recettes locales doivent être conservées : le cache PWA et `localStorage` sont indépendants.
