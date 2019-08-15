import {combineReducers} from 'redux';
import {goods} from './goods';
import {common} from './common';

export const rootReducer = combineReducers({
    goods,common
});
