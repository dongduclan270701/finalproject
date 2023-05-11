import ListCategoryProduct from 'components/Header/Menu-Policy/list-category-product';
import BannerPR from 'components/Content/Homepage/Banner-PR'
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {
    const [imgBanner, setImageBanner] = useState(
        [
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_2.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_3.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_4.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_5.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_6.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_7.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_8.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_9.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_10.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_11.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_12.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_13.jpg?v=34252" },
            { url: "", src: "//theme.hstatic.net/1000026716/1000440777/14/slideshow_14.jpg?v=34252" },
        ]
    )
    const [PcGears, setPCGears] = useState(
        [
            {
                productName: "GVN VIPER i3050",
                realPrice: 22710000,
                SaleNowPrice: 22000000,
                img: "//product.hstatic.net/1000026716/product/viper_i3050_tang_man_63c58a14ef4f4b679cbcfdb5a7cbfe2c_large.jpg",
                percent: -3,
                src: ""
            },
            {
                productName: "GVN ProArt Plus 5 a3070",
                realPrice: 49510000,
                SaleNowPrice: 49000000,
                img: "//product.hstatic.net/1000026716/product/02_392d138953ac4a5d9429d6fedeba2397_large.jpg",
                percent: -1,
                src: ""
            },
            {
                productName: "GVN VIPER Plus i3070Ti",
                realPrice: 40970000,
                SaleNowPrice: 40000000,
                img: "//product.hstatic.net/1000026716/product/1_d564f20f590543e8a7525df8b9e832f6_large.jpg",
                percent: -2,
                src: ""
            },
            {
                productName: "GVN ProArt Plus 9 i3090Ti",
                realPrice: 86360000,
                SaleNowPrice: 84000000,
                img: "//product.hstatic.net/1000026716/product/proart_plus_9_3090ti_new_7e4315e3fbb04271b01dfca2792a3751_large.jpg",
                percent: -3,
                src: ""
            },
            {
                productName: "GVN PHANTOM Plus i4070Ti",
                realPrice: 65920000,
                SaleNowPrice: 65000000,
                img: "//product.hstatic.net/1000026716/product/01_a8cf6b03151b40f49de677381e6c6d54_large.jpg",
                percent: -1,
                src: ""
            },
            {
                productName: "GVN VIPER i3060",
                realPrice: 25220000,
                SaleNowPrice: 24000000,
                img: "//product.hstatic.net/1000026716/product/viper_i3060_370839d403824f3e87603eaf0cfb51cc_large.jpg",
                percent: -5,
                src: ""
            },
            {
                productName: "GVN PHANTOM Plus i4080",
                realPrice: 97000000,
                SaleNowPrice: 95000000,
                img: "//product.hstatic.net/1000026716/product/phantom_plus_i4080_e4b7ce237b0642a2825ebdf6cd88ef11_large.jpg",
                percent: -2,
                src: ""
            },
            {
                productName: "GVN PHANTOM Plus i3070Ti",
                realPrice: 62610000,
                SaleNowPrice: 60000000,
                img: "//product.hstatic.net/1000026716/product/phantom_plus_i3070_ti_26013be9b2b44a5a8d71f59e0b6b8196_large.jpg",
                percent: -4,
                src: ""
            },
            {
                productName: "GVN PHANTOM Plus i3070 WHITE",
                realPrice: 0,
                SaleNowPrice: 50000000,
                img: "//product.hstatic.net/1000026716/product/phantom_plus_i3070_white_20372657f667445983e40c1bbc652260_large.jpg",
                percent: 0,
                src: ""
            },
            {
                productName: "GVN MINION i1650 - White Edition",
                realPrice: 12290000,
                SaleNowPrice: 11790000,
                img: "//product.hstatic.net/1000026716/product/minion_i1650_white_fa1d53072f0f4c868e2e3e3f33fcf168_large.jpg",
                percent: -4,
                src: ""
            }
        ]
    )
    const [LaptopGaming, setLaptopGaming] = useState(
        [
            {
                productName: "Laptop gaming Lenovo Legion 5 15IAH7 82RC008LVN",
                realPrice: 33990000,
                SaleNowPrice: 27990000,
                img: "//product.hstatic.net/1000026716/product/gearvn-laptop-gaming-lenovo-legion-5-15iah7-82rc008lvn-1_ca9a0645fba34a2e970c3dc047055497_large.png",
                percent: -18,
                src: ""
            },
            {
                productName: "Laptop Gaming Gigabyte G5 GE 51VN263SH",
                realPrice: 25590000,
                SaleNowPrice: 20990000,
                img: "//product.hstatic.net/1000026716/product/g5-ge-51vn263sh-fix_3da6856774d849cf8c80548b6ef3f0cd_c55c38c0994f498b8ded543fd86fbeb4_large.png",
                percent: -18,
                src: ""
            },
            {
                productName: "Laptop Lenovo IdeaPad Gaming 3 15IAH7 82S9006YVN",
                realPrice: 26990000,
                SaleNowPrice: 20990000,
                img: "//product.hstatic.net/1000026716/product/82s9006yvn_08d56fe39a1542d9b1ad378bb2dd0fcd_large.png",
                percent: -22,
                src: ""
            },
            {
                productName: "Laptop gaming MSI Katana GF66 11UC 698VN",
                realPrice: 29990000,
                SaleNowPrice: 21890000,
                img: "//product.hstatic.net/1000026716/product/gearvn-laptop-gaming-msi-katana-gf66-11uc-698vn-1_14ce9424be3e4c27ab5db3a956b69c38_large.png",
                percent: -27,
                src: ""
            },
            {
                productName: "Laptop ASUS TUF Gaming F15 FX506LHB HN188W",
                realPrice: 20990000,
                SaleNowPrice: 16990000,
                img: "//product.hstatic.net/1000026716/product/gearvn-laptop-asus-tuf-gaming-f15-fx506lhb-hn188w-2_2cd5300c224b4c74ac58260d2e87f7f5_large.png",
                percent: -19,
                src: ""
            },
            {
                productName: "Laptop Gaming Acer Aspire 7 A715 42G R05G",
                realPrice: 20990000,
                SaleNowPrice: 15990000,
                img: "//product.hstatic.net/1000026716/product/laptop_gaming_acer_aspire_7_a715_42g_r05g_f9b4034f328d4211b9ffe51f7b1c4cbf_large.jpg",
                percent: -24,
                src: ""
            },
            {
                productName: "Laptop gaming Acer Aspire 7 A715 43G R8GA",
                realPrice: 22990000,
                SaleNowPrice: 17490000,
                img: "//product.hstatic.net/1000026716/product/r5-3050_1ca8d2e294ca4a3c8c875ac518beb714_large.png",
                percent: -24,
                src: ""
            },
            {
                productName: "Laptop gaming Acer Nitro 5 Eagle AN515 57 54MV",
                realPrice: 25990000,
                SaleNowPrice: 20990000,
                img: "//product.hstatic.net/1000026716/product/laptop_gaming_acer_nitro_5_eagle_an515_57_54mv_3e5cc4ba80be4c8595540963d469ccc3_large.jpg",
                percent: -19,
                src: ""
            },
            {
                productName: "Laptop gaming Acer Nitro 5 Tiger AN515 58 773Y",
                realPrice: 32990000,
                SaleNowPrice: 28990000,
                img: "//product.hstatic.net/1000026716/product/773y_5364964b798144f88c6137ff9a8afc60_large.png",
                percent: -12,
                src: ""
            },
            {
                productName: "Laptop gaming ASUS ROG Strix G15 G513IE HN246W",
                realPrice: 26990000,
                SaleNowPrice: 22490000,
                img: "//product.hstatic.net/1000026716/product/hn246w_40b3893ac444419a99964eaea1dd4138_large.png",
                percent: -17,
                src: ""
            },
        ]
    )
    const [LAPTOP, setLAPTOP] = useState(
        [
            {
                productName: "Laptop Lenovo V14 G2 ITL 82KA00RRVN",
                realPrice: 15990000,
                SaleNowPrice: 15990000,
                img: "//product.hstatic.net/1000026716/product/82ka00rrvn_90b668072e554dbfb8c8dbb3df228f2e_large.png",
                percent: -31,
                src: ""
            },
            {
                productName: "Laptop Lenovo IdeaPad 5 Pro 14ITL6 82L300M9VN",
                realPrice: 22990000,
                SaleNowPrice: 17490000,
                img: "//product.hstatic.net/1000026716/product/82l300m9vn_1328f6b2bcf34a129007923a137fb9a7_large.png",
                percent: -24,
                src: ""
            },
            {
                productName: "Laptop ASUS Vivobook 14X OLED A1403ZA KM067W",
                realPrice: 20290000,
                SaleNowPrice: 17490000,
                img: "//product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-14x-oled-a1403za-km067w-1_3c57a7dbeb8d40619f4794c19c17a694_large.png",
                percent: -14,
                src: ""
            },
            {
                productName: "Laptop Asus Vivobook 15X OLED A1503ZA L1151W",
                realPrice: 16990000,
                SaleNowPrice: 14690000,
                img: "//product.hstatic.net/1000026716/product/i3_bce8c31dc65d4496adb27e465903a0e9_large.png",
                percent: -14,
                src: ""
            },
            {
                productName: "Laptop ASUS Vivobook 15X OLED A1503ZA L1421W",
                realPrice: 20790000,
                SaleNowPrice: 17990000,
                img: "//product.hstatic.net/1000026716/product/l1421w_2b115562199d462b82b92e89e95b2473_large.png",
                percent: -13,
                src: ""
            },
            {
                productName: "Laptop Dell Inspiron T7420 N4I5021W Silver",
                realPrice: 24890000,
                SaleNowPrice: 19990000,
                img: "//product.hstatic.net/1000026716/product/1_c46c98becd65476993ab7a77ec5a03bb_large.png",
                percent: -20,
                src: ""
            },
            {
                productName: "Laptop Dell Vostro 13 5320 V3I7005W Gray",
                realPrice: 28990000,
                SaleNowPrice: 26490000,
                img: "//product.hstatic.net/1000026716/product/v3i7005w-fix_2c4eb0882c0e4e3a8f07695f511797f4_large.png",
                percent: -9,
                src: ""
            },
            {
                productName: "Laptop HP Pavilion 15 EG2036TX 6K782PA",
                realPrice: 20590000,
                SaleNowPrice: 19490000,
                img: "//product.hstatic.net/1000026716/product/1_726e3cb5e5864b7999040c221f610f32_large.png",
                percent: -5,
                src: ""
            },
            {
                productName: "Laptop Asus Vivobook OLED M1503QA L1044W",
                realPrice: 19290000,
                SaleNowPrice: 19290000,
                img: "//product.hstatic.net/1000026716/product/gearvn-laptop-asus-vivobook-oled-m1503qa-l1044w-1_4b922183b924494898e421472f0faec2_large.png",
                percent: -12,
                src: ""
            },
            {
                productName: "Laptop HP Pavilion 15 EG0506TX 46M05PA",
                realPrice: 19990000,
                SaleNowPrice: 19590000,
                img: "//product.hstatic.net/1000026716/product/laptop-hp-pavilion-15-eg0506tx-46m05pa_3f2e2cb97f6b4ed192752aa774e1b9b4_large.jpg",
                percent: -2,
                src: ""
            },
        ]
    )
    const [MONITOR, setMANHINH] = useState(
        [
            {
                productName: 'Màn hình GIGABYTE G24F 2 24" IPS 180Hz chuyên game',
                realPrice: 5990000,
                SaleNowPrice: 3900000,
                img: "//product.hstatic.net/1000026716/product/gigabyte_g24f_2_gearvn_bc7aac7da42c448bb4b19f63a6dd4706_c4c396c336e942c6bc6b70fe1ed131a7_large.jpg",
                percent: -35,
                src: ""
            },
            {
                productName: 'Màn hình Philips 242M8 24" IPS 144Hz Freesync chuyên game',
                realPrice: 4890000,
                SaleNowPrice: 3590000,
                img: "//product.hstatic.net/1000026716/product/323636560_862805858257243_4195203838265099200_n_1b626a12129c43d3b12ed00de72c4bd0_large.jpg",
                percent: -27,
                src: ""
            },
            {
                productName: 'Màn hình Asus TUF GAMING VG249Q1A 24" IPS 165Hz Gsync compatible chuyên game',
                realPrice: 6390000,
                SaleNowPrice: 3990000,
                img: "//product.hstatic.net/1000026716/product/image-removebg-preview__10__05bcf6f0154b454db686a24404f55d4c_large.png",
                percent: -38,
                src: ""
            },
            {
                productName: 'Màn hình ASUS VZ24EHE 24" IPS 75Hz viền mỏng',
                realPrice: 4490000,
                SaleNowPrice: 2890000,
                img: "//product.hstatic.net/1000026716/product/image-removebg-preview__6__675c448e152a4fc999e79bdb36aa1a2f_large.png",
                percent: -36,
                src: ""
            },
            {
                productName: 'Màn hình ViewSonic VX2405-P-MHD 24" IPS 144Hz 1ms chuyên game',
                realPrice: 5690000,
                SaleNowPrice: 3590000,
                img: "//product.hstatic.net/1000026716/product/image-removebg-preview__11__71f5299c974b48e9875a623f3212b71a_large.png",
                percent: -37,
                src: ""
            },
            {
                productName: 'Màn hình ViewSonic VA2432-H 24" IPS 75Hz viền mỏng',
                realPrice: 4550000,
                SaleNowPrice: 2790000,
                img: "//product.hstatic.net/1000026716/product/1-ec_b59555789944400e9cb252fb688bbc28-removebg-preview_398250d4c0ac499ca6d8079b829421c9_large.png",
                percent: -39,
                src: ""
            },
            {
                productName: 'Màn hình ViewSonic VA2732-H 27" IPS 75Hz viền mỏng',
                realPrice: 4590000,
                SaleNowPrice: 3490000,
                img: "//product.hstatic.net/1000026716/product/image-removebg-preview__3__827d2fe2142944e090feb91439b4475a_large.png",
                percent: -24,
                src: ""
            },
            {
                productName: 'Màn hình AOC 27B1H 27" IPS Ultraslim chuyên game',
                realPrice: 4490000,
                SaleNowPrice: 3290000,
                img: "//product.hstatic.net/1000026716/product/aoc-27b1h-27-ips-ultraslim-chuyen-game_b24f9599731c42df805705a5ef2c51a5_large.gif",
                percent: -27,
                src: ""
            },
            {
                productName: 'Màn hình LG 24GN650-B 24" IPS 144Hz HDR10 Freesync chuyên game',
                realPrice: 6090000,
                SaleNowPrice: 4190000,
                img: "//product.hstatic.net/1000026716/product/image-removebg-preview__5__676906c35bad4fc2a438e3f13342c80a_large.png",
                percent: -31,
                src: ""
            },
            {
                productName: 'Màn hình ACER KA272 27" IPS 75Hz',
                realPrice: 4690000,
                SaleNowPrice: 3250000,
                img: "//product.hstatic.net/1000026716/product/image-removebg-preview__22__15b72d19e23049edac52257d1a42bedc_large.png",
                percent: -31,
                src: ""
            },
        ]
    )
    const [KEYBOARD, setKEYBOARD] = useState(
        [
            {
                productName: 'Bàn phím cơ AKKO MOD007 PC Blue on White',
                realPrice: 2599000,
                SaleNowPrice: 2490000,
                img: "//product.hstatic.net/1000026716/product/thumbphim-recovered_75cf14850d4247789be5a1763968f569_large.gif",
                percent: -4,
                src: ""
            },
            {
                productName: 'Bàn phím cơ AKKO 3108 RF Ocean Star',
                realPrice: 1599000,
                SaleNowPrice: 1490000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_a782e6979e0d437895af75c76499da29_large.gif",
                percent: -7,
                src: ""
            },
            {
                productName: 'Bàn phím cơ AKKO 3108 RF Matcha Red Bean',
                realPrice: 1599000,
                SaleNowPrice: 1490000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_58513fa145114b63a6139b4dcc08bda5_large.gif",
                percent: -7,
                src: ""
            },
            {
                productName: 'Bàn phím cơ AKKO 3087 RF Ocean Star',
                realPrice: 1499000,
                SaleNowPrice: 1390000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_62954efae38d49978b599d7e9405b5a1_large.gif",
                percent: -7,
                src: ""
            },
            {
                productName: 'Bàn phím cơ AKKO 3087 RF Matcha Red Bean',
                realPrice: 1499000,
                SaleNowPrice: 1390000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_397520cac92a479ebfb0d1541293e513_large.gif",
                percent: -7,
                src: ""
            },
            {
                productName: 'Bàn phím Leopold FC900RBT Bluetooth Coral Blue Limited Edition',
                realPrice: 3750000,
                SaleNowPrice: 3600000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_c89256bf4c9b4f218a4c2675b6b1ecbb_large.gif",
                percent: -4,
                src: ""
            },
            {
                productName: 'Bàn phím Leopold FC750RBT Bluetooth Coral Blue Limited Edition',
                realPrice: 3550000,
                SaleNowPrice: 3400000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_c9b4c04a0a54411ba1de790c6e30a362_large.gif",
                percent: -4,
                src: ""
            },
            {
                productName: 'Bàn phím Leopold FC660M Bluetooth Coral Blue Limited Edition',
                realPrice: 3350000,
                SaleNowPrice: 3250000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_6a15b6783ea145c2b3c1c5c26e31090b_large.gif",
                percent: -3,
                src: ""
            },
            {
                productName: 'Bàn phím Leopold FC900RBT Bluetooth Milk Turquoise Limited Edition',
                realPrice: 3750000,
                SaleNowPrice: 3600000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_43758d8f9f79406a80500a54ba35eea5_large.gif",
                percent: -4,
                src: ""
            },
            {
                productName: 'Bàn phím Leopold FC750RBT Bluetooth Milk Turquoise Limited Edition',
                realPrice: 3550000,
                SaleNowPrice: 3400000,
                img: "//product.hstatic.net/1000026716/product/thumbphim_b1fabfab30e74ea185a1ffe1f0f614b6_large.gif",
                percent: -4,
                src: ""
            },
        ]
    )

    return (
        <>
            <div className="gearvn-header-navigation ">
                <div className="row gearvn-content-section gearvn-header-navigation-content padding-10-0 container1">
                    {/*MENU LEFT*/}
                    {/*<span class="click-list"><i class="fa fa-bars"></i> Danh mục sản phẩm</span>*/}
                    <div className="gearvn-header-menu">
                        <div className="cat-menu gearvn-cat-menu">
                            <nav id="megamenu-nav" className="megamenu-nav">
                                <ol className="megamenu-nav-primary responsive" id="megamenu-nav-main">
                                    <ListCategoryProduct />
                                </ol>
                            </nav>
                        </div>
                    </div>
                    {/*MENU LEFT*/}
                    {/*NAVIGATION RIGHT*/}
                    <div className="gearvn-header-navigation-block">
                        <div className="gearvn-header-banner">
                            <div className="left">
                                <div className="slider-wrap">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <NavLink to={imgBanner[0].url}>
                                                    <img className="d-block w-100" src={imgBanner[0].src} alt="..." />
                                                </NavLink>
                                            </div>
                                            {imgBanner.slice(-13).map((item, index) => {
                                                return <div class="carousel-item" key={index}>
                                                    <NavLink to={item.url}>
                                                        <img className="d-block w-100" src={item.src} alt="..." />
                                                    </NavLink>
                                                </div>
                                            })}
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="sub-banner-wrap i100">
                                    <NavLink to="" className="sub-item">
                                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/solid4.jpg?v=34252" />
                                    </NavLink>
                                    <NavLink to="" className="sub-item">
                                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/solid5.jpg?v=34252" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="right i100">
                                <div className="sub-item-right">
                                    <NavLink to="" className="sub-item">
                                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/solid1.jpg?v=34252" />
                                    </NavLink>
                                    <NavLink to="" className="sub-item">
                                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/solid2.jpg?v=34252" />
                                    </NavLink>
                                    <NavLink to="" className="sub-item">
                                        <img alt="" src="//theme.hstatic.net/1000026716/1000440777/14/solid3.jpg?v=34252" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*END NAVIGATION RIGHT*/}
                </div>
            </div>
            <div className>
                <div id="mainframe">
                    <BannerPR />
                    <div className="container1 pd0-sm-mb">
                        <div id="featured-new-product">
                            <h2 className="new-product-title">
                                XẢ KHO - HÀNG TỐT GIÁ RẺ
                            </h2>
                            <NavLink className="gearvn-new-products-hot-view-all" to="">
                                Xem tất cả <i className="fa fa-chevron-right" />
                            </NavLink>
                            <ul className="owl-carousel owl-loaded owl-drag">
                                <div className="owl-stage-outer">
                                    <div className="owl-stage" style={{ width: '12950px', transform: 'translate3d(-1295px, 0px, 0px)', transition: 'all 0.25s ease 0s' }}>
                                        <div className="owl-item" style={{ width: '244px', marginRight: '15px' }}>
                                            <li>
                                                <div className="new-product-row">
                                                    <NavLink to="">
                                                        <div className="new-product-img">
                                                            <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_b2a70cdab17b4379a643bed17b1297a9_large.gif" alt="Chuột Havit MS989GT Black" /></div>
                                                        <div className="new-product-percent">-26%</div>
                                                        <h2 className="new-product-name">Chuột Havit MS989GT Black</h2>
                                                        <div className="new-product-info">
                                                            <div className="new-product-price pull-left"><del>190,000₫</del><br /><span className="new-product-sale">140,000₫</span></div>
                                                            {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                            <div className="clearfix" />
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_69df318d17614f7c9847e306fd298da8_large.gif" alt="Hub Havit Type C HB41" /></div>
                                                    <div className="new-product-percent">-33%</div>
                                                    <h2 className="new-product-name">Hub Havit Type C HB41</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>299,000₫</del><br /><span className="new-product-sale">199,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/e-dra-em604w_16cede905dfc4e4aa34450a58c854f12_large.gif" alt="Chuột không dây E-Dra EM604W" /></div>
                                                    <h2 className="new-product-name">Chuột không dây E-Dra EM604W</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">200,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/displayport-unitek-y-c-608bk-2m_40e3c56b82a14a01869d6c2446fbacb0_large.gif" alt="Dây Cáp Displayport Unitek Y-C 608BK 2m" /></div>
                                                    <h2 className="new-product-name">Dây Cáp Displayport Unitek Y-C 608BK 2m</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">230,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_672eb69721514240a39b6a0f6a8f0e9d_large.gif" alt="Chuột không dây MSI Prestige M98" /></div>
                                                    <div className="new-product-percent">-29%</div>
                                                    <h2 className="new-product-name">Chuột không dây MSI Prestige M98</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>350,000₫</del><br /><span className="new-product-sale">250,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item active" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/wifi-tp-link-chuan-n-tl-wn725n-150mbps_3989a0137e1a476eb1882725ae07f360_large.gif" alt="USB thu sóng WiFi TP-LInk chuẩn N TL-WN725N 150Mbps" /></div>
                                                    <h2 className="new-product-name">USB thu sóng WiFi TP-LInk chuẩn N TL-WN725N 150Mbps</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">250,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item active" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/asus_rt-n12__chuan_n300__ho_tro_tinh_nang_lap_song_2906a3482db647d2bb695e925915068c_large.jpg" alt="ASUS RT-N12+ Chuẩn N300, hỗ trợ tính năng lặp sóng" /></div>
                                                    <div className="new-product-percent">-41%</div>
                                                    <h2 className="new-product-name">ASUS RT-N12+ Chuẩn N300, hỗ trợ tính năng lặp sóng</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>490,000₫</del><br /><span className="new-product-sale">290,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item active" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/loa-bluetooth-kiem-dong-ho-bao-thuc-radio-dang-guong-havit-m3_216db31a36ee46538595228c1acae271_large.gif" alt="Loa Bluetooth kiêm đồng hồ báo thức Radio dạng gương Havit M3" /></div>
                                                    <div className="new-product-percent">-15%</div>
                                                    <h2 className="new-product-name">Loa Bluetooth kiêm đồng hồ báo thức Radio dạng gương Havit M3</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>350,000₫</del><br /><span className="new-product-sale">299,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item active" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/rapoo-v1l_5bfe7ffe21d048d58226b48869702000_large.gif" alt="Lót chuột Rapoo V1L" /></div>
                                                    <h2 className="new-product-name">Lót chuột Rapoo V1L</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">300,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item active" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/e-dra-em630-ultra-light_8106af8696174e03af8ae44cfe292938_large.gif" alt="Chuột E-DRA EM630 Ultra Light" /></div>
                                                    <div className="new-product-percent">-11%</div>
                                                    <h2 className="new-product-name">Chuột E-DRA EM630 Ultra Light</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>369,000₫</del><br /><span className="new-product-sale">330,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/zidli-zh-7rb_52b0d52fccab4611abc78952d2aa11d7_large.gif" alt="Tai nghe Zidli ZH 7RB" /></div>
                                                    <div className="new-product-percent">-29%</div>
                                                    <h2 className="new-product-name">Tai nghe Zidli ZH 7RB</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>490,000₫</del><br /><span className="new-product-sale">350,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/zidli-score-sh320v-pink_4d0bddae84d447769daae27a31d7e0e2_large.gif" alt="Tai nghe Zidli SCORE SH320V Pink" /></div>
                                                    <div className="new-product-percent">-32%</div>
                                                    <h2 className="new-product-name">Tai nghe Zidli SCORE SH320V Pink</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>539,000₫</del><br /><span className="new-product-sale">369,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumbchuot_9dd6189393134225b81da1c58b2c66e9_large.png" alt="Chuột Rapoo M650 Silent Germany" /></div>
                                                    <div className="new-product-percent">-34%</div>
                                                    <h2 className="new-product-name">Chuột Rapoo M650 Silent Germany</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>590,000₫</del><br /><span className="new-product-sale">390,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_b3188ea66c6e4de4ab4fcbbcbdddc495_large.gif" alt="Chuột Rapoo M650 Silent England" /></div>
                                                    <div className="new-product-percent">-34%</div>
                                                    <h2 className="new-product-name">Chuột Rapoo M650 Silent England</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>590,000₫</del><br /><span className="new-product-sale">390,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_583dbab7578a4c3790fb1ee1743d37df_large.gif" alt="Phụ kiện Cooler Master ADDRESSABLE RGB LED STRIP" /></div>
                                                    <div className="new-product-percent">-34%</div>
                                                    <h2 className="new-product-name">Phụ kiện Cooler Master ADDRESSABLE RGB LED STRIP</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>590,000₫</del><br /><span className="new-product-sale">390,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/corsair-harpoon-rgb_84c1a21cd6574fac8f1d7115d7d1a632_large.gif" alt="Chuột Corsair Harpoon RGB" /></div>
                                                    <h2 className="new-product-name">Chuột Corsair Harpoon RGB</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">390,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-2h_e040c5d0264b4af798dc46a6c4f6ca7b_large.gif" alt="Chuột Asus TUF Gaming M3" /></div>
                                                    <div className="new-product-percent">-42%</div>
                                                    <h2 className="new-product-name">Chuột Asus TUF Gaming M3</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>690,000₫</del><br /><span className="new-product-sale">400,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_f5bd8320a91a461fbff4456a4a2049ce_large.gif" alt="Tai nghe Zidli FCore FH11U RGB 7.1 Pink" /></div>
                                                    <div className="new-product-percent">-25%</div>
                                                    <h2 className="new-product-name">Tai nghe Zidli FCore FH11U RGB 7.1 Pink</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>550,000₫</del><br /><span className="new-product-sale">410,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/rapoo-v600-red_b05c4f14161e4086b13559d1c5ddf727_large.gif" alt="Tay cầm Rapoo V600 Red" /></div>
                                                    <div className="new-product-percent">-26%</div>
                                                    <h2 className="new-product-name">Tay cầm Rapoo V600 Red</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>590,000₫</del><br /><span className="new-product-sale">435,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/fan-xigmatek-starz---x22a-argb---pack-x3_-controller_0bf985f82b934b1bb354a90640cdaa91_large.gif" alt="Fan XIGMATEK STARZ - X22A ARGB - PACK x3, CONTROLLER" /></div>
                                                    <div className="new-product-percent">-8%</div>
                                                    <h2 className="new-product-name">Fan XIGMATEK STARZ - X22A ARGB - PACK x3, CONTROLLER</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>490,000₫</del><br /><span className="new-product-sale">450,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/loa-soundmax-a700_82cb4d70dfe44b7b991cf0ef13d54ee8_large.gif" alt="Loa SoundMax A700" /></div>
                                                    <div className="new-product-percent">-4%</div>
                                                    <h2 className="new-product-name">Loa SoundMax A700</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>500,000₫</del><br /><span className="new-product-sale">480,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/deepcool-ag400-argb-white_fb95bbbef730472da3eb3954a19a5280_large.gif" alt="Tản nhiệt DEEPCOOL AG400 ARGB White" /></div>
                                                    <div className="new-product-percent">-38%</div>
                                                    <h2 className="new-product-name">Tản nhiệt DEEPCOOL AG400 ARGB White</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>790,000₫</del><br /><span className="new-product-sale">490,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/havit-ms878_da1cfe8c729a443d9b95d274478e1513_large.gif" alt="Chuột Gaming Havit MS878" /></div>
                                                    <div className="new-product-percent">-25%</div>
                                                    <h2 className="new-product-name">Chuột Gaming Havit MS878</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>650,000₫</del><br /><span className="new-product-sale">490,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_643c8807fa134e91a9903a26771ad30e_large.gif" alt="Case Jetek Mini I8-22B (ITX)" /></div>
                                                    <div className="new-product-percent">-17%</div>
                                                    <h2 className="new-product-name">Case Jetek Mini I8-22B (ITX)</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>590,000₫</del><br /><span className="new-product-sale">490,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_96b56bb7b5324ca29eb271798f6925f1_large.gif" alt="Chuột Newmen GX6 Plus Pink" /></div>
                                                    <h2 className="new-product-name">Chuột Newmen GX6 Plus Pink</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">550,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/e-dra-ek387l-pink_eb87fc55596a4a97b65909f000e8ec13_large.gif" alt="Bàn phím E-Dra EK387L Pink" /></div>
                                                    <div className="new-product-percent">-14%</div>
                                                    <h2 className="new-product-name">Bàn phím E-Dra EK387L Pink</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>689,000₫</del><br /><span className="new-product-sale">590,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/human-motion-t6-1w-trang_32e7e5a0c7dc4b3f902e3bae1d6ff4c3_large.gif" alt="Giá treo màn hình Human Motion T6-1W Trắng" /></div>
                                                    <div className="new-product-percent">-14%</div>
                                                    <h2 className="new-product-name">Giá treo màn hình Human Motion T6-1W Trắng</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>690,000₫</del><br /><span className="new-product-sale">590,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/microlab-m-108bt_b03137d6ba52448cb73a08d5bd5cf0f9_large.gif" alt="Loa Microlab M-108BT" /></div>
                                                    <div className="new-product-percent">-11%</div>
                                                    <h2 className="new-product-name">Loa Microlab M-108BT</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>720,000₫</del><br /><span className="new-product-sale">639,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_157422ae53ae40cc833cdd31f3349d93_large.gif" alt="Bàn phím Newmen GM520 Pink" /></div>
                                                    <div className="new-product-percent">-47%</div>
                                                    <h2 className="new-product-name">Bàn phím Newmen GM520 Pink</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,230,000₫</del><br /><span className="new-product-sale">650,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_18ff4e47836148899b441c77e32af2e3_large.gif" alt="Tai nghe Bluetooth Earbuds SoundPeats Mac 2" /></div>
                                                    <div className="new-product-percent">-19%</div>
                                                    <h2 className="new-product-name">Tai nghe Bluetooth Earbuds SoundPeats Mac 2</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>850,000₫</del><br /><span className="new-product-sale">690,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumb-xa-kho_e648fb074eb54ff899118ae7e4ba5a17_large.gif" alt="Giá treo màn hình Human Motion T6 Pro-1W Trắng" /></div>
                                                    <div className="new-product-percent">-19%</div>
                                                    <h2 className="new-product-name">Giá treo màn hình Human Motion T6 Pro-1W Trắng</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>890,000₫</del><br /><span className="new-product-sale">720,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/e-dra-ek3104v2-pink_94eff3b5798c404ebd3093b900659bff_large.gif" alt="Bàn phím E-DRA EK3104v2 Pink" /></div>
                                                    <div className="new-product-percent">-13%</div>
                                                    <h2 className="new-product-name">Bàn phím E-DRA EK3104v2 Pink</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>859,000₫</del><br /><span className="new-product-sale">750,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/human-motion-t6-pro-1b-den_f42a387dff814d78a3fe35f0b052e9ef_large.gif" alt="Giá treo màn hình Human Motion T6 Pro-1B Đen" /></div>
                                                    <div className="new-product-percent">-16%</div>
                                                    <h2 className="new-product-name">Giá treo màn hình Human Motion T6 Pro-1B Đen</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>890,000₫</del><br /><span className="new-product-sale">750,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/ram-g.skill-ripjaws-v-1x8gb-2800-ddr4-_f4-2800c17s-8gvr__74a0d50b9df9406a9a79bcf80e21afa1_large.gif" alt="RAM G.SKILL Ripjaws V 1x8GB 2800 DDR4 (F4-2800C17S-8GVR)" /></div>
                                                    <div className="new-product-percent">-24%</div>
                                                    <h2 className="new-product-name">RAM G.SKILL Ripjaws V 1x8GB 2800 DDR4 (F4-2800C17S-8GVR)</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>990,000₫</del><br /><span className="new-product-sale">750,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/north-bayou-nb-f100a_98f739564f82443a93d51cc0746b79cc_large.gif" alt="Giá treo màn hình máy tính North Bayou NB-F100A" /></div>
                                                    <div className="new-product-percent">-29%</div>
                                                    <h2 className="new-product-name">Giá treo màn hình máy tính North Bayou NB-F100A</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,090,000₫</del><br /><span className="new-product-sale">770,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/deepcool-ag400-argb_c7bb2b9371094b749b473666b7812fb9_large.gif" alt="Tản nhiệt DEEPCOOL AG400 ARGB" /></div>
                                                    <h2 className="new-product-name">Tản nhiệt DEEPCOOL AG400 ARGB</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">790,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/north-bayou-nb-g40-bac_b94d80de90b24745ab50495e96186538_large.gif" alt="Giá treo màn hình máy tính North Bayou NB-G40 Bạc" /></div>
                                                    <div className="new-product-percent">-34%</div>
                                                    <h2 className="new-product-name">Giá treo màn hình máy tính North Bayou NB-G40 Bạc</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,190,000₫</del><br /><span className="new-product-sale">790,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/loa-may-tinh-edra---egs01w_a7acc628bca246438aa91b470beefd41_large.gif" alt="Loa máy tính Edra - EGS01W" /></div>
                                                    <h2 className="new-product-name">Loa máy tính Edra - EGS01W</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">790,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/case-xigmatek-fadil-queen-1f-_1-fan-rgb__0110e77ed78248f18b7ec907556cc280_large.gif" alt="Case XIGMATEK FADIL QUEEN 1F (1 fan RGB)" /></div>
                                                    <div className="new-product-percent">-11%</div>
                                                    <h2 className="new-product-name">Case XIGMATEK FADIL QUEEN 1F (1 fan RGB)</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>890,000₫</del><br /><span className="new-product-sale">790,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/logitech-g304-lightspeed-wireless-white_674944c8184f46ebbaec9337bcf4e7e1_large.gif" alt="Chuột Logitech G304 Lightspeed Wireless White" /></div>
                                                    <div className="new-product-percent">-28%</div>
                                                    <h2 className="new-product-name">Chuột Logitech G304 Lightspeed Wireless White</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,090,000₫</del><br /><span className="new-product-sale">790,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/asus-rog-gladius-ii-core_7ee90debed2941d28cda5de9f08aef7f_large.gif" alt="Chuột Gaming ASUS ROG Gladius II Core" /></div>
                                                    <div className="new-product-percent">-28%</div>
                                                    <h2 className="new-product-name">Chuột Gaming ASUS ROG Gladius II Core</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,090,000₫</del><br /><span className="new-product-sale">790,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/thumbtainghe_b12fbad5ddd944e796d89bfc872cde5e_large.gif" alt="Loa SoundMax SB206" /></div>
                                                    <div className="new-product-percent">-12%</div>
                                                    <h2 className="new-product-name">Loa SoundMax SB206</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>990,000₫</del><br /><span className="new-product-sale">870,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/asus-tuf-gaming-h3_55fb2fca09f84787a05126cb615c4251_large.gif" alt="Tai nghe Asus TUF Gaming H3" /></div>
                                                    <div className="new-product-percent">-18%</div>
                                                    <h2 className="new-product-name">Tai nghe Asus TUF Gaming H3</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,090,000₫</del><br /><span className="new-product-sale">890,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/cooler-master-notepal-x150r_7c1212ab3ee445dcbb0a7cdc7c1ba45c_large.gif" alt="Đế Tản Nhiệt COOLER MASTER NOTEPAL X150R" /></div>
                                                    <div className="new-product-percent">-10%</div>
                                                    <h2 className="new-product-name">Đế Tản Nhiệt COOLER MASTER NOTEPAL X150R</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,050,000₫</del><br /><span className="new-product-sale">950,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/webcam-rapoo-c280-2k-1440p_71f4705f52be4442bdd1e129395c6e3f_large.gif" alt="Webcam Rapoo C280 2K 1440p" /></div>
                                                    <div className="new-product-percent">-29%</div>
                                                    <h2 className="new-product-name">Webcam Rapoo C280 2K 1440p</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,399,000₫</del><br /><span className="new-product-sale">990,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/cooler-master-mm730-white_86e0b468a693443a9cbe9cfa51332496_large.gif" alt="Chuột Cooler Master MM730 White" /></div>
                                                    <h2 className="new-product-name">Chuột Cooler Master MM730 White</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">1,000,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/cooler-master-mm730-rgb_2ebace4dfcb748318f3d1427828194eb_large.gif" alt="Chuột Cooler Master MM730 RGB" /></div>
                                                    <h2 className="new-product-name">Chuột Cooler Master MM730 RGB</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><br /><span className="new-product-sale">1,000,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/cooler-master-hyper-212-argb-turbo_b9e2029743e648e7a81e804b51e92b66_large.gif" alt="Tản nhiệt Cooler Master Hyper 212 ARGB TURBO" /></div>
                                                    <div className="new-product-percent">-8%</div>
                                                    <h2 className="new-product-name">Tản nhiệt Cooler Master Hyper 212 ARGB TURBO</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,190,000₫</del><br /><span className="new-product-sale">1,090,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/human-motion-t2-1w-trang_514c1612acfb41f0b6a2f5ba9c0216a0_large.gif" alt="Giá treo màn hình Human Motion T2-1W Trắng" /></div>
                                                    <div className="new-product-percent">-18%</div>
                                                    <h2 className="new-product-name">Giá treo màn hình Human Motion T2-1W Trắng</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,450,000₫</del><br /><span className="new-product-sale">1,190,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div><div className="owl-item" style={{ width: '244px', marginRight: '15px' }}><li>
                                            <div className="new-product-row">
                                                <NavLink to="">
                                                    <div className="new-product-img">
                                                        <img className="new-product-thumbnail" src="//product.hstatic.net/1000026716/product/hyperdrive-5-in-1-for-imac-24-hd34a6_79288f988ed644c2a03a498a4a1924dc_large.gif" alt="Cổng chuyển HyperDrive 5 in 1 for iMac 24 HD34A6" /></div>
                                                    <div className="new-product-percent">-14%</div>
                                                    <h2 className="new-product-name">Cổng chuyển HyperDrive 5 in 1 for iMac 24 HD34A6</h2>
                                                    <div className="new-product-info">
                                                        <div className="new-product-price pull-left"><del>1,390,000₫</del><br /><span className="new-product-sale">1,190,000₫</span></div>
                                                        {/*<span class="new-product-buyer pull-right"><i class="fa fa-user"></i><br/>359</span>*/}
                                                        <div className="clearfix" />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        </li>
                                        </div></div></div><div className="owl-nav"><div className="owl-prev"><span className="fa fa-chevron-left click-fa-top" aria-hidden="true" /></div><div className="owl-next"><span className="fa fa-chevron-right" aria-hidden="true" /></div></div><div className="owl-dots"><div className="owl-dot"><span /></div><div className="owl-dot active"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div><div className="owl-dot"><span /></div></div></ul>
                        </div>
                        <div id="featured-product">
                            <div style={{ position: 'relative' }}>
                                <h2 className="new-product-title">
                                    PC GEARVN - MIỄN PHÍ GIAO HÀNG TOÀN QUỐC
                                </h2>
                                <NavLink className="gearvn-new-products-hot-view-all" to="">
                                    Xem tất cả <i className="fa fa-chevron-right" />
                                </NavLink>
                            </div>
                            <div className="loop-pro">
                                <div className="module-products row">
                                    {PcGears.map((item, index) => {
                                        return <div className="col-sm-4 col-xs-12 padding-none col-fix20" key={index}>
                                            <div className="product-row">
                                                <NavLink to="">
                                                </NavLink>
                                                <div className="product-row-img">
                                                    <NavLink to="">
                                                        <img className="product-row-thumbnail" src={item.img} alt={item.productName} />
                                                    </NavLink>
                                                    <div className="product-row-price-hover">
                                                        <NavLink to="">
                                                            <div className="product-row-note pull-left">Click để xem chi tiết</div>
                                                        </NavLink>
                                                        <NavLink to="" className="product-row-btnbuy pull-right">Đặt hàng</NavLink>
                                                    </div>
                                                </div>
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

                                    <div className="clearfix" />
                                </div>
                                <div className="text-center">
                                    <div className="pagination">
                                        <ul className="pagination-list">
                                            <li className="hidden-phone current"><a title={1} href className="pagenav">1</a></li>
                                            <li className="hidden-phone"><a title={2} href className="pagenav">2</a></li>
                                            <li><a href title="Trang sau" className="pagenav"><i className="fa fa-chevron-right" /></a></li>
                                        </ul>
                                        <input type="hidden" name="limitstart" defaultValue={0} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="featured-product-3">
                            <div style={{ position: 'relative' }}>
                                <h2 className="new-product-title">
                                    LAPTOP GAMING BÁN CHẠY
                                </h2>
                                <NavLink className="gearvn-new-products-hot-view-all" to="">
                                    Xem tất cả <i className="fa fa-chevron-right" />
                                </NavLink>
                            </div>
                            <div className="loop-pro">
                                <div className="module-products row">
                                    {LaptopGaming.map((item, index) => {
                                        return <div className="col-sm-4 col-xs-12 padding-none col-fix20" key={index}>
                                            <div className="product-row">
                                                <NavLink to="">
                                                </NavLink><div className="product-row-img"><NavLink to={item.src}>
                                                    <img className="product-row-thumbnail" src={item.img} alt={item.productName} />
                                                </NavLink><div className="product-row-price-hover"><NavLink to="">
                                                    <div className="product-row-note pull-left">Click để xem chi tiết</div>
                                                </NavLink><NavLink to="" className="product-row-btnbuy pull-right">Đặt hàng</NavLink></div></div>
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

                                    <div className="clearfix" />
                                </div>
                                <div className="text-center">
                                    <div className="pagination">
                                        <ul className="pagination-list">
                                            <li className="hidden-phone current"><a title={1} href className="pagenav">1</a></li>
                                            <li className="hidden-phone"><a title={2} href className="pagenav">2</a></li>
                                            <li className="hidden-phone"><a title={3} href className="pagenav">3</a></li>
                                            <li><a title="Trang sau" href className="pagenav"><i className="fa fa-chevron-right" /></a></li>
                                        </ul>
                                        <input type="hidden" name="limitstart" defaultValue={0} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="featured-product-4">
                            <div style={{ position: 'relative' }}>
                                <h2 className="new-product-title">
                                    LAPTOP BÁN CHẠY
                                </h2>
                                <NavLink className="gearvn-new-products-hot-view-all" to="">
                                    Xem tất cả <i className="fa fa-chevron-right" />
                                </NavLink>
                            </div>
                            <div className="loop-pro">
                                <div className="module-products row">
                                    {LAPTOP.map((item, index) => {
                                        return <div className="col-sm-4 col-xs-12 padding-none col-fix20" key={index}>
                                            <div className="product-row">
                                                <NavLink to="">
                                                </NavLink><div className="product-row-img"><NavLink to={item.src}>
                                                    <img className="product-row-thumbnail" src={item.img} alt={item.productName} />
                                                </NavLink><div className="product-row-price-hover"><NavLink to="">
                                                    <div className="product-row-note pull-left">Click để xem chi tiết</div>
                                                </NavLink><NavLink to="" className="product-row-btnbuy pull-right">Đặt hàng</NavLink></div></div>
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
                                    <div className="clearfix" />
                                </div>
                                <div className="text-center">
                                </div>
                            </div>
                        </div>
                        <div id="featured-product-5">
                            <div style={{ position: 'relative' }}>
                                <h2 className="new-product-title">
                                    MÀN HÌNH KHUYẾN MÃI HOT - GIAO HÀNG MIỄN PHÍ
                                </h2>
                                <a className="gearvn-new-products-hot-view-all" href>
                                    Xem tất cả <i className="fa fa-chevron-right" />
                                </a>
                            </div>
                            <div className="loop-pro">
                                <div className="module-products row">
                                    {MONITOR.map((item, index) => {
                                        return <div className="col-sm-4 col-xs-12 padding-none col-fix20" key={index}>
                                            <div className="product-row">
                                                <NavLink to="">
                                                </NavLink><div className="product-row-img"><NavLink to={item.src}>
                                                    <img className="product-row-thumbnail" src={item.img} alt={item.productName} />
                                                </NavLink><div className="product-row-price-hover"><NavLink to="">
                                                    <div className="product-row-note pull-left">Click để xem chi tiết</div>
                                                </NavLink><NavLink to="" className="product-row-btnbuy pull-right">Đặt hàng</NavLink></div></div>
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
                                    <div className="clearfix" />
                                </div>
                                <div className="text-center">
                                    <div className="pagination">
                                        <ul className="pagination-list">
                                            <li className="hidden-phone current"><a title={1} href className="pagenav">1</a></li>
                                            <li className="hidden-phone"><a title={2} href className="pagenav">2</a></li>
                                            <li className="hidden-phone"><a title={3} href className="pagenav">3</a></li>
                                            <li className="hidden-phone "><a title="…" href className="pagenav">…</a></li>
                                            <li className="hidden-phone"><a title={5} href className="pagenav">5</a></li>
                                            <li><a title="Trang sau" href className="pagenav"><i className="fa fa-chevron-right" /></a></li>
                                        </ul>
                                        <input type="hidden" name="limitstart" defaultValue={0} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="featured-product-6">
                            <div style={{ position: 'relative' }}>
                                <h2 className="new-product-title">
                                    BÀN PHÍM KHUYẾN MÃI HOT - GIAO HÀNG MIỄN PHÍ
                                </h2>
                                <a className="gearvn-new-products-hot-view-all" href>
                                    Xem tất cả <i className="fa fa-chevron-right" />
                                </a>
                            </div>
                            <div className="loop-pro">
                                <div className="module-products row">
                                    {KEYBOARD.map((item, index) => {
                                        return <div className="col-sm-4 col-xs-12 padding-none col-fix20" key={index}>
                                            <div className="product-row">
                                                <NavLink to="">
                                                </NavLink><div className="product-row-img"><NavLink to={item.src}>
                                                    <img className="product-row-thumbnail" src={item.img} alt={item.productName} />
                                                </NavLink><div className="product-row-price-hover"><NavLink to="">
                                                    <div className="product-row-note pull-left">Click để xem chi tiết</div>
                                                </NavLink><NavLink to="" className="product-row-btnbuy pull-right">Đặt hàng</NavLink></div></div>
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
                                    <div className="clearfix" />
                                </div>
                                <div className="text-center">
                                    <div className="pagination">
                                        <ul className="pagination-list">
                                            <li className="hidden-phone current"><a title={1} href className="pagenav">1</a></li>
                                            <li className="hidden-phone"><a title={2} href className="pagenav">2</a></li>
                                            <li className="hidden-phone"><a title={3} href className="pagenav">3</a></li>
                                            <li className="hidden-phone "><a title="…" href className="pagenav">…</a></li>
                                            <li className="hidden-phone"><a title={31} href className="pagenav">31</a></li>
                                            <li><a title="Trang sau" href className="pagenav"><i className="fa fa-chevron-right" /></a></li>
                                        </ul>
                                        <input type="hidden" name="limitstart" defaultValue={0} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
