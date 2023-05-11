import HeaderSale from 'components/Header/Header-sale';
import React, {useState} from 'react';
import 'assets/scss/Header/Header-showroom.scss'
import BannerShowroom from './Banner'
import SouthShowroom from './South'
import NorthShowroom from './North'
import ServicesShowroom from './Services-center'
import { NavLink } from 'react-router-dom';
const Index = () => {
    const [choose, setChoose] = useState(0)
    const chooseLocation = (value) => {
        setChoose(value)
    }
    return (
        <div className="laid-wraper" data-padding-top-id="SECTION636" data-scroll-padding-top={70} style={{ paddingTop: '70px' }}>
            <HeaderSale/>
            <BannerShowroom />
            <div id="SECTION114" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container" />
            </div>
            <div id="CHONKHUVUC" className="laid-section">
                <div className="laid-section-background" />
                <div className="laid-container">
                    <div data-action="true" id="GROUP265" className="laid-element" onClick={() => chooseLocation(1)}>
                        <div className="laid-group">
                            <div id="BUTTON241" className="laid-element">
                                <div className="laid-button">
                                    <div className="laid-button-background" />
                                    <div id="BUTTON_TEXT241" className="laid-element laid-button-headline">
                                        <p className="laid-headline">
                                            KHU VỰC MIỀN NAM</p>
                                    </div>
                                </div>
                            </div>
                            <div id="IMAGE250" className="laid-element">
                                <div className="laid-image">
                                    <div className="laid-image-background" />
                                </div>
                            </div>
                            <div id="BOX253" className="laid-element">
                                <div className="laid-box laid-transition" />
                            </div>
                        </div>
                    </div>
                    <div data-action="true" id="GROUP266" className="laid-element" onClick={() => chooseLocation(2)}>
                        <div className="laid-group">
                            <div id="BUTTON267" className="laid-element">
                                <div className="laid-button">
                                    <div className="laid-button-background" />
                                    <div id="BUTTON_TEXT267" className="laid-element laid-button-headline">
                                        <p className="laid-headline">
                                            KHU VỰC MIỀN BẮC</p>
                                    </div>
                                </div>
                            </div>
                            <div id="IMAGE269" className="laid-element">
                                <div className="laid-image">
                                    <div className="laid-image-background" />
                                </div>
                            </div>
                            <div id="BOX270" className="laid-element">
                                <div className="laid-box laid-transition" />
                            </div>
                        </div>
                    </div>
                    <div id="PARAGRAPH271" className="laid-element">
                        <div className="laid-paragraph">
                            CHỌN KHU VỰC CỦA BẠN</div>
                    </div>
                    <div data-action="true" id="GROUP284" className="laid-element" onClick={() => chooseLocation(3)}>
                        <div className="laid-group">
                            <div id="BUTTON285" className="laid-element">
                                <div className="laid-button">
                                    <div className="laid-button-background" />
                                    <div id="BUTTON_TEXT285" className="laid-element laid-button-headline">
                                        <p className="laid-headline">
                                            TRUNG TÂM BẢO HÀNH</p>
                                    </div>
                                </div>
                            </div>
                            <div id="IMAGE287" className="laid-element">
                                <div className="laid-image">
                                    <div className="laid-image-background" />
                                </div>
                            </div>
                            <div id="BOX288-SHOWROOM" className="laid-element">
                                <div className="laid-box laid-transition" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SouthShowroom choose={choose}/>
            <NorthShowroom choose={choose}/>
            <ServicesShowroom choose={choose}/>
            
            <div id="SECTION650" className="laid-section">
                <div className="laid-section-background laid-lazyload" />
                <div className="laid-container" />
            </div>
            <div id="SECTION745" className="laid-section">
                <div className="laid-section-background laid-lazyload" />
                <div className="laid-container">
                    <div id="HEADLINE746" className="laid-element">
                        <h4 className="laid-headline laid-lazyload">
                            GEARVN là doanh nghiệp chuyên cung cấp thiết bị, giải pháp về máy tính, thiết bị chơi game, thiết bị công nghệ cao cấp hàng đầu Việt Nam.</h4>
                    </div>
                    <div id="LINE748" className="laid-element">
                        <div className="laid-line">
                            <div className="laid-line-container" />
                        </div>
                    </div>
                    <div data-action="true" id="GROUP749" className="laid-element">
                        <div className="laid-group">
                            <div id="BOX750" className="laid-element">
                                <div className="laid-box laid-lazyload" />
                            </div>
                            <div id="SHAPE751" className="laid-element">
                                <div className="laid-shape">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1792 1896.0833" className fill="rgba(255, 255, 255, 1.0)">
                                        <path d="M1683 1331l-166 165q-19 19-45 19t-45-19L896 965l-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z" />
                                    </svg>
                                </div>
                            </div>
                            <div id="HEADLINE752" className="laid-element">
                                <h3 className="laid-headline laid-lazyload">
                                    Trở về đầu trang</h3>
                            </div>
                        </div>
                    </div>
                    <div id="HEADLINE753" className="laid-element">
                        <h4 className="laid-headline laid-lazyload">
                            Cộng đồng GEARVN</h4>
                    </div>
                    <div id="HEADLINE754" className="laid-element">
                        <h4 className="laid-headline laid-lazyload">
                            Hotline hỗ trợ khách hàng</h4>
                    </div>
                    <div id="HEADLINE755" className="laid-element">
                        <h4 className="laid-headline laid-lazyload">
                            Chính sách tại GEARVN</h4>
                    </div>
                    <a href="tel:18006975" id="PARAGRAPH756" className="laid-element">
                        <div className="laid-paragraph">
                            Gọi mua hàng:<br />
                        </div>
                    </a>
                    <a href="tel:18006975" id="PARAGRAPH757" className="laid-element">
                        <div className="laid-paragraph">
                            1800 6975<br />
                        </div>
                    </a>
                    <a href="tel:18006173" id="PARAGRAPH758" className="laid-element">
                        <div className="laid-paragraph">
                            1800 6173<br />
                        </div>
                    </a>
                    <a href="tel:18006173" id="PARAGRAPH759" className="laid-element">
                        <div className="laid-paragraph">
                            Gọi CSKH:<br />
                        </div>
                    </a>
                    <a href="tel:18006173" id="PARAGRAPH760" className="laid-element">
                        <div className="laid-paragraph">
                            1800 6173<br />
                        </div>
                    </a>
                    <a href="tel:18006173" id="PARAGRAPH761" className="laid-element">
                        <div className="laid-paragraph">
                            Gọi bảo hành:<br />
                        </div>
                    </a>
                    <a href="tel:18006173" id="PARAGRAPH762" className="laid-element">
                        <div className="laid-paragraph">
                            1800 6173<br />
                        </div>
                    </a>
                    <a href="tel:18006173" id="PARAGRAPH763" className="laid-element">
                        <div className="laid-paragraph">
                            Kỹ Thuật:<br />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/gearvnhcm" target="_blank" id="PARAGRAPH764" className="laid-element" data-replace-href="https://www.facebook.com/gearvnhcm">
                        <div className="laid-paragraph">
                            Fanpage GEARVN<br />
                        </div>
                    </a>
                    <a href="https://www.facebook.com/gearvnhcm" target="_blank" id="SHAPE765" className="laid-element" data-replace-href="https://www.facebook.com/gearvnhcm">
                        <div className="laid-shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1536 1896.0833" className fill="rgba(48, 128, 232, 1)">
                                <path d="M1248 128q119 0 203.5 84.5T1536 416v960q0 119-84.5 203.5T1248 1664h-188v-595h199l30-232h-229V689q0-56 23.5-84t91.5-28l122-1V369q-63-9-178-9-136 0-217.5 80T820 666v171H620v232h200v595H288q-119 0-203.5-84.5T0 1376V416q0-119 84.5-203.5T288 128h960z" />
                            </svg>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/groups/VietnamGamingConner" target="_blank" id="SHAPE766" className="laid-element" data-replace-href="https://www.facebook.com/groups/VietnamGamingConner">
                        <div className="laid-shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1920 1896.0833" className fill="rgba(48, 128, 232, 1)">
                                <path d="M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353 6 0 43.5 21t97.5 42.5T384 597q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5 62-81 85.5-53.5T602 960q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181T384 0t181 75 75 181zm704 384q0 159-112.5 271.5T960 1024 688.5 911.5 576 640t112.5-271.5T960 256t271.5 112.5T1344 640zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z" />
                            </svg>
                        </div>
                    </a>
                    <a href="https://www.facebook.com/groups/VietnamGamingConner" target="_blank" id="PARAGRAPH767" className="laid-element" data-replace-href="https://www.facebook.com/groups/VietnamGamingConner">
                        <div className="laid-paragraph">
                            VGC - Cộng đồng game thủ<br />
                        </div>
                    </a>
                    <NavLink to=""  id="SHAPE768" className="laid-element" data-replace-href="https://gvn360.com/">
                        <div className="laid-shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 24 24" className fill="rgba(232, 104, 48, 1)">
                                <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                            </svg>
                        </div>
                    </NavLink>
                    <NavLink to=""  id="PARAGRAPH769" className="laid-element" data-replace-href="https://gvn360.com/">
                        <div className="laid-paragraph">
                            GVN360 - Tin tức công nghệ<br />
                        </div>
                    </NavLink>
                    <a href="https://www.youtube.com/channel/UCdxRpD_T4-HzPsely-Fcezw" target="_blank" id="SHAPE770" className="laid-element" data-replace-href="https://www.youtube.com/channel/UCdxRpD_T4-HzPsely-Fcezw">
                        <div className="laid-shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 24 24" className fill="rgba(235, 39, 39, 1)">
                                <path d="M10,16.5V7.5L16,12M20,4.4C19.4,4.2 15.7,4 12,4C8.3,4 4.6,4.19 4,4.38C2.44,4.9 2,8.4 2,12C2,15.59 2.44,19.1 4,19.61C4.6,19.81 8.3,20 12,20C15.7,20 19.4,19.81 20,19.61C21.56,19.1 22,15.59 22,12C22,8.4 21.56,4.91 20,4.4Z" />
                            </svg>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCdxRpD_T4-HzPsely-Fcezw" target="_blank" id="PARAGRAPH771" className="laid-element" data-replace-href="https://www.youtube.com/channel/UCdxRpD_T4-HzPsely-Fcezw">
                        <div className="laid-paragraph">
                            Kênh Youtube GEARVN<br />
                        </div>
                    </a>
                    <NavLink to="" id="SHAPE772" className="laid-element" data-replace-href="https://tuyendung.gearvn.com/">
                        <div className="laid-shape">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1792 1896.0833" className fill="rgba(235, 39, 39, 1)">
                                <path d="M640 256h512V128H640v128zm1152 640v480q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V896h672v160q0 26 19 45t45 19h320q26 0 45-19t19-45V896h672zm-768 0v128H768V896h256zm768-480v384H0V416q0-66 47-113t113-47h352V96q0-40 28-68t68-28h576q40 0 68 28t28 68v160h352q66 0 113 47t47 113z" />
                            </svg>
                        </div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH773" className="laid-element" data-replace-href="https://tuyendung.gearvn.com/">
                        <div className="laid-paragraph">
                            Kênh tuyển dụng<br />
                        </div>
                    </NavLink>
                    <NavLink to="" id="HEADLINE776" className="laid-element" data-replace-href="https://gearvn.com/pages/he-thong-showroom-gearvn">
                        <h4 className="laid-headline laid-lazyload">
                            Hệ thống chi nhánh</h4>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH777" className="laid-element" data-replace-href="https://gearvn.com/pages/he-thong-showroom-gearvn">
                        <div className="laid-paragraph">
                            Khu vực miền nam</div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH778" className="laid-element" data-replace-href="https://gearvn.com/pages/he-thong-showroom-gearvn">
                        <div className="laid-paragraph">
                            Khu vực miền bắc</div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH779" className="laid-element" data-replace-href="https://gearvn.com/pages/chinh-sach-bao-hanh">
                        <div className="laid-paragraph">
                            Chính sách bảo hành<br />
                        </div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH780" className="laid-element" data-replace-href="https://gearvn.com/pages/chinh-sach-giao-hang">
                        <div className="laid-paragraph">
                            Chính sách giao hàng<br />
                        </div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH781" className="laid-element" data-replace-href="https://gearvn.com/pages/chinh-sach-bao-mat">
                        <div className="laid-paragraph">
                            Chính sách bảo mật<br />
                        </div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH782" className="laid-element" data-replace-href="https://gearvn.com/pages/huong-dan-tra-gop">
                        <div className="laid-paragraph">
                            Hướng dẫn trả góp<br />
                        </div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH783" className="laid-element" data-replace-href="https://gearvn.com/pages/huong-dan-thanh-toan-gearvn">
                        <div className="laid-paragraph">
                            Hướng dẫn thanh toán<br />
                        </div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH784" className="laid-element" data-replace-href="https://gearvn.com/pages/khuyenmaigaminggear">
                        <div className="laid-paragraph">
                            Tổng hợp khuyến mãi<br />
                        </div>
                    </NavLink>
                    <NavLink to="" id="PARAGRAPH785" className="laid-element" data-replace-href="https://gearvn.com/pages/he-thong-showroom-gearvn">
                        <div className="laid-paragraph">
                            Trung tâm bảo hành</div>
                    </NavLink>
                </div>
            </div>
            <div id="SECTION886" className="laid-section">
                <div className="laid-section-background laid-lazyload" />
                <div className="laid-container">
                    <NavLink to="" id="IMAGE887" className="laid-element" data-replace-href="https://gearvn.com/pages/chuong-trinh-tet">
                        <div className="laid-image">
                            <div className="laid-image-background laid-lazyload" />
                        </div>
                    </NavLink>
                </div>
            </div>
            <div id="SECTION_POPUP" className="laid-section">
                <div className="laid-section-background laid-lazyload" />
                <div className="laid-container" />
            </div>
        </div>

    );
}

export default Index;
