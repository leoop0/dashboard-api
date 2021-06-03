import React, { useState } from "react";
import "../styles/Stage.css";
const api = {
  base: "https://pokeapi.co/api/v2/Stage/",
};

function Stage() {

  return (
    <div className="stage-container">
      <div className="stage-search-container search-container">
        <select name="weeks" id="week-select" className="input-stage inputSearch">
          <option value="">Choisir une semaine</option>
          <option value="semaine1">Semaine 1</option>
          <option value="semaine2">Semaine 2</option>
          <option value="semaine3">Semaine 3</option>
          <option value="semaine4">Semaine 4</option>
          <option value="semaine5">Semaine 5</option>
        </select>
        <button className="submit-stage submitSearch" onClick="">
          Envoyer
        </button>
      </div>
      <div className="howWorks-container">
        <div className="howWorks">
          <div className="how-content">
            <h2>Comment ça marche ?</h2>
            <p>Pour réaliser ce rapport de stage, j'ai créé une <a target="blank" href="https://developer.mozilla.org/fr/docs/Glossary/REST">API REST</a>.</p>
            <p>
              Lorsque vous sélectionnez une semaine, le script ci-dessous envoie
              une requête GET à mon API afin d'afficher le contenu de la semaine
              en question.
            </p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stage;
