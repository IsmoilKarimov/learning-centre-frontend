import React from "react";

const List = () => {
    return(
        <div className="detaillist">
            <div className="btitle">Content Course</div>
            <div className="list__top">
                Introduction
                <i className="fas fa-chevron-down"></i>
            </div>
            <div className="list__bottom">
                <ul>
                    <li>
                        <i className="far fa-play-circle"></i>
                        Understanding the Mood of your Colour Palette
                        <span className="ml">Preview</span>
                        <span>06:02</span>
                    </li>
                    <li>
                        <i className="far fa-play-circle"></i>
                        Understanding the Mood of your Colour Palette
                        <span className="ml">Preview</span>
                        <span>06:02</span>
                    </li>
                    <li>
                        <i className="far fa-play-circle"></i>
                        Understanding the Mood of your Colour Palette
                        <span className="ml">Preview</span>
                        <span>06:02</span>
                    </li>
                    <li>
                        <i className="far fa-play-circle"></i>
                        Understanding the Mood of your Colour Palette
                        <span className="ml">Preview</span>
                        <span>06:02</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default List