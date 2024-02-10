import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customer from './Components/Customer/Customer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Customer />
        } />
      </Routes>
    </Router>
  );
}

export default App;
