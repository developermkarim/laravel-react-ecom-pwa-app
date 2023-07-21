import React, { useEffect } from 'react';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchList from '../components/ProductDetails/SearchList';
import AppURL from '../api/AppURL';

const ProductSearchpage = () => {
    const {key} = useParams();
    const [search,setSearch] = useState([]);

     useEffect( () =>{
            fetch(AppURL.getProductBySearch(key))
            .then(res => res.json())
            .then(data => setSearch(data));
        },);
       
    return (
       
   <>

   <div className='Desktop'>
             <NavMenuDesktop/>

{/* This NavMenu Component for Mobile Device */}
             <div className="Mobile">
             <NavMenuMobile/>
             </div>


    <SearchList searchKey={key} searchProduct={search}  />
            

           
             <div className="Desktop">
             <FooterDesktop/>
             </div>

             <div className="Mobile">
                 <FooterMobile/>
             </div>

         </div>
   </>
    );
};

export default ProductSearchpage;