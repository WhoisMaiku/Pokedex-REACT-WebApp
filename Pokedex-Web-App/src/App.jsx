import {Routes, Route, Link} from 'react-router-dom';
import './index.css'
import Home from './pages/Home';

function App() {
  return (
    <div> 
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2 flex justify-between items-center">
          <Link to="/" className="text-white text-4xl font-bold">Pokedex</Link>
        </div>
      </nav>

      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
