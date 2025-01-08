import React, { useEffect, useState } from "react";
import { Accordion, Col, Container, Dropdown, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";  
import { fetchProducts } from "../../redux/productsSlice";
import { fetchCategories } from "../../redux/categoriesSlice";
import { fetchBrands } from "../../redux/brandsSlice";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardGroup from 'react-bootstrap/CardGroup';



const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
      <div onClick={onClick} className={'arrow ${className}'}>
          <img src="images/Group 23.svg" alt="" class="arrows" className="position-absolute bottom-50 start-0 translate-middle-x  arrows" style={{color:"white", paddingRight:"4%"}}/>
      </div>  
  );
  } ;

  const SampleNextArrow = (props) => {
      const { className, style, onClick } = props;
      return(
          <div onClick={onClick} className={'arrow ${className}'}>
              <img src="images/Group 22.svg" alt="" className="position-absolute bottom-50  start-100 translate-middle-x arrows" 
              style={{color:"white", paddingLeft:"4%" }}/>
          </div>
      );
      } ;


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />
  };


function Cart(){

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    console.log("Cart Products: ", cart);
  }, [cart]);

  const handleIncrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart.map((item) =>
      item._id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
   
    
      return (
        <Container>
          
          <Row>
            <Col xs={8} className="mt-5 mb-5">
              <h2>My Cart</h2>
              <div style={{ border:"1px solid rgba(0, 0, 0, 0.15)"}}>
                <div style={{display:"flex" ,justifyContent:"space-between", width:"100%",padding:"3% 2%"}}>  
                  <div>
                  <img src="images/carbon_location.png" alt="" /> Add Address To Unlock Extra Discounts And Best Offers
                  </div> 
                  <button style={{border:"none", backgroundColor:"white"}}><p className='button-txt'> <a href='Cart' style={{textDecoration:"none", color:"#045E55"}}>ADD ADDRESS</a></p></button>
                </div>
              </div>
            
                <div >
                  <div style={{display:"flex" ,justifyContent:"space-between", width:"100%",padding:"3% 0%"}}>  
                    <div>
                    <h5>ITEMS(S) IN YOUR CART ({totalQuantity})</h5>
                    </div> 
                    <Link to="/product">
                    <button style={{border:"none", backgroundColor:"white"}}><p className='button-txt'> <a href='Cart' style={{textDecoration:"none", color:"#045E55"}}>ADD ITEMS</a></p></button>
                    </Link>
                  </div>
                </div>

             <div style={{ border:"1px solid rgba(0, 0, 0, 0.15)", marginBottom:"5%"}}>
                <div style={{ backgroundColor:"rgba(249, 249, 249, 1)" ,  borderBottom:"1px solid rgba(0, 0, 0, 0.15)"}}>
                  <div style={{display:"flex" ,justifyContent:"space-between", width:"100%",padding:"1.5% 2%"}}>  
                    <div>
                    <h5>Shipment 1</h5>
                    </div> 
                    <button style={{border:"none", backgroundColor:"white"}}><p className='button-txt'> <a href='Cart' style={{textDecoration:"none", color:"#045E55"}}>Arriving 26 Aug '24, by 11:30 PM</a></p></button>
                  </div>
                </div>
                <div style={{ border: "1px solid rgba(0, 0, 0, 0.15)" }}>
            {cart.length === 0 ? (
              <p style={{textAlign:"center", fontWeight:"500"}} >Nothing To Display Here!!! <Link to="/product"> <button style={{border:"none", backgroundColor:"white", color:"rgba(48, 176, 155, 1)"}}>Shop Now</button></Link> </p>
            ) : (
              cart.map((item) => (
                <div key={item._id} style={{ display: "flex", padding: "2%" }}>
                  <div>
                    <img
                      src={item.mediaFiles[0]?.url}
                      alt={item.title}
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                  <div style={{ display: "block", width: "100%", padding: "1%", paddingLeft: "3%" }}>
                    <p style={{ display: "flex", justifyContent: "space-between", margin: "0px" }}>
                      <p style={{ margin: "0px", fontWeight: "500" }}>{item.title}</p>
                      <span>
                        <button
                          style={{ border: "none", backgroundColor: "white" }}
                          onClick={() => handleRemoveItem(item._id)}
                        >
                          <img src="images/cross.png" alt="Remove" />
                        </button>
                      </span>
                    </p>
                    <div>₹{(item.variant[0]?.price * item.quantity).toFixed(2)}</div>
                    <div style={{ marginTop: "2%", display: "flex", justifyContent: "space-between" }}>
                      <div className="item-count">
                        <p className="item-box">
                          <button
                            style={{ border: "none", backgroundColor: "white" }}
                            onClick={() => handleDecrement(item._id)}
                          >
                            <img src="images/minus.png" alt="Decrease" />
                          </button>
                        </p>
                        <p className="item-box" style={{ fontSize: "20px" }}>
                          {item.quantity}
                        </p>
                        <p className="item-box">
                          <button
                            style={{ border: "none", backgroundColor: "white" }}
                            onClick={() => handleIncrement(item._id)}
                          >
                            <img src="images/plus.png" alt="Increase" />
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                ))
              )}
            </div>



              {/*  <div style={{ display:"flex", padding:"2%"}}><div>
                  <div><img src="images/cart1.png" alt="" /></div><div>(Bottle of 1)</div></div>
                  <div style={{display:"block", width:"100%", padding:"1%", paddingLeft:"3%"}}>
                        <p style={{ display:"flex",justifyContent: "space-between", margin:"0px"}}><p style={{margin:"0px", fontWeight:"500"}}>Aveeno Baby Daily Moisture Wash & Shampoo, 354 ml </p> <span>
                        <button style={{border:"none", backgroundColor:"white"}}>
                        <img src="images/cross.png" alt="" /></button></span></p>
                        <div className="cart-discount">14% Off</div>
                        <div style={{marginTop:"2%" , display:"flex",justifyContent: "space-between"}}>
                            <div className="item-count">
                            <p className="item-box"><button style={{border:"none", backgroundColor:"white"}}><img src="images/minus.png" alt="" /></button></p>
                            <p className="item-box" style={{fontSize:"20px"}}>1</p> 
                            <p className="item-box"><button style={{border:"none", backgroundColor:"white"}}><img src="images/plus.png" alt="" /></button></p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}>
                              <p><span style={{color:"rgba(0, 0, 0, 0.5)"}}><strike>MRP ₹970</strike></span> <span>₹834</span></p>
                        </div>
                        </div>
                  </div>
                </div>
                <p className="coupon-NA" >Coupon saving not applicable</p>

                  <div style={{ display:"flex", padding:"2%"}}><div>
                  <div><img src="images/cart2.png" alt="" /></div><div>(Strip of 20)</div></div>
                  <div style={{display:"block", width:"100%", padding:"1%", paddingLeft:"3%"}}>
                        <p style={{ display:"flex",justifyContent: "space-between", margin:"0px"}}><p style={{margin:"0px", fontWeight:"500"}}>Evion 400 Capsule 20's</p> <span>
                        <button style={{border:"none", backgroundColor:"white"}}>
                        <img src="images/cross.png" alt="" /></button></span></p>
                        <div className="cart-discount">5% Off</div>
                        <div style={{marginTop:"2%" , display:"flex",justifyContent: "space-between"}}>
                            <div className="item-count">
                            <p className="item-box"><button style={{border:"none", backgroundColor:"white"}}><img src="images/minus.png" alt="" /></button></p>
                            <p className="item-box" style={{fontSize:"20px"}}>1</p> 
                            <p className="item-box"><button style={{border:"none", backgroundColor:"white"}}><img src="images/plus.png" alt="" /></button></p>
                            </div>
                            <div style={{display:"flex", alignItems:"center"}}>
                              <p><span style={{color:"rgba(0, 0, 0, 0.5)"}}><strike>MRP ₹970</strike></span> <span>₹834</span></p>
                        </div>
                        </div>
                  </div>
                </div>
                <p className="coupon-apply" >Coupon savings: ₹4.33</p>
                */}


            </div>





              <h5 style={{padding:"3% 0%"}}>LAST MINUTE BUYS</h5>
              <div style={{padding:"3% 5%", border:"1px solid rgba(0, 0, 0, 0.15)"}}>
              <div>
                <Slider {...settings}>
                <div style={{ width: "15%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
                <img src="images/LMB1.png" alt="Evion 400 Capsule" style={{ width: "100%", height: "auto" }} />
                <div style={{ padding: "1rem" }}>
                  <p style={{fontSize:"80%"}}>Apollo Life Anti-Bac Wet Wipes, 60 Count...</p>
                  <p>
                    <span style={{fontWeight:"500"}}>
                    ₹125 </span><strike>(₹200)</strike> 
                  </p>
                  <Button className="lb-addcart-button" variant="primary">ADD TO CART</Button>
                </div>
                </div>

                <div style={{ width: "15%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
                <img src="images/LMB2.png" alt="Evion 400 Capsule" style={{ width: "100%", height: "auto" }} />
                <div style={{ padding: "1rem" }}>
                <p  style={{fontSize:"80%"}}>Apollo Premium Lemon Grass Handwash...</p>
                <p>
                    <span style={{fontWeight:"500"}}>
                    ₹100 </span><strike>(₹160)</strike> 
                  </p>
                  <Button className="lb-addcart-button" variant="primary">ADD TO CART</Button>
                </div>
                </div>
                <div style={{ width: "15%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
                <img src="images/LMB3.png" alt="Evion 400 Capsule" style={{ width: "100%", height: "auto" }} />
                <div style={{ padding: "1rem" }}>
                <p  style={{fontSize:"80%"}}>Apollo Life Hand Sanitizer Liquid Spray 100 ml...</p>
                <p style={{textAlign:"center"}}>
                    <span style={{fontWeight:"500"}}>
                    ₹25 </span> 
                  </p>
                  <Button className="lb-addcart-button" variant="primary">ADD TO CART</Button>
                </div>
                </div>
                <div style={{ width: "15%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
                <img src="images/LMB4.png" alt="Evion 400 Capsule" style={{ width: "100%", height: "auto" }} />
                <div style={{ padding: "1rem" }}>
                <p  style={{fontSize:"80%"}}>Apollo Life Hand Sanitizer Liquid Spray 100 ml...</p>
                <p>
                    <span style={{fontWeight:"500"}}>
                    ₹135 </span><strike>(₹150)</strike> 
                  </p>
                  <Button className="lb-addcart-button" variant="primary">ADD TO CART</Button>
                </div>
                </div>
                <div style={{ width: "15%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
                <img src="images/LMB5.png" alt="Evion 400 Capsule" style={{ width: "100%", height: "auto" }} />
                <div style={{ padding: "1rem" }}>
                <p  style={{fontSize:"80%"}}>Apollo SPF 40 PA+++ Sunscreen Cream...</p>
                <p>
                    <span style={{fontWeight:"500"}}>
                    ₹180 </span><strike>(₹200)</strike> 
                  </p>
                  <Button className="lb-addcart-button" variant="primary">ADD TO CART</Button>
                </div>
                </div>
              
            </Slider>
            </div>
            </div>
            </Col>
    
            <Col xs={4} className="ml-3 mt-5">
            <h2>Offers & Discount</h2>
            <div style={{ border:"1px solid rgba(0, 0, 0, 0.15)"}}>
                <div style={{display:"flex" ,justifyContent:"space-between", width:"100%", height:"4.8rem"}}>  
                  <div style={{fontWeight:"500", display:"flex", alignItems:"center", padding:"0% 2%"}}>
                  <img src="images/coupon.png" alt="" /> 'PHARMA5' Applied
                  </div> 
                  <p style={{ display:"flex",justifyContent: "space-evenly", width:"30%", padding:"0% 3%", margin:"0px", alignItems:"center", borderLeft:"1px solid rgba(0, 0, 0, 0.15)"}}><p style={{margin:"0px", fontWeight:"500"}}>₹4.33
                  saved</p> <span><button style={{border:"none", backgroundColor:"white"}}>
                  <img src="images/cross-g.png" alt="" /></button></span></p>        
                </div>
            </div>

            <div>
                  <div style={{display:"flex" ,justifyContent:"space-between", width:"100%",padding:"6% 0%"}}>  
                    <div style={{width:"100%"}}>
                    <h5>CART BREAKDOWN</h5>
                    <div style={{marginTop:"6.2%" ,padding:"5%", border:"1px solid rgba(0, 0, 0, 0.15)", width:"100%"}}>
                      <div style={{ borderBottom:"1px solid rgba(0, 0, 0, 0.15)"}}>
                      <p className="cart-breakdown">Cart Total<span>₹1056.6</span></p>
                      <p className="cart-breakdown">Discount on MRP<span>- ₹136</span></p>
                      <div className="cart-breakdown"> Delivery Charges<p><strike>₹99</strike><span style={{color:"rgba(48, 176, 155, 1)"}}> FREE</span></p></div>
                      </div>
                      <p className="cart-breakdown" style={{paddingTop:"10%", fontWeight:"500"}}>To Pay<span>₹922.27</span></p>
                    </div>
                    <div style={{marginTop:"6.2%" , border:"1px solid rgba(0, 0, 0, 0.15)", width:"100%"}}>
                      <div>
                      <p className="saved-header">You saved ₹235 on this order</p>
                      </div>
                      <div style={{padding:"1% 5%"}}>
                      <p className="cart-breakdown">Savings</p>
                      <p className="cart-breakdown" >Discount On MRP<span style={{color:"rgba(4, 94, 85, 1)"}}>₹136</span></p>
                      <p className="cart-breakdown" >Free Delivery<span style={{color:"rgba(4, 94, 85, 1)"}}>₹99</span></p>
                     </div>
                    </div>
                    <div style={{marginTop:"6.2%", padding:"7% 5%" ,border:"1px solid rgba(0, 0, 0, 0.15)"}}>
                    <div style={{display:"flex" ,justifyContent:"space-between", width:"100%",padding:"3% 2%", alignItems:"center"}}>  
                    <div style={{fontSize:"100%" ,fontWeight:"600"}}>
                    Amount to Pay <p style={{color:"rgba(48, 176, 155, 1)", margin:"0"}}>₹922.27</p>
                    </div> 
                      <button style={{border:"none", borderRadius:"10px", height:"30px" , backgroundColor:"rgba(48, 176, 155, 1)"}}><p className='button-txt'> <a href='Cart' style={{textDecoration:"none", color:"rgba(255, 255, 255, 1)"}}>ADD ADDRESS</a></p></button>
                    </div>
                   </div>
                   <div>
                   <button style={{marginTop:"9%" ,width:"100%" ,border:"1px solid rgba(48, 176, 155, 1)", borderRadius:"10px", height:"35px" , backgroundColor:"white"}}><p className='button-txt'> <a href='Cart' style={{textDecoration:"none", color:"rgba(48, 176, 155, 1)"}}>CONTINUE TO SHOPPING</a></p></button>
                   </div>
                   <div>
                   <button style={{marginTop:"5%" ,width:"100%" ,border:"none", borderRadius:"10px", height:"35px" , backgroundColor:"rgba(48, 176, 155, 1)"}}><p className='button-txt'> <a href='Cart' style={{textDecoration:"none", color:"rgba(255, 255, 255, 1)"}}>CONTINUE TO CHECKOUT</a></p></button>
                   </div>
                    </div> 
                  </div>
            </div>

            </Col>
          </Row>
          </Container>
      );
    };
    

    

export default Cart;