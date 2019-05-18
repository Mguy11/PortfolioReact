import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Image from 'react-bootstrap/Image'

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        
                        <Image src='/images/Pasfoto1.0.jpg'
                             alt='avatar'
                             className='contact-avatar'
                             fluid
                        />
                        <h2 style={{paddingTop: '1em'}}>Martijn Bankert</h2>
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Ik ben op zoek naar een <b>front-end stageplek</b> waar ik mijzelf verder kan ontwikkelen in, bij voorkeur, React, Vue of Angular. 
                        Verder wil ik heel graag meer leren over animaties en webapplicaties in het algemeen. Als er een mogelijkheid is zou ik ook meer willen leren over Technisch SEO om zo mijn 
                        skills nog verder uit te breiden.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto', fontWeight: 'bold'}}>
                                    <i className="fa fa-phone-square"/>
                                    (+31) 610708503
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto', fontWeight: 'bold'}}>
                                    <i className="fa fa-envelope"/>
                                    m.bankert@rfbnet.nl
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto', fontWeight: 'bold'}}>
                                    <i class="fa fa-linkedin"></i>
                                    Martijn Bankert
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Roboto', fontWeight: 'bold'}}>
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