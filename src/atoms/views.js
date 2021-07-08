
import React from 'react';


import {BsPerson} from "react-icons/bs"

const Views =(noOfViews)=>{
      
      return (
        
         <React.Fragment style = {{textAlign:'right',width:"120px",height:"20px"}}>
             
             <BsPerson style = {{width:"15px",height:"15px"}}></BsPerson> <i style={{fontSize:"12px",fontFamily:'Times New Roman, serif'}}>{noOfViews}k reads</i>
         </React.Fragment>
        
      );
  }



export default Views;
