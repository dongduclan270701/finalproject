import React,{useState} from 'react';

const Index = () => {
    const [Laptop, setLaptop] = useState(
        [
            {
                productName:"Laptop Asus Vivobook 15 X515EA BR2045W",
                realPrice: "11,490,000",
                SaleNowPrice:"10,990,000",
                img:"//product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-15-x515ea-br2045w-1_f7e2bdc9339d400ea1fa3943e7abccba_large.png",
                percent:-4,
                src:"laptop-asus-vivobook-15-x515ea-br2045w"
            },
            {
                productName:"Laptop Asus Vivobook 14 X1402ZA EK232W",
                realPrice: "22,990,000",
                SaleNowPrice:"13,490,000",
                img:"//product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-14-x1402za-ek232w-1_e2af0d7006a34cb692ffe6b810e83a39_large.png",
                percent:-39,
                src:"laptop-asus-vivobook-14-x1402za-ek232w"
            },
            {
                productName:"Laptop MSI Modern 15 A11M 1024VN",
                realPrice: "16,990,000",
                SaleNowPrice:"14,690,000",
                img:"//product.hstatic.net/1000026716/product/i3_bce8c31dc65d4496adb27e465903a0e9_large.png",
                percent:-14,
                src:"laptop-msi-modern-15-a11m-1024vn"
            }
        ]
    )
    return (
        <div className="noindex">
            <section className="light_section">
                <div id="collection" className="container1">
                    <div className=" banner-collection-header">
                        <a href="/collections/laptop-asus-vivobook-series" target="_blank">
                            <img src="https://file.hstatic.net/1000026716/collection/vvb_gearvn1920x450_61fba033031f4d6d97272973a3154f39.jpg" alt="Laptop Asus Vivobook Series" style={{ height: '300px', width: '100%', objectFit: 'contain' }} />
                        </a>
                    </div>
                    <div className="col-sm-12">
                        <h1 className="title-box-collection">
                            Laptop Asus Vivobook Series
                        </h1>
                        <div className="row">
                            <div className="main-content">
                                <div id="breadcrumb">
                                    <div className="main">
                                        <div className="breadcrumbs container1">
                                            <span className="showHere">Bạn đang ở: </span><a href="/" className="pathway">Trang chủ</a>
                                            <span> <i className="fa fa-caret-right" /> Laptop Asus Vivobook chính hãng, giá rẻ, trả góp 0%</span>
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
                                        {Laptop.map((item,index) => {
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
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                <em>
                                    Laptop <strong>
                                        <a target="_blank" href="https://gearvn.com/collections/laptop-asus-vivobook-series">
                                            Asus Vivobook</a>
                                    </strong>
                                    là một trong những dòng laptop dành cho học sinh, sinh viên và cả người làm văn phòng, là một trong những dòng laptop được yêu thích, chọn lựa nhiêu hiện nay. Với mức giá rẻ, cấu hình phù hợp, mẫu laptop này còn nổi bật với thiết kế đẹp, mỏng, sang trọng mà ít dòng nào ở thời điểm hiện tại có được.</em>
                            </span>
                        </p>
                        <p>
                            <span style={{ fontSize: '18px' }}>
                                <img alt="Laptop Asus Vivobook" data-mce-src="https://file.hstatic.net/1000026716/file/asus-vivobook_d429f2e6279c44acb4f32d5bb0843319.jpg" data-mce-style="display: block; margin-left: auto; margin-right: auto;" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://file.hstatic.net/1000026716/file/asus-vivobook_d429f2e6279c44acb4f32d5bb0843319.jpg" />
                            </span>
                        </p>
                        <h3>
                            <span style={{ fontSize: '18px' }}>
                                <strong>
                                    - Thiết kế mỏng nhẹ, đẹp, sang trọng</strong>
                            </span>
                        </h3>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Được đánh giá rất cao với thiết kế mỏng nhẹ, sang trọng và đẳng cấp, Asus Vivobook luôn tinh tế, tỉ mỉ trong từng chi tiết nhằm mang đến những trải nghiệm mới mẻ cho người dùng. Được làm bằng kim loại nhưng vẫn đảm bảo cân nặng cho máy, từ đó mang đến sự tiện lợi, thoải mái của người dùng trong suốt quá trình sử dụng.</span>
                        </p>
                        <p>
                            <span style={{ fontSize: '18px' }}>
                                <img alt="Laptop Asus Vivobook" data-mce-src="https://file.hstatic.net/1000026716/file/asus-vivobook-1_6c3fb40f7d704b0ab9f39f5b99e5654d.jpg" data-mce-style="display: block; margin-left: auto; margin-right: auto;" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://file.hstatic.net/1000026716/file/asus-vivobook-1_6c3fb40f7d704b0ab9f39f5b99e5654d.jpg" />
                            </span>
                        </p>
                        <h3>
                            <span style={{ fontSize: '18px' }}>
                                <strong>
                                    - Cấu hình đa dạng</strong>
                            </span>
                        </h3>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Bắt kịp xu hướng thị trường, Asus Vivobook cung cấp cho người sử dụng nhiều cấu hình từ thấp, trung bình cho đến cao và cao cấp nhất. Từ đó mà mỗi khách hàng khi chọn dòng laptop này luôn chọn được mẫu phù hợp với nhu cầu bản thân.</span>
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Hầu hết, laptop Asus Vivobook được trang bị CPU Intel Core I3, I5 và I7 cùng card đồ họa Nvidia MX. Đây là mức cấu hình làm việc ổn định, mang lại hiệu năng cao cho người sử dụng. Bên cạnh đó việc trang bị những chiếc ổ cứng SSD cũng góp phần không nhỏ giúp tăng tốc quá trình khởi động máy và tối đa năng suất làm việc.</span>
                        </p>
                        <p>
                            <span style={{ fontSize: '18px' }}>
                                <img alt="Laptop Asus Vivobook" data-mce-src="https://file.hstatic.net/1000026716/file/asus-vivobook-2_ec52862d3180483883334515a1ee78aa.jpg" data-mce-style="display: block; margin-left: auto; margin-right: auto;" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://file.hstatic.net/1000026716/file/asus-vivobook-2_ec52862d3180483883334515a1ee78aa.jpg" />
                            </span>
                        </p>
                        <h3>
                            <span style={{ fontSize: '18px' }}>
                                <strong>
                                    - Chất lượng màn hình Full HD</strong>
                            </span>
                        </h3>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Được trang bị công nghệ màn hình chống chói cùng thiết kế tràn viền siêu mỏng độc đáo. Dòng laptop Asus Vivobook tạo nên sự khác biệt khi đem ra so với các thương hiệu khác ở cùng phân khúc khách hàng.</span>
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Hầu hết những chiếc <a data-mce-href="https://gearvn.com/collections/laptop-asus" target="_blank" href="https://gearvn.com/collections/laptop-asus">
                                    laptop Asus</a>
                                Vivobook đều sở hữu màn hình Full HD. Mang đến cho người sử dụng trải nghiệm hiển thị vô cùng chân thực và sống động.</span>
                        </p>
                        <h3>
                            <span style={{ fontSize: '18px' }}>
                                <strong>
                                    - Thời lượng pin ấn tượng</strong>
                            </span>
                        </h3>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Nếu bạn muốn sở hữu một chiếc laptop có thiết kế đẹp, cấu hình mạnh, đủ dùng, làm việc tốt mà còn có thời lượng pin cao thì Asus Vivobook là lựa chọn không thể bỏ qua. Tuy thiết kế mỏng nhẹ nhưng thời lượng pin của những mẫu máy tính xách tay này lên đến gần 8 tiếng. Bởi thế mà không ngoa khi nói rằng đây là dòng laptop “chân ái” của dân văn phòng.</span>
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Bên cạnh đó máy còn được trang bị công nghệ Quick charge ( công nghệ sạc nhanh) giúp rút ngắn thời gian sạc đầy pin chỉ trong khoảng 2 giờ. Đối với những người thường xuyên cần di chuyển thì đây là tính năng mà ai cũng muốn sở hữu.</span>
                        </p>
                        <p>
                            <span style={{ fontSize: '18px' }}>
                                <img alt="Laptop Asus Vivobook" data-mce-src="https://file.hstatic.net/1000026716/file/asus-vivobook-3_dd072555146a4c25a311c19a2b04c814.jpg" data-mce-style="display: block; margin-left: auto; margin-right: auto;" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src="https://file.hstatic.net/1000026716/file/asus-vivobook-3_dd072555146a4c25a311c19a2b04c814.jpg" />
                            </span>
                        </p>
                        <h3 style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                <strong>
                                    - Asus Vivobook dành cho ai?</strong>
                            </span>
                        </h3>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Asus Vivobook sẽ phù hợp với những ai muốn tìm kiếm một chiếc laptop sở hữu thiết kế đẹp, hiệu năng ổn định. Thuộc phân khúc laptop tầm trung, Vivobook chủ yếu hướng đến đối tượng học sinh, sinh viên và nhân viên văn phòng bởi giá thành phải chăng, hiệu năng ổn định và hầu như đáp ứng được mọi nhu cầu sử dụng của người dùng.</span>
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <span style={{ fontSize: '18px' }}>
                                Nhũng ưu điểm nổi trội trên chính là những thông tin để bạn có thểm cơ sở khi lựa chọn Asus Vivobook là thiết bị đồng hành trong suốt thời gian học tập và làm việc của mình. Hiện bạn có thể theo dõi, cập nhật thông tin khuyến mãi laptop tại website Gearvn để trang bị cho mình ngay nếu bạn đang có ý định mua laptop học tập và làm việc.</span>
                        </p>
                        <p>
                            <span style={{ fontSize: '18px' }}>

                            </span></p></div>
                    {/* End no products */}
                </div>
            </section>
        </div>
    );
}

export default Index;
