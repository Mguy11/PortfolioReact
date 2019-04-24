import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="main-navigation">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/" sticky>Home</Link>} scroll>
                  <Navigation>
                      <Link to="/cv">Cv</Link>
                      <Link to="/aboutme">AboutMe</Link>
                      <Link to="/projects">Projects</Link>        
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Home</Link>}>
                  <Navigation>
                      <Link to="/cv">Cv</Link>
                      <Link to="/aboutme">AboutMe</Link>
                      <Link to="/projects">Projects</Link>
                  </Navigation>
                  <div className="cv-social-links">
                                {/* Github */}
                                <div className="social-links">
                                    <a href="https://github.com/Mguy11" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github" aria-hidden="true" />
                                    </a>
                                </div> 

                                {/* LinkedIn */}
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/martijn-bankert-389491161/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                </div> 

                                {/* CodePen */}
                                <div className="social-links">
                                    <a href="https://codepen.io/Mguy11/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-codepen" aria-hidden="true" />
                                    </a>
                                </div>

                                {/* Youtube */}
                                <div className="social-links">
                                    <a href="https://www.youtube.com/channel/UCaozaAhapU8JmymN7BBU-lA" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-youtube" aria-hidden="true" />
                                    </a>
                                </div>
                  </div>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
        </div>
    );

  }
}

export default App;
