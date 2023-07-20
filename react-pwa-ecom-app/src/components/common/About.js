import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import AppURL from '../../api/AppURL'

 class About extends Component {

    constructor(){
        super();
        this.state={
            about:"",
            loaderDiv:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount(){


        axios.get(AppURL.GetSiteInfo)
        .then((res)=>{
            if(res.status === 200){
                this.setState({about:res.data[0]['about'],loaderDiv:"d-none",mainDiv:""})
             
            }else{
               
            }
        })
        .catch((error)=>{
            console.log(error);
            toast.error(error,{
                position:'bottom-center'
            })
        })
    }
     render() {
          return (
               <Fragment>
               <Container>

{/* Breadcumb Here  */}
<div className="breadbody">
<Breadcrumb>
      <Breadcrumb.Item><Link  to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item> <Link  to="/about">About</Link></Breadcrumb.Item>
    </Breadcrumb>
    </div>
    
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
                {this.state.about}
                </div>

                
   
                         </Col>
                    </Row>
               </Container>

               <ToastContainer/>

          </Fragment>
          )
     }
}

export default About;