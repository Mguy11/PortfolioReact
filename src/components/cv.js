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
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <div className="cv-left-col">
                            <h2 style={{paddingTop: '2em'}}> Martijn Bankert</h2>
                            <h4 style={{color: 'grey'}}>WebDeveloper</h4>
                            <hr/>
                            <p>Hi, 
                                Ik ben Martijn, een student Creative Media and Game 
                                Technologies en junior Webdeveloper. Mijn droom is 
                                front-end developer worden en straks van mijn hobby
                                mijn werk te maken. Ik wil me nu vooral gaan 
                                richten op front-end technieken zoals React en op webdesign,
                                zodat ik mijn droom waar kan gaan maken. Ik wil me ook verder
                                verdiepen in Technisch SEO, omdat de combinatie van development en SEO 
                                altijd handig is om te hebben. 
                            </p>
                            <hr/>
                            <h5>Adres</h5>
                            <p>Wijnhaven 107, Rotterdam</p>
                            <h5>Email</h5>
                            <p>mbankert146@gmail.com</p>
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
                            schoolOmschrijving="Hier heb ik Technische Informatica gestudeert. Gestopt door eigen HR studiepunt regeling"
                        />

                        {/*Informatica*/}
                        <Opleiding
                            beginJaar={2016}
                            eindJaar={2017}
                            schoolNaam="Hogeschool Rotterdam"
                            schoolOmschrijving="Hier heb ik Informatica gestudeert. Gestopt omdat de studie totaal niet aansloot bij wat ik wilde"
                        />

                        {/*Creative Media and Game Technologies*/}
                        <Opleiding
                            beginJaar={2017}
                            eindJaar={"heden"}
                            schoolNaam="Hogeschool Rotterdam"
                            schoolOmschrijving="Hier studeer ik nu Creative Media and Game Technologies."
                        />

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Ervaring</h2>
                        
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
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Skills</h2>
                        <Skills/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Cv;