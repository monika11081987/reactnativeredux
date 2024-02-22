import {configureStore} from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
import rootReducer from './rootReducer';

const store=configureStore({
    // rootReducer
    reducer:rootReducer
}
);

export default store;