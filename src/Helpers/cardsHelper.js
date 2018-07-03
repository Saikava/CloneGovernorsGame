import _ from 'lodash';
import artuhov from '../Resources/Images/Governors/small/artuhov.jpg';
import azarov from '../Resources/Images/Governors/small/azarov.jpg';
import burkov from '../Resources/Images/Governors/small/burkov.jpg';
import civilev from '../Resources/Images/Governors/small/civilev.jpg';
import moor from '../Resources/Images/Governors/small/moor.jpg';
import nikitin from '../Resources/Images/Governors/small/nikitin.jpg';
import nosov from '../Resources/Images/Governors/small/nosov.jpg';
import nikolaev from '../Resources/Images/Governors/small/nikolaev.jpg';
import artuhov_l from '../Resources/Images/Governors/large/artuhov.jpg';
import azarov_l from '../Resources/Images/Governors/large/azarov.jpg';
import burkov_l from '../Resources/Images/Governors/large/burkov.jpg';
import civilev_l from '../Resources/Images/Governors/large/civilev.jpg';
import moor_l from '../Resources/Images/Governors/large/moor.jpg';
import nikitin_l from '../Resources/Images/Governors/large/nikitin.jpg';
import nosov_l from '../Resources/Images/Governors/large/nosov.jpg';
import nikolaev_l from '../Resources/Images/Governors/large/nikolaev.jpg';

export function addImagesPaths(card) {
    const image = _.find(images, e => e.name === card.name);
    return {
        ...card,
        previewPath: image ? image.small : null,
        imagePath: image ? image.large : null
    }
}

export function cardsEqual(card1, card2) {
    return card1.name === card2.name;
}

const images = [{
    name: 'Дмитрий Артюхов',
    small: artuhov,
    large: artuhov_l
}, {
    name: 'Дмитрий Азаров',
    small: azarov,
    large: azarov_l
}, {
    name: 'Александр Бурков',
    small: burkov,
    large: burkov_l
}, {
    name: 'Сергей Цивилев',
    small: civilev,
    large: civilev_l
}, {
    name: 'Александр Моор',
    small: moor,
    large: moor_l
}, {
    name: 'Глеб Никитин',
    small: nikitin,
    large: nikitin_l
}, {
    name: 'Айсен Николаев',
    small: nikolaev,
    large: nikolaev_l
}, {
    name: 'Сергей Носов',
    small: nosov,
    large: nosov_l
}];
