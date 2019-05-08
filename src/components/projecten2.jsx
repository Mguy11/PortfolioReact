import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';


class Projecten2 extends Component {
    
      render() {
        return (
            <Grid className="projects-grid">  
                <Cell col={12}>
                    <div className="projects-titel">
                        <h1>Mijn Projecten</h1>
                    </div>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                    <CardActionArea href="/reactportfolio">
                        <Card.Img src="/images/Portfolio_React_Thumbnail.png" alt="Card image" />
                            <Card.ImgOverlay >
                                
                            </Card.ImgOverlay>
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/dinorun">
                            <Card.Img src="/images/Dinorun_Thumbnail.png" alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                        </CardActionArea>
                    </Card>
                </Cell>   
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/karinsfashion">
                            <Card.Img src="/images/Karins_Fashion_Thumbnail.png" alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/ricadolips">
                            <Card.Img src="/images/Ricardo_Lips_Thumbnail.png" alt="Card image"/>
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/motument">
                            <Card.Img src="/images/Motument_Voor_Jou_Thumbnail.png" alt="Card image" />
                                <Card.ImgOverlay>
                                </Card.ImgOverlay>
                        </CardActionArea>       
                    </Card>
                </Cell>    
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/vueapp">
                            <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                                <Card.ImgOverlay>
                                <Card.Title>Vue app + API</Card.Title>
                                </Card.ImgOverlay>
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/projectpogo">
                            <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                                <Card.ImgOverlay>
                                <Card.Title>Project PoGo</Card.Title>
                                </Card.ImgOverlay>
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom"> 
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/rooisklumpke">
                            <Card.Img src="http://cms.autosport.nl/images/stories/2019/Internationaal/GT/GT4_Germany/2019_Start_GT4_1.JPG" alt="Card image" />
                                <Card.ImgOverlay>
                                <Card.Title>Reserveringssysteem:'t Roois Klumpke</Card.Title>
                                </Card.ImgOverlay>
                        </CardActionArea>
                    </Card>
                </Cell>
          </Grid>
       
        );
    }
}

export default Projecten2;