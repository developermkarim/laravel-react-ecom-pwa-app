import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import AppURL from '../../api/AppURL'
import Apple from '../../assets/images/apple.png'
import Google from '../../assets/images/google.png'

export class FooterDesktop extends Component {

     constructor(){
          super();
          this.state={
               address:"",
               android_app_link:"",
               ios_app_link:"",
               facbook_link:"",
               twitter_link:"",
               instagram_link:"",
               copyright_text:"", 
               loaderDiv:"",
               mainDiv:"d-none",
          }
     }

     componentDidMount(){
          axios.get(AppURL.GetSiteInfo)
          .then((res)=>{
               if(res.status === 200){
                    var resData = res.data[0];
                    this.setState({
                         address:resData['address'],
                         android_app_link:resData['android_app_link'],
                         ios_app_link:resData['ios_app_link'],
                         facbook_link:resData['facbook_link'],
                         twitter_link:resData['twitter_link'],
                         instagram_link:resData['instagram_link'],
                         copyright_text:resData['copyright_text'], 
                         loaderDiv:"d-none",
                         mainDiv:"",
                    })
               }else{
                    toast.error('Something Went Wrong',{
                         postition:"bottom-center",
                    })
               }

          })
          .catch((err)=>{
               toast.error(err,{
                    postion:"bottom-center"
               })
          })
     }

     render() {
          return (
               <Fragment>
               <div className="footerback m-0 mt-5 pt-3 shadow-sm"> 
                            <Container>
             <Row className="px-0 my-5">
                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                       
                  <div className={this.state.loaderDiv}>
        
                                 <div class="ph-item">
                                 <div class="ph-col-12">        
                                 <div class="ph-row">           
                                 <div class="ph-col-4"></div>
                                 <div class="ph-col-8 empty"></div>
                                 <div class="ph-col-6"></div>
                                 <div class="ph-col-6 empty"></div>
                                 <div class="ph-col-12"></div>
                                 <div class="ph-col-12"></div>
                                 
                                 </div>
                                 </div>
                                 </div>
        
        
        </div>
        
                  <div className={this.state.mainDiv}>
                       <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
        
                         { this.state.address } 
                       </div>
                       
                       <h5 className="footer-menu-title">SOCIAL LINK</h5>
                       <a href={this.state.facbook_link} target="_blank"><i className="fab m-1 h4 fa-facebook"></i></a>
                       
                       <a href={this.state.instagram_link} target="_blank"><i className="fab m-1 h4 fa-instagram"></i></a>
        
                       <a href={this.state.twitter_link} target="_blank"><i className="fab m-1 h4 fa-twitter"></i></a>
                  </Col>
        
                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                  <h5 className="footer-menu-title">THE COMPANY</h5>
                  <Link to="/about" className="footer-link"> About Us</Link><br></br>
                  <Link to="/" className="footer-link"> Company Profile</Link><br></br>
                  <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
                  </Col>
        
                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                  <h5 className="footer-menu-title">MORE INFO</h5>
                  <Link to="/purchase" className="footer-link">How To Purchase</Link><br></br>
                  <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
                  <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
                  </Col>
        
                  <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                  <h5 className="footer-menu-title">DOWNLOAD APPS</h5>
                  <a href={this.state.android_app_link} target="_blank"><Image src={Google}  /></a><br></br>
                  
                  <a href={this.state.ios_app_link} target="_blank"><Image className="mt-2" src={Apple}  /></a><br></br>
                  Change Your Language <br></br>
                  <div id="google_translate_element">  </div>
                  </Col>
        
             </Row>
                            </Container>
        
             <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
                            <Container>
                                 <Row>
               <h6 className="text-white"> {this.state.copyright_text }  </h6>
                                 </Row>
                            </Container>
                       </Container> 
        
                            </div>
        
                       </Fragment>
          )
     }
}

export default FooterDesktop