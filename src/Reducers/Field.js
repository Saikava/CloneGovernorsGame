import { handleActions } from 'redux-actions';
import _ from 'lodash';
import {
    FIELD_GENERATE,
    OPEN_CARD,
    END_MOVE,
    CLOSE_MODAL
} from '../Actions/Field';
import data from './data';
import { addImagesPaths, cardsEqual } from '../Helpers/cardsHelper';

const initialState = {
    cards: [],
    openedCardsIndexes: [],
    move: 0,
    removedCards: [],
    cardInModal: null
};

const field = handleActions({
    [FIELD_GENERATE]: (state) => {
        const withImages = data.map(addImagesPaths);
        return {
            ...state,
            cards: _.shuffle([...withImages, ...withImages])
        };
    },
    [OPEN_CARD]: (state, action) => {
        const { openedCardsIndexes } = state;
        if (openedCardsIndexes.length > 1
        || openedCardsIndexes[0] === action.payload) {
            return state;
        }
        return {
            ...state,
            openedCardsIndexes: [
                ...openedCardsIndexes,
                action.payload
            ]
        }
    },
    [END_MOVE]: (state) => {
        const { openedCardsIndexes, cards } = state;
        let { removedCards, cardInModal } = state;

        if (openedCardsIndexes.length === 2) {
            const firstOpenedCard = cards[openedCardsIndexes[0]];
            const secondOpenedCard = cards[openedCardsIndexes[1]];
            if (cardsEqual(firstOpenedCard, secondOpenedCard)) {
                removedCards = [
                    ...removedCards,
                    firstOpenedCard
                ];
                cardInModal = firstOpenedCard;
            }
        }

        return {
            ...state,
            openedCardsIndexes: [],
            move: state.move + 1,
            removedCards,
            cardInModal
        }
    },
    [CLOSE_MODAL]: (state) => {
        return {
            ...state,
            cardInModal: null
        }
    }
}, initialState);

export default field;
