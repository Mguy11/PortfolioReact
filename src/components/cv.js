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
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor,
                                metus eu tristique luctus, enim nisi blandit tortor, sit amet sodales justo est nec mi.
                                In placerat iaculis mi, a commodo mauris condimentum vulputate. Morbi venenatis nisl eget auctor ornare.
                                Nullam pretium molestie justo, ac egestas erat cursus et. Quisque sed elementum risus, in vestibulum turpis. Nulla facilisi. 
                                Nulla sed lobortis risus, et hendrerit enim. Quisque cursus felis porta, dapibus nisi ac, fermentum metus.
                            </p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                            <h5>Adres</h5>
                            <p>Wijnhaven 107, Rotterdam</p>
                            <h5>Email</h5>
                            <p>example@email.com</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
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

                        <Skills
                            skill="C#"
                            progress={40}
                        />

                        <Skills
                            skill="PHP"
                            progress={40}
                        />
                        <Skills
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skills
                            skill="Typescript"
                            progress={50}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={40}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Cv;