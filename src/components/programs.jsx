import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class Programs extends Component {
    render() {
        return(
            <Grid>
                <Cell>
                    <div className="cv-icon-row">
                        {/* SE Ranking */}
                        <div className="social-links">
                                <img
                                    src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1517588153/se-ranking.png"
                                    alt="SE Ranking"
                                    className="cv-program"
                                />
                            </div> 

                            {/* Obi4Wan */}
                        <div className="social-links">
                                <img
                                    src="https://pbs.twimg.com/profile_images/966246951728701440/W9wXNziM_400x400.jpg"
                                    alt="Obi4Wan"
                                    className="cv-program"
                                />
                            </div> 

                            {/* Visual Studio Code */}
                        <div className="social-links">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Visual_Studio_Code_0.10.1_icon.png"
                                    alt="Visual Studio Code"
                                    className="cv-program"
                                />
                            </div> 

                            {/* PHP storm */}
                        <div className="social-links">
                                <img
                                    src="https://logonoid.com/images/phpstorm-logo.png"
                                    alt="Visual Studio Code"
                                    className="cv-program"
                                />
                            </div> 

                            {/* Android Studio */}
                        <div className="social-links">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/512px-Android_Studio_icon.svg.png"
                                    alt="Android Studio"
                                    className="cv-program"
                                />
                            </div> 

                            {/* Sourcetree */}
                        <div className="social-links">
                                <img
                                    src="https://cdn.worldvectorlogo.com/logos/sourcetree.svg"
                                    alt="Sourcetree"
                                    className="cv-program"
                                />
                            </div> 
                        </div>

                        <div className="cv-icon-row">
                            {/* Github */}
                        <div className="social-links">
                                <img
                                    src="https://image.flaticon.com/icons/svg/25/25231.svg"
                                    alt="Github"
                                    className="cv-program"
                                />
                            </div> 

                            {/* Skype */}
                        <div className="social-links">
                                <img
                                    src="https://cdn.freebiesupply.com/logos/large/2x/skype-3-logo-png-transparent.png"
                                    alt="Skype"
                                    className="cv-program"
                                />
                            </div> 

                            {/* Unity */}
                        <div className="social-links">
                                <img
                                    src="https://cdn.dotned.nl/Files/unity3d-logo.png"
                                    alt="Unity"
                                    className="cv-program"
                                />
                            </div> 

                            {/* Adobe Photoshop */}
                        <div className="social-links">
                                <img
                                    src="http://pluspng.com/img-png/photoshop-logo-png-open-2000.png"
                                    alt="Adobe Photoshop"
                                    className="cv-program"
                                />
                            </div> 

                            {/* Adobe Illustrator */}
                        <div className="social-links">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png"
                                    alt="Adobe Illustrator"
                                    className="cv-program"
                                />
                            </div> 
                        </div>
                </Cell>
            </Grid>
        )
    }
}

export default Programs;