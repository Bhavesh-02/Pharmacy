import Button from 'react-bootstrap/Button';

function Frame() 
{
    return(
        <div className="Frame-box">
            <div className="frame-img"><img src="images/Frame.png" alt="" /></div>
            <div class="frame-txt" style={{alignContent:"center"}}><p className="frame-txt-heading">A LOYALTY POGRAM WILL OFFER REWARDS AND SPECIAL DEALS TO REGULAR USERS</p>
            <p className="frame-aim">Our aim is to provide a reliable, safe, and convenient online shopping experience for all medical needs.</p>
            <p><Button className='frame-shop-button' variant="primary">SHOP NOW</Button></p>
            </div>
        </div>
        
    )
}

export default Frame; 