import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button,
    Badge
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 import './navigate.css'
  //provider
  import {CartContext} from '../context/cart';


  import Home from './home';
  import Product from './product';
  import Cart from './cart'
  import User from './user'
  import Collapses from './collapses'
  import DetailsProduct from './detailsProduct'

class Navigate extends Component {
 render(){
     return(
    <div className="Navigate">
       <Router>
           
        <Navbar color="light" light expand="md">
            <NavbarBrand >Web commercial</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                <NavItem >
                    <NavLink ><Link style={{"text-decoration":"none"}}  to="/">Home</Link></NavLink>          
                </NavItem>
                <NavItem>
                    <NavLink><Link style={{"text-decoration":"none"}} to="/product">Product</Link> </NavLink>
                </NavItem>
                <NavItem>     
                    <NavLink>
                        <CartContext.Consumer>
                            {({CartItem}) => <Link style={{"text-decoration":"none"}}  to="/cart">Cart
                                                <Badge color="primary">{CartItem.reduce((accumulator, currentValue) =>{
                                                             return accumulator + currentValue.count},0)}
                                                </Badge>
                                             </Link>}
                        </CartContext.Consumer>
                    </NavLink>   
                </NavItem>
                </Nav>
                    <Collapses heading={'Coderx.tokio'} >
                        <NavbarText className="logout"  >
                            <p>Wel come {this.props.user.name}</p>
                            <Button color="primary" onClick={this.props.logout}>Logout</Button>
                        </NavbarText>
                    </Collapses>
            </Collapse>
        </Navbar>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/product">
                <Product/>
            </Route>
            <Route exact path="/user">
                <User/>
            </Route>
            <Route exact path="/cart">
                <Cart/>
            </Route>
            <Route exact path="/product/:masanpham" component={DetailsProduct}/>
             
        </Switch>
       </Router>
    </div>
     )
 }
}
export default Navigate