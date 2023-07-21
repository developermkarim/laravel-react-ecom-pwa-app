import React, { Component } from 'react'
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import UserLogin from '../components/common/UserLogin';

export default class UserLoginPage extends Component {

  componentDidMount(){
    window.scroll(0,0)
}

  render() {
   
    return (
      <>
      
      <div className='Desktop'>
                <NavMenuDesktop/>

{/* This NavMenu Component for Mobile Device */}
                <div className="Mobile">
                <NavMenuMobile/>
                </div>


       {/* User Login Page Here */}

       <UserLogin user={this.props.user} setUserData={this.props.setUserData} /> 

              
                <div className="Desktop">
                <FooterDesktop/>
                </div>

                <div className="Mobile">
                    <FooterMobile/>
                </div>

            </div>
      </>
    )
  }
}
