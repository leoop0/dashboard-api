import React, { useState } from 'react';
import '../styles/Pokemon.css'
import '../styles/Toast.css'
const api = {
  base : 'https://pokeapi.co/api/v2/pokemon/'
}


function Pokemon() {
  const [query, setQuery] = useState('');
  const [pokemon, setpokemon] = useState({});

  const searchPokemon = evt => {
    if (evt.key = "Enter"){
      
      fetch(`${api.base}${query.toLowerCase()}`,)
      .then(response => response.json())
      .then(pokemon => {
        setpokemon(pokemon);
        setQuery('');
        console.log(pokemon);
      }
      )
      .catch(error => errorToast());
      
    }
  }

  const toasts = document.getElementById("toasts");
  console.log(toasts);
  const notifTxt = "Le nom du Pokemon est incorrect.";

  function errorToast(){
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = notifTxt;
    toasts.appendChild(notif);
    setTimeout(() => notif.remove(), 5000);
  }
  
  var artwork = "official-artowrk";
  return (
    <div className="pokemon-container" id="test">
        <div className="pokemon-search-container">
        <input 
        type="text"
        placeholder="Recherchez un pokemon (en anglais)/numéro"
        className="input-pokemon"
        onChange = {e => setQuery(e.target.value)} 
        value={query}
        />
        <button className="submit-pokemon" onClick={searchPokemon}>Envoyer</button>
        </div>
        {(typeof pokemon.abilities != "undefined") ? (
        <div className="pokemon-results">
          <p>{pokemon.species.name}</p>
          <p>N° Pokedex National : {pokemon.order}</p>
          <div className="artwork">
            {/* <img src={pokemon.sprites.other.$(artwork).front_default} alt="" /> */}
          </div>
          <div className="sprites">
          <div className="pokemon-sprite pokeImg">
          <img src={pokemon.sprites.front_default} alt="" />
          <p>Forme Normale</p>
          </div>
          <div className="pokemon-shiny pokeImg">
          <img src={pokemon.sprites.front_shiny} alt="" />
          <p>Forme Chromatique</p>
          </div>
          <div className="pokemon-types">
            <p>{pokemon.types.type}</p>
          </div>
          </div>
        </div>
         ) : ('')}
         <div id="toasts"></div>
    </div>
  );
}

export default Pokemon;