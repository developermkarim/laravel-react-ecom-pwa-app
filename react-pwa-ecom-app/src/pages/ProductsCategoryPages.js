import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import { useParams } from 'react-router-dom';
import AppURL from '../api/AppURL';
import Category from '../components/ProductDetails/Category';


const ProductsCategoryPages = () => {
    const {category} = useParams();
    const [cateByProduct,SetCateByProduct] = useState([]);
    console.log(category);

    useEffect(()=>{
        fetch(AppURL.productByCategory(category))
        .then(results=>results.json())
        .then(data=>{
        SetCateByProduct(data);

        })

    },[cateByProduct])

/*     const myProductByCategory = cateByProduct.map(product=>
        
        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className="image-box card w-100">
        <Image className="center w-75" src={product.image} />   
        <Card.Body> 
        <p className="product-name-on-card">{product.title}</p>
        <p className="product-price-on-card">Price : $ {product.special_price==='no' ? product.collection:product.price }</p>
        
        </Card.Body>
        </Card>          
        </Col>
        
              ) */
            return (
            /*     <Fragment>
                <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55"><h2>{category}</h2>
        <p>All Of Our Exclusive Collection, You May Like</p>
        </div>
        
      
        <Row>
        {
         myProductByCategory
        }
        </Row>
                </Container>
           </Fragment> */

           <>
      
           <div className='Desktop'>
                     <NavMenuDesktop/>
     
     {/* This NavMenu Component for Mobile Device */}
                     <div className="Mobile">
                     <NavMenuMobile/>
                     </div>
     
       
            
                 <Category cateParam={category} productByCategory={cateByProduct}/>
     
                   
                     <div className="Desktop">
                     <FooterDesktop/>
                     </div>
     
                     <div className="Mobile">
                         <FooterMobile/>
                     </div>
     
                 </div>
           </>
            )
};

export default ProductsCategoryPages;