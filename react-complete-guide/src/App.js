import logo from './logo.svg';
import './App.css';
import Person  from './Person/Person';
import { Component } from 'react';
class App extends Component{
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 25},
      {name: "Steph", age: 23}
    ]
  }

  render(){
    return (
      <div className="App">
        <h1> First App huhu </h1>
        <button> Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is racing</Person>
      </div>
    );
  }
}

export default App;
