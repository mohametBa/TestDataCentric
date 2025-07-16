"use client";

import { useState } from "react";
import { TreePine, Droplets, Building } from "lucide-react";
import FontaineTab from "../component/Fontaine";
import ActiviteTab from "../component/Activity";
import EspaceVertTab from "../component/EspaceVert";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("fontaines");

  const tabs = [
    { id: "fontaines", label: "Fontaines", icon: Droplets },
    { id: "activites", label: "Activités", icon: Building },
    { id: "espaces", label: "Espaces verts", icon: TreePine },
  ];

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 min-h-screen px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 px-2">
          <h1 className="text-2xl sm:text-3xl font-bold font-nexa mb-2">
            Lieux Frais
          </h1>
          <p className="font-nexa text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Trouvez des endroits frais près de chez vous pendant les vagues de chaleur
          </p>
        </div>

        {/* les Onglets qui recuperer les données de l'api */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full font-nexa text-sm sm:text-base transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-[#5f259f] text-white"
                  : "border border-[#5f259f] text-[#5f259f] hover:bg-[#5f259f] hover:text-white"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
        <div className="px-2 sm:px-6">
          {activeTab === "fontaines" && <FontaineTab />}
          {activeTab === "activites" && <ActiviteTab />}
          {activeTab === "espaces" && <EspaceVertTab />}
        </div>
      </div>
    </div>
  );
}
