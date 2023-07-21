import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/easyshop-logo.png';
import Bars from '../../assets/images/bars.png';
import {Link, Navigate} from "react-router-dom";
import MegaMenuAll from '../home/MegaMenuAll';
import AppURL from '../../api/AppURL';
 
   
 class NavMenuDesktop extends Component {

     constructor(){
          super();
          this.state={
               SideNavState: "sideNavClose",
               ContentOverState: "ContentOverlayClose",
               searchKey:"",
               searchRedirectPage:false,
          }

          this.searchOnChange = this.searchOnChange.bind(this);
          this.searchOnClick = this.searchOnClick.bind(this);
          this.searchRedirect = this.searchRedirect.bind(this);

     }


     MenuBarClickHandler=()=>{
          this.SideNavOpenClose();
     }

     ContentOverlayClickHandler=()=>{
          this.SideNavOpenClose();
     }


     SideNavOpenClose=()=>{
          let SideNavState = this.state.SideNavState;
          let ContentOverState = this.state.ContentOverState;
          if(SideNavState==="sideNavOpen"){
               this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})

          }
          else{
               this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
          }
     }

     searchOnChange=(ev)=>{
          this.setState({searchKey:ev.target.value})
          setTimeout(() => {
               this.setState({searchRedirectPage:true})
          }, 2000);
     }

     searchOnClick=()=>{
          if(this.state.searchKey.length>=2){
             this.setState({searchRedirectPage:true})
          }
     }


     searchRedirect=()=>{
          if(this.state.searchRedirectPage===true){
               return <Navigate to={`/product-search/${this.state.searchKey}`} />
          }
          
     }


     render() {
          return (
               <Fragment>
<div className="TopSectionDown">
<Navbar fixed={"top"} className="navbar" bg="light">

    <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
         <Row>
              <Col lg={4} md={4} sm={12} xs={12}>

              
              <img onClick={this.MenuBarClickHandler} className="bar-img" src={Bars} />

              <Link to="/"> <img className="nav-logo" src={Logo} /> </Link>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                   <div className="input-group w-100">
                   <input onChange={this.searchOnChange} type="text" className="form-control" />
                   <Button onClick={this.searchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"> </i> 
                   </Button>
                   </div>
              </Col>

              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
              
              <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">3</span></sup>                  
                   </Link>

                   <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup>                  
                   </Link>

                   <a className="btn"><i className="fa h4 fa-mobile-alt"></i></a>
                   <Link to="/user-login" className="h4 btn">LOGIN</Link>
                   
                   <Link to='/cart' className="cart-btn"><i className="fa fa-shopping-cart"></i> 3 Items </Link>
              </Col>

         </Row>
   
   {
     this.searchRedirect()
   }
    </Container>

  </Navbar>
  </div>

  <div className={this.state.SideNavState}>
                <MegaMenuAll />
          </div>

               <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

               </div>



               </Fragment>
          )
     }
}

export default NavMenuDesktop