import { handleActions } from 'redux-actions';
import { FIELD_GENERATE } from '../Actions/Field';
import data from './data';

const initialState = {
    cards: []
};

const field = handleActions({
    [FIELD_GENERATE]: (state) => {
        return {
            ...state,
            cards: data
        };
    }
}, initialState);

export default field;
