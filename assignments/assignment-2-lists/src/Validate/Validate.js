import { Component } from "react";

class Validate extends Component{
    render(){
        let displayText = ""
        if(this.props.length < 5){
            displayText = "Text too short"
        } else if (this.props.length > 10){
            displayText = "Text too long"
        } else {
            displayText = "Valid text length"
        }
        return(
            <div> {displayText} </div>
        )
    }
}
export default Validate;