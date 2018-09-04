import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render(){

		if( !this.props.book ){
			return <div>SELECT A BOOK TO GET STARTED</div>;
		}

		return(
			<div>
				<h3>Details for:</h3>
				<div>TITLE: {this.props.book.title}</div>
				<div>PAGES: {this.props.book.pages}</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);