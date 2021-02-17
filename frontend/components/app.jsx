import React from 'react';
import SignupContainer from './session/signup_container';
import LogInContainer from './session/login_container'
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarLogoutContainer from './header/nav_bar_logout_container';
import PageNotFound from './page_not_found.jsx';
import Splash from './splash/splash';

//functional component
const App = () => (
    <div>
        <header>
            <NavBarLogoutContainer />
            {/* <GreetingContainer /> */}
        </header>
        <Switch>
            <AuthRoute exact path='/login' component={LogInContainer} />
            <AuthRoute exact path='/signup' component={SignupContainer} />
            <Route exact path='/' component={Splash} />
            <Route exact path="/" component={BenchIndexContainer} />
            <Route exact path='*' component={PageNotFound} />
            <Redirect to="/" />
        </Switch>
    </div>
)

export default App;