// import logo from './logo.svg';
// import './App.css';
import ResponsiveAppBar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import AddTransaction from "./Pages/AddTransaction";
import {Routes , Route} from "react-router-dom";
import Analytics from './Pages/Analytics'


function App() {
  return (
    <div className="App">
    <ResponsiveAppBar />
    <Routes>
         <Route path="/" element={<Home />}/>
          <Route path="Home" element={<Home />} />
          <Route path="AddTransaction" element={<AddTransaction />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="About" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
