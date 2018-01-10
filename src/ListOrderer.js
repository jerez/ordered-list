/* @flow */

import {orderBy} from 'lodash';

export type sortByType = 'name' | 'date';
export type sortOrderType = 'asc' | 'desc'
export type DateNameArrayType = Array<{date: Date, name: string}>;

class ListOrderer {
	order(list: DateNameArrayType, sortBy:sortByType, sortOrder:sortOrderType): DateNameArrayType{
    return orderBy(list, sortBy, sortOrder);
	}
}

export default new ListOrderer();
