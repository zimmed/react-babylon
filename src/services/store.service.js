const {createStore, applyMiddleware} = require('redux');
const thunk = require('redux-thunk').default;

const Store = {
    create: (reducer) => applyMiddleware(thunk)(createStore)(reducer)
};

module.exports = Store;
