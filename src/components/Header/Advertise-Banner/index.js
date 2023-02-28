import React, { useState, useEffect } from 'react';

const Index = () => {
    const [Image, setImage] = useState([
        'url(//theme.hstatic.net/1000026716/1000440777/14/bn-top1.jpg?v=34146) ,#262d53',
        'url(//theme.hstatic.net/1000026716/1000440777/14/bn-top2.jpg?v=34146) , #003333',
        'url(//theme.hstatic.net/1000026716/1000440777/14/bn-top3.jpg?v=34146) ,#eff6ff',
        'url(//theme.hstatic.net/1000026716/1000440777/14/bn-top4.jpg?v=34146) ,#9c0f0a'
    ])
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 150) {
            setVisible(true)
        }
        else if (scrolled <= 150) {
            setVisible(false)
        }
    };
    window.addEventListener('scroll', toggleVisible);
    useEffect(() => {
        const changeImage = setInterval(() => {
            if (number <= 2) {
                setNumber(number => number + 1)
            }if(number === 3){
                setNumber(0)
            }
        }, 2000);
        return () => clearInterval(changeImage);
    }, [number]);


    useEffect(() => {
    }, []);
    return (
        <div className={visible ? "gearvn-top-banner-block fixed" : "gearvn-top-banner-block"}>
            <a href="https://gearvn.com/pages/chuong-trinh-tet">
                <div className="gearvn-top-banner oktr" style={{ background: Image[number] }}>
                </div>
            </a>
        </div>
    );
}

export default Index;
