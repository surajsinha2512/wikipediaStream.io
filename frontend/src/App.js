import React from 'react';
import User from './components/userReport';
import Domain from './components/domainReport';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch,
} from 'react-router-dom';



export default function App(){
    const handler=()=>{

    }
    return (
        <>
        <div>
       
      {/*  <User/> */}


      <Router> 
           <div className="button"> 
           <div className="divide">
           {true?<>
                <Link to="/user"><button className="btn btn-primary" onClick={handler}>User</button></Link> 
            
                <Link to="/domain"><button className="btn btn-primary" onClick={handler}>Domain</button></Link>
            
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