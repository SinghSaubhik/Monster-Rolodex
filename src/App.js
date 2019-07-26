import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('https://sjson.azurewebsites.net/api/4051k21xjyilni54')
      .then(res=> res.json()
      )
      .then(users=> this.setState({monsters: users})
      )
  }
  render() {
    return (
      <div className="App">
       {
         this.state.monsters.map(monster=> <h1>{ monster.name }</h1>)
       }
      </div>
    );
  }
}


export default App;
