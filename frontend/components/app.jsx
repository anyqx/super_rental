import React from 'react';
import SignupContainer from './session/signup_container';
import { Route, Switch } from 'react-router-dom';
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

            <Route path="/signup" component={SignupContainer} />
        </Switch>
    </div>
)

export default App;