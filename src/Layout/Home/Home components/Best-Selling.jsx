import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';

function BestSelling(){
    return(
        <>
        <div className='Selling-Heading'>Best Sellings <span className='Selling-view'>View All</span> </div>

<CardGroup style={{padding:"0% 5%", gap:"10px"}}>
<Card style={{ width: "15%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/BS1.png" />
  <Card.Body>
    <Card.Title>Nivea Fresh Powerfruit Shower Gel, 250 ml</Card.Title>
    <Card.Text>
      <p>₹162.5 <strike>(₹250)</strike> <span>35% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>

<Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/BS2.png" />
  <Card.Body>
    <Card.Title>Whisper Super Absorbent Period Panty...</Card.Title>
    <Card.Text>
    <p>₹299 <strike>(₹399)</strike> <span>25% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>

<Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/BS3.png" />
  <Card.Body>
    <Card.Title>Pampers Premium Care Diaper Pants XL...</Card.Title>
    <Card.Text>
    <p>₹1004.3 <strike>(₹1499)</strike> <span>33% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>



<Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/BS4.png" />
  <Card.Body>
    <Card.Title>Aveeno Baby Daily Moisture Wash...</Card.Title>
    <Card.Text>
    <p>₹834.2 <strike>(₹970)</strike> <span>14% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>

  <Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/BS5.png" />
  <Card.Body>
    <Card.Title>Dabur Shilajit Gold, 20 Capsules</Card.Title>
    <Card.Text>
    <p>₹405 <strike>(₹500)</strike> <span>19% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>

<Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
  <Card.Img variant="top" src="images/BS6.png" />
  <Card.Body>
    <Card.Title>Pears Soft & Fresh Soap125 gm</Card.Title>
    <Card.Text>
    <p>₹40.9 <strike>(₹95)</strike> <span>57% off</span></p>
    </Card.Text>
    <Button className='addcart-button' variant="primary">ADD TO CART</Button>
  </Card.Body>
</Card>
</CardGroup>
        </>
    );
};

export default BestSelling; 