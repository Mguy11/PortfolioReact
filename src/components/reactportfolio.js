import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class Reactportfolio extends Component {
    render () {
        return(
            <Grid>
                
                <Cell col={12} className="project-title">
                    <h1>Dinorun</h1>
                </Cell>
                
                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Portfolio_React_Thumbnail.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>
           
                <Cell col={4} className="project-body">
                    <h4>Wat is het voor project?</h4>
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
                <h4>Hoe werkt de Game?</h4>
                    <p>
                        Je speelt als Dino in de grote grot waar alle nieuwe eieren liggen om uit te komen. Er onstaat vervolgens een 
                        aardbeving en alles begint te trillen. De eieren biggen ook te trillen en vallen naar beneden. Jij als Dino wil alle 
                        eieren gaan redden, zodat ze niet kapot vallen. Je rent heen en weer door de grot en vangt ze op, maar je meot wel uitkijken
                        voor de vallende stenen want die doen pijn.
                        <br/>
                        <br/>
                        <b>Solo:</b> Je speelt als Dino in een endless game waar het doel is zoveel mogelijk eieren te vangen zonder dood te gaan.
                        <br/>
                        <b>Versus:</b> Je speelt hier local multiplayer tegen iemand anders. De opdracht is proberen meer eieren te vangen dan de ander.
                         Je moet wel nog steeds uitkijken voor de meteorieten, want als jij Game Over gaat wint de ander.
                    </p>
                </Cell>

                <Cell col={4}>
                    <Image
                        src="/images/Portfolio_React_Cv.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey', border: '1px solid black'}}
                        fluid
                    />
                </Cell>

                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Portfolio_React_Projecten.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey', border: '1px solid black'}}
                        fluid
                    />
                </Cell>

                <Cell col={4} className="project-body">
                    <h4>Wat heb ik hiervoor gebruikt?</h4>
                    <p>
                        Ik heb voor de game zelf vooral <b>Typescript</b> en <b>CSS</b> gebruikt en om hem op de webpagina te krijgen was er ook nog een 
                        beetje <b>HTML</b> nodig. Om mijn klassendiagram te tekenen heb ik creately gebruikt, omdat ik dit een fijne tool vond om
                        het diagram te tekenen. 
                    </p>
                    <div className="social-links">
                        <Button variant="secondary" 
                            href="https://github.com/Mguy11/DinoRun" target="_blank"
                        >Github</Button>

                        <Button variant="secondary" 
                            href="https://dinorun.bear-media.nl" target="_blank"
                        >Speel de Game</Button>
                    </div>
                </Cell>

            </Grid>
        );
    }

}

export default Reactportfolio;