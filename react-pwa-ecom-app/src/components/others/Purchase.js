import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import AppURL from '../../api/AppURL';

export class Purchase extends Component {
     constructor(){
          super();
          this.state={
               purchase:""
          }
     }

     componentDidMount(){

          let SiteInfoPurchase = sessionStorage.getItem("SiteInfoPurchase");

          if(SiteInfoPurchase == null){

               axios.get(AppURL.GetSiteInfo).then(response =>{
                    let StatusCode = response.status;
                    if(StatusCode==200){
                         let JsonData = (response.data)[0]['purchase_guide'];
                         this.setState({purchase:JsonData});

                          sessionStorage.setItem("SiteInfoPurchase",JsonData)
                    } 
                    else{
                         toast.error("Somthing Went Wrong",{
                              position: "bottom-center"
                         });
                    }
      
         
          }).catch(error=>{
               toast.error("Somthing Went Wrong",{
                    position: "bottom-center"
               });
          });

     }  // end If Conditon 
      else{
          this.setState({purchase:SiteInfoPurchase});
     }

     }  

     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>


                         </Col>
                    </Row>
                    
               </Container>

               <ToastContainer/>
          </Fragment>
          )
     }
}

export default Purchase