const SearchResults = ({ data }) => {
  return (
    <div className="flex justify-center items-center">
      {data.map((pokemon) => (
        <div key={pokemon.id} className="border p-4">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-full h-40 object-cover mb-2"
          />
          <p className="text-lg font-bold">{pokemon.name}</p>
          <p>
            Height: {pokemon.height} | Weight: {pokemon.weight}
          </p>
          <p>Base Experience: {pokemon.base_experience}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
