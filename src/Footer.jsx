import React from "react";

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_in">
                <div className="Footer_top" style={{ float: 'left' }}>
                    <ul style={{ color: '#fff', float: 'left' }}>
                        <li style={{ fontSize: '18px', fontWeight: 700 }}>
                            Customer center
                        </li>
                        <li style={{ fontSize: '28px', fontWeight: 700, padding: '25px 0 0 0' }}>
                            010-1235-4678
                        </li>
                        <li style={{ fontSize: '14px', opacity: 0.4 }}>
                            상담시간 10:00 ~ 18:00<br />
                            점심시간 11:50 ~ 12:50<br />
                            토/일/공휴일 휴무
                        </li>
                    </ul>
                    <ul style={{ color: '#fff', float: 'left', marginRight: '20%' }}>
                        <li style={{ fontSize: '18px', fontWeight: 700 }}>
                            Returns & Exchange
                        </li>
                        <li style={{ fontSize: '14px', opacity: 0.4, padding: '25px 0 0 0' }}>
                            반품주소<br />
                            경기도 파주시 조리읍 정문로 46
                        </li>
                    </ul>
                    <ul style={{ color: '#fff', float: 'left' }}>
                        <li style={{ fontSize: '18px', fontWeight: 700 }}>
                            Bank info
                        </li>
                        <li style={{ fontSize: '14px', opacity: 0.4, padding: '25px 0 0 0' }}>
                            국민은행 09760104268997 뉴턴그룹
                        </li>
                    </ul>
                    <ul style={{ color: '#fff', float: 'left' }}>
                        <li style={{ fontSize: '18px', fontWeight: 700 }}>
                            About
                        </li>
                        <li style={{ fontSize: '14px', padding: '25px 0', fontWeight: '800' }}>
                            회사소개<br />
                            이용약관<br />
                            이용안내<br />
                            개인정보처리방침
                        </li>
                    </ul>
                </div>
                <div className="sns_icon" style={{ float: 'left' }}>
                    <ul style={{ float: 'left' }}>
                        <li style={{ float: 'left' }}>
                            <img src={require('./images/f-instagram-icon.png')} alt='#' />
                        </li>
                        <li style={{ float: 'left' }}>
                            <img src={require('./images/f-facebook-icon.png')} alt='#' />
                        </li>
                        <li style={{ float: 'left' }}>
                            <img src={require('./images/f-youtube-icon.png')} alt='#' />
                        </li>
                        <li style={{ float: 'left' }}>
                            <img src={require('./images/f-naverblog-icon.png')} alt='#' />
                        </li>
                        <li style={{ float: 'left' }}>
                            <img src={require('./images/f-smartstore-icon.png')} alt='#' />
                        </li>
                    </ul>
                </div>
                <ul className="address">
                    <li>상호명 : 주식회사 뉴턴그룹 대표 : 조원희 주소 : 서울특별시 강남구 도산대로27길 33 (쟈스미빌딩) 7층 뉴턴그룹 사업자등록번호 : 211-88-78504 [사업자정보확인]</li>
                    <li>통신판매업신고 : 2019-서울강남-05429 개인정보보호책임자 : Nicolas Kerr E-MAIL : nick@nturn.com 고객센터 : 010-9641-9156</li>
                    <li style={{ paddingTop: '20px', opacity: 0.4 }}>Copyright © 2019 주식회사 뉴턴그룹 All rights reserved. Hosting by godo.
                    </li>
                </ul>
                <ul style={{ display: 'inline-block', float: 'right', padding: 0, margin: 0 }}>
                    <li style={{ float: 'left', paddingRight: '10px' }}>
                        <img src={require('./images/logo_kftc.png')} alt='#' />
                    </li>
                    <li style={{ float: 'left', paddingRight: '10px' }}>
                        <img src={require('./images/siteSealImage.png')} alt='#' />
                    </li>
                    <li style={{ float: 'left' }}>
                        <img src={require('./images/escrow_banner_kcp.png')} alt='#' style={{ width: '65%' }} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;