import axios from 'axios';
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Navigate } from 'react-router-dom';
import AppURL from '../../api/AppURL';

class Profile extends Component {

    /*  constructor(){
          super();
          this.state={
              user:{},
          }
      }
     
      componentDidMount(){
          window.scroll(0,0)
          axios.get(AppURL.getUserData)
          .then(res=>{
              console.log(res.data);
              // this.setUserData(res.data);
              this.setState({user:res.data})
              console.log(this.state.user);
          })
          .catch(error=>{})
     
      }
     
 */
     render() {

         let name;
         let email;
         if(this.props.user){
          name = this.props.user.name;
          email = this.props.user.email;

         }

         if(!localStorage.getItem('token')){
          return <Navigate to='/user-login' />
         }

          return (
              <Fragment>
                   <h1> User Profile Page </h1>

               <ul className="list-group">
<li className="list-group-item">Name :  {name} </li>
<li className="list-group-item">Email :  {email} </li>
               </ul>


              </Fragment>
          )
     }
}

export default Profile;