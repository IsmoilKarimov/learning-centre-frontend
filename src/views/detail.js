import React from "react";
import BreadCrumbs from "../components/breadcrumb/breadcrumb";
import Cart from "../components/details/cart";
import Desc from "../components/details/desc";
import List from "../components/details/list";
import Review from "../components/details/review";
import Top from "../components/details/top";

const Detail = () => {
    return(
        <div className="detail">
            <div className="row">
                <BreadCrumbs />
                <div className="col-8">
                    <Top />
                    <Desc />
                    <List />
                    <Review />
                </div>
                <div className="col-4">
                    <Cart />
                </div>
            </div>
        </div>
    )
}
export default Detail