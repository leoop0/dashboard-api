import React from "react";
import "../styles/Stage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StageSearch from "./StageSearch";
import Sintro from "./Sintro.jsx";
import Sskills from "./Sskills";
import Screa from "./Screa";
import Sconclu from "./Sconclu";

function Stage() {
  return (
    <>
      <Router>
        <StageSearch />
        <Switch>
          {" "}
          <Route path="/stage/intro" component={Sintro} />
          <Route path="/stage/competences" component={Sskills} />
          <Route path="/stage/creations" component={Screa} />
          <Route path="/stage/conclusion" component={Sconclu} />
        </Switch>
      </Router>
    </>
  );
}

export default Stage;
