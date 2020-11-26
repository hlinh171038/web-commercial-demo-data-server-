import React, {Component} from 'react'
const UserContext = React.createContext();
export default class UserProvider extends Component {
    constructor(props){
        super(props);
        this.state ={
            users:[],
            user:{name:'',email:''},
            error:''
        }
       
    }
    render(){
        return (
           <UserContext.Provider value ={

           }>
               {this.props.children}
           </UserContext.Provider>
        )
    }
}