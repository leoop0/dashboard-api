import React from "react";
import "../styles/Stage.css";
import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function StageSearch() {
  const modal = useDisclosure();
  return (
    <div className="stage-container">
      <div className="stage-search-container search-container">
        <Menu>
          <MenuButton mr={4} as={Button} rightIcon={<ChevronDownIcon />}>
            Sélectionner la partie souhaitée
          </MenuButton>
          <MenuList>
            <Link to="/stage/intro">
              <MenuItem>Introduction</MenuItem>
            </Link>
            <Link to="/stage/competences">
              <MenuItem>Compétences</MenuItem>
            </Link>
            <Link to="/stage/creations">
              <MenuItem>Créations</MenuItem>
            </Link>
            <Link to="/stage/conclusion">
              <MenuItem>Conclusion</MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <div className="how-container">
          <Button size="sm" colorScheme="purple" onClick={modal.onOpen}>
            Comment ça marche ?
          </Button>

          <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Comment ça marche ?</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  Je voulais à la base créer une{" "}
                  <a
                    target="blank"
                    href="https://developer.mozilla.org/fr/docs/Glossary/REST"
                  >
                    API REST
                  </a>
                  , mais après réflexion je me suis rendu compte que ce n'était
                  pas forcément la meilleure idée.
                </Text>
                <br />
                <Text>
                  En effet, cela m'aurait restreint à utiliser le même squelette
                  pour chaque partie de mon rapport, et je voulais garder une
                  certaine marge de manoeuvre.
                </Text>
                <br />
                <Text>
                  J'ai donc utilisé React Router pour afficher les différentes
                  parties du rapport (qui sont en réalité des composants.)
                </Text>
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
    </div>
  );
}

export default StageSearch;
