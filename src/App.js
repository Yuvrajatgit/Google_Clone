import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
        <Router>
         <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
         </Routes>
        </Router>
    </div>
  );
}

export default App;
