import React from 'react';
import { Link } from "react-router-dom";
import '../style/header.scss';
import logo from'../assets/logotip.jpg';

function Header (props) {
return(
    <div className='header'>
      <Link to='/'><img src = {logo} className= 'header__logo'></img></Link>
      <nav className='header_too'>
  <Link to='/' className='home allText'>Home</Link>
  <Link to='/game' className='cardes allText'>Cards</Link>
  <Link to='/' className='favorites allText'>Favorites</Link>
  <Link to='/' className='contact allText'>Contact</Link>
    </nav>
    <button className='header__logIn'>Log in</button>
    </div>
)
}

export default Header;