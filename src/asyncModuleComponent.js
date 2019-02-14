import React, { lazy } from 'react';
import { injectReducer } from './redux/rootReducer';
import rootStore from './redux/store';

const AppModule1 = lazy(() => import('./AppModule1'));
const AppModule2 = lazy(() => import('./AppModule2'));

const Components = {
	AppModule1,
	AppModule2
};

class AsyncModuleComponent extends React.Component {
	render() {
		const { componentName } = this.props;

		import(`./${componentName}/redux/reducer`).then(({ default: reducer }) => {
			injectReducer(rootStore, { key: componentName, reducer });
		});

		const Component = Components[componentName];

		if (!Component) {
			throw 'No such a module component (componentName)';
		}

		return <Component {...this.props} />;
	}
}

export default AsyncModuleComponent;
