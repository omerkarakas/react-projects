import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

//function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );

    console.log("compDidMount");

  }

  render() {
    console.log("render");

    return (
      <div className="App" >
        {
          this.state.monsters.map((mon) => {
            return <h1 key={mon.id}>{mon.name}</h1>;
          })
        }
      </div >
    );
  }
}

export default App;
