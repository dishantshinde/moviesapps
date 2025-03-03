import { createContext, useState } from "react";

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searched, setsearched] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY; // Ensure this is set
  console.log("API Key:", API_KEY);

  const fetchMovies = async () => {
    if (!searched.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searched}`
      );
      const data = await response.json();

      console.log("API Response:", data);

      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found.");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MoviesContext.Provider
      value={{ movies, loading, error, setsearched, fetchMovies }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
