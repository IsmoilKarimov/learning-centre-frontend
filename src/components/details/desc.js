import React from "react";
import './index.scss';

const Desc = () => {
    return(
        <div className="detaildesc">
            <div className="btitle">What you’ll learn</div>
            <ul className="detaildesc__list">
                <li>Create mobile app designs from scratch</li>
                <li>Create mobile app designs from scratch</li>
                <li>Create mockups using Figma</li>
                <li>Start a new career as a UI/UX designer</li>
                <li>Create wireframe designs for e-Commerce Project</li>
            </ul>
            <div className="btitle">Requirement</div>
            <ul className="detaildesc__circle">
                <li>No pre-knowledge required - we'll teach you everything you need to know</li>
                <li>A PC or Mac is required</li>
                <li>No software is required in advance of the course (all software used in the course is free or has a demo version)</li>
            </ul>
            <div className="btitle">Description</div>
                <p>This Course is great for people with absolutely no design experience or experienced designers who want to get up to speed quickly with mobile app design. We'll introduce you to the art of making beautiful apps. We'll explore key UI and UX concepts that are essential to building good looking and easy to use apps that are loved by users.</p>
                <p>The course has a practical component that takes you step-by-step through the workflow of a professional app designer. From user flow diagrams to wireframing to mockups and prototypes.</p>
                <p>Students completing the course will have the knowledge to create beautiful and lovable apps that leave people with a smile on their face.
                See more</p>
                <button className="detaildesc__more">Ko'proq ma'lumot</button>
            </div>
    )
}
export default Desc