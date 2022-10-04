import React from "react";
import { Link } from "react-router-dom";
import './index.scss';

const Top = () =>{
    return(
        <div className="detailtop">
            <div className="detailtop__img" style={{
                backgroundImage:`url(https://images.unsplash.com/photo-1594636797501-ef436e157819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`
            }}></div>
            <div className="detailtop__title d-flex justify-content-between">
                E-Commerce Mobile App Design using Figma
               <button className="detailtop__btn ml">
                    <i className="far fa-heart"></i>
                </button>
                <button className="detailtop__btn">
                    <i className="fas fa-share-alt"></i>
                </button>
                
            </div>
            <div className="sellcard__grade">
                <i className="fas fa-star"></i>
                <div className="sellcard__grade__mark">
                    4.7 (687 Review) 1250 students
                </div>
            </div>
            <div className="detailtop__author">
                Created by
                <Link to='/'> Jack Harper</Link>
            </div>
            <div className="detailtop__info">
                <div className="detailtop__item">
                    <i className="fas fa-history"></i>
                    Last update 12/2020
                </div>
                <div className="detailtop__item">
                    <i className="fas fa-globe"></i>
                    Last update 12/2020
                </div>
                <div className="detailtop__item">
                    <i className="fas fa-adjust"></i>
                    Last update 12/2020
                </div>
            </div>
        </div>
    )
}
export default Top