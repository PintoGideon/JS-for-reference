import './index.css';
import React from 'react';
import MenuIcon from 'react-icons/lib/md/menu';
import { set, get, subscribe } from './local-storage';

const withStorage = (storageKey, defaul_) => Comp => {
	return class WithStorage extends React.Component {
		state = {
			[storageKey]: get(storageKey, true)
		};

		componentDidMount() {
			this.unsubscribe = subscribe(() => {
				this.setState({
					[storageKey]: get(storageKey)
				});
			});
		}

		componentWillUnMount() {
			this.unsubscribe();
		}

		set = () => {
			set(storageKey, value);
		};
		render() {
			return <Comp {...this.props} {...this.state} setStorage={this.set} />;
		}
	};
};

class App extends React.Component {
	render() {
		const { sidebarIsOpen, setStorage } = this.props;

		return (
			<div className="app">
				<header>
					<button
						className="sidebar-toggle"
						title="Toggle Menu"
						onClick={() => {
							setStorage(!sidebarIsOpen);
						}}
					/>
					<MenuIcon />
				</header>
				<div className="container">
					<aside className={sidebarIsOpen ? 'open' : 'closed'} />
					<main />
				</div>
			</div>
		);
	}
}

export default withStorage('sidebarIsOpen', true)(App);
