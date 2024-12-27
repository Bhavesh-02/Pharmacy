import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function Condition(){
    return(<>
    <div className="shop-heading">Browse by Health Conditions</div>
     <Figure class="condition-image d-flex flex-row flex-wrap row row-cols-6 row-cols-md-6 g-2" style={{padding:"3% 5%", textAlign:"center"}}>
      <div className='figure-image'><Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame.svg"
      />
      <Figure.Caption>
      Diabetes Care
      </Figure.Caption>
      </div>

      <div  className='figure-image'>
      <Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(1).svg"
      />
      <Figure.Caption>
      Cardiac Care      
      </Figure.Caption></div>
      
      
      <div  className='figure-image'><Figure.Image className='fixed-size img-fluid ratio ratio-1x1' 
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(2).svg"
      />
      <Figure.Caption>
      Stomach Care      </Figure.Caption></div>

      <div className='figure-image'>
      <Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(3).svg"
      />
      <Figure.Caption>
      Pain Relief      </Figure.Caption></div>

      <div className='figure-image'>
      <Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(4).svg"
      />
      <Figure.Caption>
      Liver Care      </Figure.Caption></div>

      <div className='figure-image'>
      <Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(5).svg"
      />
      <Figure.Caption>
      Oral Care      </Figure.Caption></div>

      <div className='figure-image'>
      <Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(6).svg"
      />
      <Figure.Caption>
      Respiratory      </Figure.Caption></div>

      <div   className='figure-image'>
      <Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(7).svg"
      />
      <Figure.Caption>
      Sexual Health      </Figure.Caption></div>
      
      <div className='figure-image'>
      <Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(8).svg"
      />
      <Figure.Caption>
      Elderly Care      </Figure.Caption></div>

      <div className='figure-image'>
      <Figure.Image className='fixed-size img-fluid ratio ratio-1x1'
        width={171}
        height={180}
        alt="171x180"
        src="/images/Frame(9).svg"
      />
      <Figure.Caption>
      Cold & Immunity      </Figure.Caption>
      </div>

    </Figure>
    
    <div style={{margin:"0% 5%"}}>
        <Card style={{border:"none", borderRadius:"0", backgroundColor:"rgba(169, 204, 255, 0.2)"}}>
      <Card.Img className='Banner-img' src="/images/Group 50.png" alt="Card image" style={{border:"none", borderRadius:"0", backgroundColor:"rgba(169, 204, 255, 0.2)"}}  />
      <Card.ImgOverlay style={{display:"flex", alignItems:"center"}}>
        <div className='Central-banner'>
        <Card.Title className='frame-banner-heading'>10% to 15% OFF ON BRANDED MEDICINES</Card.Title>
        <Card.Text className='Banner-searchbox'>
        <InputGroup className="mb-3" style={{width:"40%", display:"flex", justifyContent:"center"}}>
            <Button className='frame-shop-button' variant="primary">UPLOAD PRESCRIPTION</Button>
      </InputGroup>
        </Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
    </div>
    </>
    )
}

export default Condition;