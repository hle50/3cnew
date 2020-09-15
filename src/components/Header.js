import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/images/log.png';
import people from '../assets/images/people.png';
import earth from '../assets/images/earth.png';
import hcccLogo from '../assets/images/HCCCLogo.png';

const NavItem = ({text, width, logoSrc, target}) =>{
    return (
        <a className='d-flex justify-content-center align-items-center ml-2' target='_blank' href={target}>
            <img width={width ? width: 'auto'} src={logoSrc} alt={text}/>
            {text}
        </a>
    )
}

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" className='app-nav'>
            <Navbar.Brand href="/">
                <img src={logo} alt="hccc-ecomplaint"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                    <NavItem
                        text={'Accessibility'}
                        logoSrc={people}
                        target={'https://www.hccc.nsw.gov.au/Home/Accessibility'}
                    /><NavItem
                        text={'Language'}
                        logoSrc={earth}
                        target={'https://www.hccc.nsw.gov.au/contact-us/contact-details/information-in-other-languages'}
                    /><NavItem
                        width={50}
                        logoSrc={hcccLogo}
                        target={'https://www.hccc.nsw.gov.au/contact-us/contact-details/information-in-other-languages'}
                    />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;
