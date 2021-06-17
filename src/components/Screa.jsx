import React from "react";
import "../styles/Stage.css";
import { Heading, Text } from "@chakra-ui/react";
import Baffle from "baffle-react";

function Screa() {
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
              Créations
            </Baffle>
          </Heading>
          <Text>
            Cette première semaine fut assez spéciale. En effet, Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Impedit, culpa tempora
            alias expedita nisi inventore quae dolorem molestias mollitia fugit
            dicta necessitatibus at delectus et ducimus eaque, totam aut autem?
          </Text>
        </div>
      </div>
    </>
  );
}

export default Screa;
