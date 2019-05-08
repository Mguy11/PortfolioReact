import LandingPage from './landingpage';
import Contact from './contact';
import Cv from './cv';
import Projectenoverzicht from './projectenoverzicht';
import Reactportfolio from '../projecten/reactportfolio';
import Dinorun from '../projecten/dinorun';
import Karinsfashion from '../projecten/karinsfashion';
import Vueapp from '../projecten/vueapp';
import Projectpogo from '../projecten/projectpogo';
import Ricardolips from '../projecten/ricardolips';
import Motument from '../projecten/motument';
import Rooisklumpke from '../projecten/rooisklumpke';

const routes = [
    {
        path: '/landingpage',
        component: LandingPage,
    },
    {
        path: '/contact',
        component: Contact,
    }, 
    {
        path: '/cv',
        component: Cv,
    }, 
    {
        path: '/projectenoverzicht',
        component: Projectenoverzicht,
        routes: [
            {
                path: '/reactportfolio',
                component: Reactportfolio,
            }, 
            {
                path: '/dinorun',
                component: Dinorun,
            }, 
            {
                path: '/karinsfashion',
                component: Karinsfashion,
            },
            {
                path: '/vueapp',
                component: Vueapp,
            }, 
            {
                path: '/projectpogo',
                component: Projectpogo,
            }, 
            {
                path: '/ricardolips',
                component: Ricardolips,
            }, 
            {
                path: '/motument',
                component: Motument,
            }, 
            {
                path: '/rooisklumpke',
                component: Rooisklumpke,
            }
        ]
    }
    


]