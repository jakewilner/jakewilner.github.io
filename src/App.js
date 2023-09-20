import './App.css';
import './pages/pages.css'
import MyNavbar from './components/Navbar';
import { HashRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Empty from './pages/Empty';
import Projects from './pages/projects/Projects';
import Saguaro from './pages/projects/Saguaro'
import Forex from './pages/projects/Forex';
import OtherWork from './pages/projects/Other';

function App() {
  return (
    <div className="App">
      <div className='navbar-container'>
        <MyNavbar/>
      </div>
      <div className="page-content">
          <HashRouter basename='/'>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/projects/saguaro" element={<Saguaro/>} />
                <Route path="/projects/forex" element={<Forex/>} />
                <Route path="/projects/other" element={<OtherWork/>} />
                <Route path="*" element={<Empty/>} />
            </Routes>
          </HashRouter>
        </div>
    </div>
  );
}

export default App;