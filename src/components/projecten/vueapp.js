import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

class Vueapp extends Component {
    render() {
        return (
            <Grid>
                
                <Cell col={12} className="project-title">
                    <h1>Vue front-end met eigen back-end</h1>
                </Cell>
                
                <Cell col={4} offset={2}>
                    <Image
                        src="/images/Vue_App_Thumbnail_Clean.png"
                        alt="Vue_App_Thumbnail_Clean"
                        style={{boxShadow: '10px 10px 5px grey', border: '1px solid black' }}
                        fluid
                    />
                </Cell>
           
                <Cell col={4} className="project-body">
                    <h3>Wat is het voor project?</h3>
                    <p>
                        Dit was een school opdracht voor Full Stack Web Development. Ik heb eerst een API moeten bouwen en vervolgens deze moeten koppelen aan mijn eigen server. Daarna 
                        moest de informatie vanuit de server te zien zijn in een Vue front-end. Ik had van alle drie de onderdelen nog
                        maar weinig of geen kennis. Het bouwen van de API en het vullen van de database op de serever was voor mij het moeilijkste 
                        , want dit was vooral back-end. Ook mochten we geen MySQL gebruiken, maar moesten we MongoDB gaan gebruiken. Na het testen 
                        van de back-end heb ik de fron-end gebouwd in Vue. Het doel was een simpel overzicht te geven van alle info uit de database op de
                        server en daar volledige CRUD functionaliteit aan toe te voegen.
                    </p>
                </Cell>
                    
           
                <Cell col={4} offset={2} className="project-body">
                    <h3>Wat heb ik hiervoor gebruikt?</h3>
                    <p>
                        De back-end bestaat uit een API die <b>JSON</b> doorstuurd vanaf mijn server. De server database is gebouwd met <b>MongoDB</b>.
                        Daarnaast heb ik mijn front-end gemaakt in <b>Vue</b> met hier en daar wat <b>HTML</b> en <b>CSS</b>. De styling is uit <b>Bootstrap</b>.
                    </p>
                    <div>
                    <Button variant="secondary" 
                        href="https://github.com/Mguy11/Programmeren6" target="_blank"
                    >Github</Button>
                    <Button variant="secondary" 
                        href="https://www.youtube.com/watch?v=B425MGev2P4" target="_blank"
                    >Youtube Demo</Button>
                    </div>
                    
                </Cell>

                <Cell col={4}>
                    <Image
                        src="/images/API_Thumbnail.png"
                        alt="API_Thumbnail"
                        style={{boxShadow: '10px 10px 5px grey', border: '1px solid black'}}
                        fluid
                    />
                </Cell>


            </Grid>
        );
    }

}

export default Vueapp;