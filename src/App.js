import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Countdown from './Components/Countdown';
import Family from './Components/Family';
import Reception from './Components/Reception';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Countdown/>
      <Family/>
      <Reception/>
      <Footer/>
    </div>
  );
}

export default App;
