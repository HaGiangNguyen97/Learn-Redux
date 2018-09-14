import React from 'react';
import { connect } from 'react-redux';
import { toggleComponent } from '../actions';

const numbers = [1, 2, 3, 4];

class ToggleButtons extends React.Component {
	render() {
		return (
			<div>
				{numbers.map(number => (
					<button key={number} onClick={() => this.props.toggleComponent(number)}>
						{number}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	event: state.ChangeButton
});

const mapDispatchToProps = dispatch => ({
	toggleComponent: id => dispatch(toggleComponent(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButtons);
