const API_KEY = "f16de1ee2007466dc667c61eda44f1d0";
const BASE_URL = "https://api.themoviedb.org/3";

// Fetch popular movies
export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch popular movies: ${response.statusText}`);
        }
        const data = await response.json();
        return data.results || []; // Ensure results is always an array
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        throw error; // Re-throw the error so it can be handled in the calling code
    }
};

// Search movies based on a query
export const searchMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error(`Failed to search movies: ${response.statusText}`);
        }
        const data = await response.json();
        return data.results || []; // Ensure results is always an array
    } catch (error) {
        console.error("Error searching for movies:", error);
        throw error; // Re-throw the error so it can be handled in the calling code
    }
};
