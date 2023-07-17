import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class MegaMenu extends Component {

     constructor(props){
          super();
         
     }



     MegaMenu=(ev)=>{
  /*         var acc = document.getElementsByClassName("accordion"); // accordion calculation
          var accNum = acc.length; // count of accordion calculatin array
          var i;
          for(i=0;i<accNum;i++){
               acc[i].addEventListener("click",function (){ */
                    ev.target.classList.toggle("active");
                    var panel = ev.target.nextElementSibling;
                    if(panel.style.maxHeight){
                         panel.style.maxHeight = null;
                    }else{
                         panel.style.maxHeight= panel.scrollHeight+ "px" // scrollHeight includes the padding with height but not margin, border.
                /*     }
               }) */
          }
     }


     render() {
          const allCatList = this.props.allMenuData;
          const MyView = allCatList.map((Catlist,i)=>{
               return <div key={i.toString()}>
                    <button onClick={this.MegaMenu} className="accordion">

                 <Image className="accordionMenuIcon" src={Catlist.category_image} /> &nbsp; 
                 {Catlist.category_name}
                        </button>
                        <div className="panel">
          <ul>

               {
                    (Catlist.sub_category_name).map((subCatList,i)=>{

                         return  <li><Link to={`productsubcategory/${Catlist.category_name}/${subCatList.sub_category_name}`}className="accordionItem" >{subCatList.sub_category_name}</Link></li>

                    })
               }

          </ul>
          </div>   
               </div>

          })


          return (
              <div className="accordionMenuDiv">
                   <div className="accordionMenuDivInside">

                    {
                         MyView
                    }

                   </div>   
               </div>
          )
     }
}

export default MegaMenu