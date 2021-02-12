import React from 'react';
import User from './components/userReport';
import Domain from './components/domainReport';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch,
} from 'react-router-dom';



export default function App(){
  
    const handler= ()=>{
   
    }

    return (
        <>
        <div className="back">
       
      {/*  <User/> */}
   
      <Router> 
           <div className=""> 
          <span className="logo"> WIKIPEDIA STREAMING </span> 
           <div className="divide">
       
           {true?<>
           <div className="but">
                <Link to="/user"><button className="button" onClick={handler}>User</button></Link> 
          
                <Link to="/domain"><button className="button" onClick={handler}>Domain</button></Link>
            </div>
               </>
           :null}
           </div>
            <Switch> 
              <Route exact path='/user' component={User}></Route> 
              <Route exact path='/domain' component={Domain}></Route>
         
            </Switch> 
          </div> 
       </Router> 

        </div>
        </>
    )
}