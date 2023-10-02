import { useState } from "react";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query}/`
      );
      const data = await response.json();
      setResults([data]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Pokefinder</h1>
      <Search onSearch={handleSearch} />
      {results.length > 0 ? (
        <SearchResults data={results} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Home;
