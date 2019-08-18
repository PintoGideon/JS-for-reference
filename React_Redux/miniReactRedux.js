import React from 'react';

import PropTypes from 'prop-types';

class Provider extends React.Component {
	static childContextTypes = {
		store: PropTypes.object.isRequired
	};

	getChildContenxt() {
		return {
			store: this.props.store
		};
	}
	render() {
		return this.props.children;
	}
}

const connect = (mapStateToProps, mapDispatchToProps) => {
	return Component => {
		return class extends React.Component {
			static contextTypes = {
				store: PropTypes.object.isRequired
			};

			componendDidMount() {
				this.unsubscribe = this.context.store.subsuscribe(() => {
					this.forceUpdate();
				});
			}

			componentDidMount() {
				this.unsubscribe();
			}

			render() {
				const state = this.context.store.getState();
				return (
					<Component
						{...mapStateToProps(this.context.store.getState())}
						{...mapDispatchToProps(this.context.store.dispatch)}
					/>
				);
			}
		};
	};
};

export { Provider, connect };
