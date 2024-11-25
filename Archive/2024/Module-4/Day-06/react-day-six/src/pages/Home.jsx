import React from 'react';
import { pokemonData } from '../pokemonData';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {


  return (
    <div className="container">
          <div className="card-container">
            {pokemonData &&
              pokemonData.length > 0 &&
              pokemonData.map((pokemon) => (
                <div className="card" key={pokemon.id}>
                  <Link to={`pokemon/${pokemon.id}`}>
                    <img src={pokemon.image} alt={pokemon.name} className="card-image" />
                    <div className="card-content">
                      <h3>{pokemon.name}</h3>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
    </div>
  );
}
