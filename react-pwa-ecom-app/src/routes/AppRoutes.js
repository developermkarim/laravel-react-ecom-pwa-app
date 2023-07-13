import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

class AppRoutes extends Component {
    render() {
        return (
                <Routes>
                   
                   <Route path='/' element={<HomePage/>}/>
                </Routes>
        );
    }
}

export default AppRoutes;