import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import WelcomeText from './typistcomponent'

class LandingPage extends Component {
    render() {
        return(
            <div >
            <Grid className="landing-grid-top">
                
                    <Cell offset={3} col={3}>
                        <img
                            src="/images/Avatar_Martijn_2.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                    </Cell>

                    <Cell col={5}>
                    <div className="speech-bubble">
                    <div className="arrow bottom right"></div>
                        <WelcomeText >                  
                        </WelcomeText>
                    </div>
                    </Cell>
              
            </Grid>
            <Grid className="landing-grid-bottom">
                <Cell col={12}>
                <div className="banner-text">

                    <h1>Martijn Bankert</h1>

                    <h3>Student CMGT</h3>

                    <hr/>

                    <p>C# | HTML/CSS | JavaScript | PHP | React | Technisch SEO | TypeScript | Vue | WordPress </p>
                    <div className="social-links">

                        {/* Github */}
                        <div className="social-links">
                            <a href="https://github.com/Mguy11" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                            </a>
                        </div> 

                        {/* LinkedIn */}
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/martijn-bankert-389491161/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>
                        </div> 

                        {/* CodePen */}
                        <div className="social-links">
                            <a href="https://codepen.io/Mguy11/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-codepen" aria-hidden="true" />
                            </a>
                        </div>

                        {/* Youtube */}
                        <div className="social-links">
                            <a href="https://www.youtube.com/channel/UCaozaAhapU8JmymN7BBU-lA" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default LandingPage;