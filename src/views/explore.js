/* eslint-disable array-callback-return */
import React from "react";
import Banner from "../components/banner/banner";
import Search from "../components/search/search";
import SellCard from "../components/sellCard/sellcard";

const Explore = () => {
    const banner = {
        title: 'Frondend dasturchi kursi',
        text: 'Build your learning routine in DazCourse. Find your best course here!',
        buttonTo: '/course/frondend',
        buttonText: 'Batafsil',
        bg: 'https://images.unsplash.com/photo-1626968361222-291e74711449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }    
    const recCards = [
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
            link: '/courses/figma'
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
            link: '/courses/figma'
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
            link: '/courses/figma'
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
            link: '/courses/figma'
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
            link: '/courses/figma'
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
            link: '/courses/figma'
        }
    ]
    return(
        <>
           <Banner banner={banner}/> 
           <Search searching={(search)=>{console.log(search)}} />
            <div className="btitle d-flex align-center justify-content-between">
                Tavsiya etamiz
                <button>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M34.6654 16H13.332V18.6667H34.6654V16ZM15.9987 22.6667H31.9987V25.3333H15.9987V22.6667ZM19.9987 29.3333H27.9987V32H19.9987V29.3333Z" fill="black"/>
                    </svg>     
                </button>   
            </div>
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
export default Explore