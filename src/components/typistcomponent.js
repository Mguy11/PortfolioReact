import React, {Component} from 'react';
import Typist from 'react-typist';

class WelcomeText extends Component {

  render() {
    return (
      <Typist className="typist-text">
        <span>Hey!</span>
        <Typist.Delay ms={500} />
        <Typist.Backspace count={8} delay={200} />
        <span>Ik ben Martijn</span>
        <Typist.Delay ms={500} />
        <Typist.Backspace count={15} delay={200} />
        <span>Welkom op mijn website.</span>
        <Typist.Delay ms={500} />
        <Typist.Backspace count={25} delay={200} />
        <span>Kijk gerust rond</span>
      </Typist>
    );
  }
}

export default WelcomeText;