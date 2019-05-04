//ROOTREDUCERS--> BRING TOGETHER ALL OTHER REDUCERS
import { combineReducers } from 'redux';
import itemReducer from './itemReducer';


export default combineReducers({
    item: itemReducer
})