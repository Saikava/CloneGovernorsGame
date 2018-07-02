import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home';
import s from './App.scss';

const App = () => (
    <div className={s.container}>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/result' component={() => 'test'}/>
            <Redirect to='/' />
        </Switch>
    </div>
);

export default App;
