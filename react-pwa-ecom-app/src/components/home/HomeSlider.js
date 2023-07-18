import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from './../../assets/images/slider1.jpg';
import Slider2 from './../../assets/images/slider2.jpg';
import Slider3 from './../../assets/images/slider3.jpg';
import { Image } from 'react-bootstrap';

class HomeSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay:true,
            autoplaySpeed:3000,
            arrows:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

          const allSliders = this.props.allSlider;
          const mySLiders = allSliders.map(slider=>
       
            <div key={slider.id}>
            <img className="slider-img" src={slider.slider_image} alt={slider.slider_text} />
           </div>
            
            )
              return (
                <div>
                 <Slider {...settings}>
        
          
        
                {
                  mySLiders
                }
        

        </Slider>
             
                </div>
              
        );
    }
}

export default HomeSlider;