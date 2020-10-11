import React from "react";
import ReactDOM from "react-dom";
import Buttons from "./Buttons";
import "./index.css";

class ButtonsApp extends React.Component {
  render() {
    return (
      <article>
        <h1>🛕 Buttons 🛕</h1>
        <div className="buttons">
          <Buttons
            variant=""
            text="<Defaut />"
            type="Default"
            name="hover1"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            variant="outline"
            text="<Button variant='outline'/>"
            type="Default"
            name="hover2"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            variant="text"
            text="<Button variant='text'/>"
            type="Default"
            name="hover3"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            disabled="shadow"
            text="<Button disableShadow />"
            type="Default"
            name="disabledShadow"
          >
            Default
          </Buttons>

          <Buttons
            text="<Button variant='text disabled'/>"
            type="Disabled"
            name="textDisabled"
            disabled="disabled"
          >
            Disabled
          </Buttons>

          <Buttons
            icon="startIcon"
            text="<Button endIcon='local_grocery_store'/>"
            type="Default"
            name="iconBefore"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            variant="text"
            icon="endIcon"
            text="<Button startIcon='local_grocery_store'/>"
            type="Default"
            name="endIcon"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            text="<Button size='sm' />"
            type="Default"
            size="sm"
            name="sm"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            size="md"
            text="<Button size='md' />"
            type="Default"
            name="md"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            size="lg"
            text="<Button size='lg'/>"
            type="Default"
            name="lg"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            color="default"
            text="<Button color='default' />"
            type="Default"
            name="defClr"
            disabled=""
          >
            Default
          </Buttons>

          <Buttons
            color="primary"
            text="<Button color='primary' />"
            type="Default"
            name="primary"
            disabled=""
          >
            Primary
          </Buttons>

          <Buttons
            color="secondary"
            text="<Button color='secondary' />"
            type="Secondary"
            name="secondary"
            disabled=""
          >
            Secondary
          </Buttons>

          <Buttons
            color="danger"
            text="<Button color='danger' />"
            type="Danger"
            name="danger"
            disabled=""
          >
            Danger
          </Buttons>

          <Buttons
            text="❤😎😎💕"
            type="good"
            name="mine"
            disabled=""
          >
            👩‍🦰🧓👧
          </Buttons>
        </div>
      </article>
    );
  }
}

ReactDOM.render(<ButtonsApp />, document.getElementById("container"));
