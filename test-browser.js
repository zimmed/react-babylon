require('babel-core/register')();

const _ = require('lodash');
const document = require('jsdom').jsdom('');
let exposedProperties;

_.assign(global, {
    document,
    window: document.defaultView,
    navigator: 'node.js'
}, _.pickBy(document.defaultView, (v, k) => !_.has(global, k)));

exposedProperties = _.keys(global);
//documentRef = document;
