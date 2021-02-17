import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './contents/Home';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import About from './contents/About'
function App() {
  return (
    <BrowserRouter>
<div className="App">
<Navbar />
{/* Route for Home.js contents */}
<Route exact path="/">
<Home />
</Route>
{/* Route for About.js contents */}
<Route path="/about">
<About />
</Route>
<Route path="/education">
<Education/>
</Route>
<Route path="/skills">
<Skills/>
</Route>
<Route path="/contact">
<Contact/>
</Route>
</div>
    </BrowserRouter>
  );
}

export default App;
