import React, { useState } from "react";
import OwnCard from "../components/ownCard/ownCard";
import { Progress } from "../components/progress/progress";

const My = () => {
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

    const [btnFilter, setFilter] = useState('all')


    return(
        <> 
            <div className="btitle d-flex justify-content-between align-center">
                        <span>Mening kurslarim</span>
                    </div>
                    <div className="filter">
                        <button 
                            onClick={()=> {setFilter('all')}}
                            className={btnFilter === 'all' ? 'active' : ''}
                        >Barcha kurslar (12)</button>
                        <button 
                            onClick={()=> {setFilter('progress')}}
                            className={btnFilter=== 'progress'?'active':''}
                        >O'qilayorgan kurslar (5)</button>
                        <button 
                            onClick={()=> {setFilter('completed')}}
                            className={btnFilter==='completed'?'active':''}
                        >Tugatilgan kurslar (7)</button>
                    </div>
            <div className="row">
                <div className="col-8">
                    {myOwnCard.map((card, index) => (
                        <OwnCard key={`owncard-${index}`} card={card} />                                
                    ))}
                </div>  
                <div className="col-4 mtn">
                    <Progress />
                </div> 
            </div>  
        </>
    )
}
export default My