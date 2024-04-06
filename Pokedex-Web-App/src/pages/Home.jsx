import {useState, useEffect} from 'react';
import axios from 'axios';
import Pokemon from '../containers/Pokemon';

function Home() {

    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getPokemon = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get('http://192.168.0.75:3000/pokemon');
            setPokemon(response.data);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching pokemon', error);
        }
    }

     useEffect(() => {
         getPokemon(); 
     }, []);

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-8">Pokedex</h1>
            <Pokemon pokemon={pokemon} isLoading={isLoading} />
        </div>
  );
}

export default Home;