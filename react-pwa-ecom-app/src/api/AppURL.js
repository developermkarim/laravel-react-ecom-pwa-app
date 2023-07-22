class AppURL {
  
    static BaseURL = "http://127.0.0.1:8000/api";
    static GetVisitorURL = this.BaseURL + "/getvisitor";
    static PostContactURL = this.BaseURL + "/getcontact";
    static GetSiteInfo = this.BaseURL + '/getsiteinfo';
    static GetCategory = this.BaseURL + '/getcategory';
    static getSlider = this.BaseURL + '/getslider';
    static NotificationHistory = this.BaseURL+"/notification";

    static getUserLogin = this.BaseURL + '/user-login';
    static userRegister = this.BaseURL + '/register';
    static getUserData = this.BaseURL + '/user-data';

    static forgetPassword = this.BaseURL + '/forget-password';

    static resetPassword = this.BaseURL + '/reset-password';

    

    

    static productByRemark(remark){
        return `${this.BaseURL}/productlistbyremark/${remark}`;
    }

    static productByCategory(category){
        return this.BaseURL+"/productbycategory/"+category;
    }

    static productBySubCategory(category,subcategory){

        return `${this.BaseURL}/productbysubcategory/${category}/${subcategory}`;
    }

    static getProductDetails(id){
        return `${this.BaseURL}/product-details/${id}`;
    }

    static getProductBySearch(searchKey){
        return `${this.BaseURL}/product-search/${searchKey}`;
    }

}

export default AppURL;