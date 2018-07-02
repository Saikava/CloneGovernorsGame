import { handleActions } from 'redux-actions';
import _ from 'lodash';
import { FIELD_GENERATE, OPEN_CARD } from '../Actions/Field';
import data from './data';
import { addImagePath } from '../Helpers/cardsHelper';

const initialState = {
    cards: [],
    openedCards: []
};

const field = handleActions({
    [FIELD_GENERATE]: (state) => {
        const withImages = data.map(addImagePath);
        return {
            ...state,
            cards: _.shuffle([...withImages, ...withImages])
        };
    },
    [OPEN_CARD]: (state, action) => ({
        ...state,
        openedCards: [
            ...state.openedCards,
            action.payload
        ]
    })
}, initialState);

export default field;
