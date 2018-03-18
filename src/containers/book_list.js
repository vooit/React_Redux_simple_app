/**
 * Created by Wojtek on 2018-03-06.
 */
import React, {Component} from "react";
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';

//sends action from actionCreator to all the reducers
import {bindActionCreators} from 'redux';

class Booklist extends React.Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}>{book.title}</li>
            )
        })
    }


    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//bierze stan z componentu czyli books i activebook
function mapStateToProps(state) {
//whatever is returned will show as props inside of booklist
//    usually return object => will be euqal to this.props of this component
    return {
        // THIS is the connection between redux and component
        books: state.books
    }
}


//selected book is called -> resuult is passed to all reducers
// anything returned from 'mapDispatchToProps' will end up as PROPS in BOOKLIST CONTAINER
function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectBook: selectBook}, dispatch)
}


// promote BOOKLIST from component to CONTAINER -> it will kwno about this new dispatch method , selectBook ,
// make it available as PROPS
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
