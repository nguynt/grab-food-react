import { BrowserRouter, Routes,HashRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Restaurant from './pages/Restaurant';
import Home from './Home';
import Search_Res from './pages/Search_Res';
function App() {
  
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <HashRouter path="/" element={<Home />} />
            <HashRouter path='/restaurant' element={<Restaurant></Restaurant>}></HashRouter>
            <HashRouter path='/searchRes' element={<Search_Res></Search_Res>}></HashRouter>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
