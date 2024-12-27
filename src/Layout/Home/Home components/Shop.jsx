import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";



function Shop() 
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
            <div className="shop-heading">Shop By Category</div>

            <div>
                <Slider {...settings}>
                <div className="shop-card">
                    <div  className="category-sort">
                        <img src="images/image.png" alt="" />
                        <p className="category-name">Baby Care</p>
                    </div>
                </div>
                <div className="shop-card">
                    <div  className="category-sort">
                        <img src="images/image 1.png" alt="" />
                        <p className="category-name">Monsoon Essentials</p>
                    </div>
                </div>
                <div className="shop-card">
                    <div  className="category-sort">
                        <img src="images/image 2.png" alt="" />
                        <p className="category-name">Personal Care</p>
                    </div>
                </div>
                <div className="shop-card">
                    <div  className="category-sort">
                        <img src="images/image 3.png" alt="" />
                        <p className="category-name">Skin Care</p>
                    </div>
                </div>
                <div className="shop-card">
                    <div  className="category-sort">
                        <img src="images/image 4.png" alt="" />
                        <p className="category-name">Women Care</p>
                    </div>
                </div>
                <div className="shop-card">
                    <div  className="category-sort">
                        <img src="images/image 5.png" alt="" />
                        <p className="category-name">Health Devices</p>
                    </div>
            </div>
            </Slider>
            </div>
            </div>
        </shop>
    );
}

export default Shop;