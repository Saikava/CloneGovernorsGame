import React from 'react';
import { connect } from 'react-redux';
import Home from './Containers/Home/Home';
import s from './App.scss';
import Result from './Containers/Result/Result';

const App = ({ showResult }) => (
    <div className={s.container}>
        {showResult ? <Result /> : <Home />}
    </div>
);

export default connect(
    state => state.field
)(App);
