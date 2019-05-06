import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Contact from './contact';
import Cv from './cv';
import Projectenoverzicht from './projectenoverzicht';
import Reactportfolio from './reactportfolio';
import Dinorun from './dinorun';
import Karinsfashion from './karinsfashion';
import Vueapp from './vueapp';
import Ricardolips from './ricardolips';
import Motument from './motument';
import Rooisklumpke from './rooisklumpke';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/cv" component={Cv} />
        <Route path="/projectenoverzicht" component={Projectenoverzicht} />
        <Route path="/reactportfolio" component={Reactportfolio} />
        <Route path="/dinorun" component={Dinorun} />
        <Route path="/karinsfashion" component={Karinsfashion} />
        <Route path="/vueapp" component={Vueapp} />
        <Route path="/ricadolips" component={Ricardolips} />
        <Route path="/motument" component={Motument} />
        <Route path="/rooisklumpke" component={Rooisklumpke} />
    </Switch>
)

export default Main;