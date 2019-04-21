import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class Ervaring extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                <p>{this.props.beginJaar} - {this.props.eindJaar}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.werkNaam}</h4>
                    <p>{this.props.werkOmschrijving}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Ervaring;