// lib/fetchFontaine.ts
// data.records est un tableau d'objets d'apres la structure de l'API
// je vais aussi gérer les erreurs en cas de problème de fetch ou d'API manquante

import {handleMissingEnv, handleFetchError} from "../error/handleError"


export async function fetchFontaines() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_FONTAINES_API;

    if (!API_URL) {
      throw new Error(handleMissingEnv);
    }

    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(handleFetchError + res.status);
    }

    const data = await res.json();
    return data.records; 
  } catch (error) {
    console.error(handleFetchError);
    return [];
  }
}
