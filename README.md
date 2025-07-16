
TestQuanticFactory
 ❄️ Paris Endroits Frais – Application Data-Centric

Projet d'application web réalisée dans le cadre d’un test technique. Elle permet aux utilisateurs de trouver des endroits frais à Paris en s’appuyant sur les données open data de la Ville de Paris.

🎯 Objectif

Faciliter la recherche de lieux rafraîchissants à Paris (espaces verts, fontaines, lieux publics) en période de forte chaleur grâce à une interface simple et interactive.

🚀 Fonctionnalités principales

- ✅ Filtres par arrondissement, type d’activité, type d’espace vert, gratuité/paiement
- ✅ Données affichées sous forme de :
  - 📋 Tableaux
  - 📦 Cartes (shadcn/ui)
  - 🗺️ Carte interactive (Leaflet)
  - 🔽 Accordéons pour les espaces verts
- ✅ Affichage des informations importantes : nom, adresse, type, gratuité, arrondissement…
- ✅ Utilisation des coordonnées géographiques (`geo_point_2d`) pour la localisation

📊 Données utilisées

- 🌳 Espaces verts : nom, adresse, type, catégorie, géolocalisation…
- ⛲ Fontaines : nom, rue, géolocalisation
- 🏛️ Activités : type d'activité, payant ou non, arrondissement

Toutes les données sont issues de [opendata.paris.fr](https://opendata.paris.fr/).

🧱 Stack technique

- Framework : [Next.js](https://nextjs.org/)
- Librairie JS : React
- Style : [Tailwind CSS](https://tailwindcss.com/)
- Composants UI : [shadcn/ui](https://ui.shadcn.com/)
- Cartes : [React Leaflet](https://react-leaflet.js.org/)
- Langage : JavaScript (client-side)

 🧪 Fonctionnement

- Les données sont récupérées via des fonctions `fetch` depuis des fichiers dans `/lib`.
- Les composants utilisent `useEffect` et `useState` pour gérer le chargement et l’affichage.
- Chaque entité (fontaine, activité, espace vert) a son propre composant (ex : `FontaineTab`, `ActivityTab`, `EspaceVertTab`).


<img width="1026" height="590" alt="Capture d’écran 2025-07-15 à 18 54 08" src="https://github.com/user-attachments/assets/0725d6d9-d45f-4601-8153-0a3708b74ad0" />
<img width="1034" height="652" alt="Capture d’écran 2025-07-15 à 18 53 45" src="https://github.com/user-attachments/assets/0e80231a-798d-44c3-8cf8-00d1ae0520af" />
<img width="1028" height="588" alt="Capture d’écran 2025-07-15 à 18 45 42" src="https://github.com/user-attachments/assets/157b3837-bc77-4e7d-a640-d60dd9769282" />
<img width="1027" height="471" alt="Capture d’écran 2025-07-15 à 18 44 46" src="https://github.com/user-attachments/assets/14a7291a-4cb3-4e0d-9f00-ef9bb682fa0e" />


 ▶️ Installation

```bash
git clone https://github.com/-------------------------------
cd --------
npm install
npm run dev

