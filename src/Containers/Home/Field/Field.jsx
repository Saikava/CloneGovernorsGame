import React from 'react';
import s from './Field.scss';
import Card from '../../../Components/Card/Card';

const Field = () => (
    <div className={s.container}>
        {[...new Array(16)].map(() => <Card />)}
    </div>
);

export default Field;
