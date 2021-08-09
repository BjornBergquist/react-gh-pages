import React from 'react'
import "./Burger.css"

export const Burger = ({ open, setOpen }) => {
    let className = 'burger--btn';
    open ? className += ' burger--open' : className += ' burger--closed'
    return (
        <button className={className} open={open} onClick={() => setOpen(!open)}>
            <div className="burger--bar burger__top"> </div>
            <div className="burger--bar burger__middle"> </div>
            <div className="burger--bar burger__bottom"> </div>
        </button>
    )
}
