import {combineReducers} from 'redux';
import { reducer } from './reducer';

// const rootReducer= combineReducers({
//     reducer
// });

// export default rootReducer;

export default combineReducers({
    reducer:reducer
})