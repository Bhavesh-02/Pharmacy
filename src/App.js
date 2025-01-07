import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
