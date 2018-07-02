import React from 'react';
import { connect } from 'react-redux';
import s from './Home.scss';
import Field from '../Field/Field';

const Home = ({ turn }) => (
    <div className={s.container}>
        <div className={s.title}>
            ходов: {turn}
        </div>
        <Field />
    </div>
);

export default connect(
    state => state.field
)(Home);
