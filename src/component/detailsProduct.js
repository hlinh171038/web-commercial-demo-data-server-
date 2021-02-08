import React, {Component} from 'react'
import axios from 'axios';
import { Button ,Container} from 'reactstrap';

// contexAPI
import{ CartContext} from '../context/cart';
export default class DetailsProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            product:{},
            number:1,
        }
        this.increseNumber = this.increseNumber.bind(this);
        this.descreseNumber = this.descreseNumber.bind(this);
    }
    componentDidMount(){
        axios.get(`https://q9woy.sse.codesandbox.io/products/${this.props.match.params.masanpham}`)
        .then(res =>{
          this.setState({product:res.data})
        })
    }
    increseNumber(){
        this.setState({number:this.state.number +1

        })
    }
    descreseNumber(){
        this.setState({number:this.state.number -1

        })
    }
    render(){
        console.log(this.state.product)
        return (
            <Container>
                <div className="DetailsProduct" 
                style={{
                    display:"flex"
                }}>
                <div className="left-img mt-5">
                    <img src ={this.state.product.imageUrl} width="100%"/>
                </div>
                <div className="right-info ml-5 mt-5">
                    <h2>{this.state.product.name}</h2>
                    <p>{this.state.product.description}</p>
                    <div className="mb-3 ml-3">
                        <Button onClick={this.increseNumber} color="primary" disabled ={this.state.number >=10 ? true:false} >+</Button>
                            <span className="ml-3 mr-3">{this.state.number}</span>
                        <Button onClick={this.descreseNumber} color="primary" disabled ={this.state.number ===1 ? true:false}>-</Button>
                    </div>
                    <CartContext.Consumer>
                        {({addToCart}) => <Button color="primary" className="ml-3 mt-3" 
                        onClick={()=>{addToCart({...this.state.product,count:this.state.number})}}>Add to cart</Button>}
                    </CartContext.Consumer>    
                </div>
            </div>
            </Container>
        )
    }
}