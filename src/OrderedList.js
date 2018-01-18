/* @flow */

import React from 'react';
import {type DateNameArrayType, type SortByType, type SortOrderType} from './Types';

type propTypes = {
  list: DateNameArrayType,
  sortBy: SortByType,
  sortOrder: SortOrderType,
}

const OrderedList = (props: propTypes) => // eslint-disable-line no-unused-vars
	<ol>
		<span>Component placeholder</span>
	</ol>;

export default OrderedList;
