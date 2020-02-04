import React from 'react';

import { Link  } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = () => (
    <header className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>

        <nav className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            <Link to='/signin' className='option'>
                SIGN IN
            </Link>
        </nav>

    </header>
);

export default Header;