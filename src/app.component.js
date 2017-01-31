const React = require('react');
const {Provider} = require('react-redux');
const AppReducer = require('./app.reducer');
const store = require('./services/store.service').create(AppReducer);
const {Game} = require('./components/game');

const App = () => (
    <Provider store={store}>
        <Game/>
    </Provider>
);

module.exports = App;
