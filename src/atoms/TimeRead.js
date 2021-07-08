

import React from 'react';


import {BiTime} from "react-icons/bi"

const TimeRead =(time)=>
{
      
      return (
        
         <React.Fragment style = {{textAlign:'left',width:"120px",height:"20px"}}>
             
             <BiTime style = {{width:"15px",height:"15px",paddingLeft:"5px"}}></BiTime> <i style={{fontSize:"12px",fontFamily:'Times New Roman, serif'}}>{time}-minute read</i>
         </React.Fragment>
        
      );
  }



export default TimeRead;
