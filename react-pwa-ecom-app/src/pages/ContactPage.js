import React, { Component } from 'react'
import Contact from '../components/common/Contact';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';

export default class ContactPage extends Component {

    conponentDidMount(){
        window.scroll(0,0);
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

              <Contact/>

              
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
