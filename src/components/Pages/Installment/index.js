import HeaderSale from 'components/Header/Header-sale';
import React from 'react';
import 'assets/scss/Header/Header-installment.scss'
import FooterProductSale from 'components/Footer/Footer-product-sale';
import BannerInstallment from './Banner'
import InstallmentOne from './Inst-one'
import { NavLink } from 'react-router-dom';
const Index = () => {
    return (
        <div className="ladi-wraper" data-padding-top-id="HEADER" data-scroll-padding-top={70} style={{ paddingTop: '70px' }}>
            <HeaderSale/>
            <BannerInstallment />
            <InstallmentOne />
            <div id="SECTION424" className="ladi-section">
                <div className="ladi-section-background ladi-lazyload" />
                <div className="ladi-container">
                    <div id="HEADLINE426" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            2. Trả góp qua thẻ tín dụng MPOS</h3>
                    </div>
                    <div id="HEADLINE427" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            A. Áp dụng</h3>
                    </div>
                    <div id="PARAGRAPH428" className="ladi-element">
                        <div className="ladi-paragraph">
                            • Khách hàng có nhu cầu mua sản phẩm tại GEARVN và trả góp qua thẻ tín dụng với giá trị đơn hàng từ 3.000.000 vnđ trở lên (sau khi trừ các khuyến mại).
                            <br />
                            • Khách hàng vẫn nhận đủ các chương trình khuyến mãi mà GEARVN đang áp dụng đối với từng sản phẩm.<br />
                        </div>
                    </div>
                    <div id="HEADLINE429" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            B. Điều kiện</h3>
                    </div>
                    <div id="PARAGRAPH430" className="ladi-element">
                        <div className="ladi-paragraph">
                            • Khách hàng cần chuẩn bị CMND/CCCD + thẻ tín dụng (cả 2 đều phải chính chủ).
                            <br />
                            • Hạn mức thẻ tín dụng cần phải lớn hơn tổng số tiền của đơn hàng và phí chuyển đổi trả góp (tùy theo kỳ hạn và ngân hàng phát hành thẻ theo bảng bên dưới).
                            <br />
                            • Khách hàng có thể chọn trả góp toàn bộ giá trị đơn hàng
                            <br />
                            hoặc trả góp một phần giá trị đơn hàng.
                            <br />
                            • Đối với một số sản phẩm, khách hàng phải tiến hành<br />
                            đặt cọc theo quy định của GEARVN.<br />
                        </div>
                    </div>
                    <div id="HEADLINE431" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            C. Hình thức đăng ký</h3>
                    </div>
                    <div id="GROUP453" className="ladi-element">
                        <div className="ladi-group">
                            <div id="BOX452" className="ladi-element">
                                <div className="ladi-box ladi-lazyload" />
                            </div>
                            <div id="IMAGE445" className="ladi-element">
                                <div className="ladi-image">
                                    <div className="ladi-image-background ladi-lazyload" />
                                </div>
                            </div>
                            <div id="LINE446" className="ladi-element">
                                <div className="ladi-line">
                                    <div className="ladi-line-container" />
                                </div>
                            </div>
                            <div id="PARAGRAPH449" className="ladi-element">
                                <div className="ladi-paragraph">
                                    Khách hàng liên hệ GEARVN qua Hotline 1800.6975 để được tư vấn sản phẩm, đặt hàng, nhận sản phẩm và thực hiện thanh toán trả góp tại nhà.<br />
                                </div>
                            </div>
                            <div id="HEADLINE450" className="ladi-element">
                                <h3 className="ladi-headline ladi-lazyload">
                                    Cách 2: Đăng ký thông qua Hotline</h3>
                            </div>
                            <div id="PARAGRAPH434" className="ladi-element">
                                <div className="ladi-paragraph">
                                    Khách hàng tới Showroom GEARVN để được tư vấn sản phẩm, thực hiện thanh toán trả góp tại
                                    <br />
                                    Showroom và nhận sản phẩm.<br />
                                </div>
                            </div>
                            <div id="HEADLINE435" className="ladi-element">
                                <h3 className="ladi-headline ladi-lazyload">
                                    Cách 1: Đăng ký tại Showroom GEARVN</h3>
                            </div>
                            <div id="IMAGE451" className="ladi-element">
                                <div className="ladi-image">
                                    <div className="ladi-image-background ladi-lazyload" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="HEADLINE454" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            D. Danh sách ngân hàng hỗ trợ trả góp và kỳ hạn trả góp</h3>
                    </div>
                    <div data-action="true" id="IMAGE455" className="ladi-element">
                        <div className="ladi-image">
                            <div className="ladi-image-background ladi-lazyload" />
                        </div>
                    </div>
                    <div id="HEADLINE470" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            3. Hướng dẫn mua hàng trả góp tại GEARVN</h3>
                    </div>
                    <div id="VIDEO471" className="ladi-element">
                        <div className="ladi-video">
                            <div className="ladi-video-background ladi-lazyload" />
                            <div id="SHAPE471" className="ladi-element">
                                <div className="ladi-shape">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 408.7 408.7" fill="rgba(0, 0, 0, 0.5)">
                                        <polygon fill="#fff" points="163.5 296.3 286.1 204.3 163.5 112.4 163.5 296.3" />
                                        <path d="M204.3,0C91.5,0,0,91.5,0,204.3S91.5,408.7,204.3,408.7s204.3-91.5,204.3-204.3S316.7,0,204.3,0ZM163.5,296.3V112.4l122.6,91.9Z" transform="translate(0 0)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="IMAGE472" className="ladi-element">
                        <div className="ladi-image">
                            <div className="ladi-image-background ladi-lazyload" />
                        </div>
                    </div>
                    <div id="GROUP543" className="ladi-element">
                        <div className="ladi-group">
                            <div id="HEADLINE458" className="ladi-element">
                                <h3 className="ladi-headline ladi-lazyload">
                                    Ví dụ:</h3>
                            </div>
                            <div id="PARAGRAPH459" className="ladi-element">
                                <div className="ladi-paragraph">
                                    Khách hàng Nguyễn Văn A sử dụng thẻ tín dụng của <span style={{ fontWeight: 'bold' }}>
                                        ngân hàng Sacombank</span>
                                    và thanh toán trả góp toàn bộ giá trị của đơn hàng với số tiền&nbsp;<span style={{ fontWeight: 'bold' }}>
                                        27.000.000 VNĐ</span>
                                    , kỳ hạn trả góp trong <span style={{ fontWeight: 'bold' }}>
                                        9 tháng.</span>
                                    <br />
                                </div>
                            </div>
                            <div id="HEADLINE466" className="ladi-element">
                                <h3 className="ladi-headline ladi-lazyload">
                                    Ví dụ:</h3>
                            </div>
                            <div id="PARAGRAPH467" className="ladi-element">
                                <div className="ladi-paragraph">
                                    • Khách hàng không cần liên hệ đến ngân hàng để chuyển đổi giao dịch.
                                    <br />
                                    • (*) Maritime Bank: thu thêm phí chuyển đổi giao dịch trả góp 03% * giá trị giao dịch trên mọi kỳ hạn thanh toán và thu 1 lần khi chuyển đổi giao dịch.
                                    <br />
                                    • (**) FE Credit: thu thêm chủ thẻ như sau:<br />
                                </div>
                            </div>
                            <div id="IMAGE468" className="ladi-element">
                                <div className="ladi-image">
                                    <div className="ladi-image-background ladi-lazyload" />
                                </div>
                            </div>
                            <div id="PARAGRAPH469" className="ladi-element">
                                <div className="ladi-paragraph">
                                    Mức phí thu thêm được tính trên giá trị giao dịch và thu 1 lần duy nhất khi giao dịch được chuyển đổi trả góp thành công.<br />
                                </div>
                            </div>
                            <div id="GROUP476" className="ladi-element">
                                <div className="ladi-group">
                                    <div id="BOX463" className="ladi-element">
                                        <div className="ladi-box ladi-lazyload" />
                                    </div>
                                    <div id="PARAGRAPH460" className="ladi-element">
                                        <div className="ladi-paragraph">
                                            - Hạn mức thẻ cần có để thực hiện thanh toán
                                            <br />

                                            <br />
                                            - Số tiền khách hàng thanh toán mỗi tháng 28.350.000 / 9<br />
                                            <br />
                                            - Số tiền chênh lệch giữa mua hàng trả thẳng và trả góp<br />
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH461" className="ladi-element">
                                        <div className="ladi-paragraph">
                                            =<br />
                                            <br />
                                            =<br />
                                            <br />
                                            =<br />
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH462" className="ladi-element">
                                        <div className="ladi-paragraph">
                                            27.000.000 + 27.000.000 * 5% = 28.350.000 vnđ<br />
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH473" className="ladi-element">
                                        <div className="ladi-paragraph">
                                            3.150.000<br />
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH475" className="ladi-element">
                                        <div className="ladi-paragraph">
                                            1.350.000 vnđ<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="SECTION533" className="ladi-section">
                <div className="ladi-section-background ladi-lazyload" />
                <div className="ladi-container">
                    <div id="HEADLINE534" className="ladi-element">
                        <h3 className="ladi-headline ladi-lazyload">
                            GEARVN CHÂN THÀNH CẢM ƠN QUÝ KHÁCH&nbsp;</h3>
                    </div>
                </div>
            </div>
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="ladi-section">
                <div className="ladi-section-background ladi-lazyload" />
                <div className="ladi-container">
                    <div id="POPUP269" className="ladi-element ladi-animation">
                        <div className="ladi-popup">
                            <div className="ladi-popup-background" />
                            <NavLink to="" id="BUTTON283" className="ladi-element" data-replace-href="https://gearvn.com/pages/he-thong-showroom-gearvn">
                                <div className="ladi-button">
                                    <div className="ladi-button-background ladi-lazyload" />
                                    <div id="BUTTON_TEXT283" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-transition ladi-lazyload">
                                            Hệ Thống Showroom</p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="" id="BUTTON285" className="ladi-element" data-replace-href="https://gearvn.com/pages/huong-dan-tra-gop">
                                <div className="ladi-button">
                                    <div className="ladi-button-background ladi-lazyload" />
                                    <div id="BUTTON_TEXT285" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-transition ladi-lazyload">
                                            Mua Hàng Trả Góp</p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="" id="BUTTON287" className="ladi-element" data-replace-href="https://gearvn.com/pages/chinh-sach-bao-hanh">
                                <div className="ladi-button">
                                    <div className="ladi-button-background ladi-lazyload" />
                                    <div id="BUTTON_TEXT287" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-transition ladi-lazyload">
                                            Chính Sách Bảo Hành</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div data-action="true" id="BUTTON289" className="ladi-element">
                                <div className="ladi-button">
                                    <div className="ladi-button-background ladi-lazyload" />
                                    <div id="BUTTON_TEXT289" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-transition ladi-lazyload">
                                            Thông tin Liên Hệ</p>
                                    </div>
                                </div>
                            </div>
                            <a href="tel:18006975" id="BUTTON291" className="ladi-element">
                                <div className="ladi-button ladi-transition">
                                    <div className="ladi-button-background ladi-lazyload" />
                                    <div id="BUTTON_TEXT291" className="ladi-element ladi-button-headline">
                                        <p className="ladi-headline ladi-lazyload">
                                            ☎&nbsp; Hotline: 1800 6975</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
