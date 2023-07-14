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
class AppRoutes extends Component {
    render() {
        return (
                <Routes>
                   
                   <Route path='/' element={<HomePage/>}/>

                   <Route path='/user-login' element={<UserLoginPage/>}/>

                   <Route path='/contact' element={<ContactPage/>}></Route>

                   <Route path='/privacy' element={<PrivacyPage/>}></Route>

                   <Route path='/refund' element={<RefundPage/>}></Route>

                   <Route path='/purchase' element={<PurchasePage/>}></Route>

                   <Route path='/product-details' element={<ProductDetailsPage/>}></Route>

                   <Route path='/notification' element={<NotificationPage/>}></Route>

                   <Route path='/favourite' element={<FavouritePage/>}></Route>

                </Routes>
        );
    }
}

export default AppRoutes;