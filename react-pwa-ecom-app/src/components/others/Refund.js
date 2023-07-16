import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
// import ReactHtmlParser from 'react-html-parser';
class Refund extends Component {

     constructor(){
          super();
          this.state={
               refund:"",
          }
     }

     componentDidMount(){

/*           if(this.setState({refund:this.state.refund}) === null){
               sessionStorage.getItem('refund');
          } */

          var refundFromSession = sessionStorage.getItem('refund');
          if(refundFromSession==null){

               axios.get(AppURL.GetSiteInfo)
               .then((res)=>{
                    var statusCode = res.status;
                    console.log(statusCode);
                    console.log(res);
                    if(statusCode === 200){
                         var refundJson = res.data[0]['refund'];
                         this.setState({refund:refundJson});
                         sessionStorage.setItem('refund',this.state.refund);
                    }else{
                         alert('Something Went Wrong');

                    }

               })
               .catch((err)=>{
                    alert(err.message)
               })
          }else{

               sessionStorage.setItem('refund',this.state.refund);
          }

     }

     render() {
      
          return (
               <Fragment>
               <Container>
                    <Row className="p-2">
            <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
      <h4 className="section-title-login">Refund Page </h4>
      
       {/* {ReactHtmlParser(this.state.refund)} */}
       {this.state.refund}

        
                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Refund