import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class AboutMe extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Martijn Bankert</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor,
                            metus eu tristique luctus, enim nisi blandit tortor, sit amet sodales justo est nec mi.
                            In placerat iaculis mi, a commodo mauris condimentum vulputate. Morbi venenatis nisl eget auctor ornare.
                            Nullam pretium molestie justo, ac egestas erat cursus et. Quisque sed elementum risus, in vestibulum turpis. Nulla facilisi. 
                            Nulla sed lobortis risus, et hendrerit enim. Quisque cursus felis porta, dapibus nisi ac, fermentum metus.
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
                                    (+31) 612345678
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope"/>
                                    example@email.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-fax"/>
                                    (+31) 612345678
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa fa-skype"/>
                                    Skype-ID
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