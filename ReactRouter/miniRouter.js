import React from 'react';

import { createBrowserHistory } from 'history';

class Router extends React.Component {
	history = createBrowserHistory();

	static childContextTypes = {
		history: this.history
	};

	getChildContenxt() {
		return {
			history: this.history
		};
	}

	componentDidMount() {
		this.unsubscribe = this.history.listen(() => {
			this.forceUpdate();
		});
	}

	componentWillMount() {
		this.unsubscribe();
	}

	render() {
		return this.props.children;
	}
}

// <Route exact path="/about" component-{About}/>
// <Route exact path="/" render={()=>(<div>Home</div>)/>

class Route extends React.Component {
	static contextTypes = {
		history: PropTypes.object.isRequired
	};

	render() {
		const { path, exact, render, component: Component } = this.props;

		const { location } = this.context.history;
		const match = location.pathName.startsWith(path);
		if (match) {
			if (render) {
				return render();
			} else if (Component) {
				return <Component />;
			} else return null;
		} else {
			return null;
		}
	}
}

class Link extends React.Component {
	static contextTypes = {
		history: PropTypes.object.isRequired
	};

	handleClick = e => {
		e.preventDefault();
		this.context.history.push(this.props.to);
	};

	render() {
		return (
			<a href={`${this.props.to}`} onClick={this.handleClick}>
				{this.props.children}
			</a>
		);
	}
}
