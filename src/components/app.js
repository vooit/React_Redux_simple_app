import React from "react";
import Booklist from '../containers/book_list';
import BookDetail from '../containers/book_detail';

class App extends React.Component {
    render() {
        return (
            <div>
                <Booklist/>
                <BookDetail/>
            </div>
        );
    }
}
export default App;