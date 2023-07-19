import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import FeaturedLoading from '../PlaceHolder/FeaturedLoading'
import  ReactDOM  from 'react-dom';
class ProductDetails extends Component {

     constructor(){
          super();
          this.state={
               productsAll:[],
               loaderDiv:'',
               mainDiv:'d-none',
          }
     }


      ImageOnClick=(event)=>{
          let imgSrc = event.target.getAttribute('src');
          let mainImage = document.getElementById('mainImage');
          ReactDOM.findDOMNode(mainImage).setAttribute('src',imgSrc);
       }


     componentDidMount(){
          axios.get(`${this.BaseURL}/product-details/${this.props.getProductCode}`)
          .then(res=>{
               // console.log(res.data);
               this.setState({productsAll:res.data,loaderDiv:'d-none',mainDiv:''})
          })
          .catch(err=>console.log(err));
     }
   
     render(){

             const ProductAllData = this.state.productsAll;
              const  {productDetails,productLists} = ProductAllData;
               // const productList  = productLists?.[0];
               console.log(productLists);
            /* console.log(ProductAllData); */ // it outputs full data
            // it outputs Cannot read properties of undefined (reading '0')

            /* console.log(productLists[0].title) */ // it also outputs Cannot read properties of undefined (reading '0')

         
           
      

          return (
               <Fragment>
              
                  <div /* className={this.state.mainDiv} */>

                 {/* <FeaturedLoading isLoading={this.state.loaderDiv}/> */}

                  <Container  className="BetweenTwoSection">


               {/*    <h1>{productLists[0].title}</h1>
      <p>{productDetails[0].short_description}</p>
      <img src={productDetails[0].image_one} alt="Product" /> */}

                   <Row className="p-2">
<Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
     <Row>
          <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
          <img id='mainImage'  className="w-100" src={'https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/250-g8/250-g8-01-500x500.jpg'} />
          <Container  className="my-3">
               <Row>
                    <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                         <img onClick={this.ImageOnClick} className="w-100" src={'https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70'} />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img onClick={this.ImageOnClick} className="w-100" src={'https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70'} />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img onClick={this.ImageOnClick} className="w-100" src={'https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/j/x/c/hot-10-play-x688b-infinix-original-imag29gxqzuxkmnk.jpeg?q=70'} />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <img onClick={this.ImageOnClick} className="w-100" src={'https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70'} />
                    </Col>
               </Row> 
          </Container>
          </Col>
          <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
          <h5 className="Product-Name">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
          <h6 className="section-sub-title">Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive Collectio</h6>
          <div className="input-group">
               <div className="Product-price-card d-inline ">Reguler Price 200</div>
               <div className="Product-price-card d-inline ">50% Discount</div>
               <div className="Product-price-card d-inline ">New Price 100</div>
          </div>
          <h6 className="mt-2">Choose Color</h6>
          <div className="input-group">
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className="form-check-label" htmlFor="exampleRadios1">Black</label>
               </div>
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className="form-check-label" htmlFor="exampleRadios1">Green</label>
               </div>
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className="form-check-label" htmlFor="exampleRadios1">Red</label>
               </div>
          </div>

          <h6 className="mt-2">Choose Size</h6>
          <div className="input-group">
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className="form-check-label" htmlFor="exampleRadios1">X</label>
               </div>
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className="form-check-label" htmlFor="exampleRadios1">XX</label>
               </div>
               <div className="form-check mx-1">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                    <label className="form-check-label" htmlFor="exampleRadios1">XXXX</label>
               </div>
          </div>

          <h6 className="mt-2">Quantity</h6>
          <input  className="form-control text-center w-50" type="number" />

          <div className="input-group mt-3">
               <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
               <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
               <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
          </div>
          </Col>
     </Row>

     <Row>
          <Col className="" md={6} lg={6} sm={12} xs={12}>
          <h6 className="mt-2">DETAILS</h6>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation</p>
          </Col>

          <Col className="" md={6} lg={6} sm={12} xs={12}>
          <h6 className="mt-2">REVIEWS</h6>
          <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

          <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

          <p className=" p-0 m-0"><span className="Review-Title">Kazi Ariyan</span> <span className="text-success"><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span> </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>

          </Col>
     </Row>

</Col>
                   </Row>
              
               </Container>
                </div>
               </Fragment>
          )
     }
}
export default ProductDetails;

