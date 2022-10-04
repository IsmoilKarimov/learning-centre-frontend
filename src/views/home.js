/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner/banner";
import OwnCard from "../components/ownCard/ownCard";
import { Progress } from "../components/progress/progress";
import SellCard from "../components/sellCard/sellcard";

const Home = () => {
    const banner = {
        title: 'Frondend dasturchi kursi',
        text: 'Build your learning routine in DazCourse. Find your best course here!',
        buttonTo: '/course/frondend',
        buttonText: 'Batafsil',
        bg: 'https://images.unsplash.com/photo-1626968361222-291e74711449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
    const myOwnCard = [
        {
            title: 'Flutter Development',
            text: '20. Object-oriented Programming on Dart',
            img: 'https://avatars.mds.yandex.net/i?id=f0a66a9c1ee0a037448c2143738bfb27-5420588-images-thumbs&n=13',
            learned: 20 ,
            lessons: 40,
            link: '/flutter/20'
        },
        {
            title: 'iOS Development',
            text: '10. Working with loops on Swift',
            img: 'https://avatars.mds.yandex.net/i?id=b2195c2b107eed3f76c01b1913375ddb-5583685-images-thumbs&n=13',
            learned: 10 ,
            lessons: 40,
            link: '/iOS/20'
        }
    ]
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
           <Banner banner={banner}/>   
           <div className="row">
                <div className="col-8">
                    <div className="btitle d-flex justify-content-between align-center">
                    <span>Darsni davom etish</span>
                    <Link to='/' className="more">Barchasi</Link> 
                </div>
                    {myOwnCard.map((card, index) => (
                        <OwnCard key={`owncard-${index}`} card={card} />                                
                    ))}
                </div>  
                <div className="col-4">
                    <Progress />
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
export default Home