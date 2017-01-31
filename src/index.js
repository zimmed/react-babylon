const _ = require('lodash');
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./app.component');
const appModel = require('./app.model');
const appReducer = require('./app.reducer');

const ROOT_ELEMENT_ID = 'application';

if (!_.isUndefined(document)) {
    let element = document.getElementById(ROOT_ELEMENT_ID);

    ReactDOM.render(<App/>, element);
}

module.exports = {App, appModel, appReducer};
