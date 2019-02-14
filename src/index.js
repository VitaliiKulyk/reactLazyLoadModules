import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import history from './redux/history';
import AppRouter from './appRouter';

ReactDOM.render(<AppRouter store={store} history={history} />, document.getElementById('root'));
