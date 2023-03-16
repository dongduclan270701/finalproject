import React from 'react';

const Index = (props) => {
    const {product} = props
    console.log(product)
    return (
        <div className="col-sm-6 col-xs-12 product_parameters">
                                    <h1 className="product_name">
                                        {product.nameProduct}
                                    </h1>
                                    <p>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '18px' }}>
                                            ✔&nbsp;Bảo hành chính hãng 24&nbsp;tháng.&nbsp;</span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '18px' }}>
                                            ✔ Hỗ trợ đổi mới trong 7 ngày.&nbsp;</span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '18px' }}>
                                            ✔ Windows bản quyền tích hợp.&nbsp;</span>
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '18px' }}>
                                            ✔ Miễn phí giao hàng toàn quốc.</span>
                                    </p>
                                    <hr />
                                    <p>
                                        <span style={{ color: '#ff0000' }}>
                                            <span style={{ fontSize: '18px' }}>
                                                <u>
                                                    <strong>
                                                        QUÀ TẶNG:</strong>
                                                </u>
                                            </span>
                                        </span>
                                    </p>
                                    {product.gift.map((item,index) => {
                                        return <p key={index}>
                                        <span style={{ fontSize: '18px' }}>
                                            
                                                <strong>
                                                    {item}</strong>
                                            
                                        </span>
                                    </p>
                                    })}
                                    
                                    <hr />
                                    <p>
                                        <span style={{ fontSize: '18px' }}>
                                            <span style={{ color: '#ff0000' }}>
                                                <strong>
                                                    <u>
                                                        ƯU ĐÃI KHI MUA KÈM LAPTOP:&nbsp;</u>
                                                </strong>
                                            </span>
                                        </span>
                                    </p>
                                    <p>
                                        
                                            {product.gift_buy.map((item,index) => {
                                                return <span style={{ fontSize: '18px' }}>
                                                {item}<br/>
                                                </span>
                                            })}
                                        
                                    </p>
                                    <p>
                                        <span style={{ fontSize: '18px' }}>
                                            Và còn rất nhiều ưu đãi khác. <a href="http://gearvn.com/pages/chuong-trinh-mua-kem-pc-gearvn">
                                                <span style={{ color: '#3498db' }}>
                                                    <strong>
                                                        XEM NGAY CHI TIẾT TẠI ĐÂY</strong>
                                                </span>
                                            </a>
                                        </span>
                                    </p>
                                    <hr />
                                    <p>
                                        <span style={{ fontSize: '18px' }}>
                                            <strong>
                                                <span style={{ color: '#ff0000' }}>
                                                    Hỗ&nbsp;trợ trả góp MPOS (Thẻ tín dụng), HDSAISON&nbsp;(</span>
                                                <a href="https://gearvn.com/pages/huong-dan-tra-gop">
                                                    <span style={{ color: '#3498db' }}>
                                                        Xem chi tiết</span>
                                                </a>
                                                <span style={{ color: '#ff0000' }}>
                                                    ).</span>
                                            </strong>
                                        </span>
                                    </p>
                                    <p>
                                        <strong>

                                        </strong>
                                    </p>
                                    <strong>

                                        {/*<h3 class="product_select_qty">
Chọn màu sắc, số lượng sản phẩm
<div class="fb-like pull-right" data-href="/component/products/dam-cat-laze-thoi-trang.html" data-layout="button" data-action="like" data-show-faces="false" data-share="true" ></div>
</h3>*/}
                                        <form id="add-item-form-2" name="shoppingCart" action="/cart/add" method="post" encType="multipart/form-data">
                                            <div id="sel_price_qty" className="table_qty table-responsive" style={{ display: 'none' }}>
                                                <table width="100%" border={0} cellSpacing={0} cellPadding={4}>
                                                    <tbody><tr className>
                                                        <td>
                                                            <img className="product_cs_thumb" src="//hstatic.net/0/0/global/noDefaultImage6_small.gif" />
                                                            <span>Laptop Asus Vivobook 15 X515EA BR2045W / 12295		</span>
                                                        </td>
                                                        <td className="text-right">
                                                            <span className>10,990,000₫</span>
                                                        </td>
                                                        <td className="text-right variant-control" data-price={1099000000}>
                                                            <button className="bt_down" type="button" onclick="javascript:jQuery(this).qtyDown('qty1098653408');"> - </button>
                                                            <input type="text" className="input_qty" id="qty1098653408" name="qty[]" defaultValue={0} />
                                                            <button className="bt_up" type="button" onclick="javascript:jQuery(this).qtyUp('qty1098653408');"> + </button>
                                                            <input type="hidden" defaultValue={1098653408} name="pid[]" className="vid" />
                                                        </td>
                                                    </tr>
                                                    </tbody></table>
                                            </div>
                                            <span className="text-select-product" style={{ display: 'none' }}>(Vui lòng chọn số lượng trước khi mua hàng)</span>
                                            {/*<div id="sel_price_readmore">
<a id="price_readmore" href="javascript:void();"><span class="fa fa-chevron-down" aria-hidden="true"></span></a>
</div>*/}
                                            <div className="product_nav_btn">
                                                <div className="product_sales_off pull-left">
                                                    <span className="price-text">Giá Cũ:</span><span className="product_price"><del>{product.realPrice}₫</del></span><br />
                                                    <span className="price-text">Giá KM:</span><span className="product_sale_price">{product.nowPrice}₫</span>
                                                </div>
                                            </div>
                                            <div className="clearfix" />
                                            <div className="form-group">
                                                <a id="allowAdd2Cart" className="product_buy_btn btn-success theme_button addtocar">Đặt hàng</a>
                                            </div>
                                        </form>
                                    </strong>
                                </div>
    );
}

export default Index;
