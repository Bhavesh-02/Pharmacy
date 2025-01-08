import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from "react";

function MainHeader() {

  const [totalQuantity, setTotalQuantity] = useState(0);
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  const updateCartQuantity = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(totalQuantity);
  };

  useEffect(() => {
    updateCartQuantity();  // Initialize the quantity when the component mounts

    // Listen for changes in localStorage to update the quantity
    const handleStorageChange = () => {
      updateCartQuantity();
    };

    // Add event listener for 'storage' event to listen to changes in localStorage
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
   
  }, []);

    return (
    <Navbar style={{padding:"0%", flexWrap:"wrap"}}>
          <Container fluid style={{justifyContent:"center"}}>
            <Navbar.Brand href="/" style={{color: "#EE3137", fontSize:"40px", fontWeight: "400",}}>Pharmacist</Navbar.Brand>
            <div className='nav-options'>
            <Nav.Link  className='nav-txt' href="#action1">BUY MEDICINES</Nav.Link>
            <Nav.Link className='nav-txt' href="product"> FIND PRODUCTS</Nav.Link>
            <Nav.Link className='nav-txt' href="#action2"> UPLOAD PRESCRIPTION</Nav.Link>
            <Nav.Link className='nav-txt' href="#action2"> LOYALTY PROGRAM</Nav.Link>
            <Nav.Link className='nav-txt' href="#action2">  OREDER TRACKING</Nav.Link>
            </div>
            <button className="cart-button  position-relative">
            <img className="Header-image" src="/images/cart.png" alt="cart" />
            <p className="button-txt">
            <a href='/cart' style={{ textDecoration: "none", color: "white" }}>
             My Cart
            </a>
            </p>
            {totalQuantity > 0 && (
              <span className="badge rounded-circle bg-danger position-absolute" 
                    style={{ top: "-10px", right: "-10px", fontSize: "12px", padding: "5px 10px" }}>
                {totalQuantity}
              </span>
            )}
          </button>
      </Container>
      <Row style={{ width:"100%", margin:"0%"}}>
        <ul className='sub-nav'>
          <li className='sub-nav-txt'>Branded Medicine</li>
          <li className='sub-nav-txt'>Baby Care</li>
          <li className='sub-nav-txt'>Women Care</li>
          <li className='sub-nav-txt'>Personal Care</li>
          <li className='sub-nav-txt'>Surgical Medicine</li>
          <li className='sub-nav-txt'>Generic Medicine</li>
        </ul>
      </Row>
    </Navbar>
    
    );
}
export default MainHeader;