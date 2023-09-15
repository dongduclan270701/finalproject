import React from 'react';
import goods2 from 'assets/images/gigabyte.webp';

const Index = () => {
    return (
        <>
            <div className='row d-flex goods'>
                <div className='col-md-3 mt-4 mb-4 goods-single'>
                    <div className='goods-card'>
                        <div className='goods-single-content'>
                            <img src={goods2} alt='' />
                            <h1 style={{ fontSize: 13 }}>Laptop Gaming ASUS AOGLIFE MD2032</h1>
                            <h1 style={{ fontSize: 13 }}>20,000,000 VNĐ</h1>
                            <button type='button'>Show</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-4 mb-4 goods-single'>
                    <div className='goods-card'>
                        <div className='goods-single-content'>
                            <img src={goods2} alt='' />
                            <h1 style={{ fontSize: 13 }}>Laptop Gaming ASUS AOGLIFE MD2032</h1>
                            <h1 style={{ fontSize: 13 }}>20,000,000 VNĐ</h1>
                            <button type='button'>Show</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-4 mb-4 goods-single'>
                    <div className='goods-card'>
                        <div className='goods-single-content'>
                            <img src={goods2} alt='' />
                            <h1 style={{ fontSize: 13 }}>Laptop Gaming ASUS AOGLIFE MD2032</h1>
                            <h1 style={{ fontSize: 13 }}>20,000,000 VNĐ</h1>
                            <button type='button'>Show</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-4 mb-4 goods-single'>
                    <div className='goods-card'>
                        <div className='goods-single-content'>
                            <img src={goods2} alt='' />
                            <h1 style={{ fontSize: 13 }}>Laptop Gaming ASUS AOGLIFE MD2032</h1>
                            <h1 style={{ fontSize: 13 }}>20,000,000 VNĐ</h1>
                            <button type='button'>Show</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button-show'>
                <button type='button'>Show All</button>
            </div>
        </>
    );
}

export default Index;
