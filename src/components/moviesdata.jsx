import { useContext } from "react";
import { MoviesContext } from "../context/moviesContext";

const Grid = () => {
  const { movies, loading, error } = useContext(MoviesContext);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!movies || movies.length === 0)
    return <p className="text-center text-gray-500">No movies found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
        >
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.jpg"}
            alt={movie.Title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{movie.Title}</h3>
            <p className="text-gray-600">{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
