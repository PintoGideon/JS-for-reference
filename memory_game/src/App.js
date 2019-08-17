import React from 'react';

import './App.css';
import Game from './components/Game';

function App() {
	return (
		<div className="App">
			<Game rows={5} columns={5} activeCells={6} allowedWrongAttempts={3} />
		</div>
	);
}

export default App;
