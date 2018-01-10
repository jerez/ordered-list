/* @flow */

import ListOrderer from './ListOrderer';
import mockList from './__mocks__/mock-list';

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
