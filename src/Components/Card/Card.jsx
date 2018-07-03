import React from 'react';
import cn from 'classnames';
import s from './Card.scss';

const Card = ({ image, opened, onClick, removed }) => (
    <div
        className={cn(s.container, {
            [s.opened]: opened,
            [s.removed]: removed
        })}
        onClick={onClick}
    >
        <div className={s.background} />
        <img src={image} />
    </div>
);

export default Card;
