import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.markLink = this.markLink.bind(this);

    this.state = {
      home: false,
      characters: false,
      tales: false
    }
  }

  markLink (value) {
    console.log('entrou');
    switch (value) {
      case 'home':
        this.setState({ home: value })
        console.log(this.state.home);
        break;
      case 'characters':
        this.setState({characters: true})
        break;
      case 'tales':
        this.setState({tales: true})
        break;
    };
    console.log(value);
  };

  render() {
    return(
      <div>
        <div className="topBar">
          <Link onClick={() => this.markLink('home')}  to='/' className="navBtn" id="casa">Home</Link>
          <Link onClick={() => this.markLink('characters')} to='/Characters' className="navBtn" id="persona">Personagens</Link>
          <Link onClick={() => this.markLink('tales')} to='/Tales' className="navBtn" id="conto">Contos</Link>
        </div>
        <h1>Contos de um Príncipe</h1>
        <h3>A ascenção de Vali</h3>
      </div>
    )
  }
}

export default Header;