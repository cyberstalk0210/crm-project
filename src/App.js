import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Removed unused Link
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';
import AddProduct from './components/addProduct';
import Orders from './components/orders';
import Messages from './components/message';
import Login from './components/Login';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Dashboard />} /> 
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/messages" element={<Messages/>}/>
          <Route path = "/login" element={<Login/>} />
        </Routes>
      </div>
  );
}

export default App;