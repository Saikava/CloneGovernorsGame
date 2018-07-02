import { handleActions } from 'redux-actions';
import _ from 'lodash';
import {
    FIELD_GENERATE,
    OPEN_CARD,
    END_TURN
} from '../Actions/Field';
import data from './data';
import { addImagePath, cardsEqual } from '../Helpers/cardsHelper';

const initialState = {
    cards: [],
    openedCards: [],
    turn: 0,
    removedCards: []
};

const field = handleActions({
    [FIELD_GENERATE]: (state) => {
        const withImages = data.map(addImagePath);
        return {
            ...state,
            cards: _.shuffle([...withImages, ...withImages])
        };
    },
    [OPEN_CARD]: (state, action) => {
        const { openedCards } = state;
        if (openedCards.length > 1
        || openedCards[0] === action.payload) {
            return state;
        }
        return {
            ...state,
            openedCards: [
                ...openedCards,
                action.payload
            ]
        }
    },
    [END_TURN]: (state) => {
        const { openedCards, cards } = state;
        let { removedCards, showModal } = state;
        if (openedCards.length === 2
            && cardsEqual(
                cards[openedCards[0]],
                cards[openedCards[1]])
        ) {
            removedCards = [
                ...removedCards,
                cards[openedCards[0]]
            ];
            showModal = true;
        }
        return {
            ...state,
            openedCards: [],
            turn: state.turn + 1,
            removedCards,
            showModal
        }
    }
}, initialState);

export default field;
