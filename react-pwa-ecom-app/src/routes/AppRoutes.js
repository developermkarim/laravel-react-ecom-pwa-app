import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import PurchasePage from '../pages/PurchasePage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage';
import CartPage from '../pages/Cartpage';
import AboutPage from '../pages/AboutPage';
// import ProductCategoryPage from '../pages/ProductCategoryPage-main';
import ProductCategoryPages from '../pages/ProductsCategoryPages';
import ProductSubCategoryPage from '../pages/ProductSubCategoryPage';
import ProductSearchpage from '../pages/ProductSearchpage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import axios from 'axios';
import AppURL from '../api/AppURL';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
class AppRoutes extends Component {

    constructor(){
        super();
        this.state={
            user:{},
        }
    }

    componentDidMount(){
        axios.get(AppURL.getUserData)
        .then((res)=>{
             this.setUserData(res.data);
             console.log(res.data);
        })
        .catch(error=>{})

    }

    setUserData=(user)=>{
        this.setState({user:user})
    }

    render() {
        // console.log(this.state.user.name);
        return (
            <>
            <NavMenuDesktop user={this.state.user} setUserData={this.setUserData} />
                <Routes>
                   
                   <Route path='/' element={<HomePage key={Date.now()} />}/>

                   <Route path='/user-login'   element={<UserLoginPage user={this.state.user} setUserData={this.setUserData}  />}/>

                   <Route path='/register' element={<RegisterPage  user={this.state.user} setUserData={this.setUserData} />}/>

                   <Route  path='/profile' element={<ProfilePage user={this.state.user} setUserData={this.setUserData}  />}/>

                   <Route path='/forget-password' element={<ForgetPasswordPage/>}/>

                   <Route path='/reset-password' element={<ResetPasswordPage/>}/>

                   <Route path='/contact' element={<ContactPage/>}></Route>

                   <Route path='/about' element={<AboutPage/>}></Route>

                   <Route path='/privacy' element={<PrivacyPage/>}></Route>

                   <Route path='/refund' element={<RefundPage/>}></Route>

                   <Route path='/purchase' element={<PurchasePage/>}></Route>

                   <Route path='/product-details/:code' element={<ProductDetailsPage/>}></Route>

                   <Route path='/product-search/:key' element={<ProductSearchpage/>}></Route>

                    
 
 {/*                 <Route path='/productbycategory/:category' element={<ProductCategoryPages />}/>  */}

                 {/* <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} /> } /> */}

                <Route path='/productbycategory/:category' element={<ProductCategoryPages />}> </Route>

                <Route path='/productbysubcategory/:category/:subcategory' element={<ProductSubCategoryPage />}> </Route>

             {/*    <Route path='/getproductdetails/:code' element={<ProductDetailsPage/>}></Route> */}

                   <Route path='/notification'  element={<NotificationPage/>}></Route>

                   <Route path='/favourite' element={<FavouritePage/>}></Route>

                   <Route path='/cart' element={<CartPage/>}></Route>

                </Routes>

                </>
        );
    }
}

export default AppRoutes;