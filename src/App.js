import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Layout/Header/Header';
import MainHeader from './Layout/Header/MainHeader';
import Home from './Layout/Home/Home'
import Footer from './Layout/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './Layout/User/Login';
import Registration from './Layout/User/Registration';
import Cart from './Layout/MyCart/Cart';
import Product from './Layout/Product/Product';


function App() {
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch message from the backend (Express API)
    fetch('http://localhost:5000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  return (
    <>
      <Header />
      <MainHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>

  );
}

export default App;
