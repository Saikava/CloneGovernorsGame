import _ from 'lodash';
import artuhov from '../Resources/Images/Governors/artuhov.jpg';
import azarov from '../Resources/Images/Governors/azarov.jpg';
import burkov from '../Resources/Images/Governors/burkov.jpg';
import civilev from '../Resources/Images/Governors/civilev.jpg';
import moor from '../Resources/Images/Governors/moor.jpg';
import nikitin from '../Resources/Images/Governors/nikitin.jpg';
import nosov from '../Resources/Images/Governors/nosov.jpg';
import nikolaev from '../Resources/Images/Governors/nikolaev.jpg';

export function addImagePath(card) {
    const image = _.find(images, e => e.name === card.name);
    return {
        ...card,
        imagePath: image ? image.path : null
    }
}

const images = [{
    name: 'Дмитрий Артюхов',
    path: artuhov
}, {
    name: 'Дмитрий Азаров',
    path: azarov
}, {
    name: 'Александр Бурков',
    path: burkov
}, {
    name: 'Сергей Цивилев',
    path: civilev
}, {
    name: 'Александр Моор',
    path: moor
}, {
    name: 'Глеб Никитин',
    path: nikitin
}, {
    name: 'Айсен Николаев',
    path: nikolaev
}, {
    name: 'Сергей Носов',
    path: nosov
}];