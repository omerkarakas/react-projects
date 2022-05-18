import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

//function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      //monstersShown: []
      searchString: ""
    }
    //console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
            //            return { monsters: users, monstersShown: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );

    //console.log("compDidMount");

  }

  onSearchChange = (e) => {
    // console.log(e);
    const searchString = e.target.value.toUpperCase();
    this.setState(
      () => {
        return { searchString };
      });
  }

  render() {
    //console.log("render");

    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const selectedMons =
      monsters.filter((mon) => {
        return mon.name.toUpperCase().includes(searchString)
      });

    return (
      <div className="App" >
        <input className="search-box" type="search" placeholder="search monsters" onChange={onSearchChange} />
        {
          selectedMons.map((mon) => {
            return <h1 key={mon.id}>{mon.name}</h1>;
          })
        }
      </div >
    );
  }
}

export default App;
