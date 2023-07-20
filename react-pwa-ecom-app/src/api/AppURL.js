class AppURL {
  
    static BaseURL = "http://127.0.0.1:8000/api";
    static GetVisitorURL = this.BaseURL + "/getvisitor";
    static PostContactURL = this.BaseURL + "/getcontact";
    static GetSiteInfo = this.BaseURL + '/getsiteinfo';
    static GetCategory = this.BaseURL + '/getcategory';
    static getSlider = this.BaseURL + '/getslider';
    static NotificationHistory = this.BaseURL+"/notification";
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

}

export default AppURL;