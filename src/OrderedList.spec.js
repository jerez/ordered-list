/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import OrderedList from './OrderedList';


describe('OrderedList', ()=> {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<OrderedList />, div);
	});
});
