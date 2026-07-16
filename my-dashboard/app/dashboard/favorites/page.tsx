import { FavoritePokemons } from "@/pokemons";


export const metadata = {
    title: 'Favoritos',
    description: 'Listado de pokémons favoritos',
}


export default async function FavoritesPage() {


    'use cache';


    return (
        <div className="flex flex-col">
            <span className="text-2xl my-2">Pokemons Favoritos<small className="text-blue-500">Global State</small></span>

            <FavoritePokemons />
        </div>
    )
}