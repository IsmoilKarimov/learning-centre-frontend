import React from "react";
import { Link } from "react-router-dom";
import './breadcrumb.scss'

const BreadCrumbs = () => {
    return(
        <ul className="breadcrumbs">
            <li><Link to='/'>Kurslar</Link></li>
            <li><Link to='/'>Dasturlash</Link></li>
            <li><Link to='/'>Frondend</Link></li>
        </ul>
    )
}
export default BreadCrumbs  