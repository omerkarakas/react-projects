import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

//function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "Solomon",
          id: 1
        },
        {
          name: "Miker",
          id: 2
        },
        {
          name: "Çaki",
          id: 3
        }
      ]

    }
  }


  render() {

    return (
      <div className="App">
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
