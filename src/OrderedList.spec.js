/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OrderedList from './OrderedList';

configure({ adapter: new Adapter() });

const mockList = [
	{
		name: 'b',
		date: new Date('2018-01-11T04:00:00'),
	},
	{
		name: 'a',
		date: new Date('2018-01-11T02:00:00'),
	},
	{
		name: 'c',
		date: new Date('2018-01-11T01:00:00'),
	},
	{
		name: 'd',
		date: new Date('2018-01-11T03:00:00'),
	},
];

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
});
