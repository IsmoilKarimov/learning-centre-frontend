import React from "react";
import { NavLink } from "react-router-dom";
import './nav.scss'

const Nav = () => {
    return(
        <nav>
            <div className="nav">
                <ul className="nav__menu">
                    <li>
                        <NavLink activeclassname='active' to ='/'>
                            <i className="fas fa-home"></i>
                            Bosh sahifa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname='active' to ='/courses'>
                            <i className="far fa-compass"></i>
                            Kurslar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname='active' to ='/mycourses'>
                        <i className="fas fa-chalkboard-teacher"></i>
                            Mening kurslarim
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname='active' to ='/test'>
                            <i className="fas fa-brain"></i>
                            Test
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname='active' to ='/settings'>
                            <i className="fas fa-cog"></i>
                            Sozlamalar
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav