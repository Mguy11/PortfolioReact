import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

class Projects extends Component {

    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(

                /*React Projects*/
                <div className="projects-grid">

                {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

            </div>
            )
        } else if (this.state.activeTab === 1) {
            return(

                /*Vue Projects*/
                <div className="projects-grid">

                {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*-PlqbnwqjqJi_EVmrhmuDQ.jpeg) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

            </div>
            )
        } else if (this.state.activeTab === 2) {
            return(

                /*PHP Projects*/
                <div className="projects-grid">

                {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.archer.com.mt/wp-content/uploads/php1.jpg) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>


            </div>
            )
        } else if (this.state.activeTab === 3) {
            return(

                /*Typescript Projects*/
                <div className="projects-grid">

                {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2400/1*D8Wwwce8wS3auLAiM3BQKA.jpeg) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/2400/1*D8Wwwce8wS3auLAiM3BQKA.jpeg) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
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

export default Projects;