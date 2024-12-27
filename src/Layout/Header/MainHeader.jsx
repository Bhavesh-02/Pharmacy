import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainHeader() {
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
          <button className='cart-button'><img className='Header-image' src='/images/cart.png' alt='cart'/><p className='button-txt'> My Cart </p>
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