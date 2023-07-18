import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Col,Row } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import HomeSlider from './HomeSlider';

export default class HomeTopMobile extends Component {

  constructor(){
    super();
    this.state={
      SliderData:[],
    }
  }
  componentDidMount(){
        /* Hoem SLider Here */

        axios.get(AppURL.getSlider)
        .then((res)=>{
        let sliderJson = res.data;
        this.setState({homeSLiders:sliderJson})
       
        })
    
        .catch((error)=>{
    
        })
    
  }
  render() {
    return (
            <Fragment>
             <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                       <Row className="p-0 m-0 overflow-hidden"> 
                            <Col lg={12} md={12} sm={12}> 
                            <HomeSlider allSlider={this.state.SliderData} />
                            </Col>
                       </Row>
                  </Container>
                  </Fragment>
       
    )
  }
}
