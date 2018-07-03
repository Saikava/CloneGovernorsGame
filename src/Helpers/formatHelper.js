export function formatMoves(n) {
    let units = 'раз';

    if (Math.floor(n % 100 / 10) !== 1 && n % 10 === 1) {
        units = 'раза';
    }

    return `${n} ${units}`;
}