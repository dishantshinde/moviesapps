import { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searched, setsearched] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your OMDB API Key
  console.log(API_KEY, "api key");
  const fetchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        console.log("data", data);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Search term updated:", searched);
    if (searched.trim() !== "") {
      fetchMovies(searched);
    }
  }, [searched]);

  return (
    <MoviesContext.Provider
      value={{ movies, loading, error, fetchMovies, setsearched }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProvider;
