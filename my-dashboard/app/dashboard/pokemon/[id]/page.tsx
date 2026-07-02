import { Pokemon } from "@/pokemons/interfaces/pokemon";

interface Props {
    params: Promise<{ id: string }>
}

export const metadata = {
    title: '',
    description: '',
}

const getPokemon = async (id: string): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'force-cache',

    });
    const data = await response.json();
    return data;
}

export default async function PokemonPage({ params }: Props) {

    const { id } = await params;
    const pokemon = await getPokemon(id);
    return <div>
        <h1>Pokemon Page {id}</h1>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
}