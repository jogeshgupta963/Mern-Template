import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import Page from './pages/CrudPage';
function App() {

  return (
    <div className="App">
      <Routes>
      <Route exact path="/page" element={<Page/>}/>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
