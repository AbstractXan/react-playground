import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Validate from './Validate/Validate';
import Character from './Charachter/Character';

class App extends Component {

  state = {
    text: '',
    length: 0
  }

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value,
      length: event.target.value.length
    })
  }

  clickChangehandler = (index) => {
    let chars = [...this.state.text];
    chars.splice(index,1);
    let newtext = chars.join('');
    this.setState({
      text: newtext,
      length: newtext.length
    })
  }
  render(){
    let charachters = [...this.state.text].map((ch,index) => {
        return (<Character text={ch} click={()=> this.clickChangehandler(index)}/>)
    });
    return (
      <div className="App">
        <h1> Assignment 2 </h1>
        <input 
          onChange={ this.textChangeHandler } 
          value={ this.state.text } 
        >
        </input>
        <p> {this.state.length} charachters</p>
        <Validate length={this.state.length}/>
        { charachters }
      </div>
    )
  }
}

export default App;
