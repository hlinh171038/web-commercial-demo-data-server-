import React, {Component} from 'react';
import axios from 'axios'

import {
    Card, CardImg, CardText, CardBody,Spinner,
    CardTitle, CardSubtitle, Button,Row, Col, Container 
  } from 'reactstrap';
  //provider
  import {CartContext} from '../context/cart';

class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
            page_size:6,
            page:1
        }
    }
    handleChangePage(value){
        this.setState({page:value})
       }
    componentDidMount(){
        axios.get('https://q9woy.sse.codesandbox.io/products')
        .then(res =>{
          this.setState({products:res.data})
        })
    }
    render(){
        let {id,name,description,imageUrl,page,page_size,products} = this.state;
        let pagination =[];
        for(let i=0;i<Math.ceil(this.state.products.length/page_size);i++){
            let buttonClick =this.state.page ===(i+1)? <Button outline color="primary" onClick={() =>this.handleChangePage(i+1)}>{i+1}</Button>
            :<Button  color="primary" onClick={() =>this.handleChangePage(i+1)}>{i+1}</Button>
            pagination.push(buttonClick)
        }
       
        return (
            <div className="Product">
               {(this.state.products)?
               (<Container>
                <Row  className="mb-3 mt-4">
                    {this.state.products
                    .slice((page - 1)*page_size,page_size*page)
                    .map((item)=>(
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={item.imageUrl} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>{item.description}</CardText>
                            <CartContext.Consumer>
                                {({addToCart}) => <Button color="primary" onClick = { () => addToCart(item)}>Add to cart</Button>}     
                            </CartContext.Consumer>
                            <Button className="ml-5" color="primary"><a style={{color:"white", "text-decoration":"none"}} href={`/product/${item.id}`}>Details product</a></Button>
                            </CardBody>
                        </Card>
                    </Col> 
                    ))}
                    </Row>
                    {pagination}
               </Container>):<Spinner color="primary" />}  
            </div>
        )
    }
}
export default Product