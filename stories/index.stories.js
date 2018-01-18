import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import OrderedList from '../src/OrderedList';
import mockList from '../src/__mocks__/mock-list';

const stories = storiesOf('ordered-list', module); // eslint-disable-line no-undef

stories.addDecorator(withKnobs);

stories.add(
	'Default',
	withInfo('The ordered List')(() => (
		<OrderedList
			list={mockList}
			sortBy={select('Sort by', {
				name: 'Name',
				date: 'Date',
			}, 'name')}
			sortOrder={select('Sort order', {
				asc: 'Asc',
				desc: 'Desc',
			}, 'asc')}
		/>
	))
);
