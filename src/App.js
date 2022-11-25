import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Lista from './components/Lista';
import Lovelace from './pages/Lovelace';
import Turing from './pages/Turing';
import Jobs from './pages/Jobs';
import Stallman from './pages/Stallman';
import VanRossum from './pages/VanRossum';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path = "/lovelace" element = {<Lovelace />} />
        <Route path = "/turing" element = {<Turing />} />
        <Route path = "/jobs" element = {<Jobs />} />
        <Route path = "/stallman" element = {<Stallman />} />
        <Route path = "/van-rossum" element = {<VanRossum />} />
      </Routes>
      <Link to = "/">Ir a la lista</Link>
    </Router>
  );
}

export default App;
