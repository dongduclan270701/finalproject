import React, { useState, useEffect } from 'react';

const ListCategoryProduct = () => {
    const [item, setItem] = useState(
        [
            [
                {
                    collection: "Laptop",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx1.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx11.png?v=34146"
                },
                {
                    nameList: "Thương hiệu",
                    name: ["ASUS", "ACER", "MSI", "LENOVO", "HP", "DELL", "GIGABYTE", "LG", "HUAWEI"]
                },
                {
                    nameList: "Laptop theo Giá bán",
                    name: ["Dưới 15 triệu", "Từ 15 đến 20 triệu", "Trên 20 triệu"]
                },
                {
                    nameList: "Laptop theo CPU",
                    name: ["Intel Core i3", "Intel Core i5", "Intel Core i7", "AMD Ryzen"]
                },
                {
                    nameList: "Laptop theo Nhu cầu",
                    name: ["Laptop đồ họa", "Laptop Học sinh - Sinh viên", "Laptop mỏng nhẹ cao cấp"]
                },
                {
                    nameList: "Linh Kiện và Phụ Kiện Laptop",
                    name: ["Ram laptop", "SSD laptop", "Đế tản nhiệt laptop", "Balo và túi chống sốc laptop", "Ổ cứng di động"]
                },
                {
                    nameList: "Laptop ASUS",
                    name: ["VivoBook Series", "VivoBook Pro Series", "Zenbook Series", "ASUS OLED Series", "ExpertBook Series", "ProArt StudioBook Series"]
                },
                {
                    nameList: "Laptop ACER",
                    name: ["Aspire Series", "Swift Series"]
                },
                {
                    nameList: "Laptop MSI",
                    name: ["Modern Series", "Prestige Series", "Summit Series", "CREATOR Series"]
                },
                {
                    nameList: "Laptop LENOVO",
                    name: ["ThinkBook Series", "IdeaPad Series", "IdeaPad Pro Series", "ThinkPad Series", "Yoga Series"]
                },
                {
                    nameList: "Laptop DELL",
                    name: ["Inspiron Series", "Vostro Series", "Latitude Pro Series", "XPS Series"]
                },
                {
                    nameList: "Laptop HP",
                    name: ["Pavilion Series", "Envy Series", "Probook Series"]
                },
            ],
            [
                {
                    collection: "Laptop Gaming",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx2.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx12.png?v=34146"
                },
                {
                    nameList: "Thương hiệu",
                    name: ["ACER / PREDATOR", "ASUS / ROG", "MSI", "LENOVO", "DELL", "GIGABYTE / AORUS", "HP"]
                },
                {
                    nameList: "Giá bán",
                    name: ["Dưới 20 triệu", "Từ 20 đến 25 triệu", "Từ 25 đến 30 triệu","Trên 30 triệu","Laptop Gaming cao cấp"]
                },
                {
                    nameList: "ACER | PREDATOR Gaming",
                    name: ["Nitro Series", "Aspire Series", "Predator Series", "ConceptD Series"]
                },
                {
                    nameList: "ASUS | ROG Gaming",
                    name: ["ROG Series", "TUF Series", "Zephyrus Series","ROG Strix G","ROG Flow series","CPU Intel Gen 12th","ROG RTX 4000 Series"]
                },
                {
                    nameList: "MSI Gaming",
                    name: ["GF Series", "GL Series", "GS Series", "Bravo Series", "Creator Series","MSI AMD Series"]
                },
                {
                    nameList: "LENOVO Gaming",
                    name: ["Legion Gaming", "Ideapad Gaming"]
                },
                {
                    nameList: "DELL Gaming",
                    name: ["Dell Gaming G Series", "Alienware Series"]
                },
                {
                    nameList: "GIGABYTE Gaming",
                    name: ["GIGABYTE G5 | G7", "GIGABYTE AORUS", "GIGABYTE AERO"]
                },
                {
                    nameList: "Card đồ hoạ",
                    name: ["GTX 1650", "RTX 3050 / 3050Ti", "RTX 3060", "RTX 3070 / 3080", "AMD Radeon RX", "Laptop RTX 4000 Series"]
                },
                {
                    nameList: "Linh Kiện và Phụ Kiện Laptop",
                    name: ["Ram laptop", "SSD laptop", "Đế tản nhiệt laptop", "Balo và túi chống sốc laptop","Ổ cứng di động"]
                }
            ],
            [
                {
                    collection: "PC Special",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx3.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx13.png?v=34146"
                },
                {
                    nameList: "KHUYẾN MÃI ĐẶC BIỆT",
                    name: ["Titan Plus i4080 - Siêu Khuyến Mãi", "Phantom Plus i4080 - Tặng màn hình 4K", "Phantom Plus i4070Ti - Siêu Khuyến Mãi", "Viper Plus i3070Ti - Tặng tản nhiệt", "Viper Plus i3060Ti - Tặng RAM", "Viper Plus i3060 WHITE - Voucher màn hình 2tr", "Viper i3060 - Voucher tản nhiệt 1tr","Viper i3050 - Voucher màn hình 1tr500", "Minion i1650 WHITE - Tặng RAM"]
                },
                {
                    nameList: "GVN ProArt - Đồ Hoạ Đỉnh Cao",
                    name: ["ProArt Plus 9 a4090 - Tặng màn hình", "ProArt Plus 9 a3090 - Tặng màn hình", "ProArt Plus 9 i3090Ti - Tặng màn hình","ProArt Plus 7 a3090Ti - Tặng voucher 5tr","ProArt Plus 7 a3080Ti - Tặng voucher 5tr","ProArt Plus 5 a3070 - Tặng tản nhiệt","ProArt Plus 5 a3060Ti - Tặng RAM","ProArt Plus 5 i3060Ti - Tặng voucher 2tr"]
                },
                {
                    nameList: "GVN WHITE EDITION",
                    name: ["Poseidon 9 i3090", "Poseidon S WHITE", "Phantom Plus i4080", "Titan Plus i3090", "Phantom Plus i3080", "Phantom Plus i3070", "ProArt Plus 5 a3070","Viper Plus i3060Ti", "Viper Plus i3060","Viper i3050", "Minion i1650"]
                },
                {
                    nameList: "GVN iCUE PC (Voucher 2 Triệu)",
                    name: ["iCUE 5 i1660S", "iCUE 5 Plus a6500XT", "iCUE 5 Plus i3060","iCUE 7 i3060","iCUE 7 Plus i3070Ti","iCUE 9 Plus i3080"]
                },
                {
                    nameList: "GVN POSEIDON - CUSTOM NƯỚC",
                    name: ["Poseidon 5 i3060 - Tặng tản nhiệt custom", "Poseidon 7 i3070 - Tặng tản nhiệt custom", "Poseidon S WHITE - i5 - 3060", "Poseidon S - i5 - 3060", "Poseidon 7 i3080","Poseidon 9 i3090"]
                },
                {
                    nameList: "Đèn thông minh Nanoleaf",
                    name: ["Bộ bắt đầu", "Bộ mở rộng"]
                }
            ],
            [
                {
                    collection: "PC GEARVN Intel",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx4.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx24.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx14.png?v=34146"
                },
                {
                    nameList: "GVN TITAN - Core i9",
                    name: ["Titan Plus i4090", "Titan Plus i4080", "Titan Plus i3070Ti", "Titan i3060Ti", "Titan i3060"]
                },
                {
                    nameList: "GVN PHANTOM - Core i7",
                    name: ["Phantom Plus i4080", "Phantom Plus i4070Ti", "Phantom Plus i3070Ti","Phantom i3060Ti","Phantom i3060","Phantom i3050","Phantom i2060"]
                },
                {
                    nameList: "GVN VIPER - Core i5",
                    name: ["Viper Plus i3070Ti", "Viper Plus i3060Ti", "Viper Plus i3060 White", "Viper Plus i3060","Viper i3060","Viper i3050","Viper i3050 White","Viper i2060","Viper i1660S","Viper i1650","Viper i1050Ti"]
                },
                {
                    nameList: "GVN MINION - Core i3",
                    name: ["Minion i3050","Minion i2060","Minion i1660S","Minion i1650","Minion i1650 White","Minion i1050Ti","Minion i1030","Minion i730"]
                },
                {
                    nameList: "GVN ProArt",
                    name: ["ProArt Plus 5 i3060Ti","ProArt Plus 9 i3090Ti"]
                }
            ],
            [
                {
                    collection: "PC GEARVN AMD",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx5.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx25.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx15.png?v=34146"
                },
                {
                    nameList: "GVN ProArt",
                    name: ["ProArt Plus 9 a4090","ProArt Plus 9 a3090","ProArt Plus 7 a3090Ti","ProArt Plus 7 a3080Ti","ProArt Plus 5 a3070","ProArt Plus 5 a3060Ti"]
                },
                {
                    nameList: "GVN TITAN - Ryzen 9",
                    name: ["Titan Plus a4090","Titan Plus a3090","Titan Plus a3080Ti","Titan Plus a3070Ti"]
                },
                {
                    nameList: "GVN PHANTOM - Ryzen 7",
                    name: ["Phantom Plus a3080Ti","Phantom Plus a3070Ti","Phantom Plus a3060Ti","Phantom a3060"]
                },
                {
                    nameList: "GVN VIPER - Ryzen 5",
                    name: ["Viper Plus a3050","Viper Plus a2060","Viper a1660S","Viper a1650"]
                }
            ],
            [
                {
                    collection: "PC Doanh Nghiệp",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx6.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx26.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx16.png?v=34146"
                },
                {
                    nameList: "Giải pháp trọn bộ GEARVN",
                    name: ["Homework Pentium + Màn hình","Homework I3 + Màn hình","Homework Mini Pentium + Màn hình","Homework Mini I3 + Màn hình"]
                },
                {
                    nameList: "Cấu hình GVN Homework",
                    name: ["Homework Pentium - G6405","Homework I3 - 10105","Homework I3 - 12100","Homework I3 - 10105F - GT 730","Homework I5 - 11400","Homework I5 - 12400","Homework I7 - 12700","Homework Athlon - 3000G","Homework R3 - 3200G","Homework R5 - 5600G"]
                },
                {
                    nameList: "Cấu hình GVN Homework Mini",
                    name: ["Homework Mini Pentium - G6405","Homework Mini I3 - 10105","Homework Mini I3 - 12100"]
                },
                {
                    nameList: "Máy bộ Intel® NUC",
                    name: ["NUC Celeron/Pentium","NUC10 (CPU Intel 10th gen)","NUC11 (CPU Intel 11st gen)","NUC Extreme kit - Hiệu năng cao"]
                },
                {
                    nameList: "Máy bộ Mini PC",
                    name: ["ASUS Mini PC PN63-S1","HP ProDesk 400 G6 Mini","HP EliteDesk 800 G6 Mini"]
                }
            ],
            [
                {
                    collection: "Linh kiện PC",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx7.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx27.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx17.png?v=34146"
                },
                {
                    nameList: "VGA - Card màn hình",
                    name: ["RTX 4090 (Mới)","RTX 4080 (Mới)","RTX 4070 Ti (Mới)","RTX Ampere 3090 Ti","RTX Ampere 3090","RTX Ampere 3080 Ti","RTX Ampere 3080","RTX Ampere 3070 Ti","RTX Ampere 3070","NVIDIA Quadro"]
                },
                {
                    nameList: "VGA - Card màn hình",
                    name: ["RTX Ampere 3060 Ti","RTX Ampere 3060","RTX Ampere 3050","GTX 1660 - RTX 2060","GTX 1650  - 1650 Super 4G","GT 710/1030 - GTX 1050 Ti","Intel Arc A380","AMD Radeon RX"]
                },
                {
                    nameList: "CPU - Bộ vi xử lý",
                    name: ["Intel thế hệ 13 (Mới)","Intel thế hệ 12","Intel thế hệ 11","Intel thế hệ 10","Intel X-Series LGA2066","Intel Xeon","AMD Ryzen 7000 (Mới)","AMD Ryzen 5000","AMD Ryzen 4000","AMD Ryzen 3000","AMD Threadripper PRO","AMD Threadripper"]
                },
                {
                    nameList: "Bo mạch chủ",
                    name: ["Intel Z790 (Mới)","Intel Z690","Intel B760 (Mới)","Intel B660","Intel H610","Intel H510","Intel X299X","AMD X670 (Mới)","AMD X570","AMD B650 (Mới)","AMD B550","AMD A320","AMD TRX40"]
                },
                {
                    nameList: "Ram - Bộ nhớ trong",
                    name: ["RAM DDR5","Ram LED RGB - DDR4","Ram 8GB - DDR4","Ram 16GB - DDR4","Ram Corsair","Ram G.Skill","Ram Kingston"]
                },
                {
                    nameList: "Lưu trữ SSD - HDD",
                    name: ["SSD M.2 PCIe NVMe Gen 4","SSD M.2 PCIe NVMe","SSD 2.5' SATA 3","SSD 240G - 256G","SSD 120G - 128G","SSD 480G - 512G","SSD trên 1TB","HDD"]
                },
                {
                    nameList: "Case - Vỏ Máy Tính",
                    name: ["Case Dưới 1 Triệu","Case Từ 1 đến 2 triệu","Case trên 2 triệu","Case InWin","Case Lian Li","Case NZXT","Case Corsair","Case Thermaltake"]
                },
                {
                    nameList: "PSU - Nguồn Máy Tính",
                    name: ["Nguồn Trên 1000W","Nguồn 700W-850W","Nguồn 550W-650W","Nguồn 300W-500W","Nguồn Corsair","Nguồn NZXT","Nguồn Cooler Master"]
                },
                {
                    nameList: "Tản nhiệt - Fan RGB",
                    name: ["Tản nhiệt khí","Tản nhiệt AIO 240mm","Tản nhiệt AIO 280mm","Tản nhiệt AIO 360mm","Tản nhiệt AIO 420mm","Fan RGB","Phụ kiện máy tính"]
                },
                {
                    nameList: "Linh kiện PC ITX",
                    name: ["Bo mạch chủ ITX","Case ITX","Nguồn SFX","Tản nhiệt AIO 120mm"]
                }
            ],
            [
                {
                    collection: "Apple",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx8.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx28.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx18.png?v=34146"
                },
                {
                    nameList: "MacBook",
                    name: ["Macbook Air M2","Macbook Pro M2","MacBook Air","MacBook Pro 13","MacBook Pro 14","MacBook Pro 16"]
                },
                {
                    nameList: "iMac",
                    name: ['iMac M1 24"']
                },
                {
                    nameList: "Mac mini",
                    name: ["Mac mini M1"]
                },
                {
                    nameList: "Phụ kiện Apple",
                    name: ["Bàn phím, Chuột","Thiết bị âm thanh"]
                },
                {
                    nameList: "Mac Studio",
                    name: []
                },
                {
                    nameList: "Phụ kiện HyperDrive",
                    name: []
                }
            ],
            [
                {
                    collection: "Màn hình",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx9.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx29.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx19.png?v=34146"
                },
                {
                    nameList: "Hãng sản xuất",
                    name: ["LG","Asus","ViewSonic","Dell","Gigabyte","AOC","Acer","HKC"]
                },
                {
                    nameList: "Hãng sản xuất",
                    name: ["MSI","Lenovo","Samsung","Cooler Master","Philips","LC-Power","Alienware"]
                },
                {
                    nameList: "Giá tiền",
                    name: ["Dưới 5 triệu","Từ 5 triệu đến 10 triệu","Từ 10 triệu đến 20 triệu","Từ 20 triệu đến 30 triệu","Trên 30 triệu"]
                },
                {
                    nameList: "Độ Phân giải",
                    name: ["HD 720p","Full HD 1080p","2K 1440p","Màn hình máy tính 4K UHD"]
                },
                {
                    nameList: "Tần số quét",
                    name: ["60Hz","75Hz","100Hz","144Hz","240Hz"]
                },
                {
                    nameList: "Màn hình cong",
                    name: ['24" Curved','27" Curved','32" Curved','Trên 32" Curved']
                },
                {
                    nameList: "Kích thước",
                    name: ['22"','24"','27"','29"','32"','Trên 32"','Hỗ trợ giá treo (VESA)']
                },
                {
                    nameList: "Màn hình đồ họa",
                    name: ['Màn hình đồ họa 24"','Màn hình đồ họa 27"','Màn hình đồ họa 32"']
                },
                {
                    nameList: "Phụ kiện màn hình",
                    name: ['Giá treo màn hình','Phụ kiện dây HDMI,DP,LAN']
                },
                {
                    nameList: "Màn hình di động",
                    name: ['Full HD 1080p','2K 1440p','Có cảm ứng']
                },
                {
                    nameList: "Máy chiếu",
                    name: ['Máy chiếu Asus','Máy chiếu Beecube','Máy chiếu Wanbo']
                },
            ],
            [
                {
                    collection: "Bàn phím",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx10.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx210.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx110.png?v=34146"
                },
                {
                    nameList: "hương hiệu",
                    name: ["Akko","Logitech","Razer","Corsair","Leopold","iKBC","Steelseries","Asus","Vortex","IQUNIX (Mới)","Mistel","Keychron","FL-Esports","Ducky"]
                },
                {
                    nameList: "Thương hiệu",
                    name: ["Dare-U","E-Dra","Rapoo","Fuhlen","HyperX","Ajazz","Havit","Cooler Master","NZXT","Varmilo (Mới)","Newmen"]
                },
                {
                    nameList: "Giá tiền",
                    name: ["Dưới 1 triệu","1 triệu - 2 triệu","2 triệu - 3 triệu","3 triệu - 4 triệu","Trên 4 triệu"]
                },
                {
                    nameList: "Thương hiệu Akko",
                    name: ["ACR Series","PC75B Series","3068 Series","3084 Series","3087 Series","3098 Series","3108 Series","5087 Series","5108 Series","Mojike Series","RGB Series","Bluetooth Series"]
                },
                {
                    nameList: "Thương hiệu Leopold",
                    name: ["660M Series","750R Series","900R Series","980M Series","Bluetooth Series"]
                },
                {
                    nameList: "Thương hiệu IKBC",
                    name: ["W200 Series"]
                },
                {
                    nameList: "Thương hiệu Razer",
                    name: ["Blackwidow Series","Huntsman Series"]
                },
                {
                    nameList: "Thương hiệu Corsair",
                    name: ["K63 Series","K68 Series","K70 Series","K95 Series","K100 Series"]
                },
                {
                    nameList: "Kết nối",
                    name: ["Bluetooth","Wireless"]
                },
                {
                    nameList: "Phụ kiện bàn phím cơ",
                    name: ["Keycaps","Kê tay"]
                }
            ],
            [
                {
                    collection: "Chuột + Lót chuột",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx11.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx211.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx111.png?v=34146"
                },
                {
                    nameList: "Chuột theo hãng",
                    name: ["Logitech","Razer","Corsair","Steelseries","Asus","HyperX","Zowie","NZXT","Pulsar (Mới)"]
                },
                {
                    nameList: "Chuột theo hãng",
                    name: ["Dare-U","Rapoo","Fuhlen","Havit","Akko","MSI","Cooler Master","Cougar","E-Dra","Newmen"]
                },
                {
                    nameList: "Chuột theo giá tiền",
                    name: ["Dưới 500 nghìn","Từ 500 nghìn - 1 triệu","Từ 1 triệu - 2 triệu","Trên 2 triệu - 3 triệu","Trên 3 triệu"]
                },
                {
                    nameList: "Thương hiệu Logitech",
                    name: ["Logitech G Pro Series","Logitech G102 Series","Logitech G Series"]
                },
                {
                    nameList: "Chuột không dây",
                    name: ["Bluetooth","Wireless"]
                },
                {
                    nameList: "Lót chuột theo hãng",
                    name: ["Dare-U","Razer","Steelseries","Corsair","HyperX"]
                }
            ],
            [
                {
                    collection: "Tai Nghe - Loa",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx12.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx212.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx112.png?v=34146"
                },
                {
                    nameList: "Hãng tai nghe",
                    name: ["Logitech","HyperX","Razer","Corsair","Asus","Steelseries","Sony","Soundpeats"]
                },
                {
                    nameList: "Hãng tai nghe",
                    name: ["Dare-U","Zidli","Rapoo","Havit/ MPOW","AOC","Cooler Master","E-Dra"]
                },
                {
                    nameList: "Tai nghe Audio",
                    name: ["Soundpeats"]
                },
                {
                    nameList: "Tai nghe theo giá",
                    name: ["Tai nghe dưới 1 triệu","Tai nghe 1 triệu đến 2 triệu","Tai nghe 2 đến 3 triệu","Tai nghe 3 đến 4 triệu","Tai nghe trên 4 triệu"]
                },
                {
                    nameList: "Kiểu kết nối",
                    name: ["Tai nghe Wireless","Tai nghe Bluetooth"]
                },
                {
                    nameList: "Kiểu tai nghe",
                    name: ["Tai nghe Over-ear","Tai nghe Gaming In-ear"]
                },
                {
                    nameList: "Loa theo thương hiệu",
                    name: ["SoundMax","Microlab","Thonet và Vander","Logitech","Razer"]
                },
                {
                    nameList: "Loa theo giá tiền",
                    name: ["Loa dưới 1 triệu","Loa trên 1 triệu","Loa trên 2 triệu"]
                },
                {
                    nameList: "Dạng loa",
                    name: ["Loa để bàn","Loa di động"]
                },
                {
                    nameList: "Kiểu loa",
                    name: ["Loa Gaming","Loa Audio"]
                },
                {
                    nameList: "Giá treo tai nghe",
                    name: ["Razer","Corsair"]
                }
            ],
            [
                {
                    collection: "Ghế - Bàn",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx13.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx213.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx113.png?v=34146"
                },
                {
                    nameList: "Thương hiệu ghế Gaming",
                    name: ["Corsair","Warrior","DXRacer","Razer","E-DRA","Anda Seat","Cougar"]
                },
                {
                    nameList: "Thương hiệu ghế Gaming",
                    name: ["Noble Chair","MSI","ASUS","Cooler Master","AKRacing"]
                },
                {
                    nameList: "Thương hiệu ghế CTH",
                    name: ["Epione","Sihoo","E-Dra","Warrior"]
                },
                {
                    nameList: "Kiểu ghế",
                    name: ["Ghế Công thái học","Ghế Gaming"]
                },
                {
                    nameList: "Thương hiệu Corsair",
                    name: ["T3 RUSH Series","TC60 Series","TC200 Series"]
                },
                {
                    nameList: "Thương hiệu Sihoo",
                    name: ["M18 Series","M57 Series"]
                },
                {
                    nameList: "Thương hiệu DXRacer",
                    name: ["Drifting Series","King Series","G Series","A.I.R series"]
                },
                {
                    nameList: "Bàn Gaming",
                    name: ["Bàn Gaming DXRacer",">Bàn Gaming E-Dra","Bàn Gaming Warrior","Bàn Gaming Cooler Master"]
                },
                {
                    nameList: "Bàn công thái học",
                    name: ["Bàn CTH Epione","Bàn CTH E-Dra","Bàn CTH Warrior"]
                },
                {
                    nameList: "Lựa chọn theo cân nặng",
                    name: ["Dưới 80 KG","Trên 80 KG"]
                },
                {
                    nameList: "Chất liệu",
                    name: ["Da PU","Da PVC","Da Thật","Da NAPPA","Vải Smooth Fabric"]
                },
                {
                    nameList: ">Giá tiền",
                    name: ["Dưới 5 triệu","Từ 5 đến 10 triệu","Trên 10 triệu"]
                },
                {
                    nameList: "Phụ kiện trang trí",
                    name: []
                }
            ],
            [
                {
                    collection: "Phần mềm và Mạng",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx14.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx214.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx114.png?v=34146"
                },
                {
                    nameList: "Hãng sản xuất",
                    name: ["Asus","LinkSys","TP-LINK","Intel","Mercusys"]
                },
                {
                    nameList: "Router Wi-Fi",
                    name: ["Gaming","Phổ thông","Xuyên tường","Router Mesh Pack","Router WiFi 5","Router WiFi 6"]
                },
                {
                    nameList: "USB Thu sóng - Card mạng",
                    name: ["Usb WiFi","Card WiFi","Card Ethernet","Dây cáp mạng"]
                },
                {
                    nameList: "Phần mềm bán chạy",
                    name: []
                },
                {
                    nameList: "Microsoft Office",
                    name: ["Microsoft Office 365","Office 2021"]
                },
                {
                    nameList: "Microsoft Windows",
                    name: ["Windows 10 Home","Windows 10 Pro","Windows 11 Home","Windows 11 Pro"]
                }
            ],
            [
                {
                    collection: "Phụ kiện",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx15.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx215.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx115.png?v=34146"
                },
                {
                    nameList: "Thiết bị Streaming",
                    name: ["AverMedia","Razer","Elgato"]
                },
                {
                    nameList: "Asus ROG Phone",
                    name: ["ROG Phone 6 12/256"]
                },
                {
                    nameList: "Microphone",
                    name: ["Razer","HyperX","Thronmax"]
                },
                {
                    nameList: "Webcam",
                    name: ["720p","1080p","4K","Conference"]
                },
                {
                    nameList: "Đèn Led trang trí",
                    name: ["Nanoleaf","Govee"]
                },
                {
                    nameList: "Balo và Túi xách",
                    name: ["Razer","Asus","GEARVN","Túi chống sốc"]
                },
                {
                    nameList: "Đế tản nhiệt Laptop",
                    name: ["Cooler Master","Rain Design","Hyperdrive"]
                },
                {
                    nameList: "Phụ kiện HyperX",
                    name: ["Đệm tai nghe","Microphone","Dây cáp","Túi/hộp đựng","Keycaps"]
                },
                {
                    nameList: "Tay cầm, vô lăng",
                    name: ["Tay cầm X-Box","Tay cầm MSI","Tay cầm PS4","Tay cầm Rapoo","Tay cầm DareU","Vô lăng"]
                },
                {
                    nameList: "Cổng chuyển USB, Giá đỡ",
                    name: ["Hyperdrive","Rain Design"]
                },
                {
                    nameList: "Phụ kiện dây HDMI,DP,LAN",
                    name: ["Cáp HDMI","Cáp DP"]
                },
                {
                    nameList: "Soundcard",
                    name: ["Creative","Sennheiser"]
                },
                {
                    nameList: "Phụ kiện điện thoại",
                    name: ["Sạc dự phòng","Cáp Type C","Cáp Lightning - IOS","Ổ cắm điện"]
                },
                {
                    nameList: "Bộ lưu điện",
                    name: ["Ares"]
                }
            ],
            [
                {
                    collection: "Xả kho giá tốt",
                    imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx16.png?v=34146",
                    img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx216.png?v=34146",
                    img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx116.png?v=34146"
                },
                {
                    nameList: "",
                    name: ["","","","","","","","","","",""]
                }
            ],
        ]
    );
    return (
        <>{item.map((item, index) => {
            return <li className="cat-menu-item " key={index}>
                <a className="gearvn-cat-menu-item" href="https://gearvn.com/pages/laptop-van-phong">
                    <span className="gearvn-cat-menu-icon">
                        <img src={item[0].img1icon} />
                        <img src={item[0].img2icon} />
                    </span>
                    <span className="gearvn-cat-menu-name">{item[0].collection}</span>
                </a>
                <div className="megamenu absolute-center level0 xlab_grid_container this" >
                    <div className="column xlab_column_5_5">
                        {item.slice((item.length -1)*(-1)).map((itemCollection, indexCollection) => {
                            return <div className="sub-cat-item" key={indexCollection}>
                            <a className="sub-cat-item-name" href="https://gearvn.com/pages/laptop-van-phong">{itemCollection.nameList}</a>
                            {itemCollection.name.map((itemNameList, indexItemList) => {
                                return <a className="sub-cat-item-filter" href="/collections/laptop-asus-hoc-tap-va-lam-viec" key={indexItemList}>{itemNameList}</a>
                            })}
                            <br />
                        </div>
                        })}
                    </div>
                    <div className="sub-cat-item pull-right" style={{ padding: 0, display: 'flex', justifyContent: 'flex-end' }}>
                        <a className="none" href="https://gearvn.com/pages/laptop-van-phong">
                            <img src={item[0].imgBanner} alt="" />
                        </a>
                    </div>
                </div>
            </li>
        })}
        </>
    );
}

export default ListCategoryProduct;
