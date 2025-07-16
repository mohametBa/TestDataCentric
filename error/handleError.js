// je crée une api Restful pour gérer les erreurs
// dans le dossier error/handleError.js 

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
