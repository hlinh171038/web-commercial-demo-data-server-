import React, {Component} from 'react'
export const CartContext = React.createContext();
 
 export class CartProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            CartItems:[]
        }
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(product){
        console.log('product',product);
        let {CartItems} = this.state;
        for(let i =0 ; i<CartItems.length;i++){
            if(CartItems[i].id === product.id ){
                product.count = CartItems[i].count+1 
                let index =CartItems.indexOf(CartItems[i]) ;
                console.log('index',index)
                CartItems.splice(index,1,product)
                this.setState({
                    CartItems
                });
                return
            }   
        }
        this.setState({
            CartItems:CartItems.concat(product)
        })
        console.log(CartItems)
    }
    render(){
        return <CartContext.Provider value ={{
            CartItem: this.state.CartItems,
            addToCart: this.addToCart
        }}>
            {this.props.children}
        </CartContext.Provider>
        
    }
}
