import React from 'react';
import './App.css';

function Number(props) {
  return (
    <div className="App">
      <p>Le mot est: {props.nombre} </p>
    </div>
  );
}

export default Number;
