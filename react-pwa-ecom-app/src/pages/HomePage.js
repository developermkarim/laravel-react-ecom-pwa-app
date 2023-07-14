import React, { Component, Fragment } from 'react';
import HomeTopMobile from '../components/common/HomeTopMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop';
import NewArrival from '../components/home/NewArrival';

class HomePage extends Component {
    render() {
        return (
            <Fragment> 

            <div className='Desktop'>
                <NavMenuDesktop/>

                <HomeTop/>
{/* This NavMenu Component for Mobile Device */}
                <div className="Mobile">
                <NavMenuMobile/>
                <HomeTopMobile/>

                </div>


                <FeaturedProducts/>
                <Categories/>
                <NewArrival/>
                <Collection/>
            </div>
            </Fragment>
        );
    }
}

export default HomePage;