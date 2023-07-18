import React from 'react';
import SubCategory from '../components/ProductDetails/SubCategory';
import FooterDesktop from '../components/common/FooterDesktop';
import FooterMobile from '../components/common/FooterMobile';
import NavMenuDesktop from '../components/common/NavMenuDesktop';
import NavMenuMobile from '../components/common/NavMenuMobile';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import AppURL from '../api/AppURL';
const ProductSubCategoryPage = () => {
    const {category,subcategory} = useParams()

    const [subCateByProduct,SetSubCateByProduct] = useState([]);


    useEffect(()=>{
        fetch(AppURL.productBySubCategory(category,subcategory))
        .then( res => res.json())
        .then( data => {
            console.log(data);
            SetSubCateByProduct(data);
        })
    })
    return (
    

   <>

   <div className='Desktop'>
             <NavMenuDesktop/>

{/* This NavMenu Component for Mobile Device */}
             <div className="Mobile">
             <NavMenuMobile/>
             </div>


    
             <SubCategory category={category} subCategory={subcategory} subCateProducts={subCateByProduct}  />

           
             <div className="Desktop">
             <FooterDesktop/>
             </div>

             <div className="Mobile">
                 <FooterMobile/>
             </div>

         </div>
   </>
    )
};

export default ProductSubCategoryPage;