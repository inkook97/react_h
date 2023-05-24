import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Mainimg() {
    return (
        <div className="mainimg" style={{ width: '100%', height: '780px'}}>
            <Carousel>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '780px' }}>
                        <img src={require('./images/Main1.png')} alt='#' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '780px' }}>
                        <img src={require('./images/Main2.png')} alt='#' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '780px' }}>
                        <img src={require('./images/Main3.png')} alt='#' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: '100%', height: '780px' }}>
                        <img src={require('./images/Main4.png')} alt='#' />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Mainimg;