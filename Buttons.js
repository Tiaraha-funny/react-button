import React from "react";
import "./index.css";

function Buttons(prop) {
  
  return (
    <div>
      <p>{prop.myBtns.text}</p>
      <button className={prop.myBtns.name}>{prop.myBtns.type}</button>
    </div>
  );
}
export default Buttons;
