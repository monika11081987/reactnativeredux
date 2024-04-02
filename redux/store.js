import {configureStore} from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';

const sagaMiddleWare=createSagaMiddleware();

const store=configureStore({
    // rootReducer
    reducer:rootReducer,
    middleware:()=>[sagaMiddleWare]
}
);

sagaMiddleWare.run(SagaData);
export default store;