import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class Opleiding extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                <p>{this.props.beginJaar} - {this.props.eindJaar}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.schoolNaam}</h4>
                    <p>{this.props.schoolOmschrijving}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Opleiding;