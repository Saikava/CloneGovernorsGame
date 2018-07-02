export const FIELD_GENERATE = 'FIELD_GENERATE';
export const OPEN_CARD = 'OPEN_CARD';

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