import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import AppURL from '../../api/AppURL';

class Privacy extends Component {
     constructor(){
          super();

          this.state={
               privacy:"",
               loaderDiv:"",
               mainDiv:"d-none"
          }
     }

     componentDidMount(){
          axios.get(AppURL.GetSiteInfo)
          .then((res)=>{
               if(res.status===200){
                    let resJson = (res.data)[0]['privacy'];
                    // console.log(resJson);
                    this.setState({privacy:resJson,loaderDiv:"d-none",mainDiv:""})
               }
               else{
                    toast.error("something Went Wrong");
               }
          })
          .catch((error)=>{
               toast.error(error,{
                    position:"bottom-center",
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
{this.state.privacy}
</div>


                         </Col>
                    </Row>
               </Container>
               
               <ToastContainer/>

          </Fragment>
          )
     }
}

export default Privacy