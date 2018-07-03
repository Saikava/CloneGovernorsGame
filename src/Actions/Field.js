export const FIELD_GENERATE = 'FIELD_GENERATE';
export const OPEN_CARD = 'OPEN_CARD';
export const END_MOVE = 'END_MOVE';
export const CLOSE_MODAL = 'CLOSE_MODAL';

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

export function endMove() {
    return {
        type: END_MOVE
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}
