import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Image, Breadcrumb } from 'react-bootstrap'
import AppURL from '../../api/AppURL'
import FeaturedLoading from '../PlaceHolder/FeaturedLoading'
import  ReactDOM  from 'react-dom';
import { Link } from 'react-router-dom'
class ProductDetails extends Component {

     constructor(){
          super();
          this.state={
               productsAll:[],
               title:'',
               brand:'',
               category:'',
               subcategory:'',
               image:'',
               price:'',
               product_code:'',
               remark:'',
               special_price:'',
               star:'',
               image_one:'',
               image_two:'',
               image_three:'',
               image_four:'',
               color:'',
               size:'',
               product_id:'',
               short_description:'',
               long_description:'',
               loaderDiv:'',
               mainDiv:'d-none',
               cartColor:"",
               cartSIze:"",
               isColor:null,
               isSize:null,
               quantity:'',
               productCode:null,
               prevewImage:'0'

          }
     }

     /* 
     
     'title' =>  $ProductAllData['productList'][0]['title'],
            'brand' =>  $ProductAllData['productList'][0]['brand'],
            'category' =>  $ProductAllData['productList'][0]['category'],
            'subcategory' =>  $ProductAllData['productList'][0]['subcategory'],
            'image' =>  $ProductAllData['productList'][0]['image'],
            'image_one' =>  $ProductAllData['productDetails'][0]['image_one'],
             'price' =>  $ProductAllData['productList'][0]['price'],
            'product_code' =>  $ProductAllData['productList'][0]['product_code'],
            'remark' =>  $ProductAllData['productList'][0]['remark'],
            'special_price' =>  $ProductAllData['productList'][0]['special_price'],
            'star' =>  $ProductAllData['productList'][0]['star'],
            'image_one' =>  $ProductAllData['productDetails'][0]['image_one'],
            'image_two' =>  $ProductAllData['productDetails'][0]['image_two'],
            'image_three' =>  $ProductAllData['productDetails'][0]['image_three'],
            'image_four' =>  $ProductAllData['productDetails'][0]['image_four'],
            'color' =>  $ProductAllData['productDetails'][0]['color'],
            'size' =>  $ProductAllData['productDetails'][0]['size'],

            'product_id' =>  $ProductAllData['productDetails'][0]['product_id'],
            'short_description' =>  $ProductAllData['productDetails'][0]['short_description'],
            'long_description' =>  $ProductAllData['productDetails'][0], 
     */

  /* colorConfirm Select Here */
   colorConfirm=(ev)=>this.setState({cartColor:ev.target.value})

   /* SizeConfirm Select Here */
   sizeConfirm=(ev)=>this.setState({cartSIze:ev.target})
 
     /* Product Quantity */
     quantityOnChange=(ev)=>this.setState({quantity:ev.target.value})


      ImageOnClick=(event)=>{
          let imgSrc = event.target.getAttribute('src');
          let mainImage = document.getElementById('mainImage');
          ReactDOM.findDOMNode(mainImage).setAttribute('src',imgSrc);
       }


     componentDidMount(){
          axios.get(`${AppURL.BaseURL}/product-details/${this.props.getProductCode}`)
          .then(res=>{
               this.setState({productsAll:res.data,
               title:res.data.title,
               brand:res.data.brand,
               category:res.data.category,
               subcategory:res.data.subcategory,
               image:res.data.image,
               price:res.data.price,
               product_code:res.data.product_code,
               remark:res.data.remark,
               special_price:res.data.special_price,
               star:res.data.star,
               image_one:res.data.image_one,
               image_two:res.data.image_two,
               image_three:res.data.image_three,
               image_four:res.data.image_four,
               color:res.data.color,
               size:res.data.size,
               product_id:res.data.product_id,
               short_description:res.data.short_description,
               long_description:res.data.long_description,
               loaderDiv:'d-none',mainDiv:''

               
               })
          })
          .catch(err=>console.log(err.message));
     }
     render(){

          let color = this.state.color;
          var colorDiv = "d-none";
          if(color!=='na'){
             let  colorArray = color.split(',');
              var colorOptions = colorArray.map((color,i)=>{
           return  <option value={color}>{color}</option>

               })

             colorDiv = '';

          }else{

               colorDiv = "";
          }

          /* Size DIv */
          let size = this.state.size;
          var sizeDiv = "d-none";
          if(size!=='na'){
               let sizeArray = size.split(',');
               var sizeOptions = sizeArray.map((size,i)=>{
              return <option value={size}>{size}</option>
              
          })

          sizeDiv = "";

          }else{
               sizeDiv='';
          }

          const priceOption = (price,special_price) => {
               if(price === 'na'){
                    return <p className="product-price-on-card"> Price : {price}$ </p>
               }else{
                    return <strike className='text-secondary'>Special Price : {special_price}</strike>
               }
          }


/* Color Selection or not */

      if(this.state.cartColor===null){
          if(color !== 'na'){
          this.setState({isColor:"YES"})
     }else{}
     this.setState({isSize:"NO"})
}

/* Color Selection or not */
     if(this.state.cartSIze === null){
          if(size !== 'na'){
               this.setState({isSize:"YES"})
          }else{
               this.setState({isSize:"NO"})
          }
     }

/*      this.state.cartSIze === null ? (size !== 'na' ? this.setState({isSize:"YES"}) : this.setState({isSize:"NO"})):this.setState({cartSIze:null}); */

     /* Product Code Selection */
     this.state.productCode === null ? this.setState({productCode:this.state.product_code}):this.setState({productCode:false});

          return (
               <Fragment>

                  <div  /* className={this.state.mainDiv} */>

                 {/*  <FeaturedLoading isLoading={this.state.loaderDiv}/> */}

                  <Container  className="BetweenTwoSection">
                   <Row className="p-2">

{/* Breadcrumb Start Here  */}
                   <div className="breadbody">
               <Breadcrumb>
  <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>

  <Breadcrumb.Item> <Link to={"/productbycategory/"+this.state.category}> {this.state.category} </Link> </Breadcrumb.Item> 

  <Breadcrumb.Item> <Link to={"/productbysubcategory/"+this.state.category+"/"+this.state.subcategory}> {this.state.subcategory } </Link> </Breadcrumb.Item>

    <Breadcrumb.Item> <Link to={"/product-details/"+this.state.product_id}> {this.state.title } </Link> </Breadcrumb.Item>   

</Breadcrumb>
</div>

<Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
     <Row>
          <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
          <Image id='mainImage'  className="w-100 bigimage" src={this.state.image} />
          <Container  className="my-3">
               <Row>
                    <Col className="p-0 m-0"  md={3} lg={3} sm={3} xs={3}>
                         <Image onClick={this.ImageOnClick} className="w-100 smallimage" src={this.state.image_one} />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <Image onClick={this.ImageOnClick} className="w-100 smallimage" src={this.state.image_two} />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <Image onClick={this.ImageOnClick} className="w-100 smallimage" src={this.state.image_three} />
                    </Col>
                    <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                         <Image onClick={this.ImageOnClick} className="w-100 smallimage" src={this.state.image_four} />
                    </Col>
               </Row> 
          </Container>
          </Col>
          <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
          <h5 className="Product-Name">{this.state.title} </h5>
          <h6 className="section-sub-title"> {this.state.short_description} </h6>
          <div className="input-group">
               <div className="Product-price-card d-inline ">Reguler Price ${this.state.price}</div>
               <div className="Product-price-card d-inline ">50% Discount</div>
              
          </div>

          {priceOption(this.state.price,this.state.special_price)}

          <h6 className="mt-2">Category : <b>{this.state.category}</b>  </h6>          

          <h6 className="mt-2">SubCategory : <b>{this.state.subcategory}</b></h6>

          <h6 className="mt-2">Brand : <b>{this.state.brand}</b></h6>

          <h6 className="mt-2">Product Code : <b>{this.state.product_code}</b></h6>
         
          <div className={colorDiv}>
               <h6 className="mt-2"> Choose Color  </h6>
               <select className="form-control form-select">
               <option>Choose Color</option>
              {colorOptions}
               </select> 
               </div>


               <div className={sizeDiv}>
               <h6 className="mt-2"> Choose Size  </h6>
               <select className="form-control form-select">
               <option>Choose Size</option>
              {sizeOptions}
               </select> 
               </div>

               <div className="" >
               <h6 className="mt-2"> Choose Quantity  </h6>
               <select className="form-control form-select">
               <option>Choose Quantity</option>
               <option value="01">01</option>
               <option value="02">02</option>
               <option value="03">03</option>
               <option value="04">04</option>
               <option value="05">05</option>
               <option value="06">06</option>
               <option value="07">07</option>
               <option value="08">08</option>
               <option value="09">09</option>
               <option value="10">10</option> 
                
               </select> 
               </div>

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
          <p>{this.state.long_description}</p>
          </Col>

          <Col className="" md={6} lg={6} sm={12} xs={12}>
          <h6 className="mt-2">REVIEWS</h6>
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

