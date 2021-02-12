import React, { useState,useEffect } from 'react'
import Timer from './Timer';
  function User(){
  const [userName,setUserName]=useState([]);
  const [editCount,setEditCount]=useState([]);
  //const [timer,setTimer]=useState(0);
 // let user=[];
  let userArray=[];
  useEffect(()=>{
  handler();
  
},[])
const handler=()=>{
    setInterval(()=>{
        fetch('http://localhost:9999/user').then((r)=>r.json()).then((r)=>{
          //  user=r;
            userArray=[];
             userArray=r.userName.map(((user)=>{
               console.log(user)
                     if(user.performer.user_is_bot===false && user.meta.domain==="en.wikipedia.org"){
                        // console.log(user.performer.user_text)
                        return {name : user.performer.user_text , count : user.performer.user_edit_count};
                     }
                     else{
                         return {name:null,count:null}
                     }
                    
                //return `${user.performer.user_text} :  ${user.performer.user_edit_count}`;
            }))
            
          console.log(userArray)

          userArray.sort((a,b)=>{
            if ( a.count < b.count ){
                return 1;
              }
              if ( a.count > b.count ){
                return -1;
              }
              return 0;
          });
          setUserName([...userArray]);       

    }).then(()=>{

    })},6000)

}


    return (
      <div>
      Wait for a minute to get Report
      <Timer/>
      {userName.map((m)=>{
          if(m.name!==null)
          return(
              <>
              <div>
              <span>{m.name}</span> :
              <span>{m.count}</span> 
              </div>
              </>
          )
      })}
      </div>
    )
  }


export default User;