import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <div className="header-container">
        <h1>Bookstore CMS</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/categories">Categories</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
