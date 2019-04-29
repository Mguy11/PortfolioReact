import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Cv from './cv';
import Projecten from './projecten';
import Projecten2 from './projecten2';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/cv" component={Cv} />
        <Route path="/projecten" component={Projecten} />
        <Route path="/projecten2" component={Projecten2} />
    </Switch>
)

export default Main;