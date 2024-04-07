import { BrowserRouter, Routes,Route,HashRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

import Restaurant from './pages/Restaurant';
import Home from './Home';
import Search_Res from './pages/Search_Res';
function App() {
  
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/restaurant' element={<Restaurant></Restaurant>}/>
            <Route path='/searchRes' element={<Search_Res></Search_Res>}/>
        </Routes>
      </HashRouter>
    </div>

  );
}

export default App;
