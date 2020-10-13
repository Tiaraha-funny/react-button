import React from "react";
import "./index.css";

function Buttons(prop) {

  let attributes;

  if(prop.name === "hover1") {
    attributes = 'hover1';
  }

  if(prop.variant === "outline") {
    attributes = 'hover2';
  }
  if(prop.variant === "text") {
    attributes = 'hover3'
  } 
  if(prop.disabled === 'shadow') {
    attributes = 'disabledShadow'
  }
  if(prop.disabled === 'disabled') {
    attributes = 'disabled'
  }
  if(prop.disabled === 'disabledText') {
    attributes = 'disabledText'
  }
  if(prop.icon === 'startIcon') {
    attributes = 'iconBefore'
  }
  if(prop.icon === 'endIcon') {
    attributes = "iconEnd"
  }
  if(prop.size === 'sm') {
    attributes = "sm"
  }
  if(prop.size === 'md') {
    attributes = 'md'
  }
  if(prop.size === 'lg') {
    attributes = 'lg'
  } 
  if(prop.color === 'default'){
    attributes = 'default'
  }
  if(prop.color === 'primary') {
    attributes = 'primary'
  }
  if(prop.color === 'secondary') {
    attributes = 'secondary'
  }
  if(prop.color === 'danger') {
    attributes = 'danger'
  }
  if(prop.text === 'good') {
    attributes = 'mine'
  }
  
  return (
    <div className="btnDiv">
      <p>{prop.text}</p>
      <button className={attributes} 
      disabled={prop.disabled ? "" : "disabled"}
      size={prop.size ? prop.size : ""}
      variant={prop.variant ? prop.variant : ""}
      color={prop.color ? prop.color : ""}
      type={prop.type ? prop.type : ""}
      >{prop.children}</button>
    </div>
  );
}
export default Buttons;
