import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="contact-page-grid">
                <Cell col={12}>
                <h1>Neem contact op</h1>
                </Cell>
            </Grid>
            </div>
        )
    }
}

export default Contact;