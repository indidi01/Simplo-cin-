import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <header>
      <nav className='nav'>
        <Link to="/">Accueil</Link> | <Link to="/movies">Films</Link> | <Link to="/series">Séries</Link>
      </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;