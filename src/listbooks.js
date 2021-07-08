import React,{useState,useEffect} from 'react'
import Book from './organisms/book.js'
import booksList from './data.js'
import BlinkistHeader from './molecules/header/blinkistHeader.js'
import Button from  '@material-ui/core/Button'
import ButtonGroup from  '@material-ui/core/ButtonGroup'
import { Container, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
 



const useStyles = makeStyles({
    root:{
        maxWidth : "xl",
        backgroundColor:"primary"

    }
})


function Listbooks() {
    let flag = true;
     const [state, setState] = useState(flag);
     const [booksList1, setBooks] = useState(() => {
        //console.log('h22');
        return booksList;
    });


    



    const changeState =(bookId)=>{
    


        for(let i=0; i<booksList1.length;i++){
            if(booksList1[i].bookId === bookId){
                
                if(booksList1[i].status === true){
                    booksList1[i].status =  false;
                }else{
                    booksList1[i].status =  true;
                }
                break;
            }
        }
        setBooks([...booksList1]);
      }

      useEffect(() => {
         // document.getElementById('root');
          
      }, [booksList1])
     

    return (



            <div >
            <Grid container direction="column" style={{backgroundColor:"rgb(122, 170, 194)",minHeight : 960}}>
                <Grid item>
         
              
                <BlinkistHeader ></BlinkistHeader>
                </Grid>
           
            
            
    
               <Grid item>
            <Button onClick = {() => setState(true)}  style ={{float:'left',paddingTop:"30px"}}> 
              <span className="button">CurrentlyReading</span>
                  </Button>

                  <Button onClick = {() => setState(false)} style ={{float:'left',paddingTop:"30px"}}>
              <span className="button">FinishedReading</span>
                  </Button>
                  </Grid>
       <Grid item alignItems="center">
       {state  && booksList1.map((book) => {
                  if(book.status === true){
                      return <div className='rowC' style={{float : 'left',paddingLeft : "25px",paddingTop:"70px"}}><Book title= {book.bookName} authorName={book.authorName}  time={book.time} readCount= {book.readCount} bookId={book.bookId} changeState={changeState}  > </Book></div> 
                      
                  }
              })}

             {!state  && booksList1.map((book) => {
                  if(book.status === false){
                      return <div className='rowC' style={{float : 'left',paddingLeft : "25px",paddingTop : "70px"}}><Book title= {book.bookName} authorName={book.authorName}  time={book.time} readCount= {book.readCount} bookId={book.bookId} changeState = {changeState} > </Book></div> 
                      
                  }
              })}

    
    
   </Grid>
        
        </Grid>
        </div>
       
    )
}


export default Listbooks;
