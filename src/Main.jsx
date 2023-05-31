import React from "react";
import Mainimg from "./Mainimg";
import { Link } from 'react-router-dom';
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
                        <Link to="/components/Kategorie"><img src={require('./images/LIST_350.jpg')} alt='#' /></Link>
                            BLACK MESH
                        </li>
                        <li>
                        <Link to="/components/Kategorie"><img src={require('./images/LIST_335.jpg')} alt='#' /></Link>
                            AEC MARINE
                        </li>
                        <li>
                        <Link to="/components/Kategorie"><img src={require('./images/LIST_342.jpg')} alt='#' /></Link>
                            JOYFUL FLOWERS
                        </li>
                        <li>
                        <Link to="/components/Kategorie"><img src={require('./images/LIST_349.jpg')} alt='#' /></Link>
                            LIME MESH
                        </li>
                        <li>
                        <Link to="/components/Kategorie"><img src={require('./images/LIST_340.jpg')} alt='#' /></Link>
                            SHADOW GREY C
                        </li>
                        <li>
                        <Link to="/components/Kategorie"><img src={require('./images/LIST_348.jpg')} alt='#' /></Link>
                            FLOWER POP
                        </li>
                    </ul>
                    <div className="Bests">
                        <h2>BEST</h2>
                        <p>고객이 만족하는 패션</p>
                        <ul>
                            <li>
                            <Link to="/components/Best"><img src={require('./images/main1.jpg')} alt='#' /></Link>
                            </li>
                            < li >
                            <Link to="/components/Best"><img src={require('./images/main2.jpg')} alt='#' /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="Plan">
                        <div className="Plan_Top">
                            <div>
                                <Link to="/components/Plan">
                                    <img src={require('./images/2304OH_event.jpg')} alt='#' style={{float:'right', paddingRight:'10px', boxSizing:'border-box'}}/>
                                    <span style={{ cursor: 'pointer', color: '#fff', position: 'absolute', left:'32%', bottom:'25%', 
                                    fontSize:'40px', textShadow: '1px 1px 1px #9c9c9c', borderBottom:'2px solid #fff'  }}>기획전 &#62;</span>
                                </Link>
                            </div>
                            <ul style={{width:'50%', padding: 0, margin: 0}}>
                            
                                <li><Link to="/components/Plan"><img src={require('./images/2304CL_event.jpg')} alt='#' style={{width:'30%', height:'182.5px',
                                 paddingLeft:'10px', boxSizing:'border-box'}}/></Link></li>
                                <li><Link to="/components/Plan"><img src={require('./images/2304HC_event.jpg')} alt='#' style={{width:'30%', height:'182.5px',
                                 paddingLeft:'10px', boxSizing:'border-box'}}/></Link></li>
                            
                            </ul>
                        </div>
                        <div className="Plan_Bottom">
                            <div className="Plan_Bottom_Left">
                            <Link to="/components/Product">
                                <img src={require('./images/2304_brand_ss_HC.jpg')} alt='#' style={{position:'absolute', right:0, height:'450px', width:'288px'}}/>
                                <img src={require('./images/2304_brand_ss_CL.jpg')} alt='#' style={{position:'absolute', height:'450px', width:'288px', top:'414px', left:'50%'}}/>
                            </Link>
                            </div>
                            <div className="Plan_Bottom_Right">
                            <Link to="/components/Product">
                                <img src={require('./images/2304_brand_ss_OH.jpg')} alt='#' style={{width:'60%'}}/>
                            </Link>
                            </div>
                            <Link to="/components/Product">
                            <span style={{ position: 'absolute', left: '46%', top: '300px', color: '#fff', fontSize: '40px', textShadow: '1px 1px 1px #9c9c9c',
                             borderBottom: '2px solid #fff', cursor: 'pointer' }}>신상품 &#62;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main;