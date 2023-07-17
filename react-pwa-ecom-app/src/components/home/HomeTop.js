import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';
import axios from 'axios';
export class HomeTop extends Component {
  constructor(){
    super();
    this.state={
      menuData:[],
      loaderDiv:"",
      mainDiv:"d-none",
    }
  }

  componentDidMount(){
    axios.get(AppURL.GetCategory)
    .then((res)=>{
    let menuJson = res.data;
    this.setState({menuData:menuJson})
   
    })

    .catch((error)=>{

    })
  }
  render() {
    return (
        <Fragment>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row>
                              <Col lg={3} md={3} sm={12}>
                              <MegaMenu allMenuData={this.state.menuData} />
                              </Col>

                              <Col lg={9} md={9} sm={12}>
                              <HomeSlider />
                              </Col>
                         </Row>
                    </Container>
               </Fragment>
    )
  }
}

export default HomeTop;