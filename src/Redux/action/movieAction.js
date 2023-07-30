import axios from "axios";
import { ALLMOVIES, movieApi } from "../types/moviesType";

export const getAllMovie = async () => {
    const res = await axios.get(movieApi);
    return { type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages }
}