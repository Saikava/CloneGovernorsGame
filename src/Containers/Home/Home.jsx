import React from 'react';
import s from './Home.scss';
import Field from './Field/Field';

const Home = () => (
    <div className={s.container}>
        <div className={s.title}>
            ходов: 5
        </div>
        <Field />
    </div>
);

export default Home;
