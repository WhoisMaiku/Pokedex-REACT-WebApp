import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Pokemon({ pokemon, isLoading }) {
    return (
        <div className="container mx-auto p-4">
            <div>
                <Link to={`/pokemon/create}`} className="inline-block text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">Add Pokemon</Link>
                <div className="mt-2"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {isLoading && <p>Loading...</p>}
                {pokemon.map((poke) => (
                    <div key={poke.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src={poke.sprite} alt={poke.name} className="mx-auto" />
                        <h2 className="text-2xl font-bold text-center">{poke.name}</h2>
                        <p className="text-center">Number: #{poke.number}</p>
                        <div className='mt-2 flex gap-4'>
                            <Link to={`/pokemon/edit/${poke.id}`} className="inline-block w-full text-center shadow-md text-sm bg-gray-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-gray-600 hover:cursor-pointer">Edit</Link>
                            <Link to={`/pokemon/delete/${poke.id}`} className="inline-block w-full text-center shadow-md text-sm bg-red-700 text-white rounded-sm px-4 py-1 font-bold hover:bg-red-600 hover:cursor-pointer">Delete</Link>
                        </div>  
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