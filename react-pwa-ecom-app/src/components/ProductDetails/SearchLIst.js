import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card, Image, Breadcrumb} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default class SearchList extends Component{
    // searchKey={key} searchProduct={search}
  render() {

    const searchData = this.props.searchProduct;
    const searchKey = this.props.searchKey;

    const mysearchProducts = searchData.map(ProductList=>
        
        <Col className="p-0" key={ProductList.id} xl={3} lg={3} md={3} sm={6} xs={6}>
                  <Link className="text-link" to={"/product-details/"+ProductList.id} >
               <Card className="image-box card w-100">
               <Image className="center w-75" src={ProductList.image} />   
               <Card.Body> 
               <p className="product-name-on-card">{ProductList.title}</p>
               <p className="product-price-on-card">Price : ${ProductList.price}</p>
                    
               </Card.Body>
               </Card>  
               </Link>        
               </Col>
        
        )
    return (

        <Fragment>

        <Container className="text-center" fluid={true}>

        <div className="breadbody">
               <Breadcrumb>
  <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>

  <Breadcrumb.Item> <Link to={"/productbysearch/"+searchKey}> Search For :  {searchKey } </Link> </Breadcrumb.Item>   
</Breadcrumb>
</div>


      <div className="section-title text-center mb-40 mt-2"><h2> {searchKey }  </h2>
      
      </div>
<Row>

    {
        mysearchProducts
    }
</Row>
        {this.props.searchKey}
        </Container>

      </Fragment>

    )
  }
}
