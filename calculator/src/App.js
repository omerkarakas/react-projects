import ButtonPad from './components/ButtonPad';
import Calculation from './components/Calculation';
import Header from './components/Header';

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
          <div>No history yet</div>
        </div>
      </div>
    </>
  );
}

export default App;
