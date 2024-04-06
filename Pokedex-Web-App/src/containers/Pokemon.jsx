import PropTypes from 'prop-types';

function Pokemon({ pokemon, isLoading }) {
    return (
        <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {isLoading && <p>Loading...</p>}
                    {pokemon.map((poke) => (
                        <div key={poke.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                            <img src={poke.sprite} alt={poke.name} className="mx-auto" />
                            <h2 className="text-2xl font-bold text-center">{poke.name}</h2>
                            <p className="text-center">Number: #{poke.number}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
}

// PropTypes
Pokemon.propTypes = {
    pokemon: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default Pokemon;