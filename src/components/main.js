import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Cv from './cv';
import Projecten from './projecten';
import Projecten2 from './projecten2';
import Reactportfolio from '../projecten/reactportfolio';
import Dinorun from '../projecten/dinorun';
import Karinsfashion from '../projecten/karinsfashion';
import Vueapp from '../projecten/vueapp';
import Projectpogo from '../projecten/projectpogo';
import Ricardolips from '../projecten/ricardolips';
import Motument from '../projecten/motument';
import Rooisklumpke from '../projecten/rooisklumpke';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/cv" component={Cv} />
        <Route path="/projecten" component={Projecten} />
        <Route path="/projecten2" component={Projecten2} />
        <Route path="/reactportfolio" component={Reactportfolio} />
        <Route path="/dinorun" component={Dinorun} />
        <Route path="/karinsfashion" component={Karinsfashion} />
        <Route path="/vueapp" component={Vueapp} />
        <Route path="/projectpogo" component={Projectpogo} />
        <Route path="/ricadolips" component={Ricardolips} />
        <Route path="/motument" component={Motument} />
        <Route path="/rooisklumpke" component={Rooisklumpke} />
    </Switch>
)

export default Main;