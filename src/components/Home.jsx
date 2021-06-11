import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/api-logo.png";
import {
  Box,
  Heading,
  Button,
  useDisclosure,
  Input,
  Text,
  Stack,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import moment from "moment";

function Home() {
  var myArray = [
    "meteo",
    "pokemon",
    "health",
    "notion",
    "pokemon",
    "minecraft",
  ];

  var randomSlug = myArray[Math.floor(Math.random() * myArray.length)];

  return (
    <main>
      <div className="home-container">
        <div className="texts-home-container">
          <Heading mb={4}>Bienvenue,</Heading>
          <div className="desc-home-container">
            <Text>
              Vous êtes ici sur ma plateforme de test de différentes API.
            </Text>
            <Text>
              Vous pouvez aussi retrouver différents jeux réalisés en JavaScript
            </Text>
            <Text>
              Ce dashboard est réalisé avec{" "}
              <a href="https://fr.reactjs.org/" target="blank">
                React
              </a>
               & <a href="https://chakra-ui.com">Chakra Ui</a> .
            </Text>
            <Text>
              Cette App n'est pas responsive car elle n'a pas pour but d'être
              utilisée sur différents appareils.
            </Text>
            <Text>
              Vous pouvez retrouver mon site personnel{" "}
              <a href="https://leofrati.fr" target="blank">
                ici
              </a>
              .
            </Text>
          </div>
          <Link to={randomSlug}>
            <Button colorScheme="green" mt="3" mb="3">
              Découvrir une API au hasard
            </Button>
          </Link>
          <p>
            Si vous êtes là pour consulter mon rapport de stage, c'est par ici !
          </p>
          <Link to="/stage">
            <Button colorScheme="purple" mt="3">
              Voir mon rapport de stage 👀
            </Button>
          </Link>
        </div>
        <div className="logo-home">
          <img src={logo} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Home;
