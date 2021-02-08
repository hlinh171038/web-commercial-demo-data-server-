import React, {Component} from 'react'
import logo from '../logo.png'
import { MdAddShoppingCart } from "react-icons/md";
import {ButtonContainer} from './Button'
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
  import Default from './default'

class Navigate extends Component {
 render(){
     return(
    <div className="Navigate">
       <Router>    
        <Navbar className="text-primary"  expand="md" style={{background:"#f8f9fa"}}>
            <NavbarBrand ><img src={logo} width="50px" heigth="50px"></img></NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                <NavItem className="ml-5 mr-5" style={{"font-size": "1.4em",}}>
                    <NavLink ><Link style={{"text-decoration":"none"}}  to="/">Home</Link></NavLink>          
                </NavItem>
                <NavItem style={{"font-size": "1.4em",}}>
                    <NavLink><Link style={{"text-decoration":"none"}} to="/product">Product</Link> </NavLink>
                </NavItem>
                <NavItem className="ml-5 mr-5">     
                    <ButtonContainer>
                        <MdAddShoppingCart/>
                        <CartContext.Consumer>
                            {({CartItem}) => <Link style={{"text-decoration":"none"}}  to="/cart">Cart
                                                <Badge color="primary">{CartItem.reduce((accumulator, currentValue) =>{
                                                             return accumulator + currentValue.count},0)}
                                                </Badge>
                                             </Link>}
                        </CartContext.Consumer>
                    
                    </ButtonContainer>  
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
            <Route>
                <Default/>
            </Route>
            <Route exact path="/product/:masanpham" component={DetailsProduct}/>
             
        </Switch>
       </Router>
    </div>
     )
 }
}
export default Navigate



