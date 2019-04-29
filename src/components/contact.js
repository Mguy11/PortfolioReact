import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        
                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Diamond&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light'
                             alt='avatar'
                        />
                        <h2>Martijn Bankert</h2>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi, Ik ben Martijn, een student Creative Media and Game Technologies en Junior Webdeveloper bij IDN.
                                    Mijn droom is front-end developer worden en straks van mijn hobby mijn werk te maken.
                                    Ik wil me nu vooral gaan richten op front-end technieken zoals <b>Angular</b>, <b>React</b>, <b>Vue</b> en mijn <b>CSS</b>, omdat ik mijn skills op deze gebieden wil verbeteren en uitbreiden. 


                            </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square"/>
                                    (+31) 610708503
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope"/>
                                    mbankert146@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i class="fa fa-linkedin"></i>
                                    Martijn Bankert
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa fa-skype"/>
                                    m.bankert_1
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;