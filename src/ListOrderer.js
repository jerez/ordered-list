/* @flow */

type DateNameArrayType = Array<{date: Date, name: string}>;

class ListOrderer {
	order(list: DateNameArrayType): DateNameArrayType{
		return list;
	}
}

export default new ListOrderer();


