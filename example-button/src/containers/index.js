import React from 'react';
import { connect } from 'react-redux';

const numbers = [1, 2, 3, 4];

function mapStateToProps(state) {
	return {
		state: state.ChangeButton
	};
}

const App = ({ state }) => {
	console.log({ state });
	return (
		<div>
			<div className=" ">
				{numbers.map(id => (
					<button className="w3 h3" key={id}>
						{state[id] ? 'YES' : 'NO'}
					</button>
				))}
			</div>
		</div>
	);
};
export default connect(mapStateToProps)(App);
