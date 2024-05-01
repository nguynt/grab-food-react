import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Restaurant from './pages/Restaurant';
import Home from './Home';
import Search_Res from './pages/Search_Res';
import Admin_Index from './admin/Admin_Index';
import DetailRestaurant from './admin/DetailsRestaurant';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/searchRes" element={<Search_Res />} />
          <Route path="/admin" element={<Admin_Index />} />
          <Route path='/restaurant/details/:id' element={<DetailRestaurant/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
