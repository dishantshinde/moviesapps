import { useContext, useEffect, useState } from "react";
import SearchBar from "../components/searchbar";
import { MoviesContext } from "../context/moviesContext";

const Dashboard = () => {
  const { setsearched } = useContext(MoviesContext);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setsearched[searchTerm];
  }, [searchTerm]);

  return (
    <div className="flex flex-col mt-10 items-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Movie app</h1>
      <SearchBar onSearch={setSearchTerm} />
      <p className="mt-4 text-gray-600">
        {searchTerm ? `Searching for: ${searchTerm}` : "No search query yet"}
      </p>
    </div>
  );
};

export default Dashboard;
