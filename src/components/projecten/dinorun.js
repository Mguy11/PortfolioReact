import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class Dinorun extends Component {
    render () {
        return(
            <Grid>
                
                <Cell col={12} className="project-title">
                    <h1>Dinorun</h1>
                </Cell>
                
                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Dinorun_Thumbnail.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>
           
                <Cell col={4} className="project-body">
                    <h4>Wat is het voor project?</h4>
                    <p>
                        Dit was een school project waar we een game moesten bouwen in Typescript. Voor mij was dit ook mijn eerste
                        keer dat ik een game ging bouwen in een web omgeving. Voor we konden beginnen met het bouwen van de game werd er 
                        van ons verwacht dat we eerst alles zouden uitschrijven in pseudo code, zodat we een goed idee hadden hoe de game zou moeten 
                        worden. Dit maakte vervolgens het bouwproces iets makkelijker, omdat je concrete doelen kon stellen voor het bouwen.
                        Ik ben vervolgens eerst gaan brainstormen wat voor game ik wilde maken. Ik heb uiteindelijk gekozen om een game te maken waarin je tegelijkertijd items moet oppakken
                        en dodgen. Daarna ben ik gaan denken in wat voor setting ik deze game kon gebruiken met dit idee er achter. Daar is uiteindelijk 
                        Dinorun uitgekomen met in de hoofdrol Dino.
                    </p>
                </Cell>
          
           
                <Cell col={4} offset={2} className="project-body">
                <h4>Hoe werkt de Game?</h4>
                    <p>
                        Je speelt als Dino in de grote grot waar alle nieuwe eieren liggen om uit te komen. Er onstaat vervolgens een 
                        aardbeving en alles begint te trillen. De eieren beginnen ook te trillen en vallen naar beneden. Jij als Dino wilt alle 
                        eieren gaan redden, zodat ze niet kapot vallen. Je rent heen en weer door de grot en vangt ze op, maar je moet wel uitkijken
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
                        src="/images/Dinorun_Solo.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>

                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Dinorun_Multiplayer.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
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
                    <div >
                        <Button variant="secondary" 
                            href="https://github.com/Mguy11/DinoRun" target="_blank" className="checkout-button"
                        >Github</Button>

                        <Button variant="secondary" 
                            href="https://dinorun.bear-media.nl" target="_blank" className="checkout-button"
                        >Speel de Game</Button>
                    </div>
                </Cell>

            </Grid>
        );
    }

}

export default Dinorun;