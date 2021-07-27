import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const App = () => {
  return (
    <div>
      <h1>Print Test</h1>
      <br />
      <Button />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));