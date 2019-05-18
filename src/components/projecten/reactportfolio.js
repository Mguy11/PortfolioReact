import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class Reactportfolio extends Component {
    render () {
        return(
            <Grid>
                
                <Cell col={12} className="project-title">
                    <h1>React Portfolio</h1>
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
                        Ik wilde graag een portfolio website bouwen om mijn werk te laten zien. Tevens wilde ik ook gaan oefenen met 
                        React aangezien ik een front-end stage zoek waar ik naar alle waarschijnlijkheid ga werken met front-end frameworks. Ik had
                        tot nu toe nog niet gewerkt met React. Ik heb eerst een aantal tutorials gevolgd en daarna ben ik een beetje gaan oefenen met 
                        kleine pagina's om een idee te krijgen wat er allemaal mogelijk is. Na enige tijd oefenen kreeg ik een beetje door hoe ik React kon 
                        toepassen en ben ik begonnen met het bouwen van deze website. 
                    </p>
                </Cell>
          
           
                <Cell col={4} offset={2} className="project-body">
                <h4>Waarom in React?</h4>
                    <p>
                        Aangezien steeds meer bedrijven werken met React, Vue en Angular wilde ik ook leren hoe ik hiermee aan de slag kon gaan. React was mijn eerste voorkeur, omdat 
                        ze bij de bedrijven waar ik graag stage wil lopen vooral React gebruiken. React is naar mijn mening ook het fijnst in omgang en kan je in korte tijd al een hoop 
                        te weten komen.
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
                        Ik heb voor de website <b>Javascript</b>, <b>Libraries</b>, <b>HTML</b>en <b>CSS</b> gebruikt en de hosting regel ik via Netlify.
                    </p>
                    <div className="checkout-buttons">
                        <Button variant="secondary" 
                            href="https://github.com/Mguy11/PortfolioReact" 
                            target="_blank"
                            
                        >Github</Button>
                    </div>
                </Cell>

            </Grid>
        );
    }

}

export default Reactportfolio;