import React from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {
    return (
        <div id="SECTION3" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container">
                    <NavLink to="" id="IMAGE4" className="laid-element" data-replace-href="https://gearvn.com/">
                        <div className="laid-image">
                            <div className="laid-image-background" />
                        </div>
                    </NavLink>
                    <div data-action="true" id="SHAPE5" className="laid-element">
                        <div className="laid-shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 24 24" className fill="rgba(37, 57, 101, 1)">
                                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                            </svg>
                        </div>
                    </div>
                    <div id="FRAME6" className="laid-element">
                        <div className="laid-frame">
                            <div className="laid-frame-background" />
                            <NavLink to="" id="HEADLINE8" className="laid-element" data-replace-href="https://gearvn.com/">
                                <h3 className="laid-headline laid-transition">
                                    Trang chủ</h3>
                            </NavLink>
                            <NavLink to="" id="HEADLINE9" className="laid-element" data-replace-href="https://news.gearvn.com/">
                                <h3 className="laid-headline laid-transition">
                                    Tin tức công nghệ</h3>
                            </NavLink>
                            <NavLink to="" id="HEADLINE10" className="laid-element" data-replace-href="https://gearvn.com/pages/chinh-sach-bao-hanh">
                                <h3 className="laid-headline laid-transition">
                                    Bảo hành</h3>
                            </NavLink>
                            <NavLink to="" id="HEADLINE11" className="laid-element" data-replace-href="https://tuyendung.gearvn.com/">
                                <h3 className="laid-headline laid-transition">
                                    Tuyển dụng</h3>
                            </NavLink>
                            <div data-action="true" id="HEADLINE12" className="laid-element">
                                <h3 className="laid-headline laid-transition">
                                    Liên hệ</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Index;
