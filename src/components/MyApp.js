import React from 'react';


export default class MyApp extends React.Component {
	state = {
		options: [],
	};

	handleAction = () => {
		this.setState(() => ({ options: [] }));
	};

	render() {
		console.log('My App is running');

		return (
			<div className="container">
				My React App
			</div>
		);
	}
}
