"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { fetchFontaines } from "../lib/fetchFontaine";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import de la carte de façon dynamique (évite l'erreur serveur)
// Trouver sur stackoverflow : https://stackoverflow.com/questions/76302468/how-can-i-fix-the-window-is-not-defined-error-while-using-react-leaflet-and-ne

const MapLeaflet = dynamic(() => import("../lib/carte2D"), { ssr: false });

export default function FontaineTab() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCommune, setSelectedCommune] = useState("");
const [error, setError] = useState(null);

  useEffect(() => {
    const getFontaines = async () => {
      const result = await fetchFontaines();
      setData(result);
      setLoading(false);
    };
    getFontaines();
  }, []);

    console.log("Fontaines fetched:", data);

  const filteredData = data.filter((item) => {
    const voie = item.fields.voie?.toLowerCase() || "";
    const commune = item.fields.commune || "";
    return (
      voie.includes(search.toLowerCase()) &&
      (selectedCommune === "" || commune === selectedCommune)
    );
  });

  const communes = Array.from(
    new Set(data.map((item) => item.fields.commune))
  ).sort();

  if (loading) return <p className="p-4">Chargement des fontaines...</p>;

  return (
    <div className="p-4 space-y-6 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <input
          type="text"
          placeholder="Rechercher une rue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2"
        />
        <select
          value={selectedCommune}
          onChange={(e) => setSelectedCommune(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Tous les arrondissements</option>
          {communes.map((commune) => (
            <option key={commune} value={commune}>
              {commune}
            </option>
          ))}
        </select>
      </div>

      <Accordion type="multiple" className="w-full space-y-2">
        {filteredData.map((item, index) => (
          <AccordionItem key={item.recordid} value={`item-${index}`}>
            <AccordionTrigger>
              {item.fields.voie || "Nom inconnu"}
            </AccordionTrigger>
            <AccordionContent>
              <p>
                <strong>Disponibilité :</strong>{" "}
                {item.fields.dispo || "Non précisé"}
              </p>
              <p>
                <strong>Modèle :</strong> {item.fields.modele || "Non précisé"}
              </p>
              <p>
                <strong>Commune :</strong>{" "}
                {item.fields.commune || "Non précisé"}
              </p>

              {item.fields.geo_point_2d && (
                <MapLeaflet
                  position={item.fields.geo_point_2d}
                  label={item.fields.voie}
                />
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
