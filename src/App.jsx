import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <Switch>
        <Route exact path='/' component={() => 'home'}/>
        <Route path='/test' component={() => 'test'}/>
    </Switch>
);

export default App;
