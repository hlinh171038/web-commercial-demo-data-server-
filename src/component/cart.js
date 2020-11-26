import React from 'react'
import './cart.css'
import {CartContext} from '../context/cart';
import { Container } from 'reactstrap';

class Cart extends React.Component {
    render(){
        return (
            <Container>
                 <table id="t01">
                    <tr>
                        <th>PRODUCT CODE</th>
                        <th>NAME</th>
                        <th>IMAGES</th>
                        <th>COUNT</th>
                    </tr>
                <CartContext.Consumer>            
                    {({CartItem})=>CartItem.map(item =>{
                        return <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><img src={item.imageUrl} width="32" heigth="32"></img></td>
                                <td>{item.count}</td>
                            </tr>    
                    })} 
               </CartContext.Consumer>
               </table>
            </Container> 
        )
    }
}
export default Cart