const defaultState = {
	1: false,
	2: false,
	3: false,
	4: false
};
const ChangeButton = (state = defaultState, action) => {
	if (action.type === 'CHANGE_TEXT') {
		return {
			...state,
			[action.id]: !state[action.id]
		};
	}
	return state;
};

export default ChangeButton;
