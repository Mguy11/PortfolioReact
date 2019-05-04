import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { Link } from 'react-router-dom';

class Mainfooter extends Component {
    render() {
        return (
            <Footer size="mini">
                <FooterSection type="left" logo="Martijn Bankert &copy;">
                    <FooterLinkList>
                        <Link to="/cv">Cv</Link>
                        <Link to="/projectenoverzicht">Projecten</Link>
                        <Link to="/contact">Contact</Link>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        )
    }
}

export default Mainfooter;