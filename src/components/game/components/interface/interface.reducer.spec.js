const _ = require('lodash');
const {expect} = require('chai');
const reducer = require('./interface.reducer');
const model = require('./interface.model');

const actionHandlers = [];
const childReducers = [];
const mockChildReducer = () => null;


describe('Interface Reducer', () => {
    let originalReducers;

    before(() => {
        originalReducers = _.mapValues(reducer.children, v => v);
        _.forEach(reducer.children, (v, k) => reducer.children[k] = mockChildReducer);
    });

    after(() => {
        _.forEach(reducer.children, (v, k) => reducer.children[k] = originalReducers[k]);
    });

    it('should be a function that returns the interface model when initialized', () => {
        let state = {};

        expect(reducer).to.exist;
        expect(reducer).to.be.a('function');
        expect(() => state = reducer(state, {type: 'Init'})).to.not.throw(Error);
        expect(state).to.eql(_.assign({}, model, _.mapValues(_.zipObject(childReducers), () => null)));
    });

    it('should have the correct actions registered', () => {
        expect(_.keys(reducer.actions).sort()).to.eql(actionHandlers.sort());
    });

    it('should have the correct child reducers registered', () => {
        expect(_.keys(reducer.children).sort()).to.eql(childReducers.sort());
    });
});
