/* @flow */

import ListOrderer from './ListOrderer';

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

describe('ListOrderer', () => {
	it('should return a list ordered by name asc', () => {
		// expected == manually ordered mockList
		const expected = [mockList[1], mockList[0], mockList[2], mockList[3]];
		const result = ListOrderer.order(expected, 'name', 'asc');

		expect(result).toEqual(expected);
	});

	it('should return a list ordered by name desc', () => {
		// expected == manually ordered mockList
		const expected = [mockList[3], mockList[2], mockList[0], mockList[1]];
		const result = ListOrderer.order(expected, 'name', 'desc');

		expect(result).toEqual(expected);
	});

	it('should return a list ordered by date asc', () => {
		// expected == manually ordered mockList
		const expected = [mockList[2], mockList[1], mockList[3], mockList[0]];
		const result = ListOrderer.order(expected, 'date', 'asc');

		expect(result).toEqual(expected);
	});

	it('should return a list ordered by date desc', () => {
		// expected == manually ordered mockList
		const expected = [mockList[0], mockList[3], mockList[1], mockList[2]];
		const result = ListOrderer.order(expected, 'date', 'desc');

		expect(result).toEqual(expected);
	});
});
