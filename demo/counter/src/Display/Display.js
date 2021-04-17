import { Component } from 'react';
class Display extends Component{
    render(){
       return(
         <p> 
            {this.props.value}
         </p>
       )
    }
}

export default Display;