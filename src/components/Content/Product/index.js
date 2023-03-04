import React, { useState } from 'react';
import ProductParameters from './Product-parameters'
import ProductThumbnail from './Product-thumbnail'
import TabpanelDacDiem from './Tabpanel-dacdiem'
import TabpanelChitiet from './Tabpanel-chitiet'
import Tabpanelhrvproductabs from './Tabpanel-hrvproductabs'

const Index = () => {
    const [product, setProduct] = useState([
        {
            img: [
                "https://product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-15-x515ea-br2045w-1_f7e2bdc9339d400ea1fa3943e7abccba.png",
                "https://product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-15-x515ea-br2045w-2_9571d7449e25453798da61fbd82d22b0.png",
                "https://product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-15-x515ea-br2045w-3_54451808ae1d4f6196ced38ea630d6c4.png",
                "https://product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-15-x515ea-br2045w-4_cc64c03ae2a24e959483664b07529550.png",
                "https://product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-15-x515ea-br2045w-5_758608d1480f446692fdac3f2c1a45b8.png"
            ],
            src: "laptop-asus-vivobook-15-x515ea-br2045w",
            gift: [
                "Sticker Gearvn GBot (Từ 08.11 cho đến khi hết quà)",
                "Nhận bộ quà tặng trị giá 600.000đ (Từ ngày 02/02 đến 28/02/2023):",
                "- Tai nghe Rapoo H100",
                "- Chuột không dây Rapoo M21 Silent",
                "- Lót chuột Rapoo V1000"
            ],
            gift_buy:[
                "Mua chuột không dây LM115G Wireless chỉ với 100,000đ.",
                "Giảm ngay 100,000đ khi mua thêm màn hình máy tính. ",
                "Giảm ngay 100,000đ khi mua thêm ram. ",
                "Giảm ngay 100,000đ khi mua kèm Microsoft Office (01/10 - 31/12/2022)"
            ],
            nameProduct: "Laptop Asus Vivobook 15 X515EA BR2045W",
            realPrice: "11,490,000",
            nowPrice: "10,990,000",
            description_table: [
                { CPU: "Intel Core i3-1115G4 1.7GHz up to 4.1GHz 6MB" },
                { RAM: "4GB Onboard DDR4 2666MHz (1x SO-DIMM socket, up to 12GB SDRAM)" },
                { Storage: '512GB M.2 NVMe™ PCIe® 3.0 SSD, 1x slot SATA3 2.5"' },
                { GPU: "Intel UHD Graphics" },
                { Monitor: '15.6" HD (1366 x 768), Anti-glare display, LED Backlit, 200nits, NTSC: 45%, Screen-to-body ratio: 83 ％' },
                { Keyboard: "Tiêu chuẩn, có phím số" },
                { Audio: "SonicMaster" },
                { LAN: "None" },
                { Wireless: "802.11 AC, Bluetooth v4.1" },
                { Webcam: "HD camera  (720p Webcam)" },
                { Communication: ['1x USB 3.2 Gen 1 Type-A', '1x USB 3.2 Gen 1 Type-C', '2x USB 2.0 Type-A', '1x HDMI 1.4', '1x 3.5mm Combo Audio Jack', '1x DC-in'] },
                { System: "Windows 11 Home" },
                { Battery: "2 Cells 37WHrs" },
                { Weight: "1.8 kg" },
                { Color: "Slate Gray" },
                { Security: "Vân tay" },
                { Size: "36.00 x 23.50 x 1.99 ~ 1.99 cm" },
            ],
            description:[
                "Đánh giá chi tiết laptop Asus Vivobook 15 X515EA BR2045W",
                "Asus Vivobook 15 X515EA BR2045W là chiếc laptop giá rẻ phù hợp cho việc học tập và làm việc hằng ngày. Cấu hình ổn định, thiết kế hoàn thiện hứa hẹn sẽ mang đến những trải nghiệm phù hợp với người dùng.",
                "Thiết kế sang trọng, độc đáo",
                "Laptop Asus Vivobook15 sở hữu một màu bạc đẹp mắt với thiết kế vuông vắn đầy tinh tế. Bản lề được thiết kế tự tạo một góc nghiêng vừa phải khi mở nắp máy tính lên. Logo Asus đặt ở trung tâm của mặt trên laptop tạo một điểm nhấn của dòng sản phẩm. Trọng lượng 1.8kg, dày khoảng 1.99cm tạo điều kiện di chuyển đi mọi nơi phục vụ cho nhu cầu học tập và làm việc. ",
                "Cấu hình vượt trội trên laptop Asus Vivobook 15 X515EA BR2045W",
                "Sử dụng bộ vi xử lý Intel core i3-1115G4mạnh mẽ cho phép laptop Asus Vivobook 15 giải quyết mọi tác vụ văn phòng cơ bản đến nâng cao. Card đồ họa tích hợp Intel® UHD Graphics hỗ trợ các công việc hình ảnh sắc nét. 4GB RAM DDR4 xử lý đa nhiệm cực tốt cho những thao tác mượt mà. Bộ lưu trữ 512GB thỏa sức lưu trữ các dữ liệu quan trọng mà người dùng cần.",
                "Chất lượng hình ảnh chân thực",
                "Asus Vivobook 15 sở hữu màn hình HD với độ phân giải 1366 x 768. Thiết kế viền mỏng mở ra tầm nhìn thoải mái hơn trên một sản phẩmlaptop mỏng nhẹ. Độ sáng 200 nits hỗ trợ hình ảnh hiển thị luôn tốt trong nhiều điều kiện ánh sáng. Vivobook 15 được trang bị công nghệ chống chói Anti-Glare mang lại độ chính xác cao hỗ trợ đôi mắt quan sát tốt hơn.  ",
                "Bàn phím và bảo mật",
                "Đây có lẽ là sản phẩm laptop cho sinh viênhoàn hảo với thiết kế bàn phím thoải mái. Hành trình phím được tinh chỉnh hợp lý để việc đánh máy trên Asus Vivobook 15 thuận lợi. Thiết kế Fullsize dễ dàng cho việc nhập dữ liệu nhanh chóng. ",
            ]
        },
        {
            img: [
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-asus-vivobook-14-x1402za-ek232w-1_9484ee6af78442b292ca985e3a45cbdc.png",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-asus-vivobook-14-x1402za-ek232w-7_ff99faa9a496471ebc3c6316246b0c08.png",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-asus-vivobook-14-x1402za-ek232w-4_7a4f26cd0ca442f0a472b0b2d13e5ae1.png",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-asus-vivobook-14-x1402za-ek232w-2_4aa885843ac743b0b1e5ba2dd0430432.png",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-asus-vivobook-14-x1402za-ek232w-5_4f95a6fc389146df85ef4a00113b67ca.png",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-asus-vivobook-14-x1402za-ek232w-8_f8515436b414418f995f91a6258c3de0.png",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-asus-vivobook-14-x1402za-ek232w-9_88e0e25363f145d6a2fb7ce41de0dbfe.png",
            ],
            src: "laptop-asus-vivobook-14-x1402za-ek232w",
            gift: [
                'Balo phổ thông Asus 15.6" ',
                "Sticker Gearvn GBot (Từ 08.11 cho đến khi hết quà)",
                "Năm Mèo - Tặng Chuột (Từ 01.03 - 31.03.2023)"
            ],
            gift_buy:[
                "Mua túi chống sốc chỉ với giá 49.000đ",
                "Giảm ngay 100.000đ khi mua kèm Ram Laptop.",
                "Giảm đến 200.000đ khi mua kèm Balo, túi chống sốc, phụ kiện.",
                "Giảm ngay 30.000đ khi mua Đế tản nhiệt Laptop.",
                "Giảm ngay 100.000đ khi mua chuột TUF Gaming M3, Logitech G203, G102."
            ],
            nameProduct: "Laptop Asus Vivobook 15 X515EA BR2045W",
            realPrice: "0",
            nowPrice: "13,490,000",
            description_table: [
                { CPU: "Intel® Core™ i3-1220P Processor 3.3 GHz (12M Cache, up to 4.4 GHz, 10 cores, 12 threads)" },
                { RAM: "4GB (Onboard) DDR4 3200MHz (Còn 1 slot SO-DIMM)" },
                { Storage: '512GB M.2 NVMe™ PCIe® 3.0 SSD (1 Slot)' },
                { GPU: "Intel® UHD Graphics" },
                { Monitor: '14.0 inch, FHD (1920 x 1080) 16:9, LED Backlit, 220nits, 45% NTSC, Anti-glare display' },
                { Keyboard: "LED trắng" },
                { Audio: "SonicMaster" },
                { LAN: "None" },
                { Wireless: "v5.0" },
                { Webcam: "720p HD camera With privacy shutter" },
                { Communication: ['', '1x USB 3.2 Gen 1 Type-C', '2x USB 2.0 Type-A', '1x HDMI 1.4', '1x 3.5mm Combo Audio Jack', '1x DC-in'] },
                { System: "Windows 11 Home" },
                { Battery: "	42WHrs, 3S1P, 3-cell Li-io" },
                { Weight: "1.50 kg" },
                { Color: "Quiet Blue" },
                { Security: "Fingerprint sensor intergrated with Touchpad" },
                { Size: "31.71 x 22.20 x 1.99 ~ 1.99 cm" },
            ],
            description: [
                
            ]
        },
        {
            img: [
                "https://product.hstatic.net/1000026716/product/1024vn-fix-win_596189a32e9d42cc8cb3c0b47da9b61c.png",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-msi-modern-15-a11mu-678vn-1_ccd39899124e40bcaf2c97a38ca8b676_grande.jpeg",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-msi-modern-15-a11mu-678vn-2_fb58e292c02c4dff86350a9b93e3102d_grande.jpeg",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-msi-modern-15-a11mu-678vn-3_8dfd185330bf489588a8aa262d411c72_grande.jpeg",
                "https://file.hstatic.net/1000026716/file/gearvn-laptop-msi-modern-15-a11mu-678vn-4_47f472407fe2471fb51ac2221a1971da_grande.jpeg",
            ],
            src: "laptop-msi-modern-15-a11m-1024vn",
            gift: [
                "Chuột MSI M88 (Số lượng có hạn)",
                "Sticker Gearvn GBot (Từ 08.11 cho đến khi hết quà)",
                "Năm Mèo - Tặng Chuột (Từ 01.03 - 31.03.2023)"
            ],
            gift_buy:[
                "Mua túi chống sốc chỉ với giá 49.000đ",
                "Giảm ngay 100.000đ khi mua kèm đế tản nhiệt Havit F2072.",
                "Giảm ngay 100.000đ khi mua kèm Ram Laptop.",
                "Giảm đến 200.000đ khi mua kèm Balo, túi chống sốc, phụ kiện.",
                "Giảm ngay 30.000đ khi mua Đế tản nhiệt Laptop.",
                "Giảm ngay 100.000đ khi mua chuột TUF Gaming M3, Logitech G203, G102.",
                "Giảm ngay 100.000 khi mua kèm Microsoft Office (từ 1/1 - 31/3/2023)",
                "Giảm ngay 200.000 khi mua kèm Office Home & Student (từ 1/1 - 31/3/2023)",
            ],
            nameProduct: "Laptop MSI Modern 15 A11M 1024VN",
            realPrice: "18,990,000",
            nowPrice: "14,490,000",
            description_table: [
                { CPU: "Intel Core i5-1155G7 2.5GHz up to 4.5GHz 8MB 4 nhân 8 luồng" },
                { RAM: "8GB DDR4 3200MHz ( 2 Khe ram nâng cấp tối đa 64GB )" },
                { Storage: '512GB SSD M.2 PCIE Gen3X4 (Còn trống 1 khe SSD M.2 NVMe PCIe Gen4 )' },
                { GPU: "Intel Iris Xe Graphics" },
                { Monitor: '15.6" FHD (1920 x 1080) IPS, Anti-Glare with 45% NTSC, 60Hz' },
                { Keyboard: "Có đèn nền màu trắng" },
                { Audio: "Âm thanh độ phân giải cao ™ với Nahimic 3" },
                { LAN: "Không" },
                { Wireless: "Wi-Fi 6(Gig+)(802.11ax), Bluetooth v5.1" },
                { Webcam: "HD Webcam 720p" },
                { Communication: ['1x Type-C (USB / DP / Thunderbolt™) hỗ trợ sạc PD', '1x Type-A USB3.2 Gen1', '2x Type-A USB3.2 Gen2', '1x (4K @ 60Hz) HDMI', '1x Mic-in/Headphone-out Combo Jack'] },
                { System: "Windows 11 Home" },
                { Battery: "52WHrs" },
                { Weight: "1.6 kg" },
                { Color: "Carbon Gray ( Xám )" },
                { Security: "None" },
                { Size: "356.8 x 233.75 x 16.9 - 18.9 mm" },
            ],
            description:[
                "Đánh giá chi tiết laptop MSI Modern 15 A11M 1024VN",
                "",
                "Laptop sang trọng, tâm điểm của mọi ánh nhìn",
                "Với thiết kế tinh tế, sang trọng, laptop MSI Modern 15 A11M 1024VN là sự lựa chọn hàng đầu của giới trẻ, giúp mang đến một vẻ ngoài siêu nổi bật và tràn đầy cá tính. Máy mỏng nhẹ có điểm nhấn thiết kế độc đáo. Thể hiện cá tính độc đáo của bạn với hiệu năng không giới hạn.",
                "Siêu di động với trọng lượng chỉ 1,6 kg",
                "Laptop siêu nhẹ với trọng lượng chỉ 1,6kg và mỏng 16,9 mm. Modern Series luôn cơ động và phong cách. Làm việc mọi lúc mọi nơi một cách thú vị hơn.",
                "Hỗ trợ USB type C",
                "Với cổng USB type C, Modern Series có thể truyền dữ liệu với tốc độ cực cao tới 40Gbps, hoặc sạc nhanh nhờ hỗ trợ chuẩn Power Delivery.",
                "Âm thanh chất lượng cao cấp",
                "Tận hưởng những khoảnh khắc tuyệt vời khi nghe nhạc với MSI Modern 15 A11M 1024VN. Nâng cấp từ thế hệ MSI Modern 14, MSI Modern 15 A11M 1024VN trang bị công nghệ hỗ trợ lấy mẫu âm thanh tới 24bit / 192kHz, giúp bạn lắng nghe âm thanh một cách chân thật và sắc nét nhất.",
                "Bàn phím gõ thoải mái",
                "Hành trình phím 1.5mm cùng với độ phản hồi tốt giúp đem tới trải nghiệm gõ phím tuyệt với trên Modern. Bàn phím có đèn nền cực sáng, cho phép bạn dễ dàng nhận diện ngay cả trong môi trường tối.",
                "Kết nối đa dạng",
                " Trang bị 2 cổng USB-A và cổng USB Type C, dễ dàng kết nối theo nhu cầu của bạn. Đầu đọc thẻ micro SD và cổng xuất hình HDMI giúp thuận tiện hơn trong việc chụp hình, để bạn có thể thoải mái tận hưởng mọi khoảnh khắc cuộc sống. Với thiết kế tinh tế, sang trọng MSI Modern là sự lựa chọn hàng đầu với laptop sinh viên dành cho giới trẻ, giúp mang đến một vẻ ngoài siêu nổi bật và tràn đầy cá tính. Cũng như đủ sức chinh phục mọi khách hàng với vẻ ngoài chuyên nghiệp, tự tin. Sản phẩm phù hợp với giới văn phòng, hay những bạn trẻ mong muốn sử dụng một chiếc máy thanh lịch và nổi bật giữa đám đông.",
            ]
        },
    ])
    return (
        <div className="noindex">
            <div id="breadcrumb">
                <div className="main">
                    <div className="breadcrumbs container1">
                        <span className="showHere">Bạn đang ở: </span><a href="/" className="pathway">Trang chủ</a> <i className="fa fa-caret-right" />
                        <span><a href="/collections/laptop-asus-hoc-tap-va-lam-viec">Laptop Asus</a> <i className="fa fa-caret-right" /> Laptop Asus Vivobook 15 X515EA BR2045W</span>
                    </div>
                </div>
            </div>
            <div id="mainframe">
                <div className="container1">
                    <div id="maincontent">
                        <div id="system-message-container1">
                            <div id="system-message" />
                        </div>
                        <div className="page_content">
                            <div className="row">
                                <ProductThumbnail product={product} />
                                <ProductParameters product={product} />

                                <strong>

                                </strong>
                            </div>
                            <strong>

                                <br className="clr" />
                            </strong>
                            <div id="product_content_detail" className="row">
                                <strong>

                                </strong>
                                <div id="product_left" className="col-md-12 col-xs-12">
                                    <strong>

                                    </strong>
                                    <div role="tabpanel">
                                        <strong>

                                            {/* Nav tabs */}
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li role="presentation" className="active"><a href="#chitiet" aria-controls="chitiet" role="tab" data-toggle="tab">Mô tả sản phẩm</a></li>
                                                <li role="presentation"><a href="#dacdiem" aria-controls="dacdiem" role="tab" data-toggle="tab">Đặc điểm nổi bật</a></li>
                                                <li role="presentation"><a href="#hrvproducttabs" aria-controls="dacdiem" role="tab" data-toggle="tab">Thông tin bảo hành</a></li>
                                            </ul>
                                            {/* Tab panes */}
                                        </strong>
                                        <div className="tab-content">
                                            <strong>

                                            </strong>
                                            <TabpanelDacDiem product={product} />
                                            <TabpanelChitiet product={product} />
                                            <Tabpanelhrvproductabs product={product} />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="scrollup" href="#">Scroll</a>
        </div>
    );
}

export default Index;
