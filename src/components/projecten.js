import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projecten extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(

                /*React Projects*/
                <div className="projects-grid">

                {/* Project Portfolio Website */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover'}}>Portfolio</CardTitle>
                        <CardText>
                            Deze Portfolio website heb ik gemaakt met React. Dit is tevens
                            mijn eerste project wat ik maak met React.
                        </CardText>
                        <CardActions border>
                            <Button href='https://github.com/Mguy11/PortfolioReact' target='_blank' ripple>Github</Button>
                            <Button ripple>Live Demo</Button>
                        </CardActions>
                    </Card>

            </div>
            )
        } else if (this.state.activeTab === 1) {
            return(

                /*Vue Projects*/
                <div className="projects-grid">

                {/* Project API + Front-end*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg) center / cover'}}>Project API + Front-end</CardTitle>
                        <CardText>
                            Dit is mijn eerste kennismaking met een Front-end Framework (Vue), Servers (Back-end) en API's.
                            Ik heb eerst een eigen API gemaakt die Json ophaalt van mijn eigen server. Vervolgens wordt dit alles
                            ingeladen in mijn Vue app.
                        </CardText>
                        <CardActions border>
                            <Button href='https://github.com/Mguy11/Programmeren6' target='_blank' ripple>Github</Button>
                            <Button href='https://www.youtube.com/watch?v=B425MGev2P4' target='_blank' ripple>Youtube Demo</Button>
                        </CardActions>
                       
                    </Card>

            </div>
            )
        } else if (this.state.activeTab === 2) {
            return(

                /*PHP Projects*/
                <div className="projects-grid">

                {/* Project Reserveringssysteem */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.archer.com.mt/wp-content/uploads/php1.jpg) center / cover'}}>Project Reserveringssysteem</CardTitle>
                        <CardText>
                            Ik heb als schoolproject een Reserveringssysteem gebouwt met PHP. Dit was de
                            eerste keer dat ik met PHP ging werken. Ik heb een simpel Admin systeem werkend waar
                            de Admin alle reserveringen kan beheren.
                        </CardText>
                        <CardActions border>
                            <Button href='https://stoedenrode.bear-media.nl/index.php' target='_blank' ripple>Live Demo</Button>
                        </CardActions>
                        
                    </Card>

                    {/* Project Pogo */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.archer.com.mt/wp-content/uploads/php1.jpg) center / cover'}}>Project Pogo</CardTitle>
                        <CardText>
                            Dit is mijn tweede project in PHP. Ik heb hiervoor Laravel gebruikt als framework. 
                            De website heeft volledige CRUD functionaliteit en was gebouwt om onze Pokémon Go community
                            te helpen met het makkelijker toevoegen en zoeken van vrienden. 
                        </CardText>
                        <CardActions border>
                        </CardActions>
                        
                    </Card>


            </div>
            )
        } else if (this.state.activeTab === 3) {
            return(

                /*Typescript Projects*/
                <div className="projects-grid">

                {/* Dinorun */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2400/1*D8Wwwce8wS3auLAiM3BQKA.jpeg) center / cover'}}>Dinorun</CardTitle>
                        <CardText>
                            Dinorun is mijn webgame gemaakt als school opdracht. Ik heb hem geschreven in 
                            TypeScript. Het is een simpele game waar je als Dino speelt en moet proberen alle eieren op te vangen.
                            Maar pas op voor de stenen, want die doen pijn.
                        </CardText>
                        <CardActions border>
                            <Button href='https://github.com/Mguy11/DinoRun' target='_blank' ripple>Github</Button>
                            <Button href='https://dinorun.bear-media.nl/' target='_blank' ripple>Live Demo</Button>
                        </CardActions>
                        
                    </Card>
            </div>
            )
        } else if (this.state.activeTab === 4) {
            return(

                /*HTML/CSS Projects*/
                <div className="projects-grid">

                {/* Karin's Fashion */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.udemycdn.com/course/750x422/792484_cc98_3.jpg) center / cover'}}>Karin's Fashion</CardTitle>
                        <CardText>
                            Dit is mijn eerste website die ik ooit heb gemaakt. Ik heb hem gemaakt
                            aan de hand van een template van HTML5up.
                        </CardText>
                        <CardActions border>
                            <Button href='https://github.com/Mguy11/Karin-s-Fashion' target='_blank' ripple>Github</Button>
                            <Button href='https://www.karins-fashion.nl' target='_blank' ripple>Live Site</Button>
                        </CardActions>
                       
                    </Card>
            </div>
            )
        } else if (this.state.activeTab === 5) {
            return(

                /*Wordpress Projects*/
                <div className="projects-grid">

                {/* Ricardo Lips */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://beautifulthemes.com/blog/wp-content/uploads/2017/09/how-to-install-wp-theme.jpg) center / cover'}}>Ricardo Lips</CardTitle>
                        <CardText>
                            Dit is de website die ik in elkaar gezet heb met WordPress voor een vriend. 
                            Hij is begonnen als volkszanger en wilde een eigen website waar hij zijn 
                            nieuwe singles, berichten en foto's kon delen.
                        </CardText>
                        <CardActions border>
                            <Button href='https://www.ricardolips.nl/' target="_blank" ripple>Live Site</Button>
                        </CardActions>
                        
                    </Card>

                    {/* Motument */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://beautifulthemes.com/blog/wp-content/uploads/2017/09/how-to-install-wp-theme.jpg) center / cover'}}>Motument</CardTitle>
                        <CardText>
                            Dit is de website die ik in elkaar gezet heb met WordPress voor een klant.
                            Hij wilde een website waar hij een soort blog kon bijhouden voor zijn
                            bedrijfje wat hij heeft.
                        </CardText>
                        <CardActions border>
                            <Button href='http://www.motumentvoorjou.nl/' target="_blank" ripple>Live Site</Button>
                        </CardActions>
                        
                    </Card>
            </div>
            )
        }

    }
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>PHP</Tab>
                    <Tab>TypeScript</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>Wordpress</Tab>
                </Tabs>
         
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
               
            </div>
        )
    }
}

export default Projecten;