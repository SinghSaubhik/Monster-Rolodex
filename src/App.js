import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import { SaerchBox } from "./components/search-box/searchbox.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

 
  componentDidMount() {
    fetch("https://sjson.azurewebsites.net/api/4051k21xjyilni54")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  };

  render() {
    const { monsters, searchField } = this.state;
    const fielteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SaerchBox
          placeholder={"search monster"}
          handleChange={this.handleChange}
        />
        <CardList monsters={fielteredMonsters} />
      </div>
    );
  }
}

export default App;
