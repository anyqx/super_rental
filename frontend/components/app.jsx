import React from 'react';
import SignupContainer from './session/signup_container';
import LogInContainer from './session/login_container'
import { Route, Switch, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBar from './header/nav_bar';
import PageNotFound from './page_not_found.jsx';

//functional component
const App = () => (
    <div>
        <header>
            <NavBar />
            {/* <GreetingContainer /> */}
        </header>
        <Switch>
            <AuthRoute exact path='/login' component={LogInContainer} />
            <AuthRoute exact path='/signup' component={SignupContainer} />

            <Route path='*' component={PageNotFound} />
        </Switch>
    </div>
)

export default App;