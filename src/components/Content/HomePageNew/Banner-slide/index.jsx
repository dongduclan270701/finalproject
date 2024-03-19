import React from 'react';
import { NavLink } from 'react-router-dom';
import 'assets/scss/Content/Homepage/homepage.css'
const Index = () => {
    const imgBanner = [
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_3.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_7.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_8.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_9.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_10.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_11.jpg?v=34252" },
        ]
    
    return (
        <div className="slider-wrap row d-flex banner" style={{padding:'0 15px'}}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                </ol>
                <div className="carousel-inner" style={{ borderRadius:'15px'}}>
                    <div className="carousel-item active">
                        <NavLink to={imgBanner[0].url}>
                            <img className="d-block w-100" src={imgBanner[0].src} alt="..." />
                        </NavLink>
                    </div>
                    {imgBanner.slice(-13).map((item, index) => {
                        return <div className="carousel-item" key={index}>
                            <NavLink to={item.url}>
                                <img className="d-block w-100" src={item.src} alt="..." />
                            </NavLink>
                        </div>
                    })}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Index;
