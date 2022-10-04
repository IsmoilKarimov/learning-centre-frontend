import React from "react";
import SellCard from "../components/sellCard/sellcard";
import '../assets/style/instructor.scss'

const Instructor = () => {
    
    const recCards = [
        {
            img: 'https://i.pinimg.com/564x/3e/a4/36/3ea4367e9a6e151fdd4d49026924f6f8.jpg',
            best: false,
            title: 'e-Commerce Mobile App design using Figma',
            author: {
                name: 'Jack Harper',
                img: 'https://i.pinimg.com/564x/11/fc/90/11fc90072114c2c740c37b3967a8a31e.jpg',
            },
            mark: 4.8,
            review: 555,
            price: 20,
            oldprice: 30,
            link: '/figma/2'
        },
        {
            img: 'https://i.pinimg.com/564x/3e/a4/36/3ea4367e9a6e151fdd4d49026924f6f8.jpg',
            best: true,
            title: 'e-Commerce Mobile App design using Figma',
            author: {
                name: 'Jack Harper',
                img: 'https://i.pinimg.com/564x/11/fc/90/11fc90072114c2c740c37b3967a8a31e.jpg',
            },
            mark: 4.8,
            review: 555,
            price: 20,
            oldprice: 30,
            link: '/figma/2'
        },
        {
            img: 'https://i.pinimg.com/564x/3e/a4/36/3ea4367e9a6e151fdd4d49026924f6f8.jpg',
            best: false,
            title: 'e-Commerce Mobile App design using Figma',
            author: {
                name: 'Jack Harper',
                img: 'https://i.pinimg.com/564x/11/fc/90/11fc90072114c2c740c37b3967a8a31e.jpg',
            },
            mark: 4.8,
            review: 555,
            price: 20,
            oldprice: 30,
            link: '/figma/2'
        }
    ]
    return(
        <>
            <div className="btitle">O'qituvchi sahifasi</div>
            <div className="instructor">
                <div className="instructor__img"></div>
                <div className="instructor__avatar">Jason Ritchey</div>
                <div className="instructor__spec">UX Designer</div>
                <div className="instructor__stat">
                    <span>Total Students : 2778</span>
                    <span>Total Reviews : 1220</span>
                </div>
                <div className='instructor__text'>
                    I’ve been preaching and practicing the gospel of User Experience (UX) to Fortune 100, 500 and Government organizations for nearly three decades. That work includes commercial industry leaders like Google Ventures, Kroll/Duff + Phelps, Broadridge, Conde Nast, Johns Hopkins, Mettler-Toledo, PHH Arval, SC Johnson and Wolters Kluwer, as well as government agencies like the National Science Foundation, National Institutes of Health and the Dept. of Homeland Security.
                </div>
                <div className="instructor__social">
                    <a href="#">
                        <i className="fas fa-comments"></i>
                        Message
                    </a>
                    <a href="#">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                    </a>
                    <a href="#">
                        <i className="fab fa-twitter-square"></i>
                        Twitter
                    </a>
                    <a href="#">
                    <i className="fab fa-instagram-square"></i>
                        Instagram
                    </a>
                    <a href="#">
                        <i className="fab fa-facebook"></i>
                        Facebook
                    </a>
                </div>
            </div>
            <div className="btitle">Tavsiya etamiz</div>
            <div className="row">
                {recCards.map((card, index) => (
                    <div className="col-4" key={`reccard-${index}`}>
                        <SellCard card = {card}/>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Instructor