import React, { useState } from 'react'

export default function Body() {
  const [pokemonData, setPokemonData] = useState(null)
  
  //fetch pokemon data
  async function getPokemonData() {
    let randomID = Math.floor(Math.random() * (248 - 1 + 1)) + 1;
    console.log('randomID', randomID)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomID}`);
    try {
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        console.log('response', response)
        let jsonData = await response.json();
        console.log('jsonData', jsonData)
        setPokemonData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }

  }

  return (
    <div className='componentBorder'>
        <div>Body</div>
        <button onClick={() => getPokemonData()}>Click me for Pokemon</button>
        <div style={{marginTop: '10px'}}>Pokemon: {pokemonData ? pokemonData.name : ''}</div>
        <img src={pokemonData && pokemonData.sprites && pokemonData.sprites.front_default ? pokemonData.sprites.front_default : ''} alt="pokemon image" />
    </div>
  )
}
