import React, { Fragment } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

const SubCategory = ({category,subCategory,subCateProducts}) => {

const mySubCateProducts = subCateProducts.map(subCate_pd =>

     <Col className="p-0" key={subCate_pd.id} xl={3} lg={3} md={3} sm={6} xs={6}>
    <Card className="image-box card w-100">
    <Image className="center w-75" src={subCate_pd.image} />   
    <Card.Body> 
    <p className="product-name-on-card">{subCate_pd.title}</p>
    <p className="product-price-on-card">Price :  {subCate_pd.special_price < subCate_pd.price && <del className='text-dark'>${subCate_pd.special_price}</del>}  $ {subCate_pd.special_price==='no' ? subCate_pd.subCate_pd:subCate_pd.price }</p>
    
    </Card.Body>
    </Card>          
    </Col>
    )

    return (
        <Fragment>
        <Container className="text-center" fluid={true}>
<div className="section-title text-center mb-55"><h2>{category} / {subCategory}</h2>
<p>Some Of Our Exclusive subCate_pd, You May Like</p>
</div>


<Row>

{mySubCateProducts}

</Row>


        </Container>

   </Fragment>
    );
};

export default SubCategory;