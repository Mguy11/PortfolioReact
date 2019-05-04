import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class Motument extends Component {
    render() {
        return (
            <Grid>

                <Cell col={12} className="project-title">
                    <h1>Motument</h1>
                </Cell>

                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Motument_Voor_Jou_Full_Website.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>

                <Cell col={4} className="project-body">
                    <h3>Wat is het voor project?</h3>
                    <p>
                        De website is gemaakt voor een bedrijfje waar mensen proberen andere te helpen met hun porblemen. Ze wilde dit
                        op een wat modernere manier aanpakken door er een blog van te maken met bijbehorende social media accounts. Mensen konden zo
                        hun problemen zowel normaal als anoniem posten en dan wordt er door één van de medewerkers op gereageerd. Verder moest het ook een 
                        platform worden waar mensen ook elkaar konden helpen en steunen waar nodig. Helaas is het niet helemaal goed van de grond gekomen en is
                        de website voor nu nog even buiten gebruik.
                    </p>
                </Cell>


                <Cell col={4} offset={2} className="project-body">
                    <h3>Wat heb ik hiervoor gebruikt?</h3>
                    <p>
                        Voor deze website heb ik <b>WordPress</b> gebruikt met een template van Themattic. Verder heb ik er
                        plugins aan toegevoegd om een aantal zaken te regelen zoals de blogposts van buitenaf en het contact formulier. Om de 
                        rest van de pagina's te vullen heb ik gewoon <b>HTML</b> en <b>CSS</b> gebruikt in combinatie met een 
                        extra plugin.
                    </p>
                    <br/>
                    <Button variant="secondary" 
                            disabled
                    >Bekijk de website</Button>
                    <br/>
                    <p style={{fontStyle: 'italic'}}>
                        - Helaas is de website op het moment niet beschikbaar wegens problemen met de klant. -
                    </p>
                </Cell>

                <Cell col={4}>
                    <Image
                        src="/images/Motument_Voor_Jou_Over_Ons.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>


            </Grid>
        );
    }

}

export default Motument;