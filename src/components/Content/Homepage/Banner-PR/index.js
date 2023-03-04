import React, { useState, useEffect } from 'react';

const Index = () => {
    const [BannerPr, setBannerPr] = useState(
        [
            {
                url: "",
                src:"//theme.hstatic.net/1000026716/1000440777/14/xxxbanner1.jpg?v=34252"
            },
            {
                url: "",
                src:"//theme.hstatic.net/1000026716/1000440777/14/xxxbanner2.jpg?v=34252"
            },
            {
                url: "",
                src:"//theme.hstatic.net/1000026716/1000440777/14/xxxbanner3.jpg?v=34252"
            },
            {
                url: "",
                src:"//theme.hstatic.net/1000026716/1000440777/14/xxxbanner4.jpg?v=34252"
            },
        ]
    )
    return (
        <div className=" gearvn-content-section i100 mb-10" id="xxx-banner">
            <div className="row row-margin-small">
                {BannerPr.map((item,index) => {
                    return <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-10 col-padding-small" key={index}>
                    <div className="border-rus" >
                        <a href={item.url}>
                            <img src={item.src} />
                        </a>
                    </div>
                </div>
                })}
            </div>
        </div>
    );
}

export default Index;
