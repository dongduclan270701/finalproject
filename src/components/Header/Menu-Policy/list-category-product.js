import React, { useState, useEffect } from 'react';
import { fetchCollecting } from 'Apis'
import { NavLink } from 'react-router-dom';

const ListCategoryProduct = () => {
    const [item, setItem] = useState(
        [
            // [
            //     {
            //         collection: "Laptop",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx1.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx21.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx11.png?v=34146"
            //     },
            //     {
            //         nameList: "Brand Name",
            //         nameAndSrc: [
            //             ["ASUS", "laptop-ASUS"],
            //             ["ACER", "laptop-ACER"],
            //             ["MSI", "laptop-MSI"],
            //             ["LENOVO", "laptop-LENOVO"],
            //             ["HP", "laptop-HP"],
            //             ["DELL", "laptop-DELL"],
            //             ["GIGABYTE", "laptop-GIGABYTE"],
            //             ["LG", "laptop-LG"],
            //             ["HUAWEI", "laptop-HUAWEI"]],
            //     },
            //     {
            //         nameList: "Laptop by price",
            //         nameAndSrc: [["Dưới 15 triệu", "laptop-duoi-15-trieu"], ["Từ 15 đến 20 triệu", "laptop-tu-15-den-20-trieu"], ["Trên 20 triệu", "laptop-tren-2-trieu"]]
            //     },
            //     {
            //         nameList: "Laptop by CPU",
            //         nameAndSrc: [["Intel Core i3", "laptop-intel-core-i3"], ["Intel Core i5", "laptop-intel-core-i5"], ["Intel Core i7", "laptop-intel-core-i7"], ["AMD Ryzen", "laptop-amd-ryzen"]]
            //     },
            //     {
            //         nameList: "Laptop needs",
            //         nameAndSrc: [["Laptop đồ họa", "laptop-do-hoa"], ["Laptop Học sinh - Sinh viên", "laptop-hoc-sinh-sinh-vien"], ["Laptop mỏng nhẹ cao cấp", "laptop-mong-nhe-cao-cap"]]
            //     },
            //     {
            //         nameList: "Laptop Components & Accessories",
            //         nameAndSrc: [
            //             ["Ram laptop", "ram-laptop"],
            //             ["SSD laptop", "ssd-laptop"],
            //             ["Laptop heater soleplate", "de-tan-nhiet-laptop"],
            //             ["Backpack and laptop shockproof bag", "balo-va-tui-chong-soc-laptop"],
            //             ["Portable hard drive", "o-cung-di-dong"]]
            //     },
            //     {
            //         nameList: "Laptop ASUS",
            //         nameAndSrc: [
            //             ["VivoBook Series", "laptop-ASUS-vivobook-series"],
            //             ["VivoBook Pro Series", "laptop-ASUS-vivobook-pro-series"],
            //             ["Zenbook Series", "laptop-ASUS-zenbook-series"],
            //             ["ASUS OLED Series", "laptop-ASUS-asus-oled-series"],
            //             ["ExpertBook Series", "laptop-ASUS-experbook-series"],
            //             ["ProArt StudioBook Series", "laptop-ASUS-proart-studioBook-series"]]
            //     },
            //     {
            //         nameList: "Laptop ACER",
            //         nameAndSrc: [["Aspire Series", "laptop-ACER-aspire-series"], ["Swift Series", "laptop-ACER-swift-series"]]
            //     },
            //     {
            //         nameList: "Laptop MSI",
            //         nameAndSrc: [
            //             ["GF Series", "laptop-MSI-gf-series"],
            //             ["GS Series", "laptop-MSI-gs-series"],
            //             ["Bravo Series", "laptop-MSI-bravo-series"],
            //             ["Creator Series", "laptop-MSI-creator-series"],
            //             ["MSI AMD Series", "laptop-MSI-msi-amd-series"],
            //             ["Crosshair Series", "laptop-MSI-crosshair-series"],
            //             ["MSI RTX 40  Series", "laptop-MSI-msi-rtx-40-series"]]
            //     },
            //     {
            //         nameList: "Laptop LENOVO",
            //         nameAndSrc: [
            //             ["ThinkBook Series", "laptop-LENOVO-thinkbook-series"],
            //             ["IdeaPad Series", "laptop-LENOVO-ideapad-series"],
            //             ["IdeaPad Pro Series", "laptop-LENOVO-ideapad-pro-series"],
            //             ["ThinkPad Series", "laptop-LENOVO-thinkpad-series"],
            //             ["Yoga Series", "laptop-LENOVO-yoga-series"]]
            //     },
            //     {
            //         nameList: "Laptop DELL",
            //         nameAndSrc: [
            //             ["Inspiron Series", "laptop-DELL-inspiron-series"],
            //             ["Vostro Series", "laptop-DELL-vostro-series"],
            //             ["Latitude Pro Series", "laptop-DELL-latitude-series"],
            //             ["XPS Series", "laptop-DELL-xps-series"]]
            //     },
            //     {
            //         nameList: "Laptop HP",
            //         nameAndSrc: [
            //             ["Pavilion Series", "laptop-DELL-pavilion-series"],
            //             ["Envy Series", "laptop-DELL-envy-series"],
            //             ["Probook Series", "laptop-DELL-probook-series"]]
            //     },
            // ],
            // [
            //     {
            //         collection: "Laptop Gaming",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx2.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx22.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx12.png?v=34146"
            //     },
            //     {
            //         nameList: "Brand Name",
            //         nameAndSrc: [
            //             ["ACER / PREDATOR", "laptop-gaming-acer-predator"],
            //             ["ASUS / ROG", "laptop-gaming-aus-rog"],
            //             ["MSI", "laptop-gaming-msi"],
            //             ["LENOVO", "laptop-gaming-lenovo"],
            //             ["DELL", "laptop-gaming-dell"],
            //             ["GIGABYTE / AORUS", "laptop-gaming-gigabyte-aorus"],
            //             ["HP", "laptop-gaming-hp"]]
            //     },
            //     {
            //         nameList: "Giá bán",
            //         nameAndSrc: [
            //             ["Dưới 20 triệu", "laptop-gaming-duoi-20-trieu"],
            //             ["Từ 20 đến 25 triệu", "laptop-gaming-tu-20-trieu-den-25-trieu"],
            //             ["Từ 25 đến 30 triệu", "laptop-gaming-tu-25-trieu-den-30-trieu"],
            //             ["Trên 30 triệu", "laptop-gaming-tren-30-trieu"],
            //             ["Laptop Gaming cao cấp", "laptop-gaming-cao-cap"]]
            //     },
            //     {
            //         nameList: "ACER | PREDATOR Gaming",
            //         nameAndSrc: [
            //             ["Nitro Series", "laptop-gaming-nitro-series"],
            //             ["Aspire Series", "laptop-gaming-aspire-series"],
            //             ["Predator Series", "laptop-gaming-predator-series"],
            //             ["ConceptD Series", "laptop-gaming-conceptd-series"]]
            //     },
            //     {
            //         nameList: "ASUS | ROG Gaming",
            //         nameAndSrc: [
            //             ["ROG Series", "laptop-gaming-rog-series"],
            //             ["TUF Series", "laptop-gaming-tuf-series"],
            //             ["Zephyrus Series", "laptop-gaming-zephyrus-series"],
            //             ["ROG Strix G", "laptop-gaming-rog-strix-g"],
            //             ["ROG Flow series", "laptop-gaming-rog-flow-series"],
            //             ["CPU Intel Gen 12th", "laptop-gaming-cpu-intel-gen-12th"],
            //             ["ROG RTX 4000 Series", "laptop-gaming-rog-rtx-4000-series"]]
            //     },
            //     {
            //         nameList: "MSI Gaming",
            //         nameAndSrc: [
            //             ["GF Series", "laptop-gaming-gf-series"],
            //             ["GL Series", "laptop-gaming-gl-series"],
            //             ["GS Series", "laptop-gaming-gs-series"],
            //             ["Bravo Series", "laptop-gaming-bravo-series"],
            //             ["Creator Series", "laptop-gaming-creator-series"],
            //             ["MSI AMD Series", "laptop-gaming-msi-amd-series"]]
            //     },
            //     {
            //         nameList: "LENOVO Gaming",
            //         nameAndSrc: [
            //             ["Legion Gaming", "laptop-gaming-legion-gaming"],
            //             ["Ideapad Gaming", "laptop-gaming-ideapad-gaming"]]
            //     },
            //     {
            //         nameList: "DELL Gaming",
            //         nameAndSrc: [
            //             ["Dell Gaming G Series", "laptop-gaming-dell-gaming-g-series"],
            //             ["Alienware Series", "laptop-gaming-alienware-series"]]
            //     },
            //     {
            //         nameList: "GIGABYTE Gaming",
            //         nameAndSrc: [
            //             ["GIGABYTE G5 | G7", "laptop-gaming-gigabyte-g5-g7"],
            //             ["GIGABYTE AORUS", "laptop-gaming-gigabyte-aorus"],
            //             ["GIGABYTE AERO", "laptop-gaming-gigabyte-aero"]]
            //     },
            //     {
            //         nameList: "Card đồ hoạ",
            //         nameAndSrc: [
            //             ["GTX 1650", "laptop-gaming-gtx-1650"],
            //             ["RTX 3050 / 3050Ti", "laptop-gaming-rtx-3050-3050ti"],
            //             ["RTX 3060", "laptop-gaming-rtx-3060"],
            //             ["RTX 3070 / 3080", "laptop-gaming-rtx-3070-3080"],
            //             ["AMD Radeon RX", "laptop-gaming-amd-radeon-rx"],
            //             ["Laptop RTX 4000 Series", "laptop-gaming-rtx-4000-series"]]
            //     },
            //     {
            //         nameList: "Laptop Components & Accessories",
            //         nameAndSrc: [
            //             ["Ram laptop", "ram-laptop"],
            //             ["SSD laptop", "ssd-laptop"],
            //             ["Đế tản nhiệt laptop", "de-tan-nhiet-laptop"],
            //             ["Balo và túi chống sốc laptop", "balo-va-tui-chong-soc-laptop"],
            //             ["Ổ cứng di động", "o-cung-di-dong"]]
            //     },
            // ],
            // [
            //     {
            //         collection: "PC Special",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx3.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx23.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx13.png?v=34146"
            //     },
            //     {
            //         nameList: "KHUYẾN MÃI ĐẶC BIỆT",
            //         nameAndSrc: [
            //             ["Titan Plus i4080 - Siêu Khuyến Mãi", "gvn-titan-plus-i4080"],
            //             ["Phantom Plus i4080 - Tặng màn hình 4K", "gvn-phantom-plus-i4080"],
            //             ["Phantom Plus i4070Ti - Siêu Khuyến Mãi", "gvn-phantom-plus-i4070ti"],
            //             ["Viper Plus i3070Ti - Tặng tản nhiệt", "gvn-viper-plus-i3070ti"],
            //             ["Viper Plus i3060Ti - Tặng RAM", "gvn-viper-plus-i3060ti"],
            //             ["Viper Plus i3060 WHITE - Voucher màn hình 2tr", "gvn-viper-plus-i3060-white"],
            //             ["Viper i3060 - Voucher tản nhiệt 1tr", "gvn-viper-i3060"],
            //             ["Viper i3050 - Voucher màn hình 1tr500", "gvn-viper-i3050"],
            //             ["Minion i1650 WHITE - Tặng RAM", "gvn-minion-i1650-white"]]
            //     },
            //     {
            //         nameList: "GVN ProArt - Đồ Hoạ Đỉnh Cao",
            //         nameAndSrc: [
            //             ["ProArt Plus 9 a4090 - Tặng màn hình", "gvn-proart-plus-9-a4090"],
            //             ["ProArt Plus 9 a3090 - Tặng màn hình", "gvn-proart-plus-9-a3090"],
            //             ["ProArt Plus 9 i3090Ti - Tặng màn hình", "gvn-proart-plus-9-i3090ti"], 
            //             ["ProArt Plus 7 a3090Ti - Tặng voucher 5tr", "gvn-proart-plus-7-a3090ti"], 
            //             ["ProArt Plus 7 a3080Ti - Tặng voucher 5tr", "gvn-proart-plus-7-a3080ti"], 
            //             ["ProArt Plus 5 a3070 - Tặng tản nhiệt", "gvn-proart-plus-5-a3070"], 
            //             ["ProArt Plus 5 a3060Ti - Tặng RAM", "gvn-proart-plus-5-a3060ti"], 
            //             ["ProArt Plus 5 i3060Ti - Tặng voucher 2tr", "gvn-proart-plus-i3060ti"]]
            //     },
            //     {
            //         nameList: "GVN WHITE EDITION",
            //         nameAndSrc: [
            //             ["Poseidon 9 i3090", "gvn-poseidon-9-i3090"],
            //             ["Poseidon S WHITE", "gvn-poseidon-s-white"],
            //             ["Phantom Plus i4080", "gvn-phantom-plus-i4080"],
            //             ["Titan Plus i3090", "gvn-titan-plus-i3090"],
            //             ["Phantom Plus i3080", "gvn-phantom-plus-i3080"],
            //             ["Phantom Plus i3070", "gvn-phantom-plus-i3070"],
            //             ["ProArt Plus 5 a3070", "gvn-proart-plus-5-a3070"], 
            //             ["Viper Plus i3060Ti", "gvn-viper-plus-i3060ti"],
            //             ["Viper Plus i3060", "gvn-viper-plus-i3060"], 
            //             ["Viper i3050", "gvn-viper-i3050"],
            //             ["Minion i1650", "gvn-minion-i1650"]]
            //     },
            //     {
            //         nameList: "GVN iCUE PC (Voucher 2 Triệu)",
            //         nameAndSrc: [
            //             ["iCUE 5 i1660S", "gvn-icue-5-i1660S"],
            //             ["iCUE 5 Plus a6500XT", "gvn-icue-5-plus-a6500xt"],
            //             ["iCUE 5 Plus i3060", "gvn-icue-5-plus-i3060"], 
            //             ["iCUE 7 i3060", "gvn-icue-7-i3060"], 
            //             ["iCUE 7 Plus i3070Ti", "gvn-icue-7-plus-i3070ti"], 
            //             ["iCUE 9 Plus i3080", "gvn-icue-9-plus-i3080"]]
            //     },
            //     {
            //         nameList: "GVN POSEIDON - CUSTOM NƯỚC",
            //         nameAndSrc: [
            //             ["Poseidon 5 i3060 - Tặng tản nhiệt custom", "gvn-poseidon-5-i3060"],
            //             ["Poseidon 7 i3070 - Tặng tản nhiệt custom", "gvn-poseidon-7-i3070"],
            //             ["Poseidon S WHITE - i5 - 3060", "gvn-poseidon-s-white"],
            //             ["Poseidon S - i5 - 3060", "gvn-poseidon-s-i5-3060"],
            //             ["Poseidon 7 i3080", "gvn-poseidon-7-i3080"], 
            //             ["Poseidon 9 i3090", "gvn-poseidon-9-i3090"]]
            //     },
            //     {
            //         nameList: "Đèn thông minh Nanoleaf",
            //         nameAndSrc: [
            //             ["Bộ bắt đầu", "den-thong-minh-nanoleaf-starter-kit"],
            //             ["Bộ mở rộng", "den-thong-minh-nanoleaf-bo-mo-rong"]]
            //     }
            // ],
            // [
            //     {
            //         collection: "PC GEARVN Intel",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx4.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx24.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx14.png?v=34146"
            //     },
            //     {
            //         nameList: "GVN TITAN - Core i9",
            //         nameAndSrc: ["Titan Plus i4090",
            //             "Titan Plus i4080",
            //             "Titan Plus i3070Ti", "Titan i3060Ti", "Titan i3060"]
            //     },
            //     {
            //         nameList: "GVN PHANTOM - Core i7",
            //         nameAndSrc: ["Phantom Plus i4080", "Phantom Plus i4070Ti", "Phantom Plus i3070Ti", "Phantom i3060Ti", "Phantom i3060", "Phantom i3050", "Phantom i2060"]
            //     },
            //     {
            //         nameList: "GVN VIPER - Core i5",
            //         nameAndSrc: ["Viper Plus i3070Ti", "Viper Plus i3060Ti", "Viper Plus i3060 White", "Viper Plus i3060", "Viper i3060", "Viper i3050", "Viper i3050 White", "Viper i2060", "Viper i1660S", "Viper i1650", "Viper i1050Ti"]
            //     },
            //     {
            //         nameList: "GVN MINION - Core i3",
            //         nameAndSrc: ["Minion i3050", "Minion i2060", "Minion i1660S", "Minion i1650", "Minion i1650 White", "Minion i1050Ti", "Minion i1030", "Minion i730"]
            //     },
            //     {
            //         nameList: "GVN ProArt",
            //         nameAndSrc: ["ProArt Plus 5 i3060Ti", "ProArt Plus 9 i3090Ti"]
            //     }
            // ],
            // [
            //     {
            //         collection: "PC GEARVN AMD",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx5.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx25.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx15.png?v=34146"
            //     },
            //     {
            //         nameList: "GVN ProArt",
            //         nameAndSrc: ["ProArt Plus 9 a4090", "ProArt Plus 9 a3090", "ProArt Plus 7 a3090Ti", "ProArt Plus 7 a3080Ti", "ProArt Plus 5 a3070", "ProArt Plus 5 a3060Ti"]
            //     },
            //     {
            //         nameList: "GVN TITAN - Ryzen 9",
            //         nameAndSrc: ["Titan Plus a4090", "Titan Plus a3090", "Titan Plus a3080Ti", "Titan Plus a3070Ti"]
            //     },
            //     {
            //         nameList: "GVN PHANTOM - Ryzen 7",
            //         nameAndSrc: ["Phantom Plus a3080Ti", "Phantom Plus a3070Ti", "Phantom Plus a3060Ti", "Phantom a3060"]
            //     },
            //     {
            //         nameList: "GVN VIPER - Ryzen 5",
            //         nameAndSrc: ["Viper Plus a3050", "Viper Plus a2060", "Viper a1660S", "Viper a1650"]
            //     }
            // ],
            // [
            //     {
            //         collection: "PC Doanh Nghiệp",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx6.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx26.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx16.png?v=34146"
            //     },
            //     {
            //         nameList: "Giải pháp trọn bộ GEARVN",
            //         nameAndSrc: ["Homework Pentium + Màn hình", "Homework I3 + Màn hình", "Homework Mini Pentium + Màn hình", "Homework Mini I3 + Màn hình"]
            //     },
            //     {
            //         nameList: "Cấu hình GVN Homework",
            //         nameAndSrc: ["Homework Pentium - G6405", "Homework I3 - 10105", "Homework I3 - 12100", "Homework I3 - 10105F - GT 730", "Homework I5 - 11400", "Homework I5 - 12400", "Homework I7 - 12700", "Homework Athlon - 3000G", "Homework R3 - 3200G", "Homework R5 - 5600G"]
            //     },
            //     {
            //         nameList: "Cấu hình GVN Homework Mini",
            //         nameAndSrc: ["Homework Mini Pentium - G6405", "Homework Mini I3 - 10105", "Homework Mini I3 - 12100"]
            //     },
            //     {
            //         nameList: "Máy bộ Intel® NUC",
            //         nameAndSrc: ["NUC Celeron/Pentium", "NUC10 (CPU Intel 10th gen)", "NUC11 (CPU Intel 11st gen)", "NUC Extreme kit - Hiệu năng cao"]
            //     },
            //     {
            //         nameList: "Máy bộ Mini PC",
            //         nameAndSrc: ["ASUS Mini PC PN63-S1", "HP ProDesk 400 G6 Mini", "HP EliteDesk 800 G6 Mini"]
            //     }
            // ],
            // [
            //     {
            //         collection: "Linh kiện PC",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx7.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx27.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx17.png?v=34146"
            //     },
            //     {
            //         nameList: "VGA - Card màn hình",
            //         nameAndSrc: ["RTX 4090 (Mới)", "RTX 4080 (Mới)", "RTX 4070 Ti (Mới)", "RTX Ampere 3090 Ti", "RTX Ampere 3090", "RTX Ampere 3080 Ti", "RTX Ampere 3080", "RTX Ampere 3070 Ti", "RTX Ampere 3070", "NVIDIA Quadro"]
            //     },
            //     {
            //         nameList: "VGA - Card màn hình",
            //         nameAndSrc: ["RTX Ampere 3060 Ti", "RTX Ampere 3060", "RTX Ampere 3050", "GTX 1660 - RTX 2060", "GTX 1650  - 1650 Super 4G", "GT 710/1030 - GTX 1050 Ti", "Intel Arc A380", "AMD Radeon RX"]
            //     },
            //     {
            //         nameList: "CPU - Bộ vi xử lý",
            //         nameAndSrc: ["Intel thế hệ 13 (Mới)", "Intel thế hệ 12", "Intel thế hệ 11", "Intel thế hệ 10", "Intel X-Series LGA2066", "Intel Xeon", "AMD Ryzen 7000 (Mới)", "AMD Ryzen 5000", "AMD Ryzen 4000", "AMD Ryzen 3000", "AMD Threadripper PRO", "AMD Threadripper"]
            //     },
            //     {
            //         nameList: "Bo mạch chủ",
            //         nameAndSrc: ["Intel Z790 (Mới)", "Intel Z690", "Intel B760 (Mới)", "Intel B660", "Intel H610", "Intel H510", "Intel X299X", "AMD X670 (Mới)", "AMD X570", "AMD B650 (Mới)", "AMD B550", "AMD A320", "AMD TRX40"]
            //     },
            //     {
            //         nameList: "Ram - Bộ nhớ trong",
            //         nameAndSrc: ["RAM DDR5", "Ram LED RGB - DDR4", "Ram 8GB - DDR4", "Ram 16GB - DDR4", "Ram Corsair", "Ram G.Skill", "Ram Kingston"]
            //     },
            //     {
            //         nameList: "Lưu trữ SSD - HDD",
            //         nameAndSrc: ["SSD M.2 PCIe NVMe Gen 4", "SSD M.2 PCIe NVMe", "SSD 2.5' SATA 3", "SSD 240G - 256G", "SSD 120G - 128G", "SSD 480G - 512G", "SSD trên 1TB", "HDD"]
            //     },
            //     {
            //         nameList: "Case - Vỏ Máy Tính",
            //         nameAndSrc: ["Case Dưới 1 Triệu", "Case Từ 1 đến 2 triệu", "Case trên 2 triệu", "Case InWin", "Case Lian Li", "Case NZXT", "Case Corsair", "Case Thermaltake"]
            //     },
            //     {
            //         nameList: "PSU - Nguồn Máy Tính",
            //         nameAndSrc: ["Nguồn Trên 1000W", "Nguồn 700W-850W", "Nguồn 550W-650W", "Nguồn 300W-500W", "Nguồn Corsair", "Nguồn NZXT", "Nguồn Cooler Master"]
            //     },
            //     {
            //         nameList: "Tản nhiệt - Fan RGB",
            //         nameAndSrc: ["Tản nhiệt khí", "Tản nhiệt AIO 240mm", "Tản nhiệt AIO 280mm", "Tản nhiệt AIO 360mm", "Tản nhiệt AIO 420mm", "Fan RGB", "Phụ kiện máy tính"]
            //     },
            //     {
            //         nameList: "Linh kiện PC ITX",
            //         nameAndSrc: ["Bo mạch chủ ITX", "Case ITX", "Nguồn SFX", "Tản nhiệt AIO 120mm"]
            //     }
            // ],
            // [
            //     {
            //         collection: "Apple",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx8.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx28.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx18.png?v=34146"
            //     },
            //     {
            //         nameList: "MacBook",
            //         nameAndSrc: ["Macbook Air M2", "Macbook Pro M2", "MacBook Air", "MacBook Pro 13", "MacBook Pro 14", "MacBook Pro 16"]
            //     },
            //     {
            //         nameList: "iMac",
            //         nameAndSrc: ['iMac M1 24"']
            //     },
            //     {
            //         nameList: "Mac mini",
            //         nameAndSrc: ["Mac mini M1"]
            //     },
            //     {
            //         nameList: "Phụ kiện Apple",
            //         nameAndSrc: ["Bàn phím, Chuột", "Thiết bị âm thanh"]
            //     },
            //     {
            //         nameList: "Mac Studio",
            //         nameAndSrc: []
            //     },
            //     {
            //         nameList: "Phụ kiện HyperDrive",
            //         nameAndSrc: []
            //     }
            // ],
            // [
            //     {
            //         collection: "Màn hình",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx9.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx29.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx19.png?v=34146"
            //     },
            //     {
            //         nameList: "Hãng sản xuất",
            //         nameAndSrc: ["LG", "Asus", "ViewSonic", "Dell", "Gigabyte", "AOC", "Acer", "HKC"]
            //     },
            //     {
            //         nameList: "Hãng sản xuất",
            //         nameAndSrc: ["MSI", "Lenovo", "Samsung", "Cooler Master", "Philips", "LC-Power", "Alienware"]
            //     },
            //     {
            //         nameList: "Giá tiền",
            //         nameAndSrc: ["Dưới 5 triệu", "Từ 5 triệu đến 10 triệu", "Từ 10 triệu đến 20 triệu", "Từ 20 triệu đến 30 triệu", "Trên 30 triệu"]
            //     },
            //     {
            //         nameList: "Độ Phân giải",
            //         nameAndSrc: ["HD 720p", "Full HD 1080p", "2K 1440p", "Màn hình máy tính 4K UHD"]
            //     },
            //     {
            //         nameList: "Tần số quét",
            //         nameAndSrc: ["60Hz", "75Hz", "100Hz", "144Hz", "240Hz"]
            //     },
            //     {
            //         nameList: "Màn hình cong",
            //         nameAndSrc: ['24" Curved', '27" Curved', '32" Curved', 'Trên 32" Curved']
            //     },
            //     {
            //         nameList: "Kích thước",
            //         nameAndSrc: ['22"', '24"', '27"', '29"', '32"', 'Trên 32"', 'Hỗ trợ giá treo (VESA)']
            //     },
            //     {
            //         nameList: "Màn hình đồ họa",
            //         nameAndSrc: ['Màn hình đồ họa 24"', 'Màn hình đồ họa 27"', 'Màn hình đồ họa 32"']
            //     },
            //     {
            //         nameList: "Phụ kiện màn hình",
            //         nameAndSrc: ['Giá treo màn hình', 'Phụ kiện dây HDMI,DP,LAN']
            //     },
            //     {
            //         nameList: "Màn hình di động",
            //         nameAndSrc: ['Full HD 1080p', '2K 1440p', 'Có cảm ứng']
            //     },
            //     {
            //         nameList: "Máy chiếu",
            //         nameAndSrc: ['Máy chiếu Asus', 'Máy chiếu Beecube', 'Máy chiếu Wanbo']
            //     },
            // ],
            // [
            //     {
            //         collection: "Bàn phím",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx10.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx210.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx110.png?v=34146"
            //     },
            //     {
            //         nameList: "hương hiệu",
            //         nameAndSrc: ["Akko", "Logitech", "Razer", "Corsair", "Leopold", "iKBC", "Steelseries", "Asus", "Vortex", "IQUNIX (Mới)", "Mistel", "Keychron", "FL-Esports", "Ducky"]
            //     },
            //     {
            //         nameList: "Brand Name",
            //         nameAndSrc: ["Dare-U", "E-Dra", "Rapoo", "Fuhlen", "HyperX", "Ajazz", "Havit", "Cooler Master", "NZXT", "Varmilo (Mới)", "Newmen"]
            //     },
            //     {
            //         nameList: "Giá tiền",
            //         nameAndSrc: ["Dưới 1 triệu", "1 triệu - 2 triệu", "2 triệu - 3 triệu", "3 triệu - 4 triệu", "Trên 4 triệu"]
            //     },
            //     {
            //         nameList: "Brand Name Akko",
            //         nameAndSrc: ["ACR Series", "PC75B Series", "3068 Series", "3084 Series", "3087 Series", "3098 Series", "3108 Series", "5087 Series", "5108 Series", "Mojike Series", "RGB Series", "Bluetooth Series"]
            //     },
            //     {
            //         nameList: "Brand Name Leopold",
            //         nameAndSrc: ["660M Series", "750R Series", "900R Series", "980M Series", "Bluetooth Series"]
            //     },
            //     {
            //         nameList: "Brand Name IKBC",
            //         nameAndSrc: ["W200 Series"]
            //     },
            //     {
            //         nameList: "Brand Name Razer",
            //         nameAndSrc: ["Blackwidow Series", "Huntsman Series"]
            //     },
            //     {
            //         nameList: "Brand Name Corsair",
            //         nameAndSrc: ["K63 Series", "K68 Series", "K70 Series", "K95 Series", "K100 Series"]
            //     },
            //     {
            //         nameList: "Kết nối",
            //         nameAndSrc: ["Bluetooth", "Wireless"]
            //     },
            //     {
            //         nameList: "Phụ kiện bàn phím cơ",
            //         nameAndSrc: ["Keycaps", "Kê tay"]
            //     }
            // ],
            // [
            //     {
            //         collection: "Chuột + Lót chuột",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx11.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx211.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx111.png?v=34146"
            //     },
            //     {
            //         nameList: "Chuột theo hãng",
            //         nameAndSrc: ["Logitech", "Razer", "Corsair", "Steelseries", "Asus", "HyperX", "Zowie", "NZXT", "Pulsar (Mới)"]
            //     },
            //     {
            //         nameList: "Chuột theo hãng",
            //         nameAndSrc: ["Dare-U", "Rapoo", "Fuhlen", "Havit", "Akko", "MSI", "Cooler Master", "Cougar", "E-Dra", "Newmen"]
            //     },
            //     {
            //         nameList: "Chuột theo giá tiền",
            //         nameAndSrc: ["Dưới 500 nghìn", "Từ 500 nghìn - 1 triệu", "Từ 1 triệu - 2 triệu", "Trên 2 triệu - 3 triệu", "Trên 3 triệu"]
            //     },
            //     {
            //         nameList: "Brand Name Logitech",
            //         nameAndSrc: ["Logitech G Pro Series", "Logitech G102 Series", "Logitech G Series"]
            //     },
            //     {
            //         nameList: "Chuột không dây",
            //         nameAndSrc: ["Bluetooth", "Wireless"]
            //     },
            //     {
            //         nameList: "Lót chuột theo hãng",
            //         nameAndSrc: ["Dare-U", "Razer", "Steelseries", "Corsair", "HyperX"]
            //     }
            // ],
            // [
            //     {
            //         collection: "Tai Nghe - Loa",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx12.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx212.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx112.png?v=34146"
            //     },
            //     {
            //         nameList: "Hãng tai nghe",
            //         nameAndSrc: ["Logitech", "HyperX", "Razer", "Corsair", "Asus", "Steelseries", "Sony", "Soundpeats"]
            //     },
            //     {
            //         nameList: "Hãng tai nghe",
            //         nameAndSrc: ["Dare-U", "Zidli", "Rapoo", "Havit/ MPOW", "AOC", "Cooler Master", "E-Dra"]
            //     },
            //     {
            //         nameList: "Tai nghe Audio",
            //         nameAndSrc: ["Soundpeats"]
            //     },
            //     {
            //         nameList: "Tai nghe theo giá",
            //         nameAndSrc: ["Tai nghe dưới 1 triệu", "Tai nghe 1 triệu đến 2 triệu", "Tai nghe 2 đến 3 triệu", "Tai nghe 3 đến 4 triệu", "Tai nghe trên 4 triệu"]
            //     },
            //     {
            //         nameList: "Kiểu kết nối",
            //         nameAndSrc: ["Tai nghe Wireless", "Tai nghe Bluetooth"]
            //     },
            //     {
            //         nameList: "Kiểu tai nghe",
            //         nameAndSrc: ["Tai nghe Over-ear", "Tai nghe Gaming In-ear"]
            //     },
            //     {
            //         nameList: "Loa theo thương hiệu",
            //         nameAndSrc: ["SoundMax", "Microlab", "Thonet và Vander", "Logitech", "Razer"]
            //     },
            //     {
            //         nameList: "Loa theo giá tiền",
            //         nameAndSrc: ["Loa dưới 1 triệu", "Loa trên 1 triệu", "Loa trên 2 triệu"]
            //     },
            //     {
            //         nameList: "Dạng loa",
            //         nameAndSrc: ["Loa để bàn", "Loa di động"]
            //     },
            //     {
            //         nameList: "Kiểu loa",
            //         nameAndSrc: ["Loa Gaming", "Loa Audio"]
            //     },
            //     {
            //         nameList: "Giá treo tai nghe",
            //         nameAndSrc: ["Razer", "Corsair"]
            //     }
            // ],
            // [
            //     {
            //         collection: "Ghế - Bàn",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx13.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx213.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx113.png?v=34146"
            //     },
            //     {
            //         nameList: "Brand Name ghế Gaming",
            //         nameAndSrc: ["Corsair", "Warrior", "DXRacer", "Razer", "E-DRA", "Anda Seat", "Cougar"]
            //     },
            //     {
            //         nameList: "Brand Name ghế Gaming",
            //         nameAndSrc: ["Noble Chair", "MSI", "ASUS", "Cooler Master", "AKRacing"]
            //     },
            //     {
            //         nameList: "Brand Name ghế CTH",
            //         nameAndSrc: ["Epione", "Sihoo", "E-Dra", "Warrior"]
            //     },
            //     {
            //         nameList: "Kiểu ghế",
            //         nameAndSrc: ["Ghế Công thái học", "Ghế Gaming"]
            //     },
            //     {
            //         nameList: "Brand Name Corsair",
            //         nameAndSrc: ["T3 RUSH Series", "TC60 Series", "TC200 Series"]
            //     },
            //     {
            //         nameList: "Brand Name Sihoo",
            //         nameAndSrc: ["M18 Series", "M57 Series"]
            //     },
            //     {
            //         nameList: "Brand Name DXRacer",
            //         nameAndSrc: ["Drifting Series", "King Series", "G Series", "A.I.R series"]
            //     },
            //     {
            //         nameList: "Bàn Gaming",
            //         nameAndSrc: ["Bàn Gaming DXRacer", ">Bàn Gaming E-Dra", "Bàn Gaming Warrior", "Bàn Gaming Cooler Master"]
            //     },
            //     {
            //         nameList: "Bàn công thái học",
            //         nameAndSrc: ["Bàn CTH Epione", "Bàn CTH E-Dra", "Bàn CTH Warrior"]
            //     },
            //     {
            //         nameList: "Lựa chọn theo cân nặng",
            //         nameAndSrc: ["Dưới 80 KG", "Trên 80 KG"]
            //     },
            //     {
            //         nameList: "Chất liệu",
            //         nameAndSrc: ["Da PU", "Da PVC", "Da Thật", "Da NAPPA", "Vải Smooth Fabric"]
            //     },
            //     {
            //         nameList: ">Giá tiền",
            //         nameAndSrc: ["Dưới 5 triệu", "Từ 5 đến 10 triệu", "Trên 10 triệu"]
            //     },
            //     {
            //         nameList: "Phụ kiện trang trí",
            //         nameAndSrc: []
            //     }
            // ],
            // [
            //     {
            //         collection: "Phần mềm và Mạng",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx14.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx214.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx114.png?v=34146"
            //     },
            //     {
            //         nameList: "Hãng sản xuất",
            //         nameAndSrc: ["Asus", "LinkSys", "TP-LINK", "Intel", "Mercusys"]
            //     },
            //     {
            //         nameList: "Router Wi-Fi",
            //         nameAndSrc: ["Gaming", "Phổ thông", "Xuyên tường", "Router Mesh Pack", "Router WiFi 5", "Router WiFi 6"]
            //     },
            //     {
            //         nameList: "USB Thu sóng - Card mạng",
            //         nameAndSrc: ["Usb WiFi", "Card WiFi", "Card Ethernet", "Dây cáp mạng"]
            //     },
            //     {
            //         nameList: "Phần mềm bán chạy",
            //         nameAndSrc: []
            //     },
            //     {
            //         nameList: "Microsoft Office",
            //         nameAndSrc: ["Microsoft Office 365", "Office 2021"]
            //     },
            //     {
            //         nameList: "Microsoft Windows",
            //         nameAndSrc: ["Windows 10 Home", "Windows 10 Pro", "Windows 11 Home", "Windows 11 Pro"]
            //     }
            // ],
            // [
            //     {
            //         collection: "Phụ kiện",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx15.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx215.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx115.png?v=34146"
            //     },
            //     {
            //         nameList: "Thiết bị Streaming",
            //         nameAndSrc: ["AverMedia", "Razer", "Elgato"]
            //     },
            //     {
            //         nameList: "Asus ROG Phone",
            //         nameAndSrc: ["ROG Phone 6 12/256"]
            //     },
            //     {
            //         nameList: "Microphone",
            //         nameAndSrc: ["Razer", "HyperX", "Thronmax"]
            //     },
            //     {
            //         nameList: "Webcam",
            //         nameAndSrc: ["720p", "1080p", "4K", "Conference"]
            //     },
            //     {
            //         nameList: "Đèn Led trang trí",
            //         nameAndSrc: ["Nanoleaf", "Govee"]
            //     },
            //     {
            //         nameList: "Balo và Túi xách",
            //         nameAndSrc: ["Razer", "Asus", "GEARVN", "Túi chống sốc"]
            //     },
            //     {
            //         nameList: "Đế tản nhiệt Laptop",
            //         nameAndSrc: ["Cooler Master", "Rain Design", "Hyperdrive"]
            //     },
            //     {
            //         nameList: "Phụ kiện HyperX",
            //         nameAndSrc: ["Đệm tai nghe", "Microphone", "Dây cáp", "Túi/hộp đựng", "Keycaps"]
            //     },
            //     {
            //         nameList: "Tay cầm, vô lăng",
            //         nameAndSrc: ["Tay cầm X-Box", "Tay cầm MSI", "Tay cầm PS4", "Tay cầm Rapoo", "Tay cầm DareU", "Vô lăng"]
            //     },
            //     {
            //         nameList: "Cổng chuyển USB, Giá đỡ",
            //         nameAndSrc: ["Hyperdrive", "Rain Design"]
            //     },
            //     {
            //         nameList: "Phụ kiện dây HDMI,DP,LAN",
            //         nameAndSrc: ["Cáp HDMI", "Cáp DP"]
            //     },
            //     {
            //         nameList: "Soundcard",
            //         nameAndSrc: ["Creative", "Sennheiser"]
            //     },
            //     {
            //         nameList: "Phụ kiện điện thoại",
            //         nameAndSrc: ["Sạc dự phòng", "Cáp Type C", "Cáp Lightning - IOS", "Ổ cắm điện"]
            //     },
            //     {
            //         nameList: "Bộ lưu điện",
            //         nameAndSrc: ["Ares"]
            //     }
            // ],
            // [
            //     {
            //         collection: "Xả kho giá tốt",
            //         imgBanner: "//theme.hstatic.net/1000026716/1000440777/14/xxxbannerxxx16.png?v=34146",
            //         img1icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx216.png?v=34146",
            //         img2icon: "//theme.hstatic.net/1000026716/1000440777/14/xxx116.png?v=34146"
            //     },
            //     {
            //         nameList: "",
            //         nameAndSrc: ["", "", "", "", "", "", "", "", "", "", ""]
            //     }
            // ],
        ]
    );

    useEffect(() => {
        fetchCollecting()
            .then(result => {
                // console.log(result)
                setItem(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <>
        {
            item.map((item, index) => {
                return <li className="cat-menu-item " key={index}>
                    <a className="gearvn-cat-menu-item" href="https://gearvn.com/pages/laptop-van-phong">
                        <span className="gearvn-cat-menu-icon">
                            {/* <img alt="" src={item[0].img1icon} />
                        <img alt="" src={item[0].img2icon} /> */}
                        </span>
                        <span className="gearvn-cat-menu-name">{item.name}</span>
                    </a>
                    <div className="megamenu absolute-center level0 xlab_grid_container this" >
                        <div className="column xlab_column_5_5">
                            {
                                item.category.map((itemCollection, indexCollection) => {

                                    return <div className="sub-cat-item" key={indexCollection}>
                                        <a className="sub-cat-item-name" href="https://gearvn.com/pages/laptop-van-phong">{itemCollection.name}</a>
                                        {itemCollection.collecting.map((itemNameList, indexItemList) => {
                                            return <NavLink className="sub-cat-item-filter" to={"/collectionDetail/" + itemNameList.name} state={{ category: itemNameList.name, collection: item.name.toLowerCase() }} key={indexItemList}>{itemNameList.name}</NavLink>
                                        })}
                                        <br />
                                    </div>
                                })
                            }
                            {
                                item.category[0].collecting.map((itemCollection, indexCollection) => {
                                    console.log()
                                    return <div className="sub-cat-item" key={indexCollection}>
                                        {itemCollection.category.length > 0 && <a className="sub-cat-item-name" href="https://gearvn.com/pages/laptop-van-phong">{itemCollection.name}</a>}
                                        {itemCollection.category.length > 0 && itemCollection.category.map((itemNameList, indexItemList) => {
                                            return <NavLink className="sub-cat-item-filter" to={"/collectionDetail/" + itemNameList.name} state={{ category: itemNameList.name, collection: item.name.toLowerCase() }} key={indexItemList}>{itemNameList.name}</NavLink>
                                        })}
                                        <br />
                                    </div>
                                })
                            }
                        </div>
                        <div className="sub-cat-item pull-right" style={{ padding: 0, display: 'flex', justifyContent: 'flex-end' }}>
                            <a className="none" href="https://gearvn.com/pages/laptop-van-phong">
                                {/* <img src={item[0].imgBanner} alt="" /> */}
                            </a>
                        </div>
                    </div>
                </li>
            })
        }
        
        </>
    );
}

export default ListCategoryProduct;
