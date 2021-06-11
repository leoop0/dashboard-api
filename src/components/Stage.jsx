import React from "react";
import "../styles/Stage.css";
import {
  Select,
  Button,
  Heading,
  Text,
  Code,
  useDisclosure,
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
// const api = {
//   base: "https://pokeapi.co/api/v2/Stage/",
// };

function Stage() {
  const modal = useDisclosure();
  return (
    <div className="stage-container">
      <div className="stage-search-container search-container">
        <Select
          size="md"
          w="450px"
          placeholder="Selectionner une semaine"
          colorScheme="purple"
          variant="filled"
        >
          <option value="semaine1">Semaine 1</option>
          <option value="semaine2">Semaine 2</option>
          <option value="semaine3">Semaine 3</option>
        </Select>
        <Button
          colorScheme="purple"
          ml={2}
          className="submit-stage submitSearch"
          onClick=""
        >
          Envoyer
        </Button>
      </div>
      <div className="how-container">
        <Button size="sm" colorScheme="yellow" mt="12" onClick={modal.onOpen}>
          Comment ça marche ?
        </Button>

        <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Comment ça marche ?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Pour réaliser ce rapport de stage, j'ai créé une{" "}
                <a
                  target="blank"
                  href="https://developer.mozilla.org/fr/docs/Glossary/REST"
                >
                  API REST
                </a>
                .
              </Text>

              <Text>
                Lorsque vous sélectionnez une semaine, le script ci-dessous
                envoie une requête GET à mon API afin d'afficher le contenu de
                la semaine en question.
              </Text>
              <Code>API en cours de création..</Code>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" onClick={modal.onClose}>
                C'est noté !
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default Stage;
