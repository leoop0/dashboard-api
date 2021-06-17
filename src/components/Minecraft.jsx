import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "../styles/Minecraft.css";
const api = {
  base: "https://minecraft-api.com/api/skins/",
};

function Minecraft() {
  let skinBox = document.querySelector("#boxSkin");
  const [query, setQuery] = useState("");

  function searchMinecraftPlayer() {
    let minecraftPlayer = api.base + query;
    console.log(minecraftPlayer);
    skinBox.innerHTML =
      "<div className='skin-result' style='border:solid 1px #21d9c0; border-radius: 10px; padding:20px; max-width: 500px; min-width: 350px;'>Vous pouvez retrouver votre skin ici : <a class='skinss' target='_blank' href='" +
      minecraftPlayer +
      "'>Voir le skin !</a> <br><p class='warnMC'>Si la page est blanche, c'est que le joueur n'a pas été trouvé.</p></div>";
  }

  return (
    <main>
      <div className="minecraft-container">
        <div className="minecraft-search-container search-container">
          <Input
            type="text"
            placeholder="Recherchez un joueur de Minecraft JAVA Edition"
            className="input-minecraft inputSearch"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            size="md"
            w="450px"
            variant="filled"
          />
          <Button
            className="submit-minecraft submitSearch"
            onClick={searchMinecraftPlayer}
            ml={2}
            colorScheme="green"
          >
            Envoyer
          </Button>
        </div>
        <div className="return-skin" id="skin">
          <div className="skin-box" id="boxSkin"></div>
        </div>
      </div>
      <div id="toasts"></div>
    </main>
  );
}

export default Minecraft;
