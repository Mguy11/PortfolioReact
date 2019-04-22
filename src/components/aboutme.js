import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';


class AboutMe extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        
                        <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Black&graphicType=Diamond&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light'
                             alt='avatar'
                        />
                        <h2>Martijn Bankert</h2>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi, Ik ben Martijn, een student Creative Media and Game Technologies en junior Webdeveloper.
                         Mijn droom is front-end developer worden en straks van mijn hobby mijn werk te maken.
                         Ik wil me nu vooral gaan richten op front-end technieken zoals React en op webdesign, zodat ik mijn droom waar kan gaan maken. 
                         Ik wil me ook verder verdiepen in Technisch SEO, omdat de combinatie van development en SEO altijd handig is om te hebben.
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

export default AboutMe;