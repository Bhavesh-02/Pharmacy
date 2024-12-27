import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from 'react';

function TopSelling() {
  return (
    <>
    <div className='Selling-Heading'>Top Selling Vitamins and Supplement <span className='Selling-view'>View All</span> </div>

    <CardGroup style={{padding:"0% 5%", gap:"10px"}}>
    <Card style={{ width: "15%", border: "1px solid rgba(0, 0, 0, 0.10)" }}>
      <Card.Img variant="top" src="images/TSimage.png" />
      <Card.Body>
        <Card.Title>Evion 400 Capsule 20's</Card.Title>
        <Card.Text>
          <p>₹76.1 <strike>(₹86.5)</strike> <span>12% off</span></p>
        </Card.Text>
        <Button className='addcart-button' variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
      <Card.Img variant="top" src="images/TSimage(1).png" />
      <Card.Body>
        <Card.Title>Neurobian Forte Tablet 30's</Card.Title>
        <Card.Text>
        <p>₹36.5 <strike>(₹41.5)</strike> <span>12% off</span></p>
        </Card.Text>
        <Button className='addcart-button' variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
      <Card.Img variant="top" src="images/TSimage(2).png" />
      <Card.Body>
        <Card.Title>Sevenseas Orignal Cod-Liver Oil 300 mg...</Card.Title>
        <Card.Text>
        <p>₹386</p>
        </Card.Text>
        <Button className='addcart-button' variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>

    

    <Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
      <Card.Img variant="top" src="images/TSimage(3).png" />
      <Card.Body>
        <Card.Title>Livogen Adult Tonic 200Ml</Card.Title>
        <Card.Text>
        <p>₹167.2 <strike>(₹190)</strike> <span>12% off</span></p>
        </Card.Text>
        <Button className='addcart-button' variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>

      <Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
      <Card.Img variant="top" src="images/TSimage(4).png" />
      <Card.Body>
        <Card.Title>Evion 200 Capsule 10's</Card.Title>
        <Card.Text>
        <p>₹20.2 <strike>(₹23)</strike> <span>12% off</span></p>
        </Card.Text>
        <Button className='addcart-button' variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '15%', border: "1px solid rgba(0, 0, 0, 0.10)" }}>
      <Card.Img variant="top" src="images/TSimage(5).png" />
      <Card.Body>
        <Card.Title>Evion 600 Capsule 10's</Card.Title>
        <Card.Text>
        <p>₹54.5 <strike>(₹62)</strike> <span>12% off</span></p>
        </Card.Text>
        <Button className='addcart-button' variant="primary">ADD TO CART</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    </>
  );
}

export default TopSelling;