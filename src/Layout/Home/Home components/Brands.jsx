import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/esm/Container";
import "bootstrap/dist/css/bootstrap.min.css";

function Brands() 
{   
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
          slidesToShow: 6,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow to="next" />,
          prevArrow: <SamplePrevArrow to="prev" />

        };
    return(
            <shop>
            <div style={{padding:"0% 5%"}}>
            <div className="shop-heading">Shop By Brand</div>
            <div>
           
            <div>
                <Slider {...settings}>
                        <div className="container "><div className="brand-container"> <img className="img-fluid" src="images/image 6.png" alt=""  style={{width:"auto", height:"auto", objectFit:"cover", backgroundColor:"#F9F9F9"}}/></div></div>
                        <div className="container "><div className="brand-container"> <img className="img-fluid" src="images/image6(2).png" alt=""  style={{width:"auto", height:"auto", objectFit:"cover", backgroundColor:"#F9F9F9"}}/></div></div>
                        <div className="container "><div className="brand-container"> <img className="img-fluid" src="images/image 7.png" alt=""  style={{width:"auto", height:"auto", objectFit:"cover", backgroundColor:"#F9F9F9"}}/></div></div>
                        <div className="container "><div className="brand-container"> <img className="img-fluid" src="images/image 8.png" alt=""  style={{height:"auto", width:"auto", objectFit:"cover", backgroundColor:"#F9F9F9"}}/></div></div>
                        <div className="container "><div className="brand-container"> <img className="img-fluid" src="images/image 9.png" alt=""  style={{width:"auto", height:"auto", objectFit:"cover", backgroundColor:"#F9F9F9"}}/></div></div>
                        <div className="container "><div className="brand-container"> <img className="img-fluid " src="images/image 10.png" alt=""  style={{width:"auto", height:"auto", objectFit:"cover", backgroundColor:"#F9F9F9"}}/></div></div>
            </Slider>
          
            </div>
            </div>
            </div>
        </shop>
    );
}

export default Brands;