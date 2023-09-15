import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'assets/scss/Content/Homepage/homepage.css'
const Index = () => {
    const [imgBanner, setImageBanner] = useState(
        [
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_3.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_7.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_8.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_9.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_10.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_11.jpg?v=34252" },
        ]
    )
    return (
        <div className="slider-wrap">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <NavLink to={imgBanner[0].url}>
                            <img className="d-block w-100" src={imgBanner[0].src} alt="..." />
                        </NavLink>
                    </div>
                    {imgBanner.slice(-13).map((item, index) => {
                        return <div class="carousel-item" key={index}>
                            <NavLink to={item.url}>
                                <img className="d-block w-100" src={item.src} alt="..." />
                            </NavLink>
                        </div>
                    })}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Index;
