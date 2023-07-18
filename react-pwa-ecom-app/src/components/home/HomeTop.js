import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';
import axios from 'axios';
import SliderLoading from '../PlaceHolder/SliderLoading';
export class HomeTop extends Component {
  constructor(){
    super();
    this.state={
      menuData:[],
      homeSLiders:[],
      loaderDiv:"",
      mainDiv:"d-none",
    }
  }

  componentDidMount(){
    axios.get(AppURL.GetCategory)
    .then((res)=>{
    let menuJson = res.data;
    this.setState({menuData:menuJson,loaderDiv:"d-none",mainDiv:""})
   
    })

    .catch((error)=>{

    })

    /* Hoem SLider Here */

    axios.get(AppURL.getSlider)
    .then((res)=>{
    let sliderJson = res.data;
    this.setState({homeSLiders:sliderJson,loaderDiv:"d-none",mainDiv:""})
   
    })

    .catch((error)=>{

    })


  }
  render() {
    return (
        <Fragment>
          <SliderLoading isLoading={this.state.loaderDiv} />

          <div className={this.state.mainDiv}>
        <Container className="p-0 m-0 overflow-hidden" fluid={true}>
                         <Row>
                              <Col lg={3} md={3} sm={12}>
                              <MegaMenu allMenuData={this.state.menuData} />
                              </Col>

                              <Col lg={9} md={9} sm={12}>
                              <HomeSlider allSlider={this.state.homeSLiders} />
                              </Col>
                         </Row>
                    </Container>
                    </div>
               </Fragment>
    )
  }
}

export default HomeTop;