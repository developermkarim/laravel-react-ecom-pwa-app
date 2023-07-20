import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class Category extends Component {

  render() {

    const category = this.props.cateParam;
    const productbycategory = this.props.productByCategory;

    const CateByProducts = productbycategory.map((cate_pd)=>{
        
    return  <Col className="p-0" key={cate_pd.id} xl={3} lg={3} md={3} sm={6} xs={6}>
      <Link className="text-link" to={"/productdetails/"+cate_pd.id} >
        <Card className="image-box card w-100">
        <Image className="center w-75" src={cate_pd.image} />   
        <Card.Body> 
        <p className="product-name-on-card">{cate_pd.title}</p>
        <p className="product-price-on-card">Price :  {cate_pd.special_price < cate_pd.price && <del className='text-dark'>${cate_pd.special_price}</del>}  $ {cate_pd.special_price==='no' ? cate_pd.cate_pd:cate_pd.price }</p>
        
        </Card.Body>
        </Card>     
        </Link>     
        </Col>
  })

    return (
       <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2>{category}</h2>
          <p>Some Of Our Exclusive cate_pd, You May Like</p>
          </div>


       <Row>
   
 {CateByProducts}
 
      </Row>


                   </Container>

              </Fragment>
    )
  }
}
export default Category;