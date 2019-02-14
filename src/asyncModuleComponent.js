import React, { lazy } from 'react';
import { injectReducer } from './redux/rootReducer';
import rootStore from './redux/store';

const AppModule1 = lazy(() => import(/* webpackChunkName: "HelloWorld" */ './appModule1'));
const AppModule2 = lazy(() => import(/* webpackChunkName: "StartCoding" */ './appModule2'));

const Components = {
	AppModule1,
	AppModule2
};

const AsyncModuleComponent = props => {
	const { componentName } = props;

	import(`./${componentName}/controller/reducer`).then(({ default: reducer }) => {
		injectReducer(rootStore, { key: componentName, reducer });
	});

    const Component = Components[componentName];
    
    if (!Component){
        throw 'No such a module component (componentName)'
    }

	return <Component {...props} />;
};

export default AsyncModuleComponent;
