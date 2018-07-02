import React from 'react';
import s from './Card.scss';

const Card = ({ image, opened, onClick }) => (
    <div className={s.container} onClick={onClick}>
        {opened && <img src={image} />}
    </div>
);

export default Card;
