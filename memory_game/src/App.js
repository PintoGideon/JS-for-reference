import React from 'react';

import './App.css';
import Game from './components/Game';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameId: 1
		};
	}
	createNewGame = () => {
		console.log('Called createNewGame');
		this.setState({
			gameId: this.state.gameId + 1
		});
	};
	render() {
		return (
			<div className="App">
				<Game
					key={this.state.gameId}
					rows={5}
					columns={5}
					activeCells={6}
					allowedWrongAttempts={3}
					createNewGame={this.createNewGame}
				/>
			</div>
		);
	}
}
export default App;
