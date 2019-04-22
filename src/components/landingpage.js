import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Diamond&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
                    alt="avatar"
                    className="avatar-img"
                />
                <div className="banner-text">

                    <h1>Martijn Bankert</h1>

                    <h3>Junior WebDeveloper</h3>

                    <hr/>

                    <p>C# | HTML/CSS | JavaScript | PHP | React | SEO | TypeScript | Vue | WordPress </p>
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