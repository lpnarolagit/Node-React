import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> This is just test react app </h1>
		<Person name="Lucky" age="30" />
		<Person name="Sunil" age="28">My Hobbies: Dancing</Person>
		<Person name="Sam" age="27" />
      </div>
    );
	// return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Core Code..'));
  }
}

export default App;
