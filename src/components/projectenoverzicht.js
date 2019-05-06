import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
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
                    <CardActionArea>
                        <Link to="/reactportfolio">Home</Link>
                        <Card.Img src="/images/Portfolio_React_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/dinorun">
                            <Card.Img src="/images/Dinorun_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>   
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/karinsfashion">
                            <Card.Img src="/images/Karins_Fashion_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/ricadolips">
                            <Card.Img src="/images/Ricardo_Lips_Thumbnail.png" alt="Card image"/>
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/motument">
                            <Card.Img src="/images/Motument_Voor_Jou_Thumbnail.png" alt="Card image" />
                        </CardActionArea>       
                    </Card>
                </Cell>    
                <Cell col={6} className="zoom">
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/vueapp">
                            <Card.Img src="/images/Vue_App_Thumbnail_1.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
                <Cell col={6} className="zoom"> 
                    <Card className="bg-dark text-white">
                        <CardActionArea href="/rooisklumpke">
                            <Card.Img src="/images/St_Oedenrode_Thumbnail.png" alt="Card image" />
                        </CardActionArea>
                    </Card>
                </Cell>
          </Grid>
       
        );
    }
}

export default Projectenoverzicht;