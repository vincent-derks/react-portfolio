import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import App from './../../client/components/app'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Main app component:', () => {
    it('Renders without errors', () => {
        expect(
            shallow(<App dispatch={()=>{}}/>)
        )
    })
    it('Has a div with the className "mainContent"', () => {
        const wrapper = shallow(<App dispatch={()=>{}} />)
        expect(wrapper.find('.mainContent').length).toEqual(1)
    })
})