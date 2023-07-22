import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Privacy from '../components/others/Privacy';

export default class LogoutPage extends Component {

    conponentDidMount(){
        window.scroll(0,0);
        
    }

  render() {

    
        return <Navigate to='/user-login' replace={true}> </Navigate>
  
    return (
        <>
      
      <div className='Desktop'>
                <NavMenuDesktop/>

{/* This NavMenu Component for Mobile Device */}
                <div className="Mobile">
                <NavMenuMobile/>
                </div>


       {/* User Login Page Here */}

           <h5> This is Logout Page </h5>

              
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
