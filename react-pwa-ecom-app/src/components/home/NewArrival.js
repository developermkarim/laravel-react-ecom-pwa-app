import React, { Component, Fragment } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';
import { toast } from 'react-toastify';
import NewArrivalLoading from '../PlaceHolder/NewArrivalLoading';
import { Link } from 'react-router-dom';

export default class NewArrival extends Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state={
          NewArrivals:[],
          loaderDiv:"",
          mainDiv:"d-none",
        }
    }

    componentDidMount(){
      axios.get(AppURL.productByRemark('NEW'))
      .then(res=>this.setState({NewArrivals:res.data,loaderDiv:'d-none',mainDiv:""}))
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
        <div key={newArrival.id}>
          <Link className="text-link" to={"/product-details/"+newArrival.id} >
        <Card className="image-box card">
        <Image className="center" src={newArrival.image} />   
        <Card.Body> 
        <p className="product-name-on-card">{newArrival.title}</p>
        <p className="product-price-on-card">Price : ${newArrival.special_price==='no'?newArrival.special_price:newArrival.price}</p>

        </Card.Body>
        </Card>
        </Link>
        </div>

        )
    return (
      <Fragment>

  <NewArrivalLoading isLoading={this.state.loaderDiv}/>
<div className={this.state.mainDiv}>

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
        </Slider>

        </Row>
      </Container>
</div>
      </Fragment>
    )
  }
}
