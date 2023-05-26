import React from "react";
import Mainimg from "../Mainimg";
import { useItemState } from "../context";

function ProductItem({ item }) {
    if (item.id > 8) {
        return (
            <div>
                <div>
                    <span>{item.best}</span>
                    <span>{item.number}</span>
                </div>
                <img src={item.src} alt=" " />
                <p>{item.titleh}</p>
                <h4>{item.title}</h4>
                <p>{item.price}<em style={{fontSize: '60%', paddingRight: '10px', fontStyle:'normal'}}>원</em>
                <span className="saleL">{item.priceL}</span><em style={{fontSize: '30%', paddingRight: '10px', fontStyle:'normal', color:'#b6b6b6'}}>원</em>
                <span className="saleR">{item.priceR}</span></p>
            </div>
        )
    }
}


function Product() {
    const items = useItemState()
    return (
        <div className="Best">
            <Mainimg/>
            <h2>신상품</h2>
            <p>새로운 트렌드의 시작</p>
            <div className="items">
                        {items.map((item) => (
                            <ProductItem item={item} key={item.id} />
                        ))}
                    </div>
                    <div style={{width: '100%', display:'flex',justifyContent:'center', marginTop: '200px'}}>
                        <a href=" ">
                            <img src="https://hyungjimall.com/img/btn_page_prev.png" alt=" " />
                            <img src="https://hyungjimall.com/img/btn_page_prev.png" alt=" " />
                            </a>
                            <a href=" " style={{padding: '0 0 0 20px', margin: 0}}><img src="https://hyungjimall.com/img/btn_page_prev.png" alt=" " /></a>
                            <ol style={{padding: '0 20px 0 20px', margin: 0}}>
                                <li><a href=" " style={{ color: '#f1592a', fontSize:'20px', 
                                lineHeight:'20px', paddingBottom: '10px',borderBottom: '1px solid #f1592a',
                                display:'block',width: '17px',textAlign: 'center'}}>1</a></li>
                            </ol>
                            <a href=" " style={{padding: '0 20px 0 0', margin: 0}}><img src="https://hyungjimall.com/img/btn_page_next.png" alt=" " /></a>
                            <a href=" ">
                                <img src="https://hyungjimall.com/img/btn_page_next.png" alt=" " />
                                <img src="https://hyungjimall.com/img/btn_page_next.png" alt=" " />
                            </a>
                    </div>
        </div>
    )
};

export default Product;