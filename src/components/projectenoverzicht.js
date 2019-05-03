import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card } from 'react-bootstrap';
import CardActionArea from '@material-ui/core/CardActionArea';


class Projectenoverzicht extends Component {
    
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
                    <CardActionArea href="/projecten/reactportfolio">
                        <Card.Img src="/images/Portfolio_React_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/projecten/dinorun">
                            <Card.Img src="/images/Dinorun_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>   
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/projecten/karinsfashion">
                            <Card.Img src="/images/Karins_Fashion_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/projecten/ricadolips">
                            <Card.Img src="/images/Ricardo_Lips_Thumbnail.png" alt="Card image"/>
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/projecten/motument">
                            <Card.Img src="/images/Motument_Voor_Jou_Thumbnail.png" alt="Card image" />
                        </CardActionArea>       
                    </Card>
                </Cell>    
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/projecten/vueapp">
                            <Card.Img src="/images/Vue_App_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/projecten/projectpogo">
                            <Card.Img src="/images/St_Oedenrode_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom"> 
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/projecten/rooisklumpke">
                            <Card.Img src="/images/St_Oedenrode_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
          </Grid>
       
        );
    }
}

export default Projectenoverzicht;