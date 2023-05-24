import React from "react";
import Mainimg from "./Mainimg";
import './Main.css';

function Main() {
    return (
        <div className="contents">
            <div className="contents_in">
                <Mainimg />
                <div className="recommend">
                    <h2>추천 상품</h2>
                    <p>형지몰 추천 데일리 패션</p>
                    <ul className="img_box">
                        <li>
                            <img src={require('./images/LIST_350.jpg')} alt='#' />
                            BLACK MESH
                        </li>
                        <li>
                            <img src={require('./images/LIST_335.jpg')} alt='#' />
                            AEC MARINE
                        </li>
                        <li>
                            <img src={require('./images/LIST_342.jpg')} alt='#' />
                            JOYFUL FLOWERS EMBROIERY
                        </li>
                        <li>
                            <img src={require('./images/LIST_349.jpg')} alt='#' />
                            LIME MESH
                        </li>
                        <li>
                            <img src={require('./images/LIST_340.jpg')} alt='#' />
                            SHADOW GREY C
                        </li>
                        <li>
                            <img src={require('./images/LIST_348.jpg')} alt='#' />
                            FLOWER POP
                        </li>
                    </ul>
                    <div className="Best">
                        <h2>BEST</h2>
                        <p>고객이 만족하는 패션</p>
                        <ul>
                            <li>
                                <img src={require('./images/main1.jpg')} alt='#' />
                            </li>
                            < li >
                                <img src={require('./images/main2.jpg')} alt='#' />
                            </li>
                        </ul>
                    </div>
                    <div className="Plan">
                        <div className="Plan_Top">
                            <img src={require('./images/기획전.png')} alt='#' />
                            <span>기획전 &#62;</span>
                        </div>
                        <div className="Plan_Bottom">
                            <img src={require('./images/브랜드.png')} alt='#' />
                            <span>브랜드 &#62;</span>
                        </div>
                    </div >
                </div>
            </div>
        </div >
    )
}

export default Main;