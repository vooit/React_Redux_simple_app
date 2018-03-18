/**
 * Created by Wojtek on 2018-03-16.
 */
import React, {Component} from 'react';

// 1.import CONNECT FUNCTION

import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';


class BookDetail extends Component {
    render() {

        //set default state in case of state = null in the begining
        if (!this.props.book) {
            return <div>Select a book to get started</div>
        }


        return (
            <div>
                <h2>Details for : </h2>
                <div>{this.props.book.title}</div>
            </div>
        )
    }
}


//helper function;

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators()
// }

export default connect(mapStateToProps)(BookDetail);