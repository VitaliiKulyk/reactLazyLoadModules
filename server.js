const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

app.use(
	webpackDevMiddleware(compiler, {
		historyApiFallback: true,
		writeToDisk: true
	})
);

app.use(webpackHotMiddleware(compiler));

app.use('/static', express.static(__dirname + '../static'));
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'index.html')));

app.listen(8080, err => {
	if (err) {
		return console.error(err);
	}
	console.log('Listening at http://localhost:8080');
});
