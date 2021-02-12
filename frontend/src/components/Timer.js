import React, { useState,useEffect } from 'react'
  import './Timer.css';



  function Timer(){
      let time=0;
  const [timer,setTimer]=useState(time);
  useEffect(()=>{
    handler();
},[]) 
const handler=()=>{

   const remove= setInterval(()=>{
          time=time+1;
          setTimer(time);  
          if(time===60){
            clearInterval(remove);
            handler();
            time=0;
            }
    },1000);
}
    return (
      <div className="time">
     Second:<span>{timer}</span>
     
      </div>
    )
  }


export default Timer;