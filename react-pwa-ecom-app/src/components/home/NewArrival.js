import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { toast } from 'react-toastify';

export default class NewArrival extends Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
          NewArrivals:[]
        }
    }

    componentDidMount(){
      axios.get(AppURL.productByRemark('NEW'))
      .then(res=>this.setState({NewArrivals:res.data}))
      .catch(err=>{
        toast.error("No New arraivals Products",{
          position:"bottom-center"
        })
      })
    }

    next(){
    this.slider.slickNext();
    }
    previous(){
    this.slider.slickPrev();
    }

  render() {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        speed: 500,
        autoplaySpeed:3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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

      const allNewArrivals = this.state.NewArrivals;
      const myNewArrivals = allNewArrivals.map(newArrival=>
        <div>
        <Card className="image-box card">
        <Image className="center" src={newArrival.image} />   
        <Card.Body> 
        <p className="product-name-on-card">{newArrival.title}</p>
        <p className="product-price-on-card">Price : ${newArrival.special_price==='no'?newArrival.special_price:newArrival.price}</p>

        </Card.Body>
        </Card>
        </div>
        )
    return (
      <Fragment>

   <Container className="text-center" fluid={true}>

        <div className="section-title text-center mb-55"><h2> NEW ARRIVAL 

        <a href className='btn btn-sm ml-2 site-btn' onClick={this.previous} >  <i className='fa fa-angle-left'> </i> </a> &nbsp;
        <a href className='btn btn-sm ml-2 site-btn' onClick={this.next}> <i className='fa fa-angle-right'></i> </a>

        </h2>



          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

    <Row>
        <Slider ref={component => (this.slider = component)} {...settings}>

{
  myNewArrivals
}

{/*           <div>
          <Card className="image-box card">
          <Image className="center" src="https://rukminim1.flixcart.com/image/800/960/jeka07k0/watch/4/p/y/38024pp25-fastrack-original-imaf37n5df3bn52n.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>
          </div>

          <div>
          <Card className="image-box card">
          <Image className="center" src="https://rukminim1.flixcart.com/image/800/960/kka1si80/watch/4/t/k/tw-02524-teenager-luxurious-fashion-silicone-black-colored-led-original-imafznht7bzfmj7d.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>
          </div>

          <div>
          <Card className="image-box card">
          <Image className="center" src="https://rukminim1.flixcart.com/image/800/960/jw0zr0w0/watch/c/u/r/ls2811-limestone-original-imafgrxqf8qvecjd.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>
          </div>

          <div>
          <Card className="image-box card">
          <Image className="center" src="https://rukminim1.flixcart.com/image/800/960/jcxoya80/watch/z/n/h/skmei-sports-multifunctional-dual-time-digital-blue-dial-men-s-original-imaffykneyfryvqh.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>
          </div>

          <div>
          <Card className="image-box card">
          <Image className="center" src="https://rukminim1.flixcart.com/image/800/960/kpodocw0/watch/p/l/t/anlg-428-blue-blu-analogue-original-imag3uxbhfkyhahf.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>
          </div>

          <div>
          <Card className="image-box card">
          <Image className="center" src="https://rukminim1.flixcart.com/image/800/960/k48rwcw0/watch/k/v/f/lcs-8190-lois-caron-original-imafn7fsyttnpybp.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>
          </div>

          <div>
          <Card className="image-box card">
          <Image className="center" src="https://rukminim1.flixcart.com/image/800/960/ke353m80-0/watch/e/b/s/fresh-new-arrival-latest-men-watch-watches-men-ghadi-gents-boys-original-imafuupqgaanhtxu.jpeg?q=50" />   
          <Card.Body> 
          <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>
          </div> */}

        </Slider>

        </Row>
      </Container>

      </Fragment>
    )
  }
}
