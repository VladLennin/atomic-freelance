import React from 'react';

const Footer = () => {
    return (
        <div className={"px-5 text-[#686868] bg-[#EEEDEE] mt-4 manrope-light pt-4"}>
            <div className={"manrope-medium"}>
                Інформація
            </div>
            <div className={"bg-[#282828] h-[0.5px] w-full my-2"}/>
            <div className={"flex mt-2"}>
                <i className="bi bi-chevron-right"></i>
                <a href="https://www.atomic-shop.ua/company">
                    <p>Про нас</p>
                </a>
            </div>

            <div className={"flex mt-2"}>
                <i className="bi bi-chevron-right"></i>
                <p><a href="https://www.atomic-shop.ua/delivery">Доставка/оплата</a></p>
            </div>

            <div className={"flex mt-2"}>
                <i className="bi bi-chevron-right"></i>
                <p><a href="https://www.atomic-shop.ua/public-offer-contract">Договір публічної оферти</a></p>
            </div>

            <div className={"grid grid-cols-4 gap-10 mt-3"}>
                <div className={"mr-4"}>
                    <p className={"manrope-medium"}>Підписатись</p>
                </div>
                <div className={"flex ml-2 gap-2"}>
                    <a href="https://www.instagram.com/atomicshopua/">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCYCxVWO2lyssHlZnIuz3OAQ">
                        <i className="bi bi-youtube"></i>
                    </a>
                    <a href="https://www.facebook.com/AtomicShopUkraine/">
                        <i className="bi bi-facebook"></i>
                    </a>
                </div>
            </div>
            <div className={"bg-[#282828] h-[0.5px] w-full my-2"}/>
            <div className={"m-2 manrope-bold"}>
                <p>ATOMIC-SHOP</p>
            </div>

            <div className={"flex items-center"}>
                <i className="bi bi-geo-alt-fill m-2"></i>
                <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9D%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%BE-%D0%9B%D1%83%D0%B3%D0%BE%D0%B2%D0%B0%D1%8F,+29,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4747664,30.5052721,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce0dfc69ca1f:0x6eecb806a092a410!8m2!3d50.474763!4d30.507847!16s%2Fg%2F11c2d1z4g_?entry=ttu">
                    <p>
                        Україна, Київ
                        вул. Набережна-Лугова, 29
                    </p>
                </a>
            </div>
            <div className={"bg-[#282828] h-[0.5px] w-full my-2"}/>

            <div className={"flex items-center"}>
                <i className="bi bi-telephone-fill m-2"></i>
                <a href="tel:+380684681168"><p> +380 68 468 1168</p></a>
            </div>

            <div className={"bg-[#282828] h-[0.5px] w-full my-2"}/>

            <div className={"flex items-center"}>
                <i className="bi bi-envelope m-2"></i>
                <a href="mailto:info@atomic-shop.ua">
                    <p>
                        info@atomic-shop.ua
                    </p>
                </a>
            </div>

        </div>
    );
};

export default Footer;