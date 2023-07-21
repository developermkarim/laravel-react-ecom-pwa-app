import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link, Navigate } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import Login from '../../assets/images/login.png'

class Register extends Component {
     constructor(){
          super();
          this.state={
               name:'',
               email:'',
               password:'',
               password_confirmation:'',
               message:'',
               loggedIn:false
          }
     } 

      // Register Form Submit Method 
      formSubmit = (e) => {
          e.preventDefault();

          const data={
               name:this.state.name,
               email:this.state.email,
               password:this.state.password,
               password_confirmation:this.state.password_confirmation
          }

          axios.post(AppURL.userRegister,data).then(response =>{ 

               localStorage.setItem('token',response.data.token);
               this.setState({loggedIn:true,message:response.data.message})
               this.props.setUserData(response.data.user)

          }).catch(error=>{
               console.log(error);
               this.setState({message:error.message})
          }); 

     }
     render() {

          if(this.state.loggedIn){
               return <Navigate to="/profile" replace={true} />
          }
          if(localStorage.getItem('token')){
               return <Navigate to="/profile" replace={true} />
          }
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

<h3>
     {this.state.message}
</h3>

                    <Row className="text-center">
             <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
               <Form onSubmit={this.formSubmit} className="onboardForm">
                    <h4 className="section-title-login"> USER REGISTER </h4>

                    <input  onChange={(ev)=>this.setState({name:ev.target.value})} className="form-control m-2" type="text" placeholder="Enter Your Name" />

                    <input onChange={(ev)=>this.setState({email:ev.target.value})} className="form-control m-2" type="email" placeholder="Enter Your Email" />

                    <input onChange={(ev)=>this.setState({password:ev.target.value})} className="form-control m-2" type="password" placeholder="Enter Your Password" />

                    <input onChange={(ev)=>this.setState({password_confirmation:ev.target.value})} className="form-control m-2" type="password" placeholder="Confirm Your Password" />


                    <Button type='submit' className="btn btn-block m-2 site-btn-login"> Sing Up </Button>
     <br></br> <br></br>
     <hr />
     <p> <b> Forget My Password? </b><Link to='/forget-password'><b> Froget Password </b> </Link> </p>

     <p> <b> Already Have An Account ? </b><Link to="/user-login"><b> Login </b> </Link> </p>

               </Form>


                         </Col>

            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                              <img className="onboardBanner" src={Login} />
                         </Col>
                    </Row>






                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Register