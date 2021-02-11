import React from 'react';
import SignupContainer from './session/signup_container';
import { Route, Switch, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';

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
            <Route path='/login' component={LogInContainer} />
            <Route path='/signup' component={SignUpContainer} />
        </Switch>
    </div>
)

export default App;