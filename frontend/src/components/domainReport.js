import React, { useState,useEffect } from 'react'
import Timer from './Timer';
  function Domain(){
  const [domain,setDomain]=useState([]);
  const [editCount,setEditCount]=useState([]);
  //let val=[];
  let domainArray=[];
  useEffect(()=>{
    handler();
},[]) 
const handler=()=>{
    setInterval(()=>{
        fetch('http://localhost:9999/domain').then((r)=>r.json()).then((r)=>{
            console.log(r);
            domainArray=[];
             domainArray=r.domain.map(((val)=>{
       
                     if(val.performer.user_is_bot===false){
               
                        return {domain : val.meta.domain , count : val.performer.user_edit_count};
                     }
                     else{
                         return {domain:null,count:null}
                     }
              
            }))
          domainArray.sort((a,b)=>{
            if ( a.count < b.count ){
                return 1;
              }
              if ( a.count > b.count ){
                return -1;
              }
              return 0;
          });
          setDomain([...domainArray]);
              

    }).then(()=>{

    })},6000)
}


    return (
      <div>
      Wait for a minute to get Domain Report  
      <Timer/>
      {domain.map((m)=>{
          if(m.domain!==null)
          return(
              <>
              <div>
              <span>{m.domain}</span> :
              <span>{m.count}</span> 
              </div>
              </>
          )
      })}
      </div>
    )
  }


export default Domain;