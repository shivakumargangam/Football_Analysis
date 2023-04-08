import logo from './logo.svg';
import './App.css';
import Architecture from './Components/Architecture';
import LandingPage from './Containers/LandingPage.js';
import Mapping from './Components/Mapping.js';
import Workflow from './Components/Workflow';
import Reports from './Components/Reports';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
   <div>
  <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Architecture' element={<Architecture/>}/>
          <Route path='/Mapping' element={<Mapping/>}/>
          <Route path='/Workflow' element={<Workflow/>}/>
          <Route path='/Reports' element={<Reports/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
