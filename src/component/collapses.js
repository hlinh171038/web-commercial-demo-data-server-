import React, {Component} from 'react'

export default class Collapses extends Component {
    constructor(props){
        super(props);
        this.state ={
            isCollapse:true
        }
        this.handleChangeCollapse = this.handleChangeCollapse.bind(this)
    }
    handleChangeCollapse(){
        this.setState({isCollapse:!this.state.isCollapse})
    }
    render(){
        let {children,heading} = this.props
        return (
            <div className="Collapse">
                <h2 onClick={this.handleChangeCollapse} style={{"cursor":" pointer"}}>{heading}</h2>
                {!this.state.isCollapse && <div >{children}</div>}
            </div>
        )
    }
}