

import React from 'react';




const Title = (title,author)=>
{  
      
      return (
         <React.Fragment>
             <p style={{width : "150px",fontSize:15,textAlign:'left',fontFamily:'Times New Roman, serif'}}>{title}</p>
             <p style={{textAlign:'left',fontFamily:'Times New Roman, serif'}}>{author}</p>
         </React.Fragment>
        
      );
  }



export default Title;
