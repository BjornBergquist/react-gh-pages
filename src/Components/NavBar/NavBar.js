import React, { useState } from 'react';
import { Burger } from '../HamburgerMenu/Burger'
import { NavMenu } from '../NavMenu/NavMenu';
import './NavBar.css'


export const NavBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar--header">
                    <h2>LogoType</h2> 
                    <Burger open={open} setOpen={setOpen}/>
                </div>
            </nav>
            <NavMenu open={open}/>
        </React.Fragment>
    )
}
