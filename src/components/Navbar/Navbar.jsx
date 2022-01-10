import React, { useState, useEffect } from "react";
import {  Link, NavLink } from "react-router-dom"
import './_navbar.scss';

const Navbar = () => {
    
    const [mobileMenu, setMobileMenu] = useState('')

    const links = [
        {
            id: 1,
            path: '/',
            text: 'Home',
        },
        {
            id: 2,
            path:'/about',
            text: 'About',
        },
        {
            id: 3,
            path:'/crates',
            text: 'Crates',
        },
        {
            id: 4,
            path:'/contact',
            text: 'Contact Us',
        },
    ]

    const mobileMenuClick = () => {
        if(!mobileMenu){
            setMobileMenu('active')
        }else{
            setMobileMenu('')
        }
    }

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
            
                <div className={`hamburger ${mobileMenu}`} onClick={mobileMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

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