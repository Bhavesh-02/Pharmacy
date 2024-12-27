import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <header className='Header'>
            <Container>
            <Row className="justify-content-md-center">
            </Row>
            <Row className='Sub-header'>
                <Col>
                    <div className='Header-content'>
                        <img className='Header-image' src='/images/Vector.png' alt='Location'/>
                        <p className='location-address'>
                            Delivery Address <p className='Header-location'>
                                Indore 452003 <img src='/images/Vector2.png' alt='Downarrow'/>
                            </p>
                        </p>
                    </div>
                </Col>
                <Col>CHEMIST AND DRUGGIST</Col>
                <Col className='Header-content-right'>
                    <div className='Header-image-right'><img src='/images/Vectors.png' alt='user'/> <a href='login' style={{textDecoration:"none", color:"white"}}>Login</a></div>
                    <div className='Header-image-right'><img src='/images/Vector(1).png' alt='goto'/> <a href='registration' style={{textDecoration:"none", color:"white"}}>Register</a></div>
                    <div className='Header-image-right'><img src='/images/Vector(2).png' alt='Bellicon'/></div>
                </Col>
            </Row>
            </Container>
        </header>

        
    );
}
export default Header;