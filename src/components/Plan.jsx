import React from "react";
import './Plan.css';
import Mainimg from "../Mainimg";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Plan() {
    return (
        <div className="Best">
            <Mainimg />
            <h2>기획전</h2>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                style={{ border: 'none', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}
            >
                <Tab eventKey="home" title="진행 기획전">
                    <p>검색 결과가 없습니다.</p>
                </Tab>
                <Tab eventKey="profile" title="종료 기획전">
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
                        <ul style={{ width: '1500px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                            <li>
                                <img src="//hyungjimall.com/file_data/hyungjimall/gallery/2022/03/30/236e06ed2c2bda9b9a25676b74ee24ab.jpg" alt=" " style={{ cursor: 'pointer', with:'610px',height:'340px' }} />
                                <h4 style={{ padding: '15px 0 50px 0',fontSize:'16px' }}>올리비아 하슬러, 22SS 겨울 신상 컬렉션!</h4>
                            </li>
                            <li>
                                <img src="//hyungjimall.com/file_data/hyungjimall/gallery/2022/03/30/623ebe9597b4a2446dcce39e4c364bf2.jpg" alt=" " style={{ cursor: 'pointer', with:'610px',height:'340px'  }} />
                                <h4 style={{ padding: '15px 0 50px 0',fontSize:'16px' }}>샤트렌, 22FW 겨울 신상 컬렉션!</h4>
                            </li>
                            <li>
                                <img src="//hyungjimall.com/file_data/hyungjimall/gallery/2022/03/30/48a68e5a0ed576033998e99e7e6b14cb.jpg" alt=" " style={{ cursor: 'pointer', with:'610px',height:'340px'  }} />
                                <h4 style={{ padding: '15px 0 0 0',fontSize:'16px' }}>크로커다일레이디, 22SS 겨울 신상 컬렉션!</h4>
                            </li>
                            <li>
                                <img src="//hyungjimall.com/file_data/hyungjimall/gallery/2021/11/15/a7583e590271e6b24605b1b217bbe5a6.jpg" alt=" " style={{ cursor: 'pointer', with:'610px',height:'340px'  }} />
                                <h4 style={{ padding: '15px 0 0 0',fontSize:'16px' }}>형지 소설제(小雪祭)</h4>
                            </li>
                        </ul>
                    </div>
                </Tab>
            </Tabs>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <a href=" " style={{ padding: '0 0 0 20px', margin: 0 }}><img src="https://hyungjimall.com/img/btn_page_prev.png" alt=" " /></a>
                <ol style={{ padding: '0 20px 0 20px', margin: 0 }}>
                    <li><a href=" " style={{
                        color: '#f1592a', fontSize: '20px',
                        lineHeight: '20px', paddingBottom: '10px', borderBottom: '1px solid #f1592a',
                        display: 'block', width: '17px', textAlign: 'center'
                    }}>1</a></li>
                </ol>
                <a href=" " style={{ padding: '0 20px 0 0', margin: 0 }}><img src="https://hyungjimall.com/img/btn_page_next.png" alt=" " /></a>
            </div>
        </div >
    )
};

export default Plan;