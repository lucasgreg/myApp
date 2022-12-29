import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Button from '@mui/material/Button';
import Home from './pages/Home';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={< Home />}/>        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
