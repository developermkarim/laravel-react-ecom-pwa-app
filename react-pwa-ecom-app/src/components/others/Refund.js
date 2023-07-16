import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import AppURL from '../../api/AppURL';
// import ReactHtmlParser from 'react-html-parser';
class Refund extends Component {

     constructor(){
          super();
          this.state={
               refund:"",
               loaderDiv:"",
               mainDiv:"d-none",
          }
     }

     componentDidMount(){




               axios.get(AppURL.GetSiteInfo)
               .then((res)=>{
                    var statusCode = res.status;
                    console.log(statusCode);
                    console.log(res);
                    if(statusCode === 200){
                         var refundJson = (res.data)[0]['refund'];
                         this.setState({refund:refundJson,loaderDiv:"d-none",mainDiv:""});
                         sessionStorage.setItem('refund',this.state.refund);
                    }else{
                       
                         toast.error("Something went Wrong",{
                              postition:'bottom-center'
                         });

                    }

               })
               .catch((err)=>{
                   toast.error(err,{
                    position:"bottom-center"
                   })
               })
          

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
        {this.state.refund}
  </div>
    

        
                         </Col>
                    </Row>
               </Container>
               <ToastContainer/>
          </Fragment>
          )
     }
}

export default Refund