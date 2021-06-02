import React, { useState } from 'react';
import '../styles/Minecraft.css'
const api = {
    base : 'https://minecraft-api.com/api/skins/'
  }

function Minecraft() {
    const [query, setQuery] = useState('');
    const [minecraftPlayer, setminecraftPlayer] = useState({});
  
    const searchMinecraftPlayer = evt => {
      if (evt.key = "Enter"){
        fetch(`${api.base}${query.toLowerCase()}`)
        .then(response => response.json())
        .then(minecraftPlayer => {
          setminecraftPlayer(minecraftPlayer);
          setQuery('');
          console.log(minecraftPlayer);
        });
      }
    }
  return (
    <div className="minecraft-container">
        <div className="minecraft-search-container">
        <input 
        type="text"
        placeholder="Recherchez un joueur de Minecraft"
        className="input-minecraft"
        onChange = {e => setQuery(e.target.value)} 
        value={query}
        />
        <button className="submit-minecraft" onClick={searchMinecraftPlayer}>Envoyer</button>
        </div>
        {(typeof minecraftPlayer.src != "undefined") ? (
        <div className="minecraft-results">
            {minecraftPlayer}
        </div>
        ) : ('')}
        </div>
  );
}

export default Minecraft;