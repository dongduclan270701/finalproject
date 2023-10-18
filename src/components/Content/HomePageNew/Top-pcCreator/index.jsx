import React from 'react';
import goods2 from 'assets/images/gigabyte.webp';
import { NavLink } from 'react-router-dom';
const Index = (props) => {
    const formatter = new Intl.NumberFormat('en-US')
    const { pcCreator } = props
    return (
        <>
            <div className='row d-flex goods'>
            {pcCreator ? pcCreator.map((item, index) => {
                    return <div key={index} className='col-md-3 mt-4 mb-4 goods-single'>
                        <div className='goods-card'>
                            <div className='goods-single-content'>
                                <img src={item.img[0]} alt='' />
                                <h1 style={{ fontSize: 13, marginLeft:5, marginRight:5 }}>{item.nameProduct}</h1>
                                <h1 style={{ fontSize: 13 }}>{formatter.format(item.nowPrice)} VNĐ</h1>
                                <NavLink to={'/products/' + item.collection + '/' + item.src}><button type='button'>See more</button></NavLink>
                            </div>
                        </div>
                    </div>
                }) : null}
            </div>
        </>
    );
}

export default Index;
