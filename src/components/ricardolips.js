import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class Ricardolips extends Component {
    render () {
        return(
            <Grid>
                
                <Cell col={12} className="project-title">
                    <h1>Ricardo Lips Entertainment</h1>
                </Cell>
                
                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Ricardo_Lips_Full_Website.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>
           
                <Cell col={4} className="project-body">
                    <h3>Wat is het voor project?</h3>
                    <p>
                        De website is gebouwd voor een klant die net begonnen is als volks zanger.
                        Hij vroeg mij of ik een mooie website kon bouwen die makkelijk in gebruik was voor andere
                        die hem ook moeten gaan gebruiken. Hij moest overzichtelijk zijn en er moesten berichten op geplaatst kunnen worden.
                        Na enig overleg hebben we besloten dat ik een WordPress website in elkaar zou zetten voor hem. Mijn CSS kennis was
                        nog niet goed genoeg op dat moment om zelf een template te maken, dus daarvoor heb ik een template online gekozen.
                        De website moest verder ook nog een overzicht krijgen met al zijn muziek video's, een boekingspagina, foto's en een gastenboek.
                        

                    </p>
                </Cell>
          
           
                <Cell col={4} offset={2} className="project-body">
                    <h3>Wat heb ik hiervoor gebruikt?</h3>
                    <p>
                        Voor deze website heb ik dus <b>WordPress</b> gebruikt met een template van Smartcat. Verder heb ik er
                        plugins aan toegevoegd om zowel het boekingssysteem als het gastenboek er aan te koppelen. Om de 
                        rest van de pagina's te vullen heb ik gewoon <b>HTML</b> en <b>CSS</b> gebruikt in combinatie met een 
                        extra plugin.
                    </p>
                    <Button variant="secondary" 
                        href="https://www.ricardolips.nl" target="_blank"
                    >Bekijk site</Button>
                </Cell>

                <Cell col={4}>
                    <Image
                        src="/images/Ricardo_Lips_Over_Mij.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey', border: '0.1px solid black'}}
                        fluid
                    />
                </Cell>


            </Grid>
        );
    }

}

export default Ricardolips;