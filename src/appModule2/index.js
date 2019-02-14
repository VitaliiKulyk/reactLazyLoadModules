import React from 'react';
import lodash from 'lodash';
import { withRouter } from 'react-router';

class AppContainer extends React.Component {
	constructor() {
		super()
		console.log('init');
	}

	goToModule(i) {
		this.props.history.push(`appModule${i}`);
	}

	render() {
		return (
			<div>
				MODULE 1
				<button onClick={() => this.goToModule(1)}>Load 1</button>
				<button onClick={() => this.goToModule(1)}>Load 2</button>
			</div>
		);
	}
}

export default withRouter(AppContainer);
