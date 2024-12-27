import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';

function Minimum(){
    return(
        <>
        <div className='Selling-Heading'>Minimum 50% Off <span className='Selling-view'>View All</span> </div>

<CardGroup style={{padding:"0% 5%", gap:"10px", marginBottom:"5%"}}>
<Card style={{ width: "15%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/min1.png" />
  <Card.Body>
    <Card.Title>Nivea Milk Delights SaffronFace Wash 100 ml</Card.Title>
    <Card.Text>
      <p>₹115 <strike>(₹230)</strike> <span>50% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>

<Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/min2.png" />
  <Card.Body>
    <Card.Title>Parachute Advansed Baby Nourishing Cream, 100 gm</Card.Title>
    <Card.Text>
    <p>₹75 <strike>(₹150)</strike> <span>50% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>

<Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/min3.png" />
  <Card.Body>
    <Card.Title>Dabur Himalayan Shilajit Resin, 15 gm</Card.Title>
    <Card.Text>
    <p>₹725 <strike>(₹1450)</strike> <span>50% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>



<Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/min4.png" />
  <Card.Body>
    <Card.Title>Holland & Barrett Calcium + Vit D & K for Bone...</Card.Title>
    <Card.Text>
    <p>₹499 <strike>(₹999)</strike> <span>50% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>

  <Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/min5.png" />
  <Card.Body>
    <Card.Title>Babio Baby Wet Wipes, 80 Count</Card.Title>
    <Card.Text>
    <p>₹49 <strike>(₹99.5)</strike> <span>49% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>

<Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/BS6.png" />
  <Card.Body>
    <Card.Title>Bold Secret Aqua Body Spray, 200 ml</Card.Title>
    <Card.Text>
    <p>₹199.5 <strike>(₹195)</strike> <span>50% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>
</CardGroup>
        </>
    );
};

export default Minimum; 