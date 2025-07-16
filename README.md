
TestQuanticFactory
 ❄️ Paris Endroits Frais – Application Data-Centric

Projet d'application web réalisée dans le cadre d’un test technique. Elle permet aux utilisateurs (Touristes, Habitants) de trouver des endroits frais à Paris en s’appuyant sur les données open data de la Ville de Paris.

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

<img width="1027" height="471" alt="Home" src="https://github.com/user-attachments/assets/ab976cc0-c408-47ca-b127-93f85decf6e4" />
<img width="1026" height="590" alt="Espace vert" src="https://github.com/user-attachments/assets/a9d5b930-8cf2-4f3c-8fef-14148d245273" />
<img width="1028" height="588" alt="Composant fontaine" src="https://github.com/user-attachments/assets/eaa35d25-3042-4964-90fe-139229d8d910" />
<img width="1034" height="652" alt="activité" src="https://github.com/user-attachments/assets/dba98f2d-3ef8-48f0-936d-d6afcfdb79dd" />



 ▶️ Installation

```bash
git clone https://github.com/-------------------------------
cd --------
npm install
npm run dev

