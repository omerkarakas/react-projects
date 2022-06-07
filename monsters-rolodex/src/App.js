import logo from './logo.svg';

//import { Component } from 'react';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';


const App = () => {
  console.log("render");
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState('');
  const [selectedMons, setSelectedMons] = useState(monsters);
  const [searchString, setSearchString] = useState(''); //[value, setValue]


  // runs callback function only the very first time
  // in subsequent re-renders, runs only if the values in the second parameter have changed : side effect.
  // why no parameter? because we don't want this function to run again
  // this config means the only time we want this to run is "on mount"
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    const newSelectedMons =
      monsters.filter((mon) => {
        return mon.name.toUpperCase().includes(searchString)
      });

    setSelectedMons(newSelectedMons);
  }, [monsters, searchString]);


  const onSearchChange = (e) => {
    const searchStringVal = e.target.value.toUpperCase();
    setSearchString(searchStringVal);
  }

  const onTitleChange = (e) => {
    const searchStringVal = e.target.value.toUpperCase();
    setTitle(searchStringVal);
  }

  //console.log(selectedMons);

  return (
    <div className="App" >
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <br />
      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="set title"
      />


      <CardList monsters={selectedMons} />
    </div >

  );

}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       //monstersShown: []
//       searchString: ""
//     }
//     //console.log("appjs constructor");
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users =>
//         this.setState(
//           () => {
//             return { monsters: users };
//             // return { monsters: users, monstersShown: users };
//           }
//           // ,
//           // () => {
//           //   console.log(this.state);
//           // }
//         )
//       );

//     //  console.log("appjs compDidMount");

//   }

//   onSearchChange = (e) => {
//     // console.log(e);
//     const searchString = e.target.value.toUpperCase();
//     this.setState(
//       () => {
//         return { searchString };
//       });
//   }

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     //console.log("appjs render");

//     const selectedMons =
//       monsters.filter((mon) => {
//         return mon.name.toUpperCase().includes(searchString)
//       });

//     return (
//       <div className="App" >
//         <h1>Fabulous Monsters</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//         />
//         {/* {
//           selectedMons.map((mon) => {
//             return <h1 key={mon.id}>{mon.name}</h1>;
//           })
//         } */}
//         <CardList monsters={selectedMons} />
//       </div >
//     );
//   }
// }

export default App;
