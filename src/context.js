import React, { createContext, useContext, useReducer } from "react";


const initItems = [
    {
        id: 1,
        src: 'http://hyungjimall.cafe24.com/web/product/big/HC/CM/HCCMBL803BE_01.jpg',
        best: 'BEST',
        number: '01',
        titleh: '샤트렌',
        title: '원버튼 카라 블라우스 HCCMBL803',
        price: '69,000',
        priceL: '138,000',
        priceR: '-50%',
    },
    {
        id: 2,
        src: '//hyungjimall.com/web/product/medium/202303/de0b2124aad2127d34ba3f2d17ade722.jpg',
        best: 'BEST',
        number: '02',
        titleh: '올리비아하슬러',
        title: '스트라이프 면 로브 원피스 OHAMOP706',
        price: '69,900',
        priceL: '199,900',
        priceR: '-64%',
    },
    {
        id: 3,
        src: 'http://hyungjimall.cafe24.com/web/product/big/OH/AM/OHAMOP703KH_01.jpg',
        best: 'BEST',
        number: '03',
        titleh: '올리비아하슬러',
        title: 'H라인 브이넥 롱원피스 OHAMOP703',
        price: '59,900',
        priceL: '199,000',
        priceR: '-69%',
    },
    {
        id: 4,
        src: '//hyungjimall.com/web/product/medium/202301/a0ec46ca4f20b45441c43986379cdec4.jpg',
        best: 'BEST',
        number: '04',
        titleh: '올리비아하슬러',
        title: '라이트 블루 워싱 데님 원피스 OHBMOP309',
        price: '119,700',
        priceL: '171,000',
        priceR: '-30%',
    },
    {
        id: 5,
        src: '//hyungjimall.com/web/product/medium/202301/704766e3192fc0dcc2b61479235a8ab4.jpg',
        best: 'BEST',
        number: '05',
        titleh: '올리비아하슬러',
        title: '5부 데님 린넨 원피스 OHBMOP209',
        price: '179,900',
        priceL: '257,000',
        priceR: '-30%',
    },
    {
        id: 6,
        src: 'http://hyungjimall.cafe24.com/web/product/big/HC/AM/HCAMJK401BK_01.jpg',
        best: 'BEST',
        number: '06',
        titleh: '샤트렌',
        title: '체크라인 정장자켓 HCAMJK401',
        price: '439,000',
        priceL: '439,000',
    },
    {
        id: 7,
        src: 'http://hyungjimall.cafe24.com/web/product/big/OH/CS/OHCSCT102KH_01.jpg',
        best: 'BEST',
        number: '07',
        titleh: '올리비아하슬러',
        title: '스트랩 포인트 클래식 코트 OHCSCT102',
        price: '219,800',
        priceL: '314,000',
        priceR: '-30%',
    },
    {
        id: 8,
        src: 'http://hyungjimall.cafe24.com/web/product/big/OH/CS/OHCSTS102NY_01.jpg',
        best: 'BEST',
        number: '08',
        titleh: '올리비아하슬러',
        title: '스트라이프 밑트임 티셔츠 OHCSTS102',
        price: '79,800',
        priceL: '114,000',
        priceR: '-30%',
    },
    {
        id: 9,
        src: 'https://hyungjimall.cafe24.com/web/product/big/main/CLAWPD102.jpg',
        best: 'BEST',
        number: '01',
        titleh: '크로커다일레이디',
        title: '오버핏 방한 후드 롱 패딩_CLAWPD102',
        price: '142,500',
        priceL: '285,000',
        priceR: '-50%',
        brand1: true
    },
    {
        id: 10,
        src: 'https://hyungjimall.cafe24.com/web/product/big/main/CLAWCT105.jpg',
        best: 'BEST',
        number: '02',
        titleh: '크로커다일레이디',
        title: '울 혼방 후드 체크코트_CLAWCT105',
        price: '199,500',
        priceL: '399,000',
        priceR: '-50%',
        brand1: true
    },
    {
        id: 11,
        src: 'https://www.lesportsackorea.com:447/data/productimages/a/3/8056U256.jpg',
        best: 'BEST',
        number: '01',
        titleh: '크로커다일레이디',
        title: '울 혼방 후드 체크코트_CLAWCT105',
        price: '199,500',
        priceL: '399,000',
        priceR: '-50%',
    },
    {
        id: 12,
        src: 'https://www.lesportsackorea.com:447/data/productimages/b/3/3747U256.jpg',
        best: 'BEST',
        number: '02',
        titleh: '크로커다일레이디',
        title: '울 혼방 후드 체크코트_CLAWCT105',
        price: '199,500',
        priceL: '399,000',
        priceR: '-50%',
    },
    {
        id: 13,
        src: 'https://www.lesportsackorea.com:447/data/productimages/a/3/2296C387.jpg',
        best: 'BEST',
        number: '04',
        titleh: '크로커다일레이디',
        title: '울 혼방 후드 체크코트_CLAWCT105',
        price: '199,500',
        priceL: '399,000',
        priceR: '-50%',
    },
    {
        id: 14,
        src: 'https://www.lesportsackorea.com:447/data/productimages/a/3/2273C387.jpg',
        best: 'BEST',
        number: '05',
        titleh: '크로커다일레이디',
        title: '울 혼방 후드 체크코트_CLAWCT105',
        price: '199,500',
        priceL: '399,000',
        priceR: '-50%',
    },
    {
        id: 15,
        src: 'https://www.lesportsackorea.com:447/data/productimages/a/3/7121E877.jpg',
        best: 'BEST',
        number: '06',
        titleh: '크로커다일레이디',
        title: '울 혼방 후드 체크코트_CLAWCT105',
        price: '199,500',
        priceL: '399,000',
        priceR: '-50%',
    },
    {
        id: 16,
        src: 'https://www.lesportsackorea.com:447/data/productimages/a/3/3714E877.jpg',
        best: 'BEST',
        number: '07',
        titleh: '크로커다일레이디',
        title: '울 혼방 후드 체크코트_CLAWCT105',
        price: '199,500',
        priceL: '399,000',
        priceR: '-50%'
    },

]


function itemReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);

        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo);

        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);

        default:
            throw new Error(`${action.type}이 잘못 전달됨`)
    };
}

const ItemStateContext = createContext();

export function ItemProvider({ children }) {
    const [state, dispatch] = useReducer(itemReducer, initItems);

    return (
        <ItemStateContext.Provider value={dispatch}>
            <ItemStateContext.Provider value={state}>
                {children}
            </ItemStateContext.Provider>
        </ItemStateContext.Provider>
    )
}

export function useItemState() {
    const context = useContext(ItemStateContext);
    if (!context) {
        throw new Error('temStateContext를 찾을 수 없음')
    }
    return context;
}
