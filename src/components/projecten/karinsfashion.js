import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class Karinsfashion extends Component {
    render () {
        return(
            <Grid>
                
                <Cell col={12} className="project-title">
                    <h1>Karin's fashion</h1>
                </Cell>
                
                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Karins_Fashion_Thumbnail.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>
           
                <Cell col={4} className="project-body">
                    <h3>Wat is het voor project?</h3>
                    <p>
                        Dit was mijn eerste opdracht die ik heb gehad om een website te bouwen voor een klant. De vraag kwam via
                        een vriend of ik voor zijn moeders kleding winkel een website kon bouwen. Ook moest de winkel op Google aangemeld worden etc. dus 
                        dat heb ik ook gelijk meegenomen. Het moeilijke van deze opdracht was dat ik geen richtlijnen had, want er waren geen eisen. De 
                        website was alleen een extra onderdeel voor de winkel. Ik ben toen eerst
                        begonnen om met <b>WordPress</b> een website te maken, maar dat was toch niet wat ze zochten. Vervolgens heb ik met een template een 
                        losse website gebouwd.
                    </p>
                </Cell>
          
           
                <Cell col={4} offset={2} className="project-body">
                    <p>
                        Omdat het ook mijn eerste website was mocht ik nog een beetje experimenteren. Na een tijdje heb ik de website helemaal
                        overnieuw gemaakt en dit is het resultaat geworden. Ik heb hier ook mijn eerste beetje kennis opgedaan voor SEO. Nadat de website online ging 
                        moest hij ook nog gevonden kunnen worden door Google. Ik heb daar toen het een en ander geprobeert te regelen met zowel Google Analytics en wat andere
                        dingen. De website begon op de 14e plaats en staat nu inmiddels op de 2e plaats in Google en daar ben ik erg blij mee. Ik ben daarna
                        niet veel meer verder gegaan met de website, omdat ze er echt niks meer aan wilde doen.
                    </p>
                </Cell>

                <Cell col={4}>
                    <Image
                        src="/images/Karins_Fashion_Info.png"
                        alt="Ricardo_Lips_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>

                <Cell col={4} offset={2} className="project-body">
                    <h3>Wat heb ik hiervoor gebruikt?</h3>
                    <p>
                        Ik heb een <b>HTML5UP</b> template gebruikt, omdat ik net leerde programmeren. Ik heb uiteindelijk
                        wel zelf nog wat <b>HTML</b> en <b>CSS</b> moeten toevoegen en aanpassen om de website zo te krijgen hoe de klant het wilde. Ook
                        heb ik voor de eerste keer gebruikt gemaakt van <b>JavaScript</b> om de Slideshow te regelen en de Google Maps er in te krijgen.
                    </p>
                    
                    <div className="social-links">
                        <Button variant="secondary" 
                            href="https://github.com/Mguy11/Karin-s-Fashion" target="_blank"
                        >Github</Button>

                        <Button variant="secondary" 
                            href="https://dinorun.bear-media.nl" target="_blank"
                        >Bekijk de website</Button>
                    </div>
                </Cell>
            </Grid>
        );
    }

}

export default Karinsfashion;