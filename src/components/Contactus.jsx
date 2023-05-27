import React from "react";
import "./Contactus.css"

function Contactus() {
    return (
        <div className="call_center">
            <div className="service_center">
                <ul>
                    <h2>고객센터</h2>
                    <li style={{ border: '1px solid #fff', backgroundColor: '#f8f8f8', width: '45%', cursor: 'pointer' }}>공지사항</li>
                    <li style={{ border: '1px solid #fff', backgroundColor: '#f8f8f8', width: '45%', cursor: 'pointer' }}>1:1문의하기</li>
                    <li style={{ border: '1px solid #fff', backgroundColor: '#f8f8f8', width: '45%', cursor: 'pointer' }}>FAQ</li>
                </ul>
                <ul style={{ marginTop: '100px' }}>
                    <li style={{ fontSize: '14px', color: '#191919', fontWeight: 'bold', paddingBottom: '15px' }}>고객상담센터</li>
                    <li style={{ fontSize: '14px', color: '#191919', fontWeight: 'bold' }}>010-9641-9156</li>
                    <li style={{ fontSize: '12px', color: '#333', padding: '3px 0' }}>nick@nturn.com</li>
                    <li style={{ fontSize: '12px', color: '#333' }}>상담시간 10:00 ~ 18:00</li>
                    <li style={{ fontSize: '12px', color: '#333' }}>점심시간 11:50 ~ 12:50</li>
                    <li style={{ fontSize: '12px', color: '#333' }}>토/일/공휴일 휴무</li>
                </ul>
                <ul>
                    <li style={{ fontSize: '14px', color: '#191919', fontWeight: 'bold', padding: '20px 0 10px 0' }}>은행계좌 안내</li>
                    <li style={{ fontSize: '14px', color: '#191919', fontWeight: 'bold' }}>09760104268997</li>
                    <li style={{ fontSize: '12px', color: '#333' }}>국민은행</li>
                    <li style={{ fontSize: '12px', color: '#333' }}>[예금주 : 뉴턴그룹]</li>
                </ul>
            </div>
            <div className="search_box">
                <div className="search">
                    <div className="QNA_Left">
                        <h2 style={{ paddingBottom: '5px', fontSize: '18px', fontWeight: '900', boxSizing: 'border-box' }}>자주묻는 질문 검색</h2>
                        <input type="text" placeholder="검색어를 입력하세요." style={{ width: '70%', padding: '5px', fontSize: '12px', boxSizing:'border-box' }} />
                        <button style={{ backgroundColor: '#000', color: '#fff', padding: '4px 20px', boxSizing: 'border-box', border: 0 }}>검색</button>
                    </div>
                    <div className="QNA_Right">
                        <span style={{ fontSize: '14px', display: 'block', paddingBottom: '10px', fontWeight: 'bold', boxSizing: 'border-box' }}>찾으시는 질문이 없다면?</span>
                        <span style={{ border: '1px solid #ccc', padding: '3px 7px', color: '#333', fontSize: '12px', boxSizing: 'border-box', cursor: 'pointer' }}>1:1문의하기</span>
                    </div>
                </div>
            </div>
            <div className="FAQ">
                <h2 style={{ fontSize: '19px', borderBottom: '2px solid #ccc', paddingBottom: '15px', fontWeight: 'bold' }}>BEST FAQ</h2>
                <ul className="text_event">
                    <li>전체</li>
                    <li>회원가입/정보</li>
                    <li>결제/배송</li>
                    <li>교환/반품/환불</li>
                    <li>마일리지 적립</li>
                    <li>기타</li>
                </ul>
                <ul style={{ backgroundColor: '#fbfbfb', fontWeight: 'bold' }}>
                    <li style={{ padding: '5px 10px 5px 14px' }}>번호</li>
                    <li style={{ padding: '5px 10px 5px 50px' }}>분류</li>
                    <li style={{ padding: '5px 10px 5px 45%' }}>내용</li>
                </ul>
                <ul>
                    <li style={{ padding: '5px 10px 5px 25px' }}>1</li>
                    <li style={{ padding: '5px 10px 5px 40px' }}>결제/배송</li>
                    <li style={{ padding: '5px 10px 5px 50px' }}><img src="https://cdn-std-web-220-13.cdn-nhncommerce.com/llvll22_godomall_com/data/skin/front/designwib_210607/img/icon/board/icon_qna_q.png" alt=" " style={{ paddingRight: '15px' }} /> 네이버페이로 결제했는데 어떻게 취소하나요?</li>
                </ul>
            </div>
        </div>
    )
};

export default Contactus;