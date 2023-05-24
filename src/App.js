import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { ItemProvider } from './context';

import Main from './Main';
import Kategorie from './components/Kategorie';
import Best from './components/Best';
import Product from './components/Product';
import Plan from './components/Plan';
import Contactus from './components/Contactus';

function App() {
  return (
    <>
      <ItemProvider>
        <div className='header'>
          <div className='header_in'>
            <div className='logo'>
              <Link to='/'><img src={require('./images/logo.png')} alt='#' /></Link>
            </div>
            <div className='nav'>
              <ul>
                <li><Link to="/components/Kategorie">카테고리</Link></li>
                <li><Link to="/components/Best">Best</Link></li>
                <li><Link to="/components/Product">신상품</Link></li>
                <li><Link to="/components/Plan">기획전</Link></li>
                <li><Link to="/components/Contactus">CONTACT US</Link></li>
              </ul>
            </div>
            <div className='icon'>
              <ul>
                <li>
                  <Link to="/"><img src={require('./images/gnb-icon02.png')} alt='#' style={{ padding: '0 15px' }} /><span>마이페이지</span></Link>
                </li>
                <li>
                  <Link to="/"><img src={require('./images/gnb-icon03.png')} alt='#' /><span>주문조회</span></Link>
                </li>
                <li>
                  <Link to="/"><img src={require('./images/gnb-icon04.png')} alt='#' /><span>장바구니</span></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Route path="/" exact={true} component={Main}></Route>
          <Route path="/components/Kategorie" component={Kategorie}></Route>
          <Route path="/components/Best" component={Best}></Route>
          <Route path="/components/Product" component={Product}></Route>
          <Route path="/components/Plan" component={Plan}></Route>
          <Route path="/components/Contactus" component={Contactus}></Route>
        </div>
      </ItemProvider>
    </>
  );
}

export default App;
