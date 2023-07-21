import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button, Image } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom';
import AppURL from '../../api/AppURL';
import Login from '../../assets/images/login.png'
import Validation from '../../validation/Validation';

class UserLogin extends Component {

     constructor(){
          super();
          this.state={
            email:'',
            password:'',
            success:'',
            error:'',
            loginRedirect:false,
            token:"",
            testData:""
          }
        }

     

        emailForm=(ev)=>{
          this.setState({email:ev.target.value})
        }
        passwordForm=(ev)=>{
          this.setState({password:ev.target.value});
        }


        loginForm=(ev)=>{
          ev.preventDefault();

          if(!Validation.emailPattern.test(this.state.email)){
               return this.setState({error:"sorry Invalid Email"});

          }else if(this.state.password.length < 6){
               return this.setState({error:"Password must be between 6 and 8 Characters"})
          }

          else{

                    const data = {
                         email:this.state.email,
                         password:this.state.password
                    }
               axios.post(AppURL.getUserLogin,data)
                   .then(res=>{
                    console.log(res.data);
                    localStorage.setItem('token',res.data.token);
                    this.setState({success:res.data.message,loginRedirect:true,error:"",token:res.data.token,testData:res.data.user.name})
                    this.props.setUserData(res.data.user);
                   })

                   .catch(error=>{
                    console.log(error.message);
                    this.setState({error:'Email Or Password Incorrect'})

                   })

                  }
          }
       
     render() {

          if(this.state.loginRedirect){
                
                  return   <Navigate to='/profile' replace={true}/>
              
          }
          
          if(localStorage.getItem('token')){
               return <Navigate to='/profile' replace={true} />
          }

          return (
               <Fragment>
               <Container>


                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
     
                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
               <Form className="onboardForm" onSubmit={this.loginForm} >

               {this.state.error && <div class="alert alert-danger" role="alert">
  <h5 class="mb-0">{this.state.error}</h5>
</div>}

{
     this.state.success && <div class="alert alert-success" role="alert">
      <h5 class="mb-0">{this.state.success}</h5>
   </div>
}


                    <h4 className="section-title-login"> USER SING IN </h4>
                    
                    <input className="form-control m-2" type="text" placeholder="Enter Your Email" onChange={this.emailForm} />
     
                    <input className="form-control m-2" type="password" placeholder="Enter Your Password"  onChange={this.passwordForm} />
     
     
                    <Button type="submit" className="btn btn-block m-2 site-btn-login"> Login </Button>
     
                    <br></br> <br></br>
          <hr />
          <p> <b> Forget My Password? </b><Link to="/forget-password"><b> Froget Password </b> </Link> </p>
     
          <p> <b> Don't Have An Account ? </b><Link to="/register"><b> Register </b> </Link> </p>
                    
               </Form>
     
     
                         </Col>
     
            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                              <Image className="onboardBanner" src={Login} />
                         </Col>
                    </Row>
     
     
     
     
     
     
                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default UserLogin