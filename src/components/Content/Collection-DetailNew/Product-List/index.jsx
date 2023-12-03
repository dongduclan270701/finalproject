import React from 'react';
import { NavLink } from 'react-router-dom';
const Index = (props) => {
    const { item } = props
    const formatter = new Intl.NumberFormat('en-US')
    return (
        <div className='col-md-3 mt-4 mb-4 goods-single'>
            <div className='goods-card'>
                <div className='goods-single-content'>
                    <img src={item.img[0]} alt='' />
                    <h1 style={{ fontSize: 13, marginLeft: 10, marginRight: 10 }}>{item.nameProduct}</h1>
                    <h1 style={{ fontSize: 13 }}>{formatter.format(item.nowPrice)} VNĐ</h1>
                    <NavLink to={'/products/' + item.collection + '/' + item.src}><button type='button'>See more</button></NavLink>
                </div>
            </div>
        </div>
    );
}

export default Index;
