import React from 'react';
import './App.css';
import data from './data.json';
import logo from './images.svg';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume1 from './Resume';
function App() {
  
  return(
    <BrowserRouter>
      <Route exact path='/' component={Home}/>
      <Route exact path='/resume' component={Resume1}/>
    </BrowserRouter>
  );
}
//home
let Home =()=>{
  let profile=data.profile;
  console.log(profile);
  
  return(
    <div className="container">
      <div className="row justify-content-center mt-5">
        {profile.map((values,index)=>(
          <div className="col-lg-3 col-md-4 col-sm-8 col-xs-10" key={index}>
            <div className="card text-white" style={{backgroundImage:"linear-gradient(to bottom,#2457d7,#3b125d)",borderRadius:"7%",color:"white", boxShadow: "4px 4px 5px 5px black"}}>
              <div className="card-body text-center">
              <img src={logo} alt="profileIcon" style={{width:"70%"}}/>
              <hr style={{color:"white"}}/>
              <h3>{values.basics.name}</h3>
              <a href={"mailto:"+values.basics.role} className="text-white"><h5>{values.basics.role}</h5></a>
              <a href={"tel:"+values.basics.phone} className="text-white"><h5>{values.basics.phone}</h5></a>
              <Link to={{pathname:'./resume',data:{id:index}}}className="btn btn-success rounded-pill">View Profile</Link>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

  /*let a=["jayasree","ramya","thanuja","akki"];
  return(
    <div className="App">
     <h1>Welcome </h1>
      
      <SC name="jayasree" age="20"></SC>
      <SC name="ramya" age="20"></SC>
      <PC name="jayasree" age="20"></PC>
      {a.map((value,index)=>(
        <SC name={value} age={index}></SC>
      ))}
    </div>
  ); */

export default App;
