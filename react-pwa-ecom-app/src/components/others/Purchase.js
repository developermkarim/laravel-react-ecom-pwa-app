import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import AppURL from '../../api/AppURL';

export class Purchase extends Component {
     constructor(){
          super();
          this.state={
               purchase:"",
               loaderDiv:"",
               mainDiv:"d-none"
          }
     }

     componentDidMount(){

          let SiteInfoPurchase = sessionStorage.getItem("SiteInfoPurchase");

          if(SiteInfoPurchase == null){

               axios.get(AppURL.GetSiteInfo).then(response =>{
                    let StatusCode = response.status;
                    if(StatusCode===200){
                         let JsonData = (response.data)[0]['purchase_guide'];
                         this.setState({purchase:JsonData,loaderDiv:"d-none",mainDiv:""});
                         
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
          this.setState({purchase:SiteInfoPurchase,loaderDiv:'d-none',mainDiv:""});
     }

     }  

     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>


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
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
</div>
</div>
</div>


<div class="ph-item">
<div class="ph-col-12">        
<div class="ph-row">           
<div class="ph-col-4"></div>
<div class="ph-col-8 empty"></div>
<div class="ph-col-6"></div>
<div class="ph-col-6 empty"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
</div>
</div>
</div>

</div>



<div className={this.state.mainDiv}>
{this.state.purchase}
</div>
                         </Col>
                    </Row>
                    
               </Container>

               <ToastContainer/>
          </Fragment>
          )
     }
}

export default Purchase