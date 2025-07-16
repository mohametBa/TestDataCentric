// ici je choisis un filtre selon le type d'espace vert et la localisation
// si aucun filtre n'est selectionné on affiche tous les espaces verts

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { fetchEspaceVert } from "../lib/fetchEspaceVert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import dynamique de la carte Leaflet (désactive SSR)
// meme erreur que pour Fontaine.jsx
// Trouver sur stackoverflow : https://stackoverflow.com/questions/76302468/how-can-i-fix-the-window-is-not-defined-error-while-using-react-leaflet-and-ne

const MapLeaflet = dynamic(() => import("../lib/carte2D"), { ssr: false });

export default function EspaceVertTab() {
  const [espaces, setEspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState("");
  const [selectedArrondissement, setSelectedArrondissement] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchEspaceVert();
        setEspaces(data?.results || []);
      } catch (err) {
        setError("Une erreur est survenu lors du chargement des donnée.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // console.log("Espaces verts fetched:", espaces);

  if (loading) return <p>Chargement des espaces verts...</p>;
  if (error) return <p>{error}</p>;

  const types = [...new Set(espaces.map((e) => e.type).filter(Boolean))];
  const arrondissements = [...new Set(espaces.map((e) => e.arrondissement).filter(Boolean))];

  const filteredEspaces = espaces.filter((e) => {
    return (
      (!selectedType || e.type === selectedType) &&
      (!selectedArrondissement || e.arrondissement === selectedArrondissement)
    );
  });
  return (
    <div className="p-4 space-y-6 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex flex-wrap gap-4">
        <select
          className="border px-4 py-2 rounded"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Tous les types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded"
          value={selectedArrondissement}
          onChange={(e) => setSelectedArrondissement(e.target.value)}
        >
          <option value="">Tous les arrondissements</option>
          {arrondissements.map((arr) => (
            <option key={arr} value={arr}>
              {arr}
            </option>
          ))}
        </select>
      </div>

      <Accordion type="multiple" className="w-full space-y-2">
        {filteredEspaces.map((e) => (
          <AccordionItem key={e.identifiant} value={e.identifiant} className="border rounded">
            <AccordionTrigger>{e.nom}</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1 text-sm">
                <p><strong>Type :</strong> {e.type}</p>
                <p><strong>Catégorie :</strong> {e.categorie}</p>
                <p><strong>Adresse :</strong> {e.adresse}</p>
                <p><strong>Arrondissement :</strong> {e.arrondissement}</p>
              </div>
              {e.geo_point_2d && (
                <div className="mt-4">
                  <MapLeaflet position={e.geo_point_2d} label={e.nom} />
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
