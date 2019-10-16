import React from 'react';
import './App.css';

function Number(props) {
  return (
    <div className="App">
      <input onChange={(event) => props.aff(event.target.value)} type="text"></input>
    </div>
  );
}

export default Number;
