/* @flow */

import React from 'react';
import listOrderer from './ListOrderer';

import {
	type DateNameArrayType,
	type SortByType,
	type SortOrderType,
	type DateNameItem
} from './Types';

type propTypes = {
  list: DateNameArrayType,
  sortBy: SortByType,
  sortOrder: SortOrderType,
}

const OrderItem = ({date, name}: DateNameItem, index: number) => (
	<li key={index}>
		<div>
			<span>{date.toLocaleDateString()}</span>
			<span>{name}</span>
		</div>
	</li>
);

const OrderedListFunc = ({list, sortBy, sortOrder}: propTypes) =>(
	<ol>
		{
			list && listOrderer.order(list, sortBy, sortOrder).map((item, index) => (
				OrderItem(item, index)
			))
		}
	</ol>
);

class OrderedList extends React.Component {
	constructor(props: propTypes){
		super(props);
	}

	render(){
		return OrderedListFunc(this.props);
	}
}

export default OrderedList;
