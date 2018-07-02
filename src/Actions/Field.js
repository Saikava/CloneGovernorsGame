export const FIELD_GENERATE = 'FIELD_GENERATE';
export const OPEN_CARD = 'OPEN_CARD';
export const END_TURN = 'END_TURN';

export function generate() {
    return {
        type: FIELD_GENERATE
    };
}

export function openCard(index) {
    return {
        type: OPEN_CARD,
        payload: index
    }
}

export function endTurn() {
    return {
        type: END_TURN
    }
}