import React from "react";
import "../styles/Stage.css";
import { Heading, Text } from "@chakra-ui/react";
import Baffle from "baffle-react";

function Sintro() {
  return (
    <>
      <div className="stage-wrapper">
        <div className="stage-content">
          <Heading mb="4">
            <Baffle
              speed={50}
              characters="██< ▒█▓▒< ▓░█>▒ //░ █▒▒▓░ >░▓█ █▒░ ▒▒█< ░░░▒*"
              revealDuration={1500}
              revealDelay={0}
              update={true}
              obfuscate={false}
              id="revBaffle"
            >
              Introduction
            </Baffle>
          </Heading>
          <Text>
            Cette première semaine fut assez spéciale. En effet, Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Impedit, culpa tempora
            alias expedita nisi inventore quae dolorem molestias mollitia fugit
            dicta necessitatibus at delectus et ducimus eaque, totam aut autem?
          </Text>
          <div className="banner">
            <img
              src="https://oplus-urbanistes.fr/wp-content/uploads/logo_2019.jpg"
              alt="Logo O+ Urbanistes"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sintro;
