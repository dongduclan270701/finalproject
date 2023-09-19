import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import BannerSlide from './Banner-slide'
import Banner from './Banner'
import TopLaptopGaming from './Top-laptopGaming'
import TopLaptopCompany from './Top-laptopCompany'
import TopMouse from './Top-Mouse'
import TopKeyboard from './Top-Keyboard'
import TopMonitor from './Top-Monitor'
import ads1 from 'assets/images/banner-ads1.webp'
import ads2 from 'assets/images/banner-ads2.webp'
import ads3 from 'assets/images/banner-ads3.webp'
import 'assets/scss/Content/Homepage/homepage.css'
import { fetchBestLaptop } from 'Apis'
const Index = () => {
    const [laptop, setLaptop] = useState()
    useEffect(() => {
        fetchBestLaptop()
            .then(result => {
                setLaptop(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    return (
        <div className="homepage">
            <BannerSlide />
            <Banner />

            <div className='title'>Laptop Gaming - Best Selling</div>
            <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
            <hr />

            <TopLaptopGaming />

            <div className='title'>Laptop Company - Best Selling</div>
            <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
            <hr />

            <TopLaptopCompany laptop={laptop} />

            <div className='title'>PC Gaming - Best Selling</div>
            <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
            <hr />

            <TopMouse />

            <div className='title'>PC Creator - Best Selling</div>
            <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
            <hr />

            <TopMouse />

            <div className='title'>Apple- Best Selling</div>
            <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
            <hr />

            <TopMouse />

            <div className='title'>Mouse - Best Selling</div>
            <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
            <hr />

            <TopMouse />

            <div className='title'>Keyboard - Best Selling</div>
            <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
            <hr />

            <TopKeyboard />

            <div className='title'>Monitor - Best Selling</div>
            <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
            <hr />

            <TopMonitor />
            <div className='row d-flex goods'>
                <div className='col-md-8 mt-4 mb-4 goods-single'>
                    <div className='goods-single-content'>
                        <img src={ads1} alt='ads' style={{ width: "100%" }} />
                    </div>
                </div>
                <div className='col-md-4 mt-4 mb-4 goods-single'>
                    <div className='row d-flex ads'>
                        <div className='col-md-12 mb-2 ads-single'>
                            <div className='ads-single-content'>
                                <img src={ads2} alt='ads' style={{ width: "100%" }} />
                            </div>
                        </div>
                        <div className='col-md-12 mt-2 ads-single'>
                            <div className='ads-single-content'>
                                <img src={ads3} alt='ads' style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
