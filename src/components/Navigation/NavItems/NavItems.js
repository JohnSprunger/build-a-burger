import React from 'react';
import classes from './NavItems.css'
import NavItem from './NavItem/NavItem'; 

const navItems = () => (
    <ul className={classes.NavItems}>
        <NavItem link="/" active={true}>Build-A-Burger</NavItem>
        <NavItem link="/">Checkout</NavItem> 
    </ul>
); 

export default navItems; 