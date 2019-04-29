import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card } from 'react-bootstrap';


class Projecten2 extends Component {
    
      render() {
        return (
            <Grid className="projects-grid">  

                <Cell col={4} className="zoom">
                    <Card className="bg-dark text-white">
                        <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title>React Portfolio</Card.Title>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>

                <Cell col={4} className="zoom">
                    <Card className="bg-dark text-white">
                        <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title>Dinorun</Card.Title>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>
                    
                <Cell col={4} className="zoom">
                    <Card className="bg-dark text-white">
                        <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title>Karins Fashion</Card.Title>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>

                <Cell col={4} className="zoom">
                    <Card className="bg-dark text-white">
                        <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image"/>
                            <Card.ImgOverlay>
                            <Card.Title>Ricardo Lips Entertainment</Card.Title>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>

                <Cell col={4} className="zoom">
                    <Card className="bg-dark text-white">
                        <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title>Motument voor jou</Card.Title>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>
                    
                <Cell col={4} className="zoom">
                    <Card className="bg-dark text-white">
                        <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title>Vue app + API</Card.Title>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>

                <Cell col={4} className="zoom">
                    <Card className="bg-dark text-white">
                        <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title>Project PoGo</Card.Title>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>

                <Cell col={4} className="zoom"> 
                    <Card className="bg-dark text-white">
                        <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                            <Card.ImgOverlay>
                            <Card.Title>Reserveringssysteem:'t Roois Klumpke</Card.Title>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>

          </Grid>
       
        );
    }
}

export default Projecten2;