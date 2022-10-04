import React from "react";
import { Link } from "react-router-dom";
import './sellcard.scss'

const SellCard = ({card}) => {
    const {img, best, title, author, mark, review, price, oldprice, link} = card
    return(
        <div className="sellcard">
            <div className="sellcard__img" style={{backgroundImage: `url(${img})`}}>
                <div className="sellcard__best" style={{display: best ? 'block' : 'none' }}>Ommaviy kurs</div>
            </div>
            <Link to={link} className="sellcard__title">{title}</Link>
            <Link to='/instructor' className="sellcard__author">
                <span className="sellcard__author__img" 
                    style={{backgroundImage: `url(${author.img})`}}></span>
                <span className="sellcard__author__name">{author.name}</span>
            </Link>
            <div className="sellcard__grade">
                <i className="fas fa-star"></i>
                <div className="sellcard__grade__mark">
                    {mark} ({review} Review)
                </div>
            </div>
            <div className="d-flex align-center">
                <div className="sellcard__price">{price}$</div>
                <div className="sellcard__oldprice">{oldprice}$</div>
                <button className="link"><i className="fas fa-shopping-cart"></i></button>
            </div>
        </div>
    )
}
export default SellCard