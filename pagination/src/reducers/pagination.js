const initialState = {
	dataList: [
		{ num: 1 },
		{ num: 2 },
		{ num: 3 },
		{ num: 4 },
		{ num: 5 },
		{ num: 6 },
		{ num: 7 },
		{ num: 8 },
		{ num: 9 },
		{ num: 10 },
		{ num: 11 },
		{ num: 12 },
		{ num: 13 },
		{ num: 14 },
		{ num: 15 }
	],
	page: 1,
	numOfRows: 4
};

const pagination = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_PAGE':
			return Object.assign({}, state, { page: action.page });
		default:
			return state;
	}
};

export default pagination;
