import React, { Component, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ResetPassword from '../components/common/ResetPassword'

 const ResetPasswordPage=()=> {

     const {token} = useParams();

          return (
              <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <ResetPassword resetToken={token} />  

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )

     }


export default ResetPasswordPage