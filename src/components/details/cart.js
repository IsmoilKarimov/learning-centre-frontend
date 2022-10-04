import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

const Cart = () => {
    return(
        <div className="detailcart">
            <div className="detailcart__price">
                <div className="new">$20</div>    
                <div className="old">$30</div>    
            </div>   
            <div className="detailcart__title">This course includes:</div> 
            <ul className="detaildesc__list">
                <li>5 hours on demand video</li>
                <li>15 articles</li>
                <li>4 downloadalbe resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and tv</li>
            </ul>        
            <Link to='/' className="link cart">Add to Cart</Link>
            <Link to='/' className="link buy">Buy Now</Link>
            <div className="detailcart__back">30 days money back guarantee</div>
        </div>
    )
}
export default Cart