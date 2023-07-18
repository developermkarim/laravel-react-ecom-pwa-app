import axios from 'axios';
import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AppURL from '../../api/AppURL';

class MegaMenuAll extends Component {
     constructor(){
          super();
          this.state={

                megaMenuall:[]
          }
        
     }

   MegaMenuAll=(ev)=>{
          ev.target.classList.toggle("active");
          var panel = ev.target.nextElementSibling;
          if(panel.style.maxHeight){
               panel.style.maxHeight = null;
          }else{
               panel.style.maxHeight = panel.scrollHeight + "px";
          }
   }

   /*   MegaMenu(){
          var acc = document.getElementsByClassName("accordionAll");
          var accNum = acc.length;
          var i;
          for(i=0;i<accNum;i++){
               acc[i].addEventListener("click",function (){
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if(panel.style.maxHeight){
                         panel.style.maxHeight = null;
                    }else{
                         panel.style.maxHeight= panel.scrollHeight+ "px"
                    }
               })
          }
     }
 */

     componentDidMount(){
          axios.get(AppURL.GetCategory)
          .then((res)=>{
               let catAll = res.data;
               this.setState({megaMenuall:catAll});
          })
     }
     render() {

          const allMenus =  this.state.megaMenuall.map((megamenu,i)=>{

               return  <div key={i.toString()}>

             <button onClick={this.MegaMenuAll} className="accordionAll">
                 <Image className="accordionMenuIconAll" src={megamenu.category_image}/>
                 &nbsp; {megamenu.category_name}
                        </button>
                        <div className="panelAll">
                    <ul>

               {
                    (megamenu.sub_category_name).map((subCatMenu)=>{
                         return <li>
                              <Link to={`productbysubcategory/${megamenu.category_name}/${subCatMenu.sub_category_name}`} className="accordionItemAll"> {subCatMenu.sub_category_name} </Link>
                              </li>
                    })
               }

     </ul>
     </div>
     </div>

               
          }) 

          return (
                <div className="accordionMenuDivAll">
                   <div className="accordionMenuDivInsideAll">


               {
                    allMenus
               }
 
                   </div>

              </div>
          )
     }
}

export default MegaMenuAll