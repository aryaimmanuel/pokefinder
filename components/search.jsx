import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="my-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="p-2 border border-gray-300"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 ml-2"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
