import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/movies">Films</Link> | <Link to="/series">Séries</Link>
      </nav>
      <h1>Simplo'ciné</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;