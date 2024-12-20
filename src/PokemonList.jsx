import axios from "axios"
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard"

function PokemonList() {
    const [pokemon, setPokemon] = useState([])
    const [search,setSearch]=useState("")
    const Api = "https://pokeapi.co/api/v2/pokemon?limit=124";
    const getPokemon = async () => {
        try {
            const res = await axios.get(Api);
            const data=res.data 
            
            const detailedPokemonData = data.results.map(async (currentPokemon) => {
                const res = await axios.get(currentPokemon.url)
             return res.data
                
            })
            const detailedResponses=await Promise.all(detailedPokemonData)
            setPokemon(detailedResponses)
        } catch (error) {
            console.log(error)
        }
         
    }
    useEffect(() => {
     getPokemon()
    }, [])

   const searchData = pokemon.filter((currPokemon) =>
     currPokemon.name.toLowerCase().includes(search.toLowerCase())
   );
    
  return (
    <div className="body">
          <h1>hello from Pokemon</h1>
          <input type="text" value={search} onChange={(e) => {
              setSearch(e.target.value)
          }}/>
      <section>
        <ul>
          {searchData.map((currentPokemon) => {
            return (
              <PokemonCard key={currentPokemon.id} data={currentPokemon} />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default PokemonList
