import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changePage } from '../actions';

class numOfThisPages extends Component {
	constructor(props) {
		super(props);
	}

	renderContent = () => {
		const { dataList, page, numOfRows } = this.props;
		const displayDataList = dataList.slice(numOfRows * (page - 1), numOfRows * page);
		return <div>{displayDataList.map(content => <div>{content.num}</div>)}</div>;
	};

	changePages = page => {
		this.props.changePage(page);
	};

	renderNumberOfPages = () => {
		const { dataList, numOfRows } = this.props;
		const numOfPages = Math.ceil(dataList.length / numOfRows);
		const pages = [];
		for (let i = 0; i < numOfPages; i++) {
			pages.push(
				<span>
					<button onClick={this.changePages.bind(this, i + 1)}>{i + 1} </button>
				</span>
			);
		}
		return pages;
	};

	render() {
		return (
			<div>
				{this.renderContent()}
				{this.renderNumberOfPages()}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	dataList: state.pagination.dataList,
	page: state.pagination.page,
	numOfRows: state.pagination.numOfRows
});

const mapDispatchToProps = {
	changePage
};

export default connect(mapStateToProps, mapDispatchToProps)(numOfThisPages);
