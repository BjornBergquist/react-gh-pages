import React from 'react'
import "./Header.css"


export const Header = (props) => {
    return (
        <header>
            {props.children}
        </header>
    )
}
