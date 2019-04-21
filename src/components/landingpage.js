import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img
                    src="data:image/png;base64,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"
                    alt="avatar"
                    className="avatar-img"
                />

                <div className="banner-text">
                    <h1>Junior Front-end Developer</h1>

                    <hr/>

                    <p>C# | HTML/CSS | JavaScript | PHP | React | TypeScript| Vue | WordPress </p>
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