<<<<<<< HEAD
import React, { useState } from "react";
import { Heading, Input } from "@chakra-ui/react";
import { Button, color } from "@chakra-ui/react";
import "../styles/Minecraft.css";
const api = {
  base: "https://minecraft-api.com/api/skins/",
};

function Minecraft() {
  let skinBox = document.querySelector("#boxSkin");
  console.log(skinBox);
  const [query, setQuery] = useState("");

  function searchMinecraftPlayer() {
    let minecraftPlayer = api.base + query;
    console.log(minecraftPlayer);
    skinBox.innerHTML =
      "<div className='skin-result' style='border:solid 1px #21d9c0; border-radius: 10px; padding:20px; max-width: 500px; min-width: 350px;'>Vous pouvez retrouver votre skin ici : <a target='blank' href='" +
      minecraftPlayer +
      "'> Click ! </a></div>";
  }

  return (
    <main>
      <div className="minecraft-container">
        <div className="minecraft-search-container search-container">
          <Input
            type="text"
            placeholder="Recherchez un joueur de Minecraft"
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
=======
import React, { useState } from "react";
import { Heading, Input } from "@chakra-ui/react";
import { Button, color } from "@chakra-ui/react";
import "../styles/Minecraft.css";
const api = {
  base: "https://minecraft-api.com/api/skins/",
};

function Minecraft() {
  let skinBox = document.querySelector("#boxSkin");
  console.log(skinBox);
  const [query, setQuery] = useState("");

  function searchMinecraftPlayer() {
    let minecraftPlayer = api.base + query;
    console.log(minecraftPlayer);
    skinBox.innerHTML =
      "<div className='skin-result' style='border:solid 1px #21d9c0; border-radius: 10px; padding:20px; max-width: 500px; min-width: 350px;'>Vous pouvez retrouver votre skin ici : <a target='blank' href='" +
      minecraftPlayer +
      "'> Click ! </a></div>";
  }

  return (
    <main>
      <div className="minecraft-container">
        <div className="minecraft-search-container search-container">
          <Input
            type="text"
            placeholder="Recherchez un joueur de Minecraft"
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
>>>>>>> 85adb06badaa1d6737ff414e403131d427267f83
