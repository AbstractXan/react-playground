import logo from './logo.svg';
import './App.css';
import Person  from './Person/Person';
import { Component } from 'react';
import person from './Person/Person';
class App extends Component{
  state = {
    persons: [
      {id: 'aasdf1', name: "Max", age: 28},
      {id: 'adfvv2', name: "Manu", age: 25},
      {id: 'cvbcv3', name: "Steph", age: 23},
      {id: 'fghfg4', name: "Malark", age: 29}
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    let show = this.state.showPersons;
    this.setState({
      showPersons: !show
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render(){
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '18px',
      boxShadow: '0 2px 3px #ccc',
      margin: '10px'
    }
    let persons = null;

    // Pre re render
    if(this.state.showPersons){
      persons = this.state.persons.map((person, index) => {
              return (
                <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                />
              )
      });
    }

    return (
      <div className="App">
        <h1> First App huhu </h1>
        <button style={style} onClick={this.togglePersonsHandler}> Toggle Persons </button>
        { persons }
      </div>
    );
  }
}

export default App;
