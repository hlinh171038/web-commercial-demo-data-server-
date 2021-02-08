import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Navigate from './component/navigate';
import UserLogin from './component/userLogin'
//provider
import {CartProvider} from './context/cart'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
        users:[],
        user:{name:'',email:''},
        error:''
    } 
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
}
componentDidMount(){
  axios.get('https://2v1xf.sse.codesandbox.io/user').then(res =>{
    this.setState({users:res.data});
    console.log(res.data)
  })
}
login(details){
  console.log(details);
  console.log(this.state.users )
  for (let i = 0; i < this.state.users.length; i++) {
    if (details.email === this.state.users[i].email) {
     this.setState({user:details});
      return;
    }
  }
    this.setState({error:'Information do not match'})
}
logout(){
  this.setState({user:{name:'',email:''}})
}
 render(){
   return (
    <CartProvider>
      <div className="App">
      <Navigate user={this.state.user} logout={this.logout}/>
        {/* {(this.state.user.email !=="")?(
          
            <Navigate user={this.state.user} logout={this.logout}/>
         
        ):( <UserLogin login={this.login} error={this.state.error}/>)} */}
      </div>
    </CartProvider>
   )
 }
}
export default App