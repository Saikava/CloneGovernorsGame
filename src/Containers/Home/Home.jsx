import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import s from './Home.scss';
import Field from '../Field/Field';
import Modal from '../../Components/Modal/Modal';
import * as fieldActions from '../../Actions/Field';

const Home = ({ move, cardInModal, closeModal }) => (
    <div className={s.container}>
        <div className={s.title}>
            ходов: {move}
        </div>
        <Field />
        {cardInModal && <Modal card={cardInModal} onAction={closeModal} />}
    </div>
);

export default connect(
    state => state.field,
    dispatch => bindActionCreators(fieldActions, dispatch)
)(Home);
