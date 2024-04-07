import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Restaurant from './pages/Restaurant';
import Home from './Home';
import Search_Res from './pages/Search_Res';
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/searchRes' element={<Search_Res />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
