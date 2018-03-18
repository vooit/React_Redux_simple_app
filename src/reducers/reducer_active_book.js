/**
 * Created by Wojtek on 2018-03-15.
 */

//state argument is not application state , only THE STATE this reducer is responsible for
export default function ActiveBook(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state
}


