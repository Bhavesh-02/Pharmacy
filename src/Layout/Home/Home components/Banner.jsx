import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Banner() {
  return (
    <Card className="bg-dark text-white" style={{border:"none", borderRadius:"0"}}>
      <Card.Img className='Banner-img' src="/images/Group 9.png" alt="Card image" style={{border:"none", borderRadius:"0"}}  />
      <Card.ImgOverlay style={{display:"flex", alignItems:"center"}}>
        <div className='Central-banner'>
        <Card.Title className='Banner-heading'>Buy Branded, Generic & Surgical Medicines</Card.Title>
        <Card.Text className='Banner-searchbox'>
        <InputGroup className="mb-3" style={{width:"40%"}}>
            <Form.Control
            placeholder="Search Medicines"
            aria-label="Search Medicines"
            aria-describedby="basic-addon2"
            />
            <Button style={{backgroundColor:"white", border:"none"}}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5717 20.5717L28 28M12.6363 2C10.5326 2 8.47623 2.62381 6.72709 3.79254C4.97796 4.96127 3.61468 6.62244 2.80965 8.56597C2.00461 10.5095 1.79397 12.6481 2.20438 14.7113C2.61478 16.7746 3.62779 18.6698 5.11531 20.1573C6.60282 21.6448 8.49803 22.6578 10.5613 23.0682C12.6245 23.4786 14.7631 23.268 16.7066 22.463C18.6502 21.6579 20.3113 20.2946 21.4801 18.5455C22.6488 16.7964 23.2726 14.74 23.2726 12.6363C23.2724 9.81543 22.1518 7.11015 20.1571 5.1155C18.1625 3.12084 15.4572 2.00018 12.6363 2Z" stroke="#045E55" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round"/>
                </svg>
            </Button>
      </InputGroup>
        </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}


export default Banner;