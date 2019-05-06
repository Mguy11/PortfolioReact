import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card, Button } from 'react-bootstrap';

class Projectenoverzicht extends Component {
    
      render() {
        return (
            
            <Grid className="projects-grid">  
                <Cell col={12}>
                    <div className="projects-titel">
                        <h1>Mijn Projecten</h1>
                    </div>
                </Cell>
                <Cell col={6}>
                    <Card className="bg-dark text-white">
                            <Card.Img src="/images/Portfolio_React_Thumbnail.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Body>
                                    <Button variant="secondary" href="/reactportfolio" className="project-button">Go somewhere</Button>
                                </Card.Body>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>
                <Cell col={6}>
                    <Card className="bg-dark text-white">
                            <Card.Img src="/images/Dinorun_Thumbnail.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Body>
                                    <Button variant="secondary" href="/dinorun" className="project-button">Go somewhere</Button>
                                </Card.Body>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>   
                <Cell col={6}>
                    <Card className="bg-dark text-white">
                            <Card.Img src="/images/Karins_Fashion_Thumbnail.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Body>
                                    <Button variant="secondary" href="/karinsfashion.js" className="project-button">Go somewhere</Button>
                                </Card.Body>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>
                <Cell col={6}>
                    <Card className="bg-dark text-white">
                            <Card.Img src="/images/Ricardo_Lips_Thumbnail.png" alt="Card image"/>
                            <Card.ImgOverlay>
                                <Card.Body>
                                    <Button variant="secondary" href="/ricadolips" className="project-button">Go somewhere</Button>
                                </Card.Body>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>
                <Cell col={6}>
                    <Card className="bg-dark text-white">
                            <Card.Img src="/images/Motument_Voor_Jou_Thumbnail.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Body>
                                    <Button variant="secondary" href="/motument" className="project-button">Go somewhere</Button>
                                </Card.Body>
                            </Card.ImgOverlay>    
                    </Card>
                </Cell>    
                <Cell col={6}>
                    <Card className="bg-dark text-white">
                            <Card.Img src="/images/Vue_App_Thumbnail_1.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Body>
                                    <Button variant="secondary" href="/vueapp" className="project-button">Go somewhere</Button>
                                </Card.Body>
                            </Card.ImgOverlay>  
                    </Card>
                </Cell>
                <Cell col={6}> 
                    <Card className="bg-dark text-white">
                            <Card.Img src="/images/St_Oedenrode_Thumbnail.png" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Body>
                                    <Button variant="secondary" href="/rooisklumpke" className="project-button">Go somewhere</Button>
                                </Card.Body>
                            </Card.ImgOverlay>
                    </Card>
                </Cell>
          </Grid>
       
        );
    }
}

export default Projectenoverzicht;