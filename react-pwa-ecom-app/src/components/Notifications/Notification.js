import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Card,Button,Modal } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import NotificationLoading from '../PlaceHolder/NotificationLoading';

class Notification extends Component {

    constructor(){
        super();

        this.state = {
            noticeShow:false,
            noticeAll:[],
            loaderDiv:"",
            mainDiv:"d-none",
            noticeTitle:"",
            noticeMessage:"",
            noticeDate:""
        };
    }


    componentDidMount(){
        axios.get(AppURL.NotificationHistory)
        .then(res=>this.setState({noticeAll:res.data,loaderDiv:"d-none",mainDiv:""}))
    }

    noticeShowHandler = (event)=>{
        this.setState({noticeShow:true})
        let title = event.target.getAttribute('data-title');
        let message = event.target.getAttribute('data-message');
        let date = event.target.getAttribute('data-date');
        this.setState({noticeTitle:title,noticeMessage:message,noticeDate:date});
    }

    noticeHideHandler = () =>{
        this.setState({noticeShow:false})
    }

     render() {
        const allNotices = this.state.noticeAll;
        const allNotifications = allNotices.map(notice=>
            <Col className="p-1" key={notice.id} md={6} lg={6} sm={12} xs={12}>

            <Card onClick={this.noticeShowHandler} className="notification-card">
                <Card.Body>
                    <h6> {notice.title}</h6>
                    <p className="py-1 px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: {notice.date}| Status: Read</p>

                    <Button className='btn btn-info' data-title={notice.title} data-message={notice.message} date-date={notice.date} >Read More</Button>

                </Card.Body>
            </Card>
        </Col>

            )

          return (
               <Fragment>
                <NotificationLoading isLoading={this.state.loaderDiv}/>
                        <div className={this.state.mainDiv}>

                    <Container className="TopSection">
    <Row>


{
    allNotifications
}

    </Row>
</Container>
</div>

<Modal show={this.state.noticeShow} onHide={this.noticeHideHandler}>
         {/* <Modal.Header closeButton> */}
        <Modal.Header closeButton>
           <h6><i className="fa fa-bell"></i> Date: {this.state.noticeDate} </h6>
        </Modal.Header>
        <Modal.Body>
             <h6>{this.state.noticeTitle}</h6>
             <p>
             {this.state.noticeMessage}
             </p>
             

        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={this.noticeHideHandler}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>



               </Fragment>
          )
     }
}

export default Notification