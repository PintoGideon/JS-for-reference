import React, { Component } from 'react';

export default class Footer extends Component {
	remainingCount() {
		if (this.props.gameState !== 'recall') {
			return null;
		}
		return (
			<div className="remaining-count">
				{this.props.activeCells - this.props.correctGuesses.length}
			</div>
		);
	}

	playAgainButton() {
		if (['won', 'lost'].indexOf(this.props.gameState) >= 0) {
			return (
				<button className="play-again" onClick={this.props.playAgain}>
					Play Again
				</button>
			);
		}
	}
	render() {
		console.log(this.props);
		return (
			<div className="footer">
				<div className="hint">{this.props.hints[this.props.gameState]}</div>
				{this.remainingCount()}
				{this.playAgainButton()}
			</div>
		);
	}
}

Footer.defaultProps = {
	hints: {
		ready: 'Get Ready',
		memorize: 'Memorize',
		recall: 'Recall',
		won: 'Well Played',
		lost: 'Game Over'
	}
};
