import React from 'react';

const Index = () => {
    return (
        <div className="noindex">
            <div className="container1" id="page-account">
                <div id="layout-page" className="clearfix">
                    <span className="header-contact header-page clearfix">
                        <h1>Tài khoản của bạn <a className="logout" href="/account/logout"><span className="fa fa-sign-out" />Thoát</a></h1>
                    </span>
                    <div id="customer_orders" className="col-xs-12">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th className="order_number">Mã đơn hàng</th>
                                    <th className="date">Ngày đặt</th>
                                    <th className="payment_status">Trạng thái thanh toán</th>
                                    <th className="fulfillment_status">Vận chuyển</th>
                                    <th className="total">Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd ">
                                    <td><a href="/account/orders/0914887c027c45bdad46e8e8ae852615" title>#1000130713</a></td>
                                    <td><span>Thg 5 27, 2021</span></td>
                                    <td><span className="status_pending">pending</span></td>
                                    <td><span className="status_not fulfilled">not fulfilled</span></td>
                                    <td><span className="total money">889,000₫</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xs-12" id="customer_sidebar">
                        <h2>Lân Đồng Đức</h2>
                        <p className="email ">dongduclan277@gmail.com</p>
                        <div className="address ">
                            <p>Số 69 Trần Nguyên Hãn Tp.Bắc Giang</p>
                            <p />
                            <p> Vietnam</p>
                            <p>0379382992</p>
                            <a id="view_address" href="/account/addresses">Xem địa chỉ</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
