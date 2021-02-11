import React from 'react';
import SignupContainer from './session/signup_container';
import { Route, Switch, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';

//functional component
const App = () => (
    <div>
        <header>
            <Link to='/'>
                <h1>RoofStock</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute path='/login' component={LogInContainer} />
            <AuthRoute path='/signup' component={SignupContainer} />
        </Switch>
    </div>
)

export default App;