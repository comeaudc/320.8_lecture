import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      <footer>
        <h1>This was created by Me</h1>
      </footer>
    </>
  );
}
export default App;
