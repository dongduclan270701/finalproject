import HeaderSale from 'components/Header/Header-sale';
import React from 'react';
import 'assets/scss/Header/Header-installment.scss'
import FooterProductSale from 'components/Footer/Footer-product-sale';
import BannerInstallment from './Banner'
import InstallmentOne from './Inst-one'
import { NavLink } from 'react-router-dom';
const Index = () => {
    return (
        <div className="laid-wraper" data-padding-top-id="HEADER" data-scroll-padding-top={70} style={{ paddingTop: '70px' }}>
            <HeaderSale/>
            <BannerInstallment />
            <InstallmentOne />
            <div id="SECTION424" className="laid-section">
                <div className="laid-section-background laid-lazyload" />
                <div className="laid-container">
                    <div id="HEADLINE426" className="laid-element">
                        <h3 className="laid-headline laid-lazyload">
                            2. Trả góp qua thẻ tín dụng MPOS</h3>
                    </div>
                    <div id="HEADLINE427" className="laid-element">
                        <h3 className="laid-headline laid-lazyload">
                            A. Áp dụng</h3>
                    </div>
                    <div id="PARAGRAPH428" className="laid-element">
                        <div className="laid-paragraph">
                            • Khách hàng có nhu cầu mua sản phẩm tại GEARVN và trả góp qua thẻ tín dụng với giá trị đơn hàng từ 3.000.000 vnđ trở lên (sau khi trừ các khuyến mại).
                            <br />
                            • Khách hàng vẫn nhận đủ các chương trình khuyến mãi mà GEARVN đang áp dụng đối với từng sản phẩm.<br />
                        </div>
                    </div>
                    <div id="HEADLINE429" className="laid-element">
                        <h3 className="laid-headline laid-lazyload">
                            B. Điều kiện</h3>
                    </div>
                    <div id="PARAGRAPH430" className="laid-element">
                        <div className="laid-paragraph">
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
                    <div id="HEADLINE431" className="laid-element">
                        <h3 className="laid-headline laid-lazyload">
                            C. Hình thức đăng ký</h3>
                    </div>
                    <div id="GROUP453" className="laid-element">
                        <div className="laid-group">
                            <div id="BOX452" className="laid-element">
                                <div className="laid-box laid-lazyload" />
                            </div>
                            <div id="IMAGE445" className="laid-element">
                                <div className="laid-image">
                                    <div className="laid-image-background laid-lazyload" />
                                </div>
                            </div>
                            <div id="LINE446" className="laid-element">
                                <div className="laid-line">
                                    <div className="laid-line-container" />
                                </div>
                            </div>
                            <div id="PARAGRAPH449" className="laid-element">
                                <div className="laid-paragraph">
                                    Khách hàng liên hệ GEARVN qua Hotline 1800.6975 để được tư vấn sản phẩm, đặt hàng, nhận sản phẩm và thực hiện thanh toán trả góp tại nhà.<br />
                                </div>
                            </div>
                            <div id="HEADLINE450" className="laid-element">
                                <h3 className="laid-headline laid-lazyload">
                                    Cách 2: Đăng ký thông qua Hotline</h3>
                            </div>
                            <div id="PARAGRAPH434" className="laid-element">
                                <div className="laid-paragraph">
                                    Khách hàng tới Showroom GEARVN để được tư vấn sản phẩm, thực hiện thanh toán trả góp tại
                                    <br />
                                    Showroom và nhận sản phẩm.<br />
                                </div>
                            </div>
                            <div id="HEADLINE435" className="laid-element">
                                <h3 className="laid-headline laid-lazyload">
                                    Cách 1: Đăng ký tại Showroom GEARVN</h3>
                            </div>
                            <div id="IMAGE451" className="laid-element">
                                <div className="laid-image">
                                    <div className="laid-image-background laid-lazyload" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="HEADLINE454" className="laid-element">
                        <h3 className="laid-headline laid-lazyload">
                            D. Danh sách ngân hàng hỗ trợ trả góp và kỳ hạn trả góp</h3>
                    </div>
                    <div data-action="true" id="IMAGE455" className="laid-element">
                        <div className="laid-image">
                            <div className="laid-image-background laid-lazyload" />
                        </div>
                    </div>
                    <div id="HEADLINE470" className="laid-element">
                        <h3 className="laid-headline laid-lazyload">
                            3. Hướng dẫn mua hàng trả góp tại GEARVN</h3>
                    </div>
                    <div id="VIDEO471" className="laid-element">
                        <div className="laid-video">
                            <div className="laid-video-background laid-lazyload" />
                            <div id="SHAPE471" className="laid-element">
                                <div className="laid-shape">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 408.7 408.7" fill="rgba(0, 0, 0, 0.5)">
                                        <polygon fill="#fff" points="163.5 296.3 286.1 204.3 163.5 112.4 163.5 296.3" />
                                        <path d="M204.3,0C91.5,0,0,91.5,0,204.3S91.5,408.7,204.3,408.7s204.3-91.5,204.3-204.3S316.7,0,204.3,0ZM163.5,296.3V112.4l122.6,91.9Z" transform="translate(0 0)" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="IMAGE472" className="laid-element">
                        <div className="laid-image">
                            <div className="laid-image-background laid-lazyload" />
                        </div>
                    </div>
                    <div id="GROUP543" className="laid-element">
                        <div className="laid-group">
                            <div id="HEADLINE458" className="laid-element">
                                <h3 className="laid-headline laid-lazyload">
                                    Ví dụ:</h3>
                            </div>
                            <div id="PARAGRAPH459" className="laid-element">
                                <div className="laid-paragraph">
                                    Khách hàng Nguyễn Văn A sử dụng thẻ tín dụng của <span style={{ fontWeight: 'bold' }}>
                                        ngân hàng Sacombank</span>
                                    và thanh toán trả góp toàn bộ giá trị của đơn hàng với số tiền&nbsp;<span style={{ fontWeight: 'bold' }}>
                                        27.000.000 VNĐ</span>
                                    , kỳ hạn trả góp trong <span style={{ fontWeight: 'bold' }}>
                                        9 tháng.</span>
                                    <br />
                                </div>
                            </div>
                            <div id="HEADLINE466" className="laid-element">
                                <h3 className="laid-headline laid-lazyload">
                                    Ví dụ:</h3>
                            </div>
                            <div id="PARAGRAPH467" className="laid-element">
                                <div className="laid-paragraph">
                                    • Khách hàng không cần liên hệ đến ngân hàng để chuyển đổi giao dịch.
                                    <br />
                                    • (*) Maritime Bank: thu thêm phí chuyển đổi giao dịch trả góp 03% * giá trị giao dịch trên mọi kỳ hạn thanh toán và thu 1 lần khi chuyển đổi giao dịch.
                                    <br />
                                    • (**) FE Credit: thu thêm chủ thẻ như sau:<br />
                                </div>
                            </div>
                            <div id="IMAGE468" className="laid-element">
                                <div className="laid-image">
                                    <div className="laid-image-background laid-lazyload" />
                                </div>
                            </div>
                            <div id="PARAGRAPH469" className="laid-element">
                                <div className="laid-paragraph">
                                    Mức phí thu thêm được tính trên giá trị giao dịch và thu 1 lần duy nhất khi giao dịch được chuyển đổi trả góp thành công.<br />
                                </div>
                            </div>
                            <div id="GROUP476" className="laid-element">
                                <div className="laid-group">
                                    <div id="BOX463" className="laid-element">
                                        <div className="laid-box laid-lazyload" />
                                    </div>
                                    <div id="PARAGRAPH460" className="laid-element">
                                        <div className="laid-paragraph">
                                            - Hạn mức thẻ cần có để thực hiện thanh toán
                                            <br />

                                            <br />
                                            - Số tiền khách hàng thanh toán mỗi tháng 28.350.000 / 9<br />
                                            <br />
                                            - Số tiền chênh lệch giữa mua hàng trả thẳng và trả góp<br />
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH461" className="laid-element">
                                        <div className="laid-paragraph">
                                            =<br />
                                            <br />
                                            =<br />
                                            <br />
                                            =<br />
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH462" className="laid-element">
                                        <div className="laid-paragraph">
                                            27.000.000 + 27.000.000 * 5% = 28.350.000 vnđ<br />
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH473" className="laid-element">
                                        <div className="laid-paragraph">
                                            3.150.000<br />
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH475" className="laid-element">
                                        <div className="laid-paragraph">
                                            1.350.000 vnđ<br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="SECTION533" className="laid-section">
                <div className="laid-section-background laid-lazyload" />
                <div className="laid-container">
                    <div id="HEADLINE534" className="laid-element">
                        <h3 className="laid-headline laid-lazyload">
                            GEARVN CHÂN THÀNH CẢM ƠN QUÝ KHÁCH&nbsp;</h3>
                    </div>
                </div>
            </div>
            <FooterProductSale/>
            <div id="SECTION_POPUP" className="laid-section">
                <div className="laid-section-background laid-lazyload" />
                <div className="laid-container">
                    <div id="POPUP269" className="laid-element laid-animation">
                        <div className="laid-popup">
                            <div className="laid-popup-background" />
                            <NavLink to="" id="BUTTON283" className="laid-element" data-replace-href="https://gearvn.com/pages/he-thong-showroom-gearvn">
                                <div className="laid-button">
                                    <div className="laid-button-background laid-lazyload" />
                                    <div id="BUTTON_TEXT283" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-transition laid-lazyload">
                                            Hệ Thống Showroom</p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="" id="BUTTON285" className="laid-element" data-replace-href="https://gearvn.com/pages/huong-dan-tra-gop">
                                <div className="laid-button">
                                    <div className="laid-button-background laid-lazyload" />
                                    <div id="BUTTON_TEXT285" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-transition laid-lazyload">
                                            Mua Hàng Trả Góp</p>
                                    </div>
                                </div>
                            </NavLink>
                            <NavLink to="" id="BUTTON287" className="laid-element" data-replace-href="https://gearvn.com/pages/chinh-sach-bao-hanh">
                                <div className="laid-button">
                                    <div className="laid-button-background laid-lazyload" />
                                    <div id="BUTTON_TEXT287" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-transition laid-lazyload">
                                            Chính Sách Bảo Hành</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div data-action="true" id="BUTTON289" className="laid-element">
                                <div className="laid-button">
                                    <div className="laid-button-background laid-lazyload" />
                                    <div id="BUTTON_TEXT289" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-transition laid-lazyload">
                                            Thông tin Liên Hệ</p>
                                    </div>
                                </div>
                            </div>
                            <a href="tel:18006975" id="BUTTON291" className="laid-element">
                                <div className="laid-button laid-transition">
                                    <div className="laid-button-background laid-lazyload" />
                                    <div id="BUTTON_TEXT291" className="laid-element laid-button-headline">
                                        <p className="laid-headline laid-lazyload">
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
