import { Component } from "react";

class Character extends Component{
    render(){
        let style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '10px',
            border: '1px solid black',
            boxShadow: '0 2px 3px #ccc',
        }
        return(
            <div style={style} onClick={this.props.click}> {this.props.text} </div>
        )
    }
}

export default Character;