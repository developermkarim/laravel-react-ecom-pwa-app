import React, { Component } from 'react'

class AppURL extends Component {
  
    static BaseURL = "http://127.0.0.1:8000/api";
    static GetVisitorURL = this.BaseURL + "/getvisitor";
    static PostContactURL = this.BaseURL + "/getcontact";
}

export default AppURL;