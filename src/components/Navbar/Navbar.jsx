import React, { useState, useEffect } from "react";
import {  Link, NavLink } from "react-router-dom"
import './_navbar.scss';
import logo from '../../assets/logo.svg';
import newsIcon from '../../assets/news-icon.svg';
import newsIconActive from '../../assets/news-icon-active.svg';
import calcIcon from '../../assets/calc-icon.svg';
import calcIconActive from '../../assets/calc-icon-active.svg';
import analyticsIcon from '../../assets/analytics-icon.svg';
import analyticsIconActive from '../../assets/analytics-icon-active.svg';
import transactionsIcon from '../../assets/transactions-icon.svg';
import transactionsIconActive from '../../assets/transactions-icon-active.svg';

import { v4 as uuidv4 } from 'uuid'

const Navbar = () => {
    
    const [mobileMenu, setMobileMenu] = useState('')
    const [topBeforeEl, setTopBeforeEl] = useState(-1)
    const [random, setRandom] = useState(uuidv4())

    const links = [
        {
            id: 1,
            path: '/news',
            text: 'News',
            class: 'profile2',
            mainIcon: newsIcon,
            activeIcon: newsIconActive,
        },
        {
            id: 2,
            path:'/calculator',
            text: 'Calculator',
            class: 'calculator',
            mainIcon: calcIcon,
            activeIcon: calcIconActive,
        },
        {
            id: 3,
            path:'/analytics',
            text: 'Analytics',
            class: 'analytics',
            mainIcon: analyticsIcon,
            activeIcon: analyticsIconActive,
        },
        {
            id: 4,
            path:'/transactions',
            text: 'Transactions',
            class: 'transactions',
            mainIcon: transactionsIcon,
            activeIcon: transactionsIconActive,
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


    // TO CHANGE POSITION OF BACKGROUND "BEFORE" ELEMENT
    const setRandomFunc = () => {
        setRandom(uuidv4())
    }
    useEffect(() => {
        const firstLink = document.querySelector('#profile2')
        const secondLink = document.querySelector('#calculator')
        const thirdLink = document.querySelector('#analytics')
        const fourthLink = document.querySelector('#transactions')
        if(firstLink.classList.contains('active-link')){
            setTopBeforeEl(-1)
        }else if(secondLink.classList.contains('active-link')){
            setTopBeforeEl(9.4)
        }else if(thirdLink.classList.contains('active-link')){
            setTopBeforeEl(19.77)
        }else if(fourthLink.classList.contains('active-link')){
            setTopBeforeEl(30.25)
        }
      }, [random]);


    return (
        <nav className="nav-header">

            <img className="nav-logo" src={logo} alt="NFT LOGO" />

            <ul className={`nav-links ${mobileMenu}`}>
                <div style={{top: topBeforeEl + 'rem'}} className="before-el"></div>
                <div style={{top: topBeforeEl + 'rem'}} className="line"></div>
                {links.map(link => {
                    return (
                        <li key={link.id} className='nav-link' onClick={setRandomFunc}>
                            <NavLink to={link.path} id={link.class} activeClassName="active-link" exact>
                                <div id="cf">
                                    <img className="bottom" src={link.activeIcon} />
                                    <img className="top" src={link.mainIcon} />
                                </div>
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