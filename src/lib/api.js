
const API_URL = "http://localhost:3001";

async function fetchApi(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Erreur API : ${endpoint}`);
  }

  return response.json();
}

export function getGarderie() {
  return fetchApi("/api/garderie");
}

export function getServices() {
  return fetchApi("/api/services");
}

export function getActivites() {
  return fetchApi("/api/activites");
}
