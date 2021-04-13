import logo from './logo.svg';
import './App.css';
import Person  from './Person/Person';
import { Component } from 'react';
class App extends Component{
  state = {
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 25},
      {name: "Steph", age: 23},
      {name: "Malark", age: 29}
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: "Max", age: 3},
        {name: "Manu", age: 4},
        {name: "Steph", age: 2},
        {name: "Malark", age: 29}
      ]
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 3},
        {name: "Manu", age: 4},
        {name: "Steph", age: 2},
        {name: event.target.value, age: 29}
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1> First App huhu </h1>
        <button onClick={this.switchNameHandler}> Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age} 
          changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
