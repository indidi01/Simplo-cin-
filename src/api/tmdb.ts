import type { ApiResponse, MovieResult } from "../types/type";

export async function getPopularMovies(): Promise<MovieResult[]> {
  const apiKEY = import.meta.env.VITE_TMDB_API_KEY;
  if (!apiKEY) {
    console.error("Clé API TMDB manquante. Vérifier votre fichier .env.local");
    return [];
  }

  const url = `https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKEY}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorDATA = await response.json();
      throw new Error(
        `Erreur API: ${response.status} - ${errorDATA.status_message}`
      );
    }

    const data: ApiResponse = await response.json();
    return data.results;

  } catch (error) {
    console.error(
      "Erreur lors de la récupération des films populaires:",
      error
    );
    return [];
  }
}

export async function getTopRatedMovies(): Promise<MovieResult[]> {
  const apiKEY = import.meta.env.VITE_TMDB_API_KEY;
  if (!apiKEY) {
    console.error("Clé API TMDB manquante. Vérifier votre fichier .env.local");
    return [];
  }

  const url = `https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKEY}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorDATA = await response.json();
      throw new Error(
        `Erreur API: ${response.status} - ${errorDATA.status_message}`
      );
    }

    const data: ApiResponse = await response.json();
    return data.results;

  } catch (error) {
    console.error(
      "Erreur lors de la récupération des films les mieux notés:",
      error
    );
    return [];
  }
}

export async function getUpcomingMovies(): Promise<MovieResult[]> {
  const apiKEY = import.meta.env.VITE_TMDB_API_KEY;
  if (!apiKEY) {
    console.error("Clé API TMDB manquante. Vérifier votre fichier .env.local");
    return [];
  }

  const url = `https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKEY}`,
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const errorDATA = await response.json();
      throw new Error(
        `Erreur API: ${response.status} - ${errorDATA.status_message}`
      );
    }

    const data: ApiResponse = await response.json();
    return data.results;

  } catch (error) {
    console.error(
      "Erreur lors de la récupération des nouveaux films:",
      error
    );
    return [];
  }
}