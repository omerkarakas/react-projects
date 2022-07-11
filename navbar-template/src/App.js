import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';

function App() {
  let Component;
  // or let component;
  console.log(window.location.pathname);
  switch (window.location.pathname) {
    case '/':
      Component = Home;
      //component = <Home/>
      break;
    case '/pricing':
      Component = Pricing;
      break;
    case '/about':
      Component = About;
      break;
    default:
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Component />
      </div>

      {/* {component} */}
    </>
  );
}

export default App;
