import React from "react";
import { render } from "react-dom";
import StyledBtn from "./StyledBtn";

const styleBtnRed = {
  background: "red"
};

const App = () => (
  <div>
    <StyledBtn>Click Me!</StyledBtn>
    <br />
    <br />
    <StyledBtn style={styleBtnRed}>Not Me!</StyledBtn>
    <br />
    <br />
    <StyledBtn>Or Me!</StyledBtn>
  </div>
);

render(<App />, document.getElementById("root"));
