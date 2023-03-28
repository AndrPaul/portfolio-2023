import React from 'react';
import './navbar.scss'
import { NavLink } from 'react-router-dom';
import { CiHome, CiFolderOn, CiMail, CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';
import { FiExternalLink } from 'react-icons/fi';

const navLinks = [
    { path: '/', text: 'Home', icon: CiHome },
    { path: '/portfolio', text: 'Portfolio', icon: CiFolderOn },
    { path: '/contact', text: 'Contact', icon: CiMail },
    { path: 'https://www.linkedin.com/in/paul-andrica/', text: 'LinkedIn', icon: CiLinkedin },
    { path: 'https://github.com/AndrPaul', text: 'Github', icon: VscGithubAlt }
];

function Navbar() {
    return (
        <nav className='main-nav'>
            {navLinks.map(({ path, text, icon: Icon }, index) => (
                path.startsWith('http') || path.startsWith('mailto') ? (
                    <a key={index} href={path} className="link" target="_blank" rel="noopener noreferrer">
                        <FiExternalLink className='external-link' />
                        <Icon className='nav-icon' />
                        {text}
                    </a>
                ) : (
                    <NavLink key={index} className='link' to={path}>
                        <Icon className='nav-icon' />
                        {text}
                    </NavLink>
                )
            ))}
        </nav>
    )
}

export default Navbar;