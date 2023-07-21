import axios from 'axios'
import React, { Component, Fragment } from 'react'
import AppURL from '../api/AppURL'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Profile from '../components/common/Profile'


class ProfilePage extends Component {

      
  componentDidMount(){
     window.scroll(0,0)
  }



     render() {

          const userData = this.props.userData;
             const user =  this.props.user
          return (
               <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <Profile user={user} setUserData={userData} />  

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )
     }
}

export default ProfilePage