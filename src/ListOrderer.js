/* @flow */

import {orderBy} from 'lodash';
import {type DateNameArrayType, type SortByType, type SortOrderType} from './Types';

class ListOrderer {
	order(list: DateNameArrayType, sortBy: SortByType, sortOrder: SortOrderType): DateNameArrayType{
		return orderBy(list, sortBy, sortOrder);
	}
}

export default new ListOrderer();
