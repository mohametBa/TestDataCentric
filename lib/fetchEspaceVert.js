// ici je recupère les données des espaces verts depuis l'API
// je vais donc retourner ce tableau pour l'utiliser dans le composant
// je vais aussi gérer les erreurs en cas de problème de fetch ou d'API manquante


import {handleMissingEnv, handleFetchError} from "../error/handleError"


export async function fetchEspaceVert() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_ESPACES_VERTS_API;

    if (!API_URL) {
      throw new Error(handleMissingEnv);
    }

    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(handleFetchError);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(handleFetchError);
    return null;
  }
}
