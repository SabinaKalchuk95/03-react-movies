import axios from "axios";
import type { Movie } from "../types/movie";


interface MoviesHttpResponse {
    results: Movie[];
}

const myKey = import.meta.env.VITE_TMDB_TOKEN;


export const fetchMovies = async (query: string): Promise<Movie[]> => {
    
    const response = await axios.get<MoviesHttpResponse>(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
        params: { q: query, },
        headers: { Authorization: `Bearer ${myKey}`, }
    });

    return response.data.results;
}
