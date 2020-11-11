import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Home from './home';
  import Product from './product';

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
                <NavItem>
                    <NavLink><Link  to="/">Home</Link></NavLink>          
                </NavItem>
                <NavItem>
                    <NavLink><Link  to="/product">Product</Link> </NavLink>
                </NavItem>
                </Nav>
                <NavbarText>Coderx.tokio</NavbarText>
            </Collapse>
        </Navbar>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/product">
                <Product/>
            </Route>
        </Switch>
       </Router>
    </div>
     )
 }
}
export default Navigate