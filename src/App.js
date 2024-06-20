import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Countdown from './Components/Countdown';
import Family from './Components/Family';
import Event from './Components/Event';
import Message from './Components/Message';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Countdown/>
      <Family/>
      <Event/>
      <Message/>
      <Footer/>
    </div>
  );
}

export default App;
