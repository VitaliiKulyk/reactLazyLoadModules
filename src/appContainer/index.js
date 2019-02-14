import React from 'react';
import lodash from 'lodash';

import { withRouter } from 'react-router';

class AppContainer extends React.Component {
	async lazyLoad() {
		console.log('start loading');
		console.log('done');
	}

	goToModule(i) {
		this.props.history.push(`appModule${i}`);
	}

	render() {
		return (
			<div>
				lazy module
				<button onClick={this.lazyLoad}>Load</button>
				<button onClick={() => this.goToModule(1)}>Load 1</button>
				<button onClick={() => this.goToModule(1)}>Load 2</button>
			</div>
		);
	}
}

export default withRouter(AppContainer);
