import { useState, useRef } from 'react';
import ButtonPad from './components/ButtonPad';
import Calculation from './components/Calculation';
import Header from './components/Header';
import History from './components/History';
import Memory from './components/Memory';
import StateWatch from './components/StateWatch';

function App() {
  const [activePanel, setActivePanel] = useState('history');

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
            <button onClick={() => setActivePanel('history')}>History</button>
            <button onClick={() => setActivePanel('memory')}>Memory</button>
          </div>
          <div className="tab-detail">
            <History showPanel={activePanel === 'history'} />
            <Memory showPanel={activePanel === 'memory'} />
            <StateWatch />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
