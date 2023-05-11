import React, {useState} from 'react';
// import { useParams } from 'react-router-dom'

const Index = () => {
    // const params = useParams()
    const [Laptop, setLaptop] = useState(
        [
            {
                productName:"Laptop MSI Modern 14 C11M 011VN",
                realPrice: 14190000,
                SaleNowPrice:10990000,
                img:"//product.hstatic.net/1000026716/product/gearvn-laptop-msi-modern-14-c11m-011vn-1_d693b8ae9c1f45e2a77617e07d4634d4_large.png",
                percent:-23,
                src:"laptop-msi-modern-14-c11m-011vn"
            },
            {
                productName:"Laptop MSI Modern 14 B11SBU 668VN",
                realPrice: 22990000,
                SaleNowPrice:22990000,
                img:"//product.hstatic.net/1000026716/product/laptop_msi_modern_14_b11sbu_668vn_197c30cd01b84916ae9a57c9102839e8_large.jpg",
                percent:-39,
                src:"laptop-msi-modern-14-b11sbu-668vn"
            },
            {
                productName:"Laptop MSI Modern 15 A11M 1024VN",
                realPrice: 18990000,
                SaleNowPrice:18990000,
                img:"//product.hstatic.net/1000026716/product/1024vn-fix-win_596189a32e9d42cc8cb3c0b47da9b61c_large.png",
                percent:-24,
                src:"laptop-msi-modern-15-a11m-1024vn"
            }
        ]
    )
    return (
        <div className="noindex">
            <section className="light_section">
                <div id="collection" className="container1">
                    <div className=" banner-collection-header">
                        <a href=" /products/laptop-msi-modern-14-b5m-204vn" target="_blank">
                            <img src="https://file.hstatic.net/1000026716/collection/banner_web_header_1280x450_4e34baeb7ba7486189024eea8e8bb862.png" alt="Laptop MSI Modern 14 Series" style={{ height: '300px', width: '100%', objectFit: 'contain' }} />
                        </a>
                    </div>
                    <div className="col-sm-12">
                        <h1 className="title-box-collection">
                            Laptop MSI Modern 14 Series
                        </h1>
                        <div className="row">
                            <div className="main-content">
                                <div id="breadcrumb">
                                    <div className="main">
                                        <div className="breadcrumbs container1">
                                            <span className="showHere">Bạn đang ở: </span><a href="/" className="pathway">Trang chủ</a>
                                            <span> <i className="fa fa-caret-right" /> Laptop MSI Modern 14 | Modern 15 Series chính hãng</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-sm-12 wrap-sort-by">
                                            <div className="browse-tags pull-right">
                                                <span>Sắp xếp theo:</span>
                                                <span className="custom-dropdown custom-dropdown--white">
                                                    <select className="sort-by custom-dropdown__select custom-dropdown__select--white">
                                                        <option value="manual">Sản phẩm nổi bật</option>
                                                        <option value="price-ascending">Giá: Tăng dần</option>
                                                        <option value="price-descending">Giá: Giảm dần</option>
                                                        <option value="title-ascending">Tên: A-Z</option>
                                                        <option value="title-descending">Tên: Z-A</option>
                                                        <option value="created-ascending">Cũ nhất</option>
                                                        <option value="created-descending">Mới nhất</option>
                                                        <option value="best-selling">Bán chạy nhất</option>
                                                    </select>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 product-list">
                                    <div className="row content-product-list">
                                        {Laptop.map((item, index) => {
                                            return <div className="col-sm-3 col-xs-12 padding-none col-fix20" key={index}>
                                            <div className="product-row">
                                                <a href={"/products/" + item.src}>
                                                </a><div className="product-row-img"><a href={"/products/" + item.src}>
                                                    <img className="product-row-thumbnail" src={item.img} alt={item.productName} />
                                                </a><div className="product-row-price-hover"><a href={"/products/" + item.src}>
                                                    <div className="product-row-note pull-left">Click để xem chi tiết</div>
                                                </a><a href={"/products/" + item.src} className="product-row-btnbuy pull-right">Đặt hàng</a></div></div>
                                                <h2 className="product-row-name">{item.productName}</h2>
                                                <div className="product-row-info">
                                                    <div className="product-row-price pull-left"><del>{item.realPrice}₫</del><br /><span className="product-row-sale">{item.SaleNowPrice}₫</span></div>
                                                    {/*<span class="product-row-buyer pull-right"><i class="fa fa-user"></i><br/>185</span>*/}
                                                    <div className="clearfix" />
                                                </div>
                                                <div className="new-product-percent">{item.percent}%</div>
                                            </div>
                                        </div>
                                        })}
                                        
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="text-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End collection info */}
                    {/* Begin no products */}
                    <div className="col-xs-12 collection-descriptions">
                        <p>
                        </p></div>
                    {/* End no products */}
                </div>
            </section>
        </div>
    );
}

export default Index;
