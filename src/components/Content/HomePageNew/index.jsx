import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import BannerSlide from './Banner-slide'
import Banner from './Banner'
import TopLaptopGaming from './Top-laptopGaming'
import TopLaptopCompany from './Top-laptopCompany'
import TopApple from './Top-apple'
import TopPcCreator from './Top-pcCreator'
import TopPcGaming from './Top-pcGaming'
import TopPcCompany from './Top-pcCompany'
import ads1 from 'assets/images/banner-ads1.webp'
import ads2 from 'assets/images/banner-ads2.webp'
import ads3 from 'assets/images/banner-ads3.webp'
import 'assets/scss/Content/Homepage/homepage.css'
import { fetchBestLaptop } from 'Apis'
const Index = () => {
    const [laptop, setLaptop] = useState(null)
    const [laptopGaming, setLaptopGaming] = useState(null)
    const [pcGaming, setPcGaming] = useState(null)
    const [pcCreator, setPcCreator] = useState(null)
    const [pcCompany, setPcCompany] = useState(null)
    const [apple, setApple] = useState(null)
    useEffect(() => {
        fetchBestLaptop()
            .then(result => {
                setLaptopGaming(result.resultBestLaptopGaming)
                setLaptop(result.resultBestLaptop)
                setPcGaming(result.resultBestPcGaming)
                setPcCreator(result.resultBestPcCreator)
                setPcCompany(result.resultBestPcCompany)
                setApple(result.resultBestApple)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);
    return (
        <div className="homepage">
            <BannerSlide />
            <Banner />
            <div>
                <div className='title'>Laptop Gaming - Best Selling</div>
                <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
                <hr />

                <TopLaptopGaming laptopGaming={laptopGaming} />

                <div className='title'>Laptop Company - Best Selling</div>
                <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
                <hr />

                <TopLaptopCompany laptop={laptop} />

                <div className='title'>PC Gaming - Best Selling</div>
                <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
                <hr />

                <TopPcGaming pcGaming={pcGaming} />

                <div className='title'>PC Creator - Best Selling</div>
                <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
                <hr />

                <TopPcCreator pcCreator={pcCreator} />

                <div className='title'>PC Company- Best Selling</div>
                <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
                <hr />

                <TopPcCompany pcCompany={pcCompany} />

                <div className='title'>Apple- Best Selling</div>
                <div className='title-background'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </div>
                <hr />

                <TopApple apple={apple} />

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
        </div>
    );
}

export default Index;
