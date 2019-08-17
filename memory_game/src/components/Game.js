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
		setTimeout(
			() =>
				this.setState({
					gameState: 'memorize'
				}),
			2000
		);
		setTimeout(
			() =>
				this.setState({
					gameState: 'recall'
				}),
			4000
		);
	}

	recordGuess = ({ cellId, userGuessIsCorrect }) => {
		let { wrongGuesses, correctGuesses } = this.state;
		if (userGuessIsCorrect) {
			correctGuesses.push(cellId);
			if (correctGuesses.length === this.props.activeCells) {
				gameState += 'won';
			}
		} else {
			wrongGuesses.push(cellId);
			if (wrongGuesses.length > this.props.allowedWrongAttempts) {
				gameState += 'lost';
			}
		}
		this.setState({
			correctGuesses,
			wrongGuesses,
			gameState
		});
	};
	render() {
		return (
			<div className="grid">
				{this.matrix.map((row, id) => (
					<Row key={id}>
						{row.map(cellid => (
							<Cell
								key={cellid}
								id={cellid}
								activeCells={this.activeCells}
								{...this.state}
								recordGuess={this.recordGuess}
							/>
						))}
					</Row>
				))}
				<Footer {...this.state} activeCells={this.props.activeCells} />
			</div>
		);
	}
}

export default Game;
