import React, { useState, useEffect } from "react";
import {  Link, NavLink } from "react-router-dom"
import './_navbar.scss';

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
            path:'/contacts',
            text: 'Contacts',
        },
        {
            id: 3,
            path:'/calculator',
            text: 'Calculator',
        },
        {
            id: 4,
            path:'/api',
            text: 'API',
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