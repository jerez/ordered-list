/* @flow */

import {
	type DateNameArrayType,
	type SortByType,
	type SortOrderType,
	type DateNameItem,
} from './Types';

class ListOrderer {
	order(list: DateNameArrayType, sortBy: SortByType, sortOrder: SortOrderType): DateNameArrayType{
		const reverse: boolean = sortOrder === 'desc';
		if(sortBy === 'name'){
			return list.sort(this._sortAlpha.bind(this, reverse));
		} else {
			return list.sort(this._sortDate.bind(this, reverse));
		}
	}

	_sortDate(reverse: boolean, a: DateNameItem, b: DateNameItem){
		return reverse ? b.date - a.date : a.date - b.date;
	}

	_sortAlpha(reverse: boolean, a: DateNameItem, b: DateNameItem){
		const stringA = a.name.toLowerCase();
		const stringB = b.name.toLowerCase();
		if (stringA < stringB) return reverse ? 1 : -1;
		if (stringB > stringB) return reverse ? -1 : 1;
		return 0;
	}
}

export default new ListOrderer();
