import React from 'react';
import s from './Modal.scss';
import { getAge } from "../../Helpers/formatHelper";

const Modal = ({ card, onAction }) => (
    <div className={s.container}>
        <div className={s.content}>
            <img src={card.imagePath} />
            <div className={s.title}>
                {card.name}, {getAge(card.birthday)}
            </div>
            <div className={s.subtitle}>
                {card.subtitle}
            </div>
            <div className={s.description}>
                {card.description}
            </div>
            <div className={s.button} onClick={onAction}>
                Дальше
            </div>
        </div>
    </div>
);

export default Modal;
