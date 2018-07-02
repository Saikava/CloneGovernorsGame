import React from 'react';
import s from './Card.scss';

const Card = ({ image, opened, onClick, removed }) => (
    <div
        className={s.container}
        onClick={onClick}
        style={{ visibility: removed ? 'hidden' : 'visible'}}
    >
        {opened && <img src={image} />}
    </div>
);

export default Card;
