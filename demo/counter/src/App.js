import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Display from './Display/Display.js';
class App extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(
      (state) => ({count: state.count + 1})
    );
  }

  render(){
    return (
      <div className="App">
        <h1> Counter App </h1>
        <button onClick={this.increment}>Click me</button>
        <Display value={this.state.count} />
      </div>
    )
  }
}

export default App;
