import React from 'react';

const Index = () => {
    return (
        <div className="noindex">
            <div id="layout-page-order" className="container1">
                <div className="col-md-12 header-page">
                    <h1 className="title-order-date">Đơn hàng: #1000130713, đặt lúc <span className="order_date">— 27 05, 2021 11:52SA</span></h1>
                </div>
                <div className="col-xs-12">
                    <h4><a href="/account" id="return_to_store">Quay lại trang tài khoản </a></h4>
                </div>
                <div className="col-md-12 content-page">
                    <div id="order_payment" className="col-md-6 col-sm-6">
                        <div className="row" style={{display:"inherit"}}>
                            <h3 className="order_section_title">Địa chỉ nhận thanh toán</h3>
                            <p><span>Tình trạng thanh toán:</span> <span className="status_pending">pending</span></p>
                            <div className="address">
                                <p>Đồng Đức Lân</p>
                                <p />
                                <p>Số 69, Trần Nguyên Hãn, Tp.Bắc Giang</p>
                                <p />
                                <p> Bắc Giang</p>
                                <p>Vietnam</p>
                                <p>0379382992</p>
                            </div>
                        </div>
                    </div>
                    <div id="order_shipping" className="col-md-6 col-sm-6" style={{ textAlign: 'right' }}>
                        <div className="row"  style={{display:"inherit"}}>
                            <h3 className="order_section_title">Địa chỉ gửi hàng</h3>
                            <p><span>Vận chuyển:</span> <span className="status_not fulfilled">not fulfilled</span></p>
                            <div className="address">
                                <p>Đồng Đức Lân</p>
                                <p />
                                <p>Số 69, Trần Nguyên Hãn, Tp.Bắc Giang</p>
                                <p />
                                <p> Bắc Giang</p>
                                <p>Vietnam </p>
                                <p>0379382992</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 content-page">
                    <table id="order_details">
                        <tbody><tr height="40px">
                            <th>Sản phẩm</th>
                            <th>Mã sản phẩm</th>
                            <th>Giá</th>
                            <th className="center">Số lượng</th>
                            <th className="total">Tổng cộng</th>
                        </tr>
                            <tr height="40px" id={1237722295} className="odd">
                                <td className>
                                    <a href="/"title>Chuột Dare-U EM908 RGB - Default Title</a> <br />
                                </td>
                                <td className="sku " />
                                <td className="money">390,000₫</td>
                                <td className="quantity cente">1</td>
                                <td className="total money">390,000₫</td>
                            </tr>
                            <tr height="40px" id={1237722296} className="even">
                                <td className>
                                    <a href="/"title>Bàn phím cơ Gaming DAREU EK87 - Black (Multi-LED) - Default Title</a> <br />
                                </td>
                                <td className="sku " />
                                <td className="money">499,000₫</td>
                                <td className="quantity cente">1</td>
                                <td className="total money">499,000₫</td>
                            </tr>
                            <tr height="40px" className="order_summary">
                                <td  colSpan={4}><b>Giá sản phẩm</b></td>
                                <td className="total money"><b>889,000₫</b></td>
                            </tr>
                            <tr height="40px" className="order_summary ">
                                <td  colSpan={4}><b>Giao hàng tận nơi</b></td>
                                <td className="total money"><b>0₫</b></td>
                            </tr>
                            <tr height="40px" className="order_summary order_total">
                                <td  colSpan={4}><b>Tổng tiền</b></td>
                                <td className="total money"><b>889,000₫ </b></td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </div>
    );
}

export default Index;
