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
class AppRoutes extends Component {
    render() {
        return (
                <Routes>
                   
                   <Route path='/' element={<HomePage/>}/>

                   <Route path='/user-login' element={<UserLoginPage/>}/>

                   <Route path='/contact' element={<ContactPage/>}></Route>

                   <Route path='/about' element={<AboutPage/>}></Route>

                   <Route path='/privacy' element={<PrivacyPage/>}></Route>

                   <Route path='/refund' element={<RefundPage/>}></Route>

                   <Route path='/purchase' element={<PurchasePage/>}></Route>

                   <Route path='/product-details/:code' element={<ProductDetailsPage/>}></Route>

                    
 
 {/*                 <Route path='/productbycategory/:category' element={<ProductCategoryPages />}/>  */}

                 {/* <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()} /> } /> */}

                <Route path='/productbycategory/:category' element={<ProductCategoryPages />}> </Route>

                <Route path='/productbysubcategory/:category/:subcategory' element={<ProductSubCategoryPage />}> </Route>

             {/*    <Route path='/getproductdetails/:code' element={<ProductDetailsPage/>}></Route> */}

                   <Route path='/notification'  element={<NotificationPage/>}></Route>

                   <Route path='/favourite' element={<FavouritePage/>}></Route>

                   <Route path='/cart' element={<CartPage/>}></Route>

                </Routes>
        );
    }
}

export default AppRoutes;