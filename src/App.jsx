import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Containers/Home/Home';

const App = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/test' component={() => 'test'}/>
    </Switch>
);

export default App;
