import { useState } from 'react';
import ButtonPad from './components/ButtonPad';
import Calculation from './components/Calculation';
import Header from './components/Header';
import History from './components/History';
import StateWatch from './components/StateWatch';

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="left-container">
          <Calculation />
          <ButtonPad />
        </div>
        <div className="right-container">
          <div className="tab-buttons">
            <button>History</button>
            <button>Memory</button>
          </div>
          <div className="tab-detail">
            <History />
            {/* <StateWatch /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
