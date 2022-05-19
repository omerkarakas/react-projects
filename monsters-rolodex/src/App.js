import logo from './logo.svg';

import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

//function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      //monstersShown: []
      searchString: ""
    }
    //console.log("appjs constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
            // return { monsters: users, monstersShown: users };
          }
          // ,
          // () => {
          //   console.log(this.state);
          // }
        )
      );

    //  console.log("appjs compDidMount");

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
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    //console.log("appjs render");

    const selectedMons =
      monsters.filter((mon) => {
        return mon.name.toUpperCase().includes(searchString)
      });

    return (
      <div className="App" >
        <h1>Fabulous Monsters</h1>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />
        {/* {
          selectedMons.map((mon) => {
            return <h1 key={mon.id}>{mon.name}</h1>;
          })
        } */}
        <CardList monsters={selectedMons} />
      </div >
    );
  }
}

export default App;
