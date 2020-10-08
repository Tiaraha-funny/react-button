import React from "react";
import ReactDOM from "react-dom";
import Buttons from "./Buttons";
import "./index.css";

class ButtonsApp extends React.Component {

  constructor() {
    super();
    this.state = {
      button: "button"
    }
  }
    
  render() {
    return <article>
      <h1>Buttons</h1>
      <div className="buttons">
        <Buttons className="one"/>
        <Buttons className="two"/>
        <Buttons className="three"/>
        <Buttons className="fourt"/>
        <Buttons className="five"/>
        <Buttons className="six"/>
        <Buttons className="seven"/>
        <Buttons className="eight"/>
        <Buttons className="nine"/>
        <Buttons className="ten"/>
        <Buttons className="eleven"/>
        <Buttons className="twelve"/>
        <Buttons className="thirteen"/>
        <Buttons className="fourteen"/>
        <Buttons className="fifteen"/>
        <Buttons className="seventeen"/>
        <Buttons className="eighteen"/>
        <Buttons className="nineteen"/>
        <Buttons className="twenty"/>
        <Buttons className="twentyOne"/>
      </div>
    </article>
  }
}

ReactDOM.render(<ButtonsApp />, document.getElementById("container"));
