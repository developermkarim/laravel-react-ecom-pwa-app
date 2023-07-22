import axios from 'axios'
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button, Image } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify'
import AppURL from '../../api/AppURL'
import Forget from '../../assets/images/forget.jpg'
import Validation from '../../validation/Validation'

export class ResetPassword extends Component {

   
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

      // Reset Form Submit Method 
      onResetPassword = (e) => {
          e.preventDefault();
          const data={
               token:this.state.token,
               email:this.state.email,
               password:this.state.password,
               password_confirmation:this.state.password_confirmation
          }

          axios.post(AppURL.resetPassword,data).then(response =>{ 
            
               this.setState({message:response.data.message})

               toast.success(this.state.message,{
                    position: "top-right"
               });
               document.getElementById("resetForm").reset();
               
          }).catch(error=>{
               this.setState({message:error.response.data.message})
               toast.error(this.state.message,{
                    position: "top-right"
               });
               
          }); 

     }

     
     render() {
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
               <Form onSubmit={this.onResetPassword} className="onboardForm" id='resetForm'>
                    <h4 className="section-title-login"> RESET PASSWORD </h4>

{/* <h3>{this.props.resetToken}</h3> */}

                    <input onChange={(ev)=>this.setState({token:ev.target.value})}  className="form-control m-2" type="text" placeholder="Enter Your Pin Code" /* value={this.props.resetToken} */  />

                    <input onChange={(ev)=>this.setState({email:ev.target.value})} className="form-control m-2" type="email" placeholder="Enter Your Email" />

                    <input onChange={(ev)=>this.setState({password:ev.target.value})} className="form-control m-2" type="password" placeholder="Your New Password" />

                    <input onChange={(ev)=>this.setState({password_confirmation:ev.target.value})} className="form-control m-2" type="password" placeholder="Confirm Your Password" />


                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Reset Password </Button> 

               </Form>


                         </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                              <Image className="onboardBanner" src={Forget} />
                         </Col>
                    </Row>






                         </Col>
                    </Row>
               </Container>

{/* Toast Container Here  */}
   <ToastContainer/>

          </Fragment>
          )
     }
}

export default ResetPassword