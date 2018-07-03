import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import s from './Field.scss';
import Card from '../../Components/Card/Card';
import * as fieldActions from '../../Actions/Field';
import { cardsEqual } from '../../Helpers/cardsHelper';

class Field extends React.Component {
    componentDidMount() {
        this.props.generate();
    }

    componentDidUpdate() {
        if (this.props.openedCardsIndexes.length > 1) {
            setTimeout(this.props.endMove, 1000);
        }
    }

    render() {
        const {
            cards, openedCardsIndexes, openCard, removedCards
        } = this.props;
        return (<div className={s.container}>
            {cards.map((e, i) => <Card
                image={e.previewPath}
                onClick={() => openCard(i)}
                opened={_.some(openedCardsIndexes, oci => oci === i)}
                removed={_.some(removedCards, rc => cardsEqual(e, rc))}
            />)}
        </div>);
    }
}

export default connect(
    state => state.field,
    dispatch => bindActionCreators(fieldActions, dispatch)
)(Field);
