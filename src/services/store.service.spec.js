const _ = require('lodash');
const {expect} = require('chai');
const Store = require('./store.service');

describe('Store Service', () => {

    it('should be an object with a create method', () => {
        expect(Store).to.exist;
        expect(Store).to.have.property('create').which.is.a('function');
    });

    describe('create method', () => {
        const model = {a: {data: 'tree'}};
        const reducer = (state, action) => ++callCount && _.assign({}, model);
        let callCount;

        beforeEach(() => callCount = 0);

        it('should take a reducer and return a new store', () => {
            let store;

            expect(() => store = Store.create(reducer)).to.not.throw(Error);
            expect(store).to.exist;
            expect(store).to.have.property('getState');
            expect(store).to.have.property('dispatch');
            expect(store).to.have.property('subscribe');
            expect(store).to.have.property('replaceReducer');
            expect(callCount).to.equal(1);
            expect(store.getState()).to.eql(model);
        });
    });
});
