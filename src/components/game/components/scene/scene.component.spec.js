const React = require('react');
const {expect} = require('chai');
const {shallow, mount} = require('enzyme');
const Scene = require('./scene.component');
const store = require('redux-mock-store').default()({game:{scene:{current:'default'}}});

describe('Scene Component', () => {

    it('should be a render function', () => {
        expect(Scene).to.exist;
        expect(Scene).to.be.a('function');
    });

    it('should render as a react component without error', () => {
        let view;

        expect(() => {
            view = shallow(<Scene store={store}/>);
        }).to.not.throw(Error);
        expect(view).to.exist;
    });

    describe('gameEngine property', () => {

        it('should have its render method called when Scene is mounted', () => {
            let view, count = 0;
            const engine = {render: () => count += 1};

            expect(() => view = mount(<Scene store={store} gameEngine={engine}/>)).to.not.throw(Error);
            expect(count).to.equal(1);
        });
    });
});
