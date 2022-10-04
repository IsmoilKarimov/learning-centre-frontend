import React from "react";

const Review = () => {
    return(
        <div className="detailrev">
            <div className='btitle'>Student Reviews</div>      
            <div className="detailrev__count">
                <div className="detailrev__left">
                    <div className="detailrev__num">4.9</div>    
                    <div className="detailrev__revs">
                        <i className="fas fa-star"></i>
                        12.6 reviews
                    </div>    
                </div>    
                <div className="detailrev__right">
                    <div className="detailrev__items">
                        <div className="detailrev__stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="owncard__progress">
                            <div 
                                className="owncard__line" 
                                style={{width: `${Math.round((80/100)*100)}%`}}>
                            </div>
                        </div>
                        <div className="detailrev__value">80%</div>
                    </div>
                    <div className="detailrev__items">
                        <div className="detailrev__stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="owncard__progress">
                            <div 
                                className="owncard__line" 
                                style={{width: `${Math.round((60/100)*100)}%`}}>
                            </div>
                        </div>
                        <div className="detailrev__value">60%</div>
                    </div>
                    <div className="detailrev__items">
                        <div className="detailrev__stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="owncard__progress">
                            <div 
                                className="owncard__line" 
                                style={{width: `${Math.round((40/100)*100)}%`}}>
                            </div>
                        </div>
                        <div className="detailrev__value">40%</div>
                    </div>
                    <div className="detailrev__items">
                        <div className="detailrev__stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="owncard__progress">
                            <div 
                                className="owncard__line" 
                                style={{width: `${Math.round((20/100)*100)}%`}}>
                            </div>
                        </div>
                        <div className="detailrev__value">20%</div>
                    </div>
                    <div className="detailrev__items">
                        <div className="detailrev__stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="owncard__progress">
                            <div 
                                className="owncard__line" 
                                style={{width: `${Math.round((10/100)*100)}%`}}>
                            </div>
                        </div>
                        <div className="detailrev__value">10%</div>
                    </div>
                </div>  
            </div>  
            <div className="comments">
                    <div className="comments__item">
                        <div className="comments__author">
                            <div className="comments__avatar"
                                style={{backgroundImage: `url(https://i.pinimg.com/750x/ec/f5/ec/ecf5ec329cc091285b73fb689b4d1be9.jpg)`}}
                            ></div> 
                            <div className="comments__info">
                                <div className="comments__name">Hanna Amalina</div>    
                                <div className="comments__rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>4 hour ago.</span>
                                </div>
                            </div>   
                        </div>  
                        <div className="comments__text">
                             Learning these design skills was fascinating for an accountant and very easy to follow. I have learnt a lot and will be designing on a regular basis going forward.
                        </div>  
                    </div>    
                    <div className="comments__item">
                        <div className="comments__author">
                            <div className="comments__avatar"
                                style={{backgroundImage: `url(https://i.pinimg.com/750x/ec/f5/ec/ecf5ec329cc091285b73fb689b4d1be9.jpg)`}}
                            ></div> 
                            <div className="comments__info">
                                <div className="comments__name">Hanna Amalina</div>    
                                <div className="comments__rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>4 hour ago.</span>
                                </div>
                            </div>   
                        </div>  
                        <div className="comments__text">
                             Learning these design skills was fascinating for an accountant and very easy to follow. I have learnt a lot and will be designing on a regular basis going forward.
                        </div>  
                    </div>    
                </div>  
        </div>
    )
}
export default Review