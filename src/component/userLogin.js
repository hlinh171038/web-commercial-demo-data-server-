import React, {Component} from 'react';
import './userLogin.css'

export default class UserLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            details:{name:'',email:'',password:''}
        }
        this.SubmitHandler = this.SubmitHandler.bind(this);
        
    }
    SubmitHandler(e){
        e.preventDefault();
        this.props.login(this.state.details)
    }
  
    render(){
        return (
            <div className="UserLogin">
              
      <form onSubmit={this.SubmitHandler}>
      <h2>LOGIN</h2>
        <p className="error">{this.props.error}</p>
        <div>
          <label htmlFor="name">
            <h2>Name</h2>
            <input
              type="text"
              id="name"
              value = {this.state.details.name}
              onChange = {(e) =>this.setState({details:{...this.state.details,name:e.target.value}})}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <h2>Email</h2>
            <input
              type="email"
              id="email"
              value = {this.state.details.email}
              onChange = {(e) =>this.setState({details:{...this.state.details,email:e.target.value}})}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <h2>Password</h2>
            <input
              type="password"
              id="password"
              value = {this.state.details.password}
              onChange = {(e) =>this.setState({details:{...this.state.details,password:e.target.value}})}
            />
          </label>
        </div>
        <input type="submit" value="LOGIN" />
      </form>
    </div>
        )
    }
}