import React from "react";
import { Link } from "react-router-dom";
import './header.scss'


const Header = () => {
    return(
        <header>
            <div className="header">
                <Link to='/' className="header__logo">
                    <span className="header__logo--icon">
                        <i className="fas fa-book"></i>
                    </span>
                    5F Group
                </Link>
                <Link to='/likes' className="header__likes">
                    <i className="far fa-heart"></i>
                </Link>
                <button className="header__notif">
                    <i className="far fa-bell"></i>
                </button>
                <Link to='/profile' className="header__profile">
                    <span className="header__profile--image" style={{backgroundImage:`url(${require("../../assets/img/user.jpg")})`}}></span>
                    <span className="header__profile--info">
                        <span className="header__profile--name">Ismoil Karimov</span>
                        <span className="header__profile--email">iska5F@gmail.com</span>
                    </span>
                </Link>
            </div>
        </header>
    )
}
export default Header