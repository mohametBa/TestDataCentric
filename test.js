export async function fetchData() {
  try {
    const res = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/fontaines-a-boire/records?limit=20");

    if (!res.ok) {
      throw new Error("Échec de la récupération des produits");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Erreur dans fetchData:", error);
    return [];
  }
}
