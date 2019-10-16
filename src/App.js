import React from 'react';
import './App.css';
import Number from'./Number.js';
import Text from'./Text.js';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      add: 'ok'
    }
    this.add = this.add.bind(this)
  }

  add(test){
    console.log("plus")
    this.setState(state =>({
      add: test
    }))
  }

  render() {
    return (
      <div className="App">
        <Number nombre={this.state.add}></Number>
        <Text aff={this.add} ></Text>
        
      </div>
    );
  }
}

export default App;
