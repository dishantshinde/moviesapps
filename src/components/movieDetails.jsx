import { useContext } from "react";
import { MoviesContext } from "../context/moviesContext";

const MovieDetails = () => {
  const { selectedMovie, setSelectedMovie } = useContext(MoviesContext);

  if (!selectedMovie) return null; // Hide if no movie is selected

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg mt-6">
      <button
        onClick={() => setSelectedMovie(null)}
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
      >
        ⬅ Back
      </button>

      <h2 className="text-2xl font-bold">{selectedMovie.Title}</h2>
      <img
        className="mt-4 w-full rounded-lg"
        src={selectedMovie.Poster}
        alt={selectedMovie.Title}
      />
      <p className="mt-2">
        <strong>Year:</strong> {selectedMovie.Year}
      </p>
      <p className="mt-2">
        <strong>Genre:</strong> {selectedMovie.Genre}
      </p>
      <p className="mt-2">
        <strong>Director:</strong> {selectedMovie.Director}
      </p>
      <p className="mt-2">
        <strong>Plot:</strong> {selectedMovie.Plot}
      </p>
    </div>
  );
};

export default MovieDetails;
