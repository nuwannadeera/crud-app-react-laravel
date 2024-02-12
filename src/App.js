import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customer from './Components/Customer/Customer'
import EditCustomer from './Components/Customer/EditCustomer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Customer />} />
        <Route path="/edit/:id" element={<EditCustomer />} />
      </Routes>
    </Router>
  );
}

export default App;
