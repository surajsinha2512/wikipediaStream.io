import React, { useState,useEffect } from 'react'
import Timer from './Timer';
  function Domain(){
  const [domain,setDomain]=useState([]);
  const [editCount,setEditCount]=useState([]);
  let totalDomainCount=0
  let uniqueDomain=new Map();
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



  
  /// storing in map to count unique values
           totalDomainCount=0;
            domainArray.map((temp)=>{
                if(uniqueDomain.has(temp.domain)){
                    uniqueDomain.set(temp.domain,uniqueDomain.get(temp.domain)+1)
                }
                else{
                    uniqueDomain.set(temp.domain,1)
                    totalDomainCount++;
                }
               
            })


            setEditCount(totalDomainCount);
            console.log(uniqueDomain);
           


 // sorting values according to  number appearance of  particular domain 
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

    })},60000)
}


    return (
      <div>
      <div> Wait for a minute to get Domain Report  </div>
       <br/>
      <span>Total Number of Wikipedia Domains Updated :</span>
      <span>{editCount}</span>
    
      <Timer/>
      {domain.map((m)=>{
          if(m.domain!==null){
          return(
              <>
              <div>
              <span>{m.domain}</span> :
              <span>{m.count}</span> 
              </div>
              </>
          )
          }
      })}
     
      </div>
    )
  }


export default Domain;