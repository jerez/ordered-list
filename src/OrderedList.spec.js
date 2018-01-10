/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OrderedList from './OrderedList';
import mockList from './__mocks__/mock-list';


configure({ adapter: new Adapter() });

const mockProps = {
	list: mockList,
	sortBy: 'name',
	sortOrder: 'asc',
};

describe('OrderedList', ()=> {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<OrderedList {...mockProps}/>, div);
	});

	it('contains ol element', () => {
		const wrapper = shallow(<OrderedList {...mockProps}/>);
		const ol = wrapper.find('ol');
		expect(ol).toHaveLength(1);
	});

	it('has 4 li elements', () => {
		const wrapper = shallow(<OrderedList {...mockProps}/>);
		const li = wrapper.find('li');
		expect(li).toHaveLength(4);
	});

	it('first row has 2 spans', () => {
		const wrapper = shallow(<OrderedList {...mockProps}/>);
		const li = wrapper.find('li').first();
		const span = li.find('span');
		expect(span).toHaveLength(2);
	});
});
