# Registre des risques
Évaluation qualitative initiale, non audit. P = probabilité présumée, I = impact ; F/M/E = faible/moyen/élevé. Réévaluer avec preuves.
| Risque | P/I | Mesure | Jalon |
|---|---|---|---|
| Régression pendant refonte | M/E | Inventaire, tests de référence, branche isolée, rollback | V1/V5 |
| Fuite entre foyers | M/E | RLS et tests croisés, séparation des caches | V6 |
| Perte de données/conflits | M/E | Révisions, export, restauration testée | V5/V6 |
| Secret dans dépôt public | M/E | Scan, séparation secrets, rotation si fuite | V6 |
| Import IA faux ou inventé | E/E | Benchmark, validation humaine, alertes incertitude/allergènes | V5 |
| Dépenses API non maîtrisées | M/E | Quotas atomiques, plafond global, arrêt | V6 |
| Limites Supabase gratuit | M/M | Vérifier plan, sauvegarde/réversibilité | V1/V7 |
| Limites iOS/PWA | E/M | Tests appareils, UX de repli, pas d'alarme garantie | V5 |
| Confusion marque Mamijote | M/E | Recherche officielle, conseil si nécessaire, identité réversible | Avant diffusion |
| Droits image/recettes/licences | M/E | Inventaire droits et autorisations | V6/V8 |
| Non-conformité RGPD/CGU | M/E | Analyse juridique, minimisation, contrats et droits | V6 |
| Dépendance fournisseur | M/M | Adaptateurs, export, scénarios migration | V1/V8 |
| Faible adoption | M/M | Onboarding, feedback, bêta et décision V8 | V8 |
| Autonomie IA surestimée | M/M | Tests réels, preuves, revue et recours humain | Tous |
| Dossier public trop détaillé | M/E | Documents privés séparés, revue avant commit | Tous |
