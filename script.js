import React from "react";
import ReactDOM from "react-dom";
import Buttons from "./Buttons";
import "./index.css";

class ButtonsApp extends React.Component {

  render() {
    return <article>
      <h1>Buttons</h1>
      <div className="buttons">
        <Buttons myBtns = {{
            text: "<Button />",
            type: "Default",
            name: "btnOne",
        }}/>
        <Buttons myBtns = {{
          text: "&:hover, &:focus",
          type: "Default",
          name: "btnTwo",
        }}/>
        <Buttons 
        myBtns = {{
          text: "<Button variant='outline'/>",
          type: "Default",
          name: "btnThree",
        }}
          />
        <Buttons 
        myBtns = {{
          text: "&:hover, &:focus",
          type: "Default",
          name: "btnFour",
        }}
        />
        <Buttons 
        myBtns = {{
          text: "<Button variant='text'/>",
          type: "Default",
          name: "btnFive",
        }}/>
        <Buttons 
        myBtns = {{
          text: "&:hover, &:focus",
          type: "Default",
          name: "btnSix",
        }}/>
        <Buttons myBtns = {{
          text: "<Button disableShadow />",
          type: "Default",
          name: "btnSeven",
        }}/>
        <Buttons myBtns = {{
          text: "<Button disabled/>",
          type: "Disabled",
          name: "btnEight",
        }}/>
        <Buttons myBtns = {{
          text: "<Button variant='text' disabled />",
          type: "Disabled",
          name: "btnNine",
        }}/>
        <Buttons myBtns = {{
          text: "<Button startIcon='local_grocery_store'/>",
          type: "Default",
          name: "btnTen",
        }}/>
        <Buttons myBtns = {{
          text: "<Button endIcon='local_grocery_store'/>",
          type: "Default",
          name: "btnEleven",
        }}/>
        <Buttons myBtns = {{
          text: "<Button size='sm' />",
          type: "Default",
          name: "btnTwelve",
        }}/>
        <Buttons myBtns = {{
          text: "<Button size='md' />",
          type: "Default",
          name: "btnThirteen",
        }}/>
        <Buttons myBtns = {{
          text: "<Button size='lg'/>",
          type: "Default",
          name: "btnFourteen",
        }}/>
        <Buttons myBtns = {{
          text: "<Button color='default' />",
          type: "Default",
          name: "btnFifteen",
        }}/>
        <Buttons myBtns = {{
          text: "<Button color='primary' />",
          type: "Default",
          name: "btnSixteen",
        }}/>
        <Buttons myBtns = {{
          text: "<Button color='secondary' />",
          type: "Secondary",
          name: "btnSeventeen",
        }}/>
        
        <Buttons myBtns = {{
          text: "<Button color='danger' />",
          type: "Danger",
          name: "btnEighteen",
        }}/>

        <Buttons myBtns = {{
          text: "&:hover, &:focus/>",
          type: "Default",
          name: "btnNineteen",
        }}/>

        <Buttons myBtns = {{
          text: " ",
          type: "Default",
          name: "btnTwenty",
        }}/>

        <Buttons myBtns = {{
          text: " ",
          type: "Secondary",
          name: "btnTwentyone",
        }}/>
        <Buttons myBtns = {{
          text: " ",
          type: "Danger",
          name: "btnTwentytwo",
        }}/>
      </div>
    </article>
  }
}

ReactDOM.render(<ButtonsApp />, document.getElementById("container"));
