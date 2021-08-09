import React from 'react'
import './NavMenu.css'

export const NavMenu = ({open}) => {
    let className = 'navmenu';
    open ? className += ' navmenu--open' : className += ' navmenu--closed'
    return (
        <div className={className}> 
            <ul>
                <li><span>Home</span></li>
                <li><span>FizzBuzz</span></li>
                <li><span>HighScore</span></li>
                <li><span>SignIn</span></li>
            </ul>
        </div>
    )
}
