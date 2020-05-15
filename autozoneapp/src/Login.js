import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.sate = {username : "",password: "", error:"",loggedin:false};
        this.handleChange = this.handleChange.bind(this);
         this.handleLogin = this.handleLogin.bind(this);
        

    }
    handleChange(event) {
        this.setState({username: event.target.value,
        password: event.target.value});
      }
    handleLogin(event){
        if (this.state.username === "kalai" &&
             this.state.password === "kalai123") {
                this.setState({loggedin: true});
                                   } else {
                                       this.setState({error: 'Not Valid User'});
                                   }
       // this.setState({username:"kalai",password: "kalai123"});
               
        alert("Welcome "+this.state.username);
        event.preventDefault();
    
                                }
 

           const                      
    
    render() {
        return (
           
          <div className ="loginDiv">
               <form>
              <label className="labelStyle"> Username </label>
            <input className = "inputcls" type="text"   // value={this.state.username} 
            onChange={this.handleChange} />
     <label className="labelStyle"> Password </label>
              <input className = "inputcls"
                type="password"
                // value ={this.state.password}
                 onChange={this.handleChange}
                  />
    
              <button id= "loginbtn" type="submit" onClick={this.handleLogin}>Login</button> 
           </form>
          </div>
         
        );
      }
    

}
