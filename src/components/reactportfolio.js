import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from 'react-bootstrap/Image'

class Reactportfolio extends Component {
    render () {
        return(
            <Grid>
                
                <Cell col={12} className="project-title">
                    <h1>Reactportfolio</h1>
                </Cell>
                
                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Ricardo_Lips_Full_Website.png"
                        alt="Ricardo_Lips_Full_Website"
                        fluid
                    />
                </Cell>
           
                <Cell col={4} className="project-body">
                    <p>
                        Ik wilde graag een portfolio bouwen om mijn werk te laten zien. Tevens wilde ik ook gaan oefenen met 
                        React aangezien ik een front-end stage zoek waar ik kan gaan werken met een front-end framework. Ik had
                        nog niet gewerkt met React toen ik hier aan begon. Ik heb eerst een aantal tutorials gevolgd een een beetje geoefend met 
                        kleine pagina's om een idee te krijgen wat mogelijk is. Na een tijdje had ik een beetje door hoe React werkt en 
                        zag ik de overeenkomsten met Vue. Toch vind ik tot nu toe React fijner werken, omdat de syntax goed te snappen is 
                        en er is heel veel documentatie te vinden online.
                    </p>
                </Cell>
          
           
                <Cell col={4} offset={2} className="project-body">
                    <p>
                        Ik wilde graag een portfolio bouwen om mijn werk te laten zien. Tevens wilde ik ook gaan oefenen met 
                        React aangezien ik een front-end stage zoek waar ik kan gaan werken met een front-end framework. Ik had
                        nog niet gewerkt met React toen ik hier aan begon. Ik heb eerst een aantal tutorials gevolgd een een beetje geoefend met 
                        kleine pagina's om een idee te krijgen wat mogelijk is. Na een tijdje had ik een beetje door hoe React werkt en 
                        zag ik de overeenkomsten met Vue. Toch vind ik tot nu toe React fijner werken, omdat de syntax goed te snappen is 
                        en er is heel veel documentatie te vinden online.
                    </p>
                </Cell>

                <Cell col={4}>
                    <Image
                        src="/images/Ricardo_Lips_Full_Website.png"
                        alt="Ricardo_Lips_Full_Website"
                        fluid
                    />
                </Cell>


            </Grid>
        );
    }

}

export default Reactportfolio;