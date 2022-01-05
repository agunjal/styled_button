import React from "react";

function StyledBtn(props) {
  return (
    <button style={props.style} className="btn">
      {props.children}
    </button>
  );
}

export default StyledBtn;
