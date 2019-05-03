import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Opleiding from './opleiding';
import Ervaring from './ervaring';
import Skills from './skills';


class Cv extends Component {
    render() {
        return(
            <div>
                <Grid>     
                    <Cell col={4}>
                        <div className="cv-left-col">

                            <img
                                src="/images/Avatar_Martijn_1.png"
                                alt="avatar"
                                className="cv-avatar-img"
                            />
                    
                        
                            <h2 style={{paddingTop: '1em'}}> Martijn Bankert</h2>
                            <h4 style={{color: 'grey'}}>Student CMGT</h4>
                            <hr/>
                            <div className='cv-text'>
                                <p>Hi, Ik ben Martijn, een student Creative Media and Game Technologies en Junior Webdeveloper bij IDN.
                                    Mijn droom is front-end developer worden en straks van mijn hobby mijn werk te maken.
                                    Ik wil me nu vooral gaan richten op front-end technieken zoals <b>Angular</b>, <b>React</b>, <b>Vue</b> en mijn <b>CSS</b>, omdat ik mijn skills op deze gebieden wil verbeteren en uitbreiden. 
                                </p>
                            </div>
                            <hr/>
                            <div className='cv-eigenschappen'>
                                <h4>Eigenschappen:</h4>
                                <p style={{fontStyle: 'italic'}}>" Ambitieus, Creatief, Geduldig, Flexibel, Doorzettingsvermogen, 
                                   Hulpvaardig, Leergierig. "
                                </p>
                            </div>
                            <hr/>
                            
                            <div className="cv-social-links">

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
                    
                    <Cell className="cv-right-col" col={8}>
                        <h2>Opleiding</h2>

                        {/*HAVO*/}
                        <Opleiding
                            beginJaar={2008}
                            eindJaar={2015}
                            schoolNaam="St.NorbertusCollege"
                            schoolOmschrijving="Hier heb ik HAVO gedaan met de Profielen N&T en N&G."
                        />

                        {/*Technische Informatica*/}
                        <Opleiding
                            beginJaar={2015}
                            eindJaar={2016}
                            schoolNaam="Hogeschool Rotterdam"
                            schoolOmschrijving="Hier heb ik Technische Informatica gestudeert. Gestopt door eigen studiepunt regeling van de Hogeschool Rotterdam."
                        />

                        {/*Informatica*/}
                        <Opleiding
                            beginJaar={2016}
                            eindJaar={2017}
                            schoolNaam="Hogeschool Rotterdam"
                            schoolOmschrijving="Hier heb ik Informatica gestudeert. Gestopt omdat de studie totaal niet aansloot bij wat ik wilde."
                        />

                        {/*Creative Media and Game Technologies*/}
                        <Opleiding
                            beginJaar={2017}
                            eindJaar={"heden"}
                            schoolNaam="Hogeschool Rotterdam"
                            schoolOmschrijving="Hier studeer ik nu Creative Media and Game Technologies."
                        />

                        <hr/>

                        <h2>Werk Ervaring</h2>
                        
                        <Ervaring
                            beginJaar={2013}
                            eindJaar={2014}
                            werkNaam="Afwasser & Chef"
                            werkOmschrijving="Werkzaam als afwasser en chef bij 'Cafetaria De Fendertse Hoeve'"
                        />

                        <Ervaring
                            beginJaar={2015}
                            eindJaar={2015}
                            werkNaam="Magazijnmedewerker"
                            werkOmschrijving="Werkzaam als Magazijnmedewerker bij 'Kinderkleding te koop'"
                        />

                        <Ervaring
                            beginJaar={2015}
                            eindJaar={2015}
                            werkNaam="Magazijnmedewerker"
                            werkOmschrijving="Werkzaam als Magazijnmedewerker bij 'AquastoreXL'"
                        />
                        <Ervaring
                            beginJaar={2019}
                            eindJaar={"heden"}
                            werkNaam="Junior Webdeveloper"
                            werkOmschrijving="Werkzaam als Junior Webdeveloper bij 'IDN'"
                        />
                        <hr/>

                        <h2>Skills</h2>
                        <Skills/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Cv;