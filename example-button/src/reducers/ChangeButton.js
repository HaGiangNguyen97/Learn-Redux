const defaultState = {
	1: { bool: false, color: 'bg-white' },
	2: { bool: false, color: 'bg-white' },
	3: { bool: false, color: 'bg-white' },
	4: { bool: false, color: 'bg-white' }
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
