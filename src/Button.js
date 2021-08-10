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
      console.log(htmlReceipt);
      JSBridge.showMessageInNative(valueReceived);
    });
  };
  return (<button style={style} onClick={print}>App Button</button>)
}

export default Button;