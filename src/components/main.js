import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Cv from './cv';
import Projectenoverzicht from './projectenoverzicht';
import Reactportfolio from './projecten/reactportfolio';
import Dinorun from './projecten/dinorun';
import Karinsfashion from './projecten/karinsfashion';
import Vueapp from './projecten/vueapp';
import Ricardolips from './projecten/ricardolips';
import Motument from './projecten/motument';
import Rooisklumpke from './projecten/rooisklumpke';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/cv" component={Cv} />
        <Route path="/projectenoverzicht" component={Projectenoverzicht} />
        <Route path="/projecten/reactportfolio" component={Reactportfolio} />
        <Route path="/projecten/dinorun" component={Dinorun} />
        <Route path="/projecten/karinsfashion" component={Karinsfashion} />
        <Route path="/projecten/vueapp" component={Vueapp} />
        <Route path="/projecten/ricadolips" component={Ricardolips} />
        <Route path="/projecten/motument" component={Motument} />
        <Route path="/projecten/rooisklumpke" component={Rooisklumpke} />
    </Switch>
)

export default Main;