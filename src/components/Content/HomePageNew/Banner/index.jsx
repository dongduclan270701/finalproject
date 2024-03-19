import React from 'react';
import ads4 from 'assets/images/banner-ads4.png'
import ads5 from 'assets/images/banner-ads5.png'
import ads6 from 'assets/images/banner-ads6.png'
const Index = () => {
    return (
        <div className='row d-flex banner'>
            <div className='col-md-4 mt-4 mb-4 banner-single'>
                <div className='banner-single-content'>
                    <img src={ads4} alt='ads' style={{width:"100%",borderRadius:15}}/>
                </div>
            </div>
            <div className='col-md-4 mt-4 mb-4 banner-single'>
                <div className='banner-single-content'>
                    <img src={ads5} alt='ads' style={{width:"100%",borderRadius:15}}/>
                </div>
            </div>
            <div className='col-md-4 mt-4 mb-4 banner-single'>
                <div className='banner-single-content'>
                    <img src={ads6} alt='ads' style={{width:"100%",borderRadius:15}}/>
                </div>
            </div>
        </div>
    );
}

export default Index;
