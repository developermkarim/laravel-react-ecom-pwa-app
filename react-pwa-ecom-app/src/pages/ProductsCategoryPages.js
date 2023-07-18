import React, { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import AppURL from '../api/AppURL';

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

    const myProductByCategory = cateByProduct.map(product=>
        
        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className="image-box card w-100">
        <Image className="center w-75" src={product.image} />   
        <Card.Body> 
        <p className="product-name-on-card">{product.title}</p>
        <p className="product-price-on-card">Price : $ {product.special_price==='no' ? product.collection:product.price }</p>
        
        </Card.Body>
        </Card>          
        </Col>
        
              )
            return (
                <Fragment>
                <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55"><h2>{category}</h2>
        <p>All Of Our Exclusive Collection, You May Like</p>
        </div>
        
        {/* <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
        <Card className="image-box card w-100">
        <Image className="center w-75" src="https://rukminim1.flixcart.com/image/800/960/keykscw0-0/t-shirt/l/d/q/3xl-bmrgyrnful-z12-blive-original-imafvgzkyjghf7ba.jpeg?q=50" />   
        <Card.Body> 
        <p className="product-name-on-card">Striped Men Round Neck Maroon, Grey</p>
        <p className="product-price-on-card">Price : $120</p>
        
        </Card.Body>
        </Card>          
        </Col>
         */}
        <Row>
        {
         myProductByCategory
        }
        </Row>
                </Container>
           </Fragment>
            )
};

export default ProductsCategoryPages;