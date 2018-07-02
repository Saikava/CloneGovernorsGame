import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import s from './Field.scss';
import Card from '../../../Components/Card/Card';
import * as fieldActions from '../../../Actions/Field';

class Field extends React.Component {
    componentDidMount() {
        this.props.generate();
    }

    render() {
        const { cards, openedCards, openCard } = this.props;
        return (<div className={s.container}>
            {cards.map((e, i) => <Card
                image={e.imagePath}
                onClick={() => openCard(i)}
                opened={_.some(openedCards, e => e === i)}
            />)}
        </div>);
    }
}

export default connect(
    state => state.field,
    dispatch => bindActionCreators(fieldActions, dispatch)
)(Field);
