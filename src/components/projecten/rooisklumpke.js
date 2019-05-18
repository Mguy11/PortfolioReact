import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class Rooisklumpke extends Component {
    render () {
        return(
            <Grid>
                
                <Cell col={12} className="project-title">
                    <h1>Reserveringssysteem Camping 't Rooisklumpke</h1>
                </Cell>
                
                <Cell col={4} offset={2}>
                    <Image
                        src="/images/St_Oedenrode_Full_Website.png"
                        alt="St_Oedenrode_Full_Website"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>
           
                <Cell col={4} className="project-body">
                    <h3>Wat is het voor project?</h3>
                    <p>
                        Dit was een project in uit mijn eerste jaar CMGT, waar we moesten leren werken met PHP. De bedoeling was
                        dat we eerst zelf een klant gingen zoeken waar we een reserveringssysteem voor konden bouwen. Wanneer je een 
                        klant had moest hij eerst worden goedgekeurd en vervolgens kon je de interviews gaan afleggen om daaruit het project 
                        te kunnen gaan maken. Ik heb gekozen om een systeem te gaan bouwen voor de camping waar ik normaal in de winter altijd kwam
                        , omdat ze daar vernieuwing nodig hadden voor het reserveringssysteem. Ze gebruikten daar nog ouderwetse reserveringspapiertjes en wilden 
                        daar van af. Na een enige tijd testen met verschillende versies heb ik dit systeem kunnen opleveren voor de camping. De website zelf
                        was onbelangrijk aangezien dit systeem geïmplementeerd zou worden op de bestaande website, maar het moest wel overkomen als website 
                        in plaats van een los systeem. Ik kreeg geen contact meer met de huidige webdeveloper om het systeem ook daadwerkelijk op de 
                        website te krijgen. 
                    </p>
                </Cell>
          
           
                <Cell col={4} offset={2} className="project-body">
                    <h3>Wat heb ik hiervoor gebruikt?</h3>
                    <p>
                    Het systeem bevat een front-end van voornamelijk <b>PHP</b> zonder framework (Dat mochten we nog niet gebruiken) en een back-end met een <b>MySQL</b> database. Om 
                    de rest te bouwen en te stylen heb ik wederom <b>HTML</b>, <b>CSS</b> en Materialize gebruikt.
                    </p>
                    <div>
                    <Button variant="secondary" 
                        href="https://github.com/Mguy11/PHP-Opdrachten" target="_blank" className="checkout-button"
                    >Github</Button>
                    <Button variant="secondary" 
                        href="https://stoedenrode.bear-media.nl/" target="_blank" className="checkout-button"
                    >Live Demo</Button>
                    </div>
                </Cell>

                <Cell col={4}>
                    <Image
                        src="/images/St_Oedenrode_Reserveren.png"
                        alt="St_Oedenrode_Reserveren"
                        style={{boxShadow: '10px 10px 5px grey'}}
                        fluid
                    />
                </Cell>


            </Grid>
        );
    }

}

export default Rooisklumpke;