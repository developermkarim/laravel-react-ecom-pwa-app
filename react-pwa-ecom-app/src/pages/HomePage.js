import React, { Component } from 'react';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop';
import NewArrival from '../components/home/NewArrival';

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <HomeTop/>
                <FeaturedProducts/>
                <Categories/>
                <NewArrival/>
                <Collection/>
            </div>
        );
    }
}

export default HomePage;