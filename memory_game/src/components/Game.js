import React from 'react';
import Row from './Row';
import Cell from './Cell';
import Footer from './Footer';
import _ from 'lodash';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameState: 'ready',
			wrongGuesses: [],
			correctGuesses: []
		};

		this.matrix = [];
		for (let r = 0; r < this.props.rows; r++) {
			let row = [];
			for (let c = 0; c < this.props.columns; c++) {
				row.push(`${r}${c}`);
			}
			this.matrix.push(row);
		}
		let flatMatrix = _.flatten(this.matrix);
		this.activeCells = _.sampleSize(flatMatrix, this.props.activeCells);
	}

	componentDidMount() {
		this.memorizeTimerId = setTimeout(() => {
			this.setState({ gameState: 'memorize' }, () => {
				this.recallTimerId = setTimeout(this.startRecallMode.bind(this), 2000);
			});
		}, 2000);
	}
	startRecallMode() {
		this.setState({ gameState: 'recall' }, () => {
			this.secondsRemaining = this.props.timeoutSeconds;
			this.playTimerId = setInterval(() => {
				if (--this.secondsRemaining === 0) {
					this.setState({
						gameState: 'lost'
					});
				}
			}, 1000);
		});
	}

	recordGuess = ({ cellId, userGuessIsCorrect }) => {
		let { wrongGuesses, correctGuesses, gameState } = this.state;
		if (userGuessIsCorrect) {
			correctGuesses.push(cellId);
			if (correctGuesses.length === this.props.activeCells) {
				gameState = this.finishGame('won');
			}
		} else {
			wrongGuesses.push(cellId);
			if (wrongGuesses.length > this.props.allowedWrongAttempts) {
				gameState = this.finishGame('lost');
			}
		}
		this.setState({
			correctGuesses,
			wrongGuesses,
			gameState
		});
	};

	finishGame(gameState) {
		clearInterval(this.playTimerId);
		return gameState;
	}

	componentWillUnmount() {
		clearTimeout(this.memorizeTimerId);
		clearTimeout(this.recallTimerId);
		this.finishGame();
	}

	render() {
		let showActiveCells =
			['memorize', 'lost'].indexOf(this.state.gameState) >= 0;
		return (
			<div className="grid">
				{this.matrix.map((row, id) => (
					<Row key={id}>
						{row.map(cellid => (
							<Cell
								key={cellid}
								id={cellid}
								showActiveCells={showActiveCells}
								activeCells={this.activeCells}
								{...this.state}
								recordGuess={this.recordGuess}
							/>
						))}
					</Row>
				))}
				<Footer
					{...this.state}
					activeCells={this.props.activeCells}
					playAgain={this.props.createNewGame}
				/>
			</div>
		);
	}
}

Game.defaultProps = {
	timeoutSeconds: 10
};

export default Game;
