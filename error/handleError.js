// je crée une api Restful avec une class ApiError
// et deux fonctions pour gérer les erreurs de récupération des données
// ces fonctions seront utilisées dans les fichiers de récupération des données
// dans le dossier error/handleError.js 
// pour un codage plus propre et réutilisable

export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

export function handleMissingEnv(name) {
  throw new ApiError(`L'URL de l'API ${name} est manquante dans les variables d'environnement`);
}

export function handleFetchError(response) {
  throw new ApiError("Erreur lors du fetch", response.status);
}
