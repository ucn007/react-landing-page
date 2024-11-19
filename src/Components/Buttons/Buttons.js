import React from "react";
import "./index.scss";
function Buttons(props) {
  return (
    <button className={props.className} type={props.type} id={props.id}>
      {props.label}
    </button>
  );
}

export default Buttons;
