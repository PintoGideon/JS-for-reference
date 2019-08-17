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
	render() {
		return (
			<div className="footer">
				<div className="hint">{this.props.hints[this.props.gameState]}</div>
				{this.remainingCount()}
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