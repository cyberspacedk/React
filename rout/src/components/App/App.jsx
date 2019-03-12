import React, { Component } from "react";
import TeslaModelS from "../TeslaModelS/TeslaModelS";
import TeslaRoadster from "../TeslaRoadster/TeslaRoadster";
import TeslaX from "../TeslaX/TeslaX";
import Header from "../Header/Header";
import User from '../User/User';
import {Switch, Route} from 'react-router-dom';
import "./App.css";

class App extends Component {

state = {
  user: {},
}
  componentDidMount(){
    this.getUser();
  }

  getUser = async ()=>{
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json();  
    await this.setState({
      user: data.results[0]
    })
}


  render() {

const {user} = this.state;

    return (
      <div>
        <Header/>

        <Switch>
         <Route path='/' exact component={TeslaRoadster}/>
         <Route path='/model-s' component={TeslaModelS}/> 
         <Route path='/model-x' component={TeslaX}/>
         <Route path='/roadster' component={TeslaRoadster}/>
         <Route path='/user' render={(props)=> <User user={user} {...props}/>} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
