import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";



class App extends Component {
  constructor(props) {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
      .catch(err => console.log(err));
  }

  onSearchChange = (event) => {
    //console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    }


    return (
      <div className="tc">
        <h1 className="f1 yellow">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <hr />
        <CardList robots={filteredRobots} />
      </div>
    );
  }


}

export default App;