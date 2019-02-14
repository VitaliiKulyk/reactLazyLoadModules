import { PropTypes } from 'prop-types';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import AppContainer from './AppContainer';
import AsyncModuleComponent from './asyncModuleComponent';
import { LoadingPlaceholder } from './commonComponents/LoadingModulePlaceholder';

const AppRouter = ({ store, history }) => {
	return (
		<Provider store={store}>
			<HashRouter>
				<ConnectedRouter history={history}>
					<Suspense fallback={<LoadingPlaceholder />}>
						<Switch location={location}>
							<Route path="/appModule1" render={() => <AsyncModuleComponent componentName="AppModule1" />} />
							<Route path="/appModule2" render={() => <AsyncModuleComponent componentName="AppModule2" />} />
							<Route path="/" render={() => <AppContainer />} />
						</Switch>
					</Suspense>
				</ConnectedRouter>
			</HashRouter>
		</Provider>
	);
};

AppRouter.propTypes = {
	store: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
};

export default AppRouter;
