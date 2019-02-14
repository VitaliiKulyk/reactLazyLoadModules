import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import makeRootReducer from './rootReducer';
import history from './history';

const initialState = {};

const rootStore = () => {
	const middlewares = [routerMiddleware(history)];
	const enhancers = [];

	const store = createStore(
		makeRootReducer(),
		initialState,
		compose(
			applyMiddleware(...middlewares),
			...enhancers
		)
	);

	store.asyncReducers = {};

	return store;
};

export default rootStore();
