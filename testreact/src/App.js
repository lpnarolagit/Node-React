import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons:[
		{ name: 'Lucky', age: 30},
		{ name: 'Sunil', age: 28},
		{ name: 'Sam', age: 33}
		],
		otherstate: 'this is just other state'
	}
	
	switchButtonHandler = (newName) => {
		this.setState({
			persons:[
		{ name: newName, age: 30},
		{ name: 'Vaghela', age: 29},
		{ name: 'Chauhan', age: 45}
		]
		})
	}
	
	nameChangedHandler = (event) => {
		this.setState({
			persons:[
		{ name: event.target.value, age: 30},
		{ name: 'Vaghela', age: 29},
		{ name: 'Chauhan', age: 45}
		]
		})
	}
	
  render() {
    return (
      <div className="App">
        <h1> This is just test react app </h1>
		<button onClick={this.switchButtonHandler.bind(this, 'Lucky Parmar')}>Switch Name</button>
		<Person 
			name={this.state.persons[0].name} 
			age={this.state.persons[0].age}
			changed={this.nameChangedHandler}
			/>
		<Person 
		name={this.state.persons[1].name} 
		age={this.state.persons[1].age}
		click={this.switchButtonHandler.bind(this, 'Lucky!')}>My Hobbies: Dancing</Person>
		<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
		<p></p>
      </div>
    );
	// return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Core Code..'));
  }
}

export default App;
