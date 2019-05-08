import React, { Component } from 'react'
import { Grid, Cell, List, ListItem } from 'react-mdl';

class Skills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                <h4>Programmeer Talen:</h4>
                <List>
                    <ListItem>Arduino</ListItem>
                    <ListItem>C#</ListItem>
                    <ListItem>HTML/CSS</ListItem>
                    <ListItem>JavaScript</ListItem>
                    <ListItem>Java</ListItem>
                    <ListItem>PHP</ListItem>
                    <ListItem>TypeScript</ListItem>
                </List>
                </Cell>
                <Cell col={4}>
                <h4>Frameworks:</h4>
                    <List>
                        <ListItem>Android</ListItem>
                        <ListItem>Gantry</ListItem>
                        <ListItem>Joomla</ListItem>
                        <ListItem>Laravel</ListItem>
                        <ListItem>React</ListItem>
                        <ListItem>Vue</ListItem>
                    </List>
                </Cell>
                <Cell col={4}>
                <h4>Overig:</h4>
                    <List>
                        <ListItem>Technisch SEO</ListItem>
                        <ListItem>Joomla</ListItem>
                        <ListItem>WordPress</ListItem>
                        <ListItem>Technisch SEO</ListItem>
                        <ListItem>Photoshop</ListItem>
                        <ListItem>Illustrator</ListItem>
                        <ListItem>MySQL</ListItem>
                    </List>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;