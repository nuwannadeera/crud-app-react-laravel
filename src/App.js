import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customer from './Components/Customer/Customer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

function App() {

  const [customers, setCustomers] = useState([]);

  const getAllCustomers = async () => {
    const response = await fetch('http://127.0.0.1:8000/students');
    const data = await response.json();
    setCustomers(data);
  }

  useEffect(() => {
    getAllCustomers();
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Customer customers={customers}/>
        } />
      </Routes>
    </Router>
  );
}

export default App;
