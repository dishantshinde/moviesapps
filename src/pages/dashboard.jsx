import { useContext, useState } from "react";
import SearchBar from "../components/searchbar";
import { MoviesContext } from "../context/moviesContext";
import Grid from "../components/moviesdata";

const Dashboard = () => {
  const { setsearched, fetchMovies } = useContext(MoviesContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchClick = () => {
    setsearched(searchTerm);
    fetchMovies(); // Fetch movies only when the button is clicked
  };

  return (
    <div className="flex flex-col mt-10 items-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Movie App</h1>
      <SearchBar onSearch={setSearchTerm} />

      <button
        onClick={handleSearchClick}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>

      <p className="mt-4 text-gray-600">
        {searchTerm ? `Searching for: ${searchTerm}` : "No search query yet"}
      </p>

      <Grid />
    </div>
  );
};

export default Dashboard;
