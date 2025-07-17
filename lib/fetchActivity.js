// lib/fetchData.ts
// je fais appel a la fonction map pour acceder au fields de chaque objet 


import {handleMissingEnv, handleFetchError} from "../error/handleError"

export async function fetchActivities() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_ACTIVITIES_API;

    if (!API_URL) {
      throw new Error(handleMissingEnv);
    }

    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(handleFetchError);
    }

    const data = await res.json();

    return data.results
      ? data.results.map((record) => ({
          identifiant: record.recordid || "",
          nom: record.nom || "",
          adresse: record.adresse || "",
          type: record.type || "",
          payant: record.payant || "",
          arrondissement: record.arrondissement || "",
        }))
      : [];
        // return data;

  } catch (error) {
    console.error(handleFetchError);
    return [];
  }
}
