import React from 'react'

const PokemonCard = ({data}) => {
  return (
    <li className='pokemon-card'>
          <img src={data.sprites.other.dream_world.front_default} alt="" />
          <h4>{ data.name}</h4>
    </li>
  )
}

export default PokemonCard
