export function formatMoves(n) {
    let units = 'раз';

    if (Math.floor(n % 100 / 10) !== 1 && n % 10 === 1) {
        units = 'раза';
    }

    return `${n} ${units}`;
}

export function getAge(birthday) {
    const n = new Date().getFullYear() - parseInt(birthday.slice(0,4));
    let units = 'лет';

    if (Math.floor(n % 100 / 10) !== 1
        && n % 10 > 0
        && n % 10 < 5
    ) {
        if (n % 10 === 1) {
            units = 'год';
        } else {
            units = 'года';
        }
    }

    return `${n} ${units}`;
}