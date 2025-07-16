// On selection le filtre selon le type d'activité et le statut payant ou gratuite 
// si aucun filtre n'est selectionné on affiche toutes les activités
// on utilise useState pour gérer l'état des filtres et useEffect pour filtrer les données
// on utilise fetchActivities pour récupérer les données depuis l'API

"use client";

import { useState, useEffect } from "react";
import { fetchActivities } from "../lib/fetchActivity";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ActivityTab() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [typeFilter, setTypeFilter] = useState("");
  const [payantFilter, setPayantFilter] = useState("");

  useEffect(() => {
    const getActivities = async () => {
      try {
        const result = await fetchActivities();
        setData(result);
        setFiltered(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getActivities();
  }, []);

  // console.log("Data fetched:", data);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const payant = (item.payant || "Non").toLowerCase();
      const type = item.type?.toLowerCase() || "";

      const matchPayant =
        !payantFilter ||
        (payantFilter === "oui" && payant === "oui") ||
        (payantFilter === "non" && payant !== "oui");

      const matchType = !typeFilter || type.includes(typeFilter.toLowerCase());

      return matchPayant && matchType;
    });

    setFiltered(filteredData);
  }, [payantFilter, typeFilter, data]);

  if (loading) return <p className="p-4">Chargement des activités...</p>;
  if (error) return <p className="text-red-600">Erreur de chardement des données : {error}</p>;

  const types = Array.from(
    new Set(data.map((a) => a.type).filter(Boolean))
  ).sort();

  return (
    <div className="p-4 space-y-6 bg-white text-primary dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border px-3 py-2 rounded w-full md:w-1/2 dark:bg-gray-800 dark:text-white"
        >
          <option value="">Tous les types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={payantFilter}
          onChange={(e) => setPayantFilter(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">Options</option>
          <option value="oui">Payant</option>
          <option value="non">Gratuit</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((activity, index) => (
          <Card
            key={index}
            className="border border-[#5f259f] font-nexa dark:border-purple-300 bg-white dark:bg-gray-800 dark:text-white rounded-lg transition-colors duration-300"
          >
            <CardHeader>
              <CardTitle className=" text-[#5f259f] dark:text-white " >{activity.nom || "Nom non précisé"}</CardTitle>
              <CardDescription>
                {activity.type || "Type inconnu"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-1 text-sm font-nexa dark:text-gray-200">
              <p>
                <strong>Adresse :</strong> {activity.adresse || "Non précisée"}
              </p>
              <p>
                <strong>Payant :</strong>{" "}
                {activity.payant?.toLowerCase() === "oui" ? "Oui" : "Non"}
              </p>
              <p>
                <strong>Arrondissement :</strong>{" "}
                {activity.arrondissement || "N/A"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
