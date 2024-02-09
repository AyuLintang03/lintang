import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Skill from './components/Skill';
import Certificate from './components/Certificat';
import Project from "./components/Project";
import Kontak from "./components/Kontak";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project  />} />
          <Route path="/certificate" element={<Certificate  />} />
          <Route path="/kontak" element={<Kontak  />} />
          <Route path="/" element={<div className='bg-white w-full h-screen'></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
