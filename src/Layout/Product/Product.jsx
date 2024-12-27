import React from 'react';
import { Row, Col, Card, Button, Dropdown} from 'react-bootstrap';
import { Accordion,AccordionContext } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


const CustomToggle = ({ children, eventKey }) => {
  const { activeEventKey } = React.useContext(AccordionContext);
  const isActive = activeEventKey === eventKey;
  const icon = isActive ? faMinus : faPlus;
  return (
    <Button variant="link" className="custom-toggle">
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {children}
    </Button>
  );
};

const FilterAccordion = () => (
  <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <CustomToggle eventKey="0">FILTER BY</CustomToggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>
          <Accordion>
            <Card>
              <Card.Header>
                <CustomToggle eventKey="1">Category</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ul>
                    <li>Health</li>
                    <li>Supplements</li>
                    <li>Fitness</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <CustomToggle eventKey="2">Brand</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ul>
                    <li>Brand A</li>
                    <li>Brand B</li>
                    <li>Brand C</li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);


const ProductCard = ({ imgSrc, title, price, oldPrice, discount }) => (
  <Card style={{ width: '100%', border: '1px solid rgba(0, 0, 0, 0.10)' }}>
    <Card.Img variant="top" src={imgSrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        <p>₹{price} <strike>(₹{oldPrice})</strike> <span>{discount}% off</span></p>
      </Card.Text>
      <Button className="addcart-button" variant="primary">ADD TO CART</Button>
    </Card.Body>
  </Card>
);

const ProductCardsGrid = () => {

  
  const products = [
    { imgSrc: "images/Product1.png", title: "Neurobion Forte Tablet 30's", price: "36.5", oldPrice: "41.5", discount: 12 },
    { imgSrc: "images/Product2.png", title: "Sevenseas Original Cod-Liver Oil 300 mg...", price: "386", oldPrice: "386", discount: 0 },
    { imgSrc: "images/Product3.png", title: "Livogen Adult Tonic 200 ml", price: "167.2", oldPrice: "190", discount: 12 },
    { imgSrc: "images/Product4.png", title: "Evion 200 Capsule 10's", price: "20.2", oldPrice: "23", discount: 12 },
    { imgSrc: "images/Product5.png", title: "Apollo Pharmacy Smart Blood Glucose...", price: "799", oldPrice: "799", discount: 0 },
    { imgSrc: "images/Product6.png", title: "Apollo Pharmacy Blood Glucose Test Strips...", price: "719.10", oldPrice: "799", discount: 10  },
    { imgSrc: "images/Product7.png", title: "Apollo Essentials ExtraAbsorb Baby Diaper...", price: "1199", oldPrice: "1199", discount: 0 },
    { imgSrc: "images/Product8.png", title: "Apollo Essentials Extra Absorb Baby Diaper...", price: "1199", oldPrice: "1199", discount: 0},
    { imgSrc: "images/Product9.png", title: "Apollo Pharmacy PremiumAqua Blue Handwash", price: "100", oldPrice: "160", discount: 38 },
    { imgSrc: "images/Product10..png", title: "Apollo Essentials ExtraAbsorb Baby Diaper...", price: "1199", oldPrice: "1199", discount: 0 },
    { imgSrc: "images/Product11.png", title: "Apollo Pharmacy Vitamin D3 60000 IU, 4 Capsules", price: "90", oldPrice: "100", discount: 10 },
    { imgSrc: "images/Product12.png", title: "Apollo Essentials Extra Absorb Baby Diaper...", price: "1199", oldPrice: "1199", discount: 0  },
    { imgSrc: "images/Product13.png", title: "Apollo Life Omega-3 Fish Oil 1000mg", price: "180", oldPrice: "200.0", discount: 10 },
    { imgSrc: "images/Product14.png", title: "Apollo Pharmacy First Aid Kit, 1 Count", price: "450", oldPrice: "500", discount: 10 },
    { imgSrc: "images/Product15.png", title: "Apollo Pharmacy Non-Contact Infrared...", price: "990", oldPrice: "1100", discount: 10 },
    { imgSrc: "images/Product16.png", title: "Apollo Life Anti-Bac Wet Wipes, 60 Count...", price: "125", oldPrice: "200.0", discount: 38 },
    { imgSrc: "images/Product17.png", title: "Apollo Pharmacy Blood Pressure Monitor...", price: "1619", oldPrice: "1799", discount: 10 },
    { imgSrc: "images/Product18.png", title: "Apollo Pharmacy Blood Pressure Monitor...", price: "1619", oldPrice: "1799", discount: 10 },
    { imgSrc: "images/Product19.png", title: "Apollo Pharmacy Steam Inhaler Vaporizer, 1 Count", price: "360", oldPrice: "400", discount: 10 },
    { imgSrc: "images/Product20.png", title: "Apollo Pharmacy ORSOrange Flavour Drink", price: "100", oldPrice: "120.0", discount: 17 },
  ];

  
  const cardRows = Array.from({ length: 6 }).map((_, rowIndex) => (
    <Row key={rowIndex} className="mb-4">
      {products.slice(rowIndex * 4, rowIndex * 4 + 4).map((product, cardIndex) => (
        <Col key={cardIndex} xs={12} sm={6} md={3}>
          <ProductCard
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
          />
        </Col>
      ))}
    </Row>
  ));

  return <>{cardRows}</>;
};

const Product = () => {
  return (
    <div style={{ padding: '1% 5%' }}>
      <div>
        Home{' '}
        <svg
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.53249 4.11289L2.19562 3.45039L5.80749 7.06102C5.86571 7.11887 5.91192 7.18767 5.94345 7.26345C5.97498 7.33923 5.99121 7.4205 5.99121 7.50258C5.99121 7.58466 5.97498 7.66593 5.94345 7.74171C5.91192 7.81749 5.86571 7.88629 5.80749 7.94414L2.19562 11.5566L1.53312 10.8941L4.92312 7.50352L1.53249 4.11289Z"
            fill="black"
          />
        </svg>{' '}
        Products
      </div>
      <div
        style={{
          padding: '2% 0%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontSize: '2rem', fontWeight: '600' }}>All Products</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          Sort By:{' '}
          <Dropdown className="product-dropdown">
            <Dropdown.Toggle variant="none">
              Relevant
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div style={{display:"flex"}}>
          <div style={{width:"30%"}}>
          <FilterAccordion />
          </div>
          <div style={{width:"70%"}}>
            <ProductCardsGrid />
          </div>
      </div>
    </div>
  );
};

export default Product;
