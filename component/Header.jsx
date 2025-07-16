"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import logo from "../public/qlogo.png";
import Image from "next/image";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex flex-wrap items-center justify-between bg-white text-black dark:bg-[#0f172a] dark:text-white border-b border-gray-200 dark:border-gray-700 px-4 py-3 sticky top-0 z-40">
      <div className="flex items-center gap-3 min-w-0">
        <Image src={logo} alt="Logo" width={30} height={30} className="shrink-0" />
        <h1 className="text-lg md:text-xl font-bold truncate">
          Quantic Factory Test
        </h1>
      </div>
      <div className="flex items-center mt-2 sm:mt-0 sm:ml-auto">
        {theme === "light" ? (
          <Moon
            className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
            onClick={toggleTheme}
          />
        ) : (
          <Sun
            className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6"
            onClick={toggleTheme}
          />
        )}
      </div>
    </header>
  );
}
