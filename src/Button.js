import React from "react";

const style = {
  background: "#eee",
  color: "#000",
  padding: 12,
};

const Button = () => {
  const print = () => {
    console.log('Print Clicked!');
    fetch('receipt.txt').then(response => response.text()).then(htmlReceipt => {
      //TODO: add the communication to the native app
      console.log(htmlReceipt);
      //TODO: add the communication to the native app
    });
  };
  return (<button style={style} onClick={print}>App Button</button>)
}

export default Button;