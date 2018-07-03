import React from 'react';
import { connect } from 'react-redux';
import s from './Result.scss';
import logo from '../../Resources/Images/logo.png';
import { formatMoves } from '../../Helpers/formatHelper';

const Result = ({ move }) => (
    <div className={s.container}>
        <div className={s.content}>
            <img src={logo} />
            <div className={s.title}>
                Найди двух одинаковых губернаторов: игра «Медузы»
            </div>
            <div className={s.panel}>
                Я могу различить губернаторов<br />
                с {formatMoves(move)}
            </div>
        </div>
    </div>
);

export default connect(
    state => state.field
)(Result);
