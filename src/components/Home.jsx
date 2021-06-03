import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css';
import logo from '../assets/api-logo.png';

function Home() {
    var myArray = [
        "meteo",
        "pokemon",
        "health",
        "notion",
        "pokemon",
        "minecraft",
      ];
      
      var randomSlug = myArray[Math.floor(Math.random()*myArray.length)];

  return (
    <main>
    <div className="home-container">
        <div className="texts-home-container">
        <h1>Bienvenue,</h1>
        <div className="desc-home-container">
        <p>Vous êtes ici sur ma plateforme de test de différentes API.</p>
        <p>Ce dashboard est réalisé avec <a href="https://fr.reactjs.org/" target="blank">React</a>.</p>
        <p>Cette App n'est pas responsive car elle n'a pas pour but d'être utilisée sur différents appareils.</p>
        <p>Vous pouvez retrouver mon site personnel <a href="https://leofrati.fr" target="blank">ici</a>.</p>
        </div>
        <Link to={randomSlug}><button>Découvrir une API au hasard</button></Link>
        <p>Si vous êtes là pour consulter mon rapport de stage, c'est par ici !</p>
        <Link to="/stage"><button className="btn-stage">Voir mon rapport de stage 👀</button></Link>
        </div>
        <div className="logo-home">
          <img src={logo} alt="" />
        </div>
    </div>
    </main>
  );
}

export default Home;
