import React, {Component} from 'react';
import axios from 'axios'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row, Col, Container 
  } from 'reactstrap';


class Product extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        axios.get('https://js17k.sse.codesandbox.io/products')
        .then(res =>{
          this.setState({products:res.data})
        })
    }
    render(){
        let {id,name,description,imageurl} = this.state
        return (
            <div className="Product">
               <Container>
                <Row >
                    {this.state.products.map((item)=>(
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src={item.imageurl} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">{item.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                            <CardText>{item.description}</CardText>
                            <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col> 
                    ))}
                    </Row>
               </Container>
            </div>
        )
    }
}
export default Product