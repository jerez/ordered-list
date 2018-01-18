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
	it('should return a list ordered by name', () => {
		// expected == manually ordered mockList
		const expected = [mockList[1], mockList[0], mockList[2], mockList[3]];
		const result = ListOrderer.order(expected);

		expect(result).toBe(expected);
		expect(result[0]).toBe(expected[1]);
		expect(result[1]).toBe(expected[1]);
		expect(result[2]).toBe(expected[2]);
		expect(result[3]).toBe(expected[3]);
	});
});
