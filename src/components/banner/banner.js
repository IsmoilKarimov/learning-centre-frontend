import React from "react";
import { NavLink } from "react-router-dom";
import './banner.scss'

const Banner = ({banner}) => {
    const {title, text, buttonTo, buttonText, bg} = banner
    return(
        <div 
            className="banner" 
            style={{backgroundImage: `url(${bg})` }}
        >
            <div className="banner__title">{title}</div>
            <div className="banner__text">{text}</div>
            <NavLink className='link' to={buttonTo}>{buttonText}</NavLink>
        </div>
    )
}
export default Banner