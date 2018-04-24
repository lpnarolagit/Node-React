import React from 'react';

const person = (props) => {
	return (
	<div>
		<p> This is custom function. I am {props.name} and I am {props.age} years old</p>
		<b>{props.children}</b>
	</div>	
	)
};

const person1 = () => {
	return <b> second functn within same js file. </b>
}

export default person;