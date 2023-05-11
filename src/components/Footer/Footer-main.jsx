import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {
    
    return (
        <>
            <div id="register-email">
                <form acceptCharset="UTF-8" className="contact-form" method="post">
                    <input name="form_type" type="hidden" defaultValue="customer" />
                    <input name="utf8" type="hidden" defaultValue="✓" />
                    <div className="container1 main">
                        <div className="get_email">
                            <div id="intro-text" className="pull-left col-sm-7 col-xs-12 pull-left">Mua hàng online với nhiều ưu đãi hơn tại GEARVN</div>
                            <div id="frame_sbemail" className="pull-left col-sm-4 col-xs-12 pull-right">
                                <div className="input-group input-group-sm fix-input-group">

                                    <input type="text" className="form-control" name="contact[email]" id="your_email" placeholder="Nhập email của bạn" />
                                    <span className="input-group-btn">
                                        <button name="bt_submitemail" id="bt_submitemail" className="btn btn-default" type="submit">Đăng ký</button>
                                    </span>

                                </div>
                            </div>
                        </div>
                        <div className="clr" />
                    </div></form>
                <input id="774bdbd79901489cb31a0467adb2c3db" name="g-recaptcha-response" type="hidden" defaultValue="03AFY_a8XMWJ8P7Ooxtv-KGHJ0la8fmhTc8ihXQuq22_Xd1pJ2Q9ZWKrzSX9Y4g2rY9TJ1C18Me_STTQi3NMLJSPoY4CaHdDMWR6dn8exBHROf5jlX-go1119oaqFOmoL6lWaqpITo7Q2aLc-PIc59CBY1EzrVQtv8rnDQq1gOCAtBT3uAmj1b4p_JvtN-ngCIrpl2VxlDo6cw5i6U4ElF8NXI6GcJktvGej9Nc_K_GT2Ly8laWtVFuN8756nmI-wvMXSVXQTBxI8T_bNGTT6K6Qxf95I-3PQB3dKqwCy7hVFkWqXGHERngsDihjZ7vIO3X4B9sLWzz8xnruq6DL9VYeb1esOsrSAUsUKyzSg0HLelblyAKbFvvws5UihiJgyP1amDY2AQNgiBJu5mJUebAlkgS83fzmDOAbDluZ-wXVRVfPQ19td2I_BWUq6jEYU7w-e4hMBXsguWj9ofZ7DpFXp2IR2Yef3YLkA_oRRQNS6VDJ92wwjNZNF_Z5mMs7AHT377o6Y8-D2P" />
            </div>
            <div id="footer">
                <div className="container1">
                    {/* <div className='row'> */}
                        <div id="user1" className="col-sm-4 col-xs-12">
                            <div className="moduletable">
                                {/*<h3>GEARVN.COM - HI-END PC & GAMING GEAR</h3> */}
                                <h3>Công ty TNHH Thương Mại GEARVN </h3>
                                <div className="custom">
                                    <h3 className="title-footer-2">	Email: cskh@gearvn.com<br /></h3>
                                    <p style={{ fontSize: '14px' }}><b>HỆ THỐNG TỔNG ĐÀI MIỄN PHÍ:</b> (Làm việc từ 08h00 - 21h00)</p>
                                    <table style={{ width: '296px' }}>
                                        <tbody>
                                            <tr>
                                                <td style={{ width: '211px',fontSize:'14px',paddingBottom:'5px' }}>Gọi mua hàng</td>
                                                <td style={{ width: '105px',fontSize:'14px',paddingBottom:'5px' }}><strong>1800 6975</strong></td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: '211px',fontSize:'14px' }}>Hỗ trợ khách hàng</td>
                                                <td style={{ width: '105px',fontSize:'14px' }}><strong>1800 6173</strong></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <br />
                                    <div><NavLink to="" style={{ fontSize: '16px', color: '#0655a6', fontWeight: 'bold' }}>Chính sách bảo hành</NavLink></div><br />
                                    <div><NavLink to="" style={{ fontSize: '16px', color: '#0655a6', fontWeight: 'bold' }}>Chính sách thanh toán</NavLink></div><br />
                                    <div><NavLink to="" style={{ fontSize: '16px', color: '#0655a6', fontWeight: 'bold' }}>Chính sách giao hàng</NavLink></div><br />
                                    <div><NavLink to="" style={{ fontSize: '16px', color: '#0655a6', fontWeight: 'bold' }}>Chính sách bảo mật</NavLink></div>
                                </div>
                                <h3 className="title-footer-2" />
                                <ul className="menu-footer">
                                </ul>
                                <NavLink to="" rel="nofollow"><img src="https://theme.hstatic.net/1000026716/1000440777/14/20150827110756-dathongbao.png" style={{ maxWidth: '300px' }} /></NavLink>

                            </div>
                        </div>
                        <div id="user2" className="col-sm-5 col-xs-12">
                            <div className="moduletable">
                                {/*<h3>BẢN ĐỒ ĐẾN GEARVN</h3>*/}
                                <p style={{ fontSize: '16px', display: 'inline' }}>
                                    <NavLink to=""><b>HỆ THỐNG CỬA HÀNG:</b></NavLink>
                                </p>
                                <p style={{ display: 'inline' }} />
                                <br />
                                <p style={{ fontSize: '14px', paddingTop: '5px' }}>
                                    <div><b>SHOWROOM HCM</b> (Làm việc từ 8h00 - 21h00) </div><br />
                                    <div>- Địa chỉ 1: 78-80-82 Hoàng Hoa Thám, Phường 12, Quận Tân Bình.</div><br />
                                    <div>- Địa chỉ 2: 905 Kha Vạn Cân, Phường Linh Tây, Thành phố Thủ Đức.</div><br />
                                    <div>- Địa chỉ 3: 1081 - 1083 Trần Hưng Đạo, Phường 5, Quận 5.</div><br />
                                    <div>- Địa chỉ 4: 415 An Dương Vương, Phường 10, Quận 6.</div><br />
                                    <div><b>SHOWROOM HN </b> (Làm việc từ 8h00 - 21h00)</div><br />
                                    <div>- Địa chỉ 1: 162 - 164 Thái Hà, Phường Trung Liệt, Quận Đống Đa, Hà Nội</div><br />
                                    <div>- Địa chỉ 2: 460 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Hà Nội</div><br />
                                </p>
                                <p style={{ fontSize: '16px', display: 'inline' ,marginBottom:'5px'}}>
                                    <NavLink to="">
                                        <b>TRUNG TÂM BẢO HÀNH:</b>
                                    </NavLink>
                                </p>
                                <br />
                                <div><p style={{ fontSize: '14px', paddingTop: '5px' }}>- Địa chỉ : 436A/71 đường 3/2, Phường 12, Quận 10, Hồ Chí Minh.</p></div>
                                <p style={{ fontSize: '14px' }}>Mua <NavLink to="">PC Gaming</NavLink>, <NavLink to="">laptop gaming</NavLink>, 
                                <NavLink to="">card màn hình</NavLink>, <NavLink to="">màn hình máy tính</NavLink>, <NavLink to="">ghế gaming</NavLink>, thiết bị chơi game như PS5 hàng đầu Việt Nam bảo hành chính hãng. Mua online nhận ưu đãi hấp dẫn với nhiều chương trình đặc biệt như Black Friday, G-Fest, Cyber Monday<br /></p>
                                {/* Pháp nhân */}
                                <p style={{ fontSize: '14px', paddingTop: '4px' }}>
                                    <div>- Công ty TNHH Thương Mại Gearvn </div><br />
                                    <div>- GPKD số 0316517394 do Sở KH và ĐT TP Hồ Chí Minh cấp ngày 01/10/2020 </div><br />
                                    - GĐ/Sở hữu website: Nguyễn Thế Anh <br />
                                </p>
                                {/* Code veryfi DMCA Quocvu */}
                                <NavLink to="" title="DMCA.com Protection Status" className="dmca-badge" rel="nofollow noopener noreferrer"> <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=65147526-7602-46be-9047-e8c33f9fcbd3" alt="DMCA.com Protection Status" /></NavLink>
                                <ul className="menu fix-menu">
                                </ul>
                            </div>
                        </div>
                        <div id="user3" className="col-sm-3 col-xs-12">
                            <div className="moduletable">
                                <h3>Fanpage</h3>
                                <div className="face-content">
                                    <div className="fb-like-box small--hide fb_iframe_widget" data-href="https://www.facebook.com/gearvnhcm/" data-height={375} data-colorscheme="dark" data-show-faces="true" data-header="false" data-stream="true" data-show-border="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&color_scheme=dark&container_width=320&header=false&height=375&href=https%3A%2F%2Fwww.facebook.com%2Fgearvnhcm%2F&locale=vi_VN&sdk=joey&show_border=false&show_faces=true&stream=true"><span style={{ verticalAlign: 'bottom', width: '300px', height: '375px' }}><iframe name="f7ea102ca726c8" width="1000px" height="375px" data-testid="fb:like_box Facebook Social Plugin" title="fb:like_box Facebook Social Plugin" frameBorder={0} allowtransparency="true" allowFullScreen={true} scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v15.0/plugins/like_box.php?app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df396eb3bb9eed3%26domain%3Dgearvn.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fgearvn.com%252Ff34a08ada23dc84%26relation%3Dparent.parent&color_scheme=dark&container_width=320&header=false&height=375&href=https%3A%2F%2Fwww.facebook.com%2Fgearvnhcm%2F&locale=vi_VN&sdk=joey&show_border=false&show_faces=true&stream=true" style={{ border: 'none', visibility: 'visible', width: '300px', height: '375px' }} className /></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clr" />
                </div>
            {/* </div> */}
        </>
    );
}

export default Index;
