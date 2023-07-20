import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button, Toast, Breadcrumb } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
 import {toast, ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import Validation from '../../validation/Validation';
import { Link } from 'react-router-dom';

export class Contact extends Component {

  constructor(){
    super();

    this.state = {
      name:"",
      email:"",
      message:"",

    }

  }

  /* IT Is alternative system to post input data . It is outline function of <input type="
  If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
   */

  nameInput = e =>this.setState({name:e.target.value});
  emailInput = e =>this.setState({email:e.target.value});
  messageInpute = e =>this.setState({message:e.target.value});

    formSubmit=(ev)=>{

      let name = this.state.name;
      let email = this.state.email;
      let message = this.state.message;
      let submitBtn = document.getElementById('submit-btn');
      let fullForm = document.getElementById('full-form');

      if(message.length===0){
        toast.error("Please write your message");
   }
   else if(name.length===0){
        toast.error("Please write down our name");
   }
   else if(email.length===0){
        toast.error("Please write down our Email");
   }
   else if(!Validation.NameRegx.test(name)){
    toast.error("Invalid Name");
   }
   else{

    submitBtn.innerHTML = "Sending....";
    let formData = new FormData();
    formData.append('name',name);
    formData.append('email',email);
    formData.append('message',message);

    axios.post(AppURL.PostContactURL,formData)
    .then( function(response){
      if(response.status === 200 && response.data===true){
        toast.success("Contact Data send Successfully");
        submitBtn.innerHTML = "Send";
        fullForm.reset();
      }else{
        toast.error("Something went Wrong");
        submitBtn.innerHTML = "send";
      }
    })
    .catch((error)=>{
      toast.error(error);
      submitBtn.innerHTML = "Send";
    });
   }

      ev.preventDefault();

  /*   if(this.state.name.trim() ===''){
      this.setState({inputMessage:"Name field Must be filled Up"})
      setTimeout(()=>{this.setState({inputMessage:""})},1000);

    }else if(this.state.email.trim() ===''){
      this.setState({inputMessage:"Email Must be Field Up"});
      setTimeout(()=>{this.setState({inputMessage:""})},1000);

    }else if(this.state.message.trim() ===''){
      this.setState({inputMessage:"Sorry, Something must be written"})
      setTimeout(()=>{this.setState({inputMessage:""})},1000);
    }

    else{ 

    var  contactData = {
        name:this.state.name,
        email:this.state.email,
        message:this.state.message,
      };
      axios.post(AppURL.PostContactURL,contactData)
      .then((res)=>{
        console.log(res.data);
        this.setState({successMsg:"Contact Data sent Successfully"});

        setTimeout(() => {
          this.setState({successMsg:"",name:"",email:'',message:""});
        }, 4000);

      })

      .catch((err)=>{
        console.log(err.message);
        this.setState({inputMessage:"Sorry, Contact Data not Sent",successMsg:""})
        setTimeout(() => {
          this.setState({inputMessage:""})
        }, 3000);
        
      })

    } */

    }
     render() {
    
          return (
               <Fragment>
               <Container>

{/* Breadcumb Here  */}
<div className="breadbody">
<Breadcrumb>
      <Breadcrumb.Item><Link  to="/">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item> <Link  to="/contact">Contact</Link></Breadcrumb.Item>
    </Breadcrumb>
    </div>

                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
     
                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
          <Form onSubmit={this.formSubmit} className="onboardForm" id='full-form'>


         {/*    {(this.state.inputMessage &&  <div class="alert alert-danger" role="alert">
        <strong>{this.state.inputMessage}</strong>
      </div>)  || (this.state.successMsg && <div class="alert alert-success" role="alert">
        <strong>{this.state.successMsg}</strong>
      </div>)} */}


          <h4 className="section-title-login">CONTACT WITH US </h4>
          <h6 className="section-sub-title">Please Contact With Us </h6>
          
          <input  className="form-control m-2" onChange={this.nameInput}  name='name' type="text" placeholder="Enter Your Name" />

{/* this inline function is alse used */}
          <input  className="form-control m-2" name='email' onChange={this.emailInput} type="email" placeholder="Enter Email" />

          <Form.Control onChange={this.messageInpute} name='message' className="form-control m-2" as="textarea" rows={3} placeholder="Message" />

          <Button id='submit-btn' type="submit" className="btn btn-block m-2 site-btn-login"> Send </Button>
          
     </Form>
     
     
                         </Col>
     
            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                 <br></br><br></br>
           <p className="section-title-contact">
           1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104
Email: Support@easylearningbd.com
           </p>

           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162771.1102477064!2d-74.10054944459704!3d40.70681480276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1627241390779!5m2!1sen!2sbd" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

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

export default Contact