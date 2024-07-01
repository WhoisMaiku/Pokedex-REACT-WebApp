import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ipAddress } from '../App'

function Create() {
    let { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({
        id: id,
        name: "",
        number: 0,
        sprite: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const addPokemon = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(pokemon);
        try {
            await axios.post(`http://${ipAddress}:8080/pokemon/new`, pokemon);
            setIsLoading(false);
            toast.success('Pokemon Added Successfully');
            navigate('/');
        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    }

    return (
        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded mt-6">
            <h2 className="text-2xl font-bold text-center">Add Pokemon</h2>
            <form onSubmit={addPokemon}>
            <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">ID</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={pokemon.id} onChange={(e) => setPokemon({...pokemon, id: Number(e.target.value)})} type="number" placeholder="Enter Pokemon's ID" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={pokemon.name} onChange={(e) => setPokemon({...pokemon, name: e.target.value})} type="text" placeholder="Enter Pokemon's Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">Number</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={pokemon.number} onChange={(e) => setPokemon({...pokemon, number: Number(e.target.value)})} type="number" placeholder="Enter Pokemon's Number" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sprite">Sprite</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={pokemon.sprite} onChange={(e) => setPokemon({...pokemon, sprite: e.target.value})} type="text" placeholder="Enter Sprite URL" />
                </div>
                <div className="flex items-center justify-center">
                    { !isLoading && ( <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:cursor-pointer" type="submit">Add Pokemon</button> ) }
                </div>
            </form>
        </div>
    )
}

export default Create; 