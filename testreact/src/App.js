import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons:[
		{ name: 'Lucky', age: 30},
		{ name: 'Sunil', age: 28},
		{ name: 'Sam', age: 33}
		]
	}
	
	switchButtonHandler = () => {
		console.log('clicked');
	}
	
  render() {
    return (
      <div className="App">
        <h1> This is just test react app </h1>
		<button onClick={this.switchButtonHandler}>Switch Name</button>
		<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
		<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Dancing</Person>
		<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
	// return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Core Code..'));
  }
}

export default App;
