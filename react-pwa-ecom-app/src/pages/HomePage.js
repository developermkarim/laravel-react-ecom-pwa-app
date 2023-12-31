import React, { Component, Fragment } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import HomeTopMobile from '../components/home/HomeTopMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop';
import NewArrival from '../components/home/NewArrival';
import axios from 'axios';
import AppURL from '../api/AppURL';

class HomePage extends Component {

    componentDidMount(){
        window.scroll(0,0);
        this.getVisitorDetails()
    }

    getVisitorDetails = ()=>{
        axios.get(AppURL.GetVisitorURL).then().catch();
    }
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

                <div className="Desktop">
                <FooterDesktop/>
                </div>

                <div className="Mobile">
                    <FooterMobile/>
                </div>

            </div>
            </Fragment>
        );
    }
}

export default HomePage;