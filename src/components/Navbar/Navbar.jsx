import React, { useState, useEffect } from "react";
import {  Link, NavLink } from "react-router-dom"
import './_navbar.scss';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    
    const [mobileMenu, setMobileMenu] = useState('')

    const links = [
        {
            id: 1,
            path: '/profile',
            text: 'Profile',
        },
        {
            id: 2,
            path:'/calculator',
            text: 'Calculator',
        },
        {
            id: 3,
            path:'/analytics',
            text: 'Analytics',
        },
        {
            id: 4,
            path:'/transactions',
            text: 'Transactions',
        },
    ]

    useEffect(() => {
      const navLinks = document.querySelectorAll('.nav-links li a')
      navLinks.forEach(el => {
          el.addEventListener('click', () => {
            setMobileMenu('')
          })
      })
    }, []);


    return (
        <nav className="nav-header">

            <img className="nav-logo" src={logo} alt="NFT LOGO" />

            <ul className={`nav-links ${mobileMenu}`}>
                {links.map(link => {
                    return (
                        <li key={link.id} className='nav-link'>
                            <NavLink to={link.path} activeClassName="active-link" exact>
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar