// J'ai eu une erreur SSR avec leaflet quand elle est directement importée
// dans le composant FontaineTab et EspaceVertTab, car elle utilise l'objet window
// qui n'est pas défini côté serveur.
// Pour résoudre ce problème, j'ai utilisé l'import dynamique de Next.js
//j'ai trouvé cette erreur sur stackoverflow : https://stackoverflow.com/questions/76302468/how-can-i-fix-the-window-is-not-defined-error-while-using-react-leaflet-and-ne
// donc j'ai utilisé dynamic import pour charger la carte Leaflet uniquement côté client
// cela permet d'éviter l'erreur "window is not defined" lors du rendu côté serveur
// je vais donc importer la carte Leaflet de façon dynamique
// et l'utiliser dans le composant FontaineTab et EspaceVertTab

'use client';

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapLeaflet({ position, label }) {
  return (
    <div className="h-40 mt-2 rounded overflow-hidden">
      <MapContainer
        center={position}
        zoom={17}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>{label}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
