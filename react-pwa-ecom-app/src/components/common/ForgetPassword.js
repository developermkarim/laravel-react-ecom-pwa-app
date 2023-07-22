import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import AppURL from '../../api/AppURL'
import Forget from '../../assets/images/forget.jpg'

class ForgetPassword extends Component {

     constructor(){
          super()
          this.state={
               token:"",
               email:"",
               password:"",
               password_confirmation:"",
               message:"",
              
          }
     }

 
     onForgetForm = (ev)=>{
          ev.preventDefault();
          if(this.state.email.length===0){
               return toast.error('email Must be Filed Up',{position:"top-center"})
          }

          const data={
               email:this.state.email
          }

          axios.post(AppURL.forgetPassword,data)
          .then(respose=>{
               console.log(respose.data)
               this.setState({message:respose.data.message})
               toast.success(respose.data.message,{
                    position:"top-right",
               })
          }
          )
          .catch((error)=>{this.setState({message:error.response.data.message})
          toast.error(error.response.data.message,{
               position:"top-right"
          })

     })
   

     }

     render() {
          
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
               <Form onSubmit={this.onForgetForm} className="onboardForm">

 {/*  {
     (this.state.message || this.state.error) && <div className={`alert alert-${this.state.message?'primary':'danger'}`} role="alert">
          <strong>{this.state.message?this.state.message:this.state.error}</strong>
     </div>
  } */}
{/*   {
     this.state.message && <div className="alert alert-primary" role="alert">
     <strong>{this.state.message}</strong>
</div>
  }

  {
          this.state.error && <div className="alert alert-danger" role="alert">
          <strong>{this.state.error}</strong>
     </div>
  }
 */}
                    <h4 className="section-title-login"> FORGET PASSWORD ? </h4>


                    <input onChange={(ev)=>this.setState({email:ev.target.value})} className="form-control m-2" type="email" placeholder="Enter Your Email" />

                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Reset Password </Button>


               </Form>


                         </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                              <img className="onboardBanner" src={Forget} />
                         </Col>
                    </Row>






                         </Col>
                    </Row>
               </Container>
               <ToastContainer/>
          </Fragment>
          )
     }
}

export default ForgetPassword