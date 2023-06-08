import React, {useEffect, useState} from 'react';
import {BasketItem} from "../model/BasketItem";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
// @ts-ignore
import img5 from "../assets/prod4-assets/5.png";// @ts-ignore
import img6 from "../assets/prod4-assets/6.png";// @ts-ignore
import img1 from "../assets/prod4-assets/1.png";// @ts-ignore
import img3 from "../assets/prod4-assets/3.png";// @ts-ignore
import img2 from "../assets/prod4-assets/2.png";// @ts-ignore
import img4 from "../assets/prod4-assets/4.png";
import AudioComponentCustom from "../components/AudioComponentCustom";
// @ts-ignore
import audio from "../assets/prod4-assets/4.mp3";

const ProductPage4 = () => {

    const product = {
        title: "AKRAPOVIC S-BM/T/2H Титанова вихлопна система Evolution Line для BMW F90 M5 (без насадок)",
        characteristics: [
            {name: "Потужність", value: "+8.3 kW", description: "at 5700 rpm"},
            {name: "Крутний момент", value: "+21.3 Nm", description: "at 2300 rpm"},
            {name: "Вага", value: "-9.4 kg", description: ""},
        ],
        titleBeforeDesc: "ЛИШЕ СЕРТИФІКОВАНІ ТОВАРИ ВІД ОФІЦІЙНОГО ПРЕДСТАВНИКА!",
        cost: 328360.00,
        img: img2,
        description: "Причини придбати у ATOMIC-SHOP:\n" +
            "▪️офіційна гарантія від виробника\n" +
            "▪️сертифікована оригінальна продукція\n" +
            "▪️найбільший асортимент товарів для тюнінгу та автоспорту від найвідоміших виробників\n" +
            "▪️зручна та швидка доставка від \"Нова Пошта\" по Україні\n" +
            "▪️можливість оплати при самовивозі, через LiqPay та розрахунковий рахунок для юридичних осіб"
    }

    const [items, setItems] = useState<BasketItem[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('basket');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(items));
    }, [items]);

    const addItem = (item: BasketItem) => {
        const existingItem = items.find((i) => i.name === item.name);
        if (existingItem) {
            const updatedItems = items.map((i) =>
                i.name === item.name ? {...i, count: i.count + 1} : i
            );
            setItems(updatedItems);
        } else {
            setItems([...items, {...item, count: 1}]);
        }
    };

    const removeItem = (index: number) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };


    const decreaseCount = (index: number) => {
        const newItems = [...items];
        if (newItems[index].count > 1) {
            newItems[index].count--;
            setItems(newItems);
        }
    };

    const increaseCount = (index: number) => {
        const newItems = [...items];
        newItems[index].count++;
        setItems(newItems);
    };

    const carouselItems = [
        img1, img2, img3,
    ];

    return (
        <>
            <Header increaseCount={increaseCount} decreaseCount={decreaseCount} setBasketItems={setItems}
                    removeItem={removeItem} basketItems={items}
                    countItemsInBasket={items.length}/>

            <div className={"text-[18px] aeroport-medium m-3 w-3/4"}>
                <p>{product.title}</p>
            </div>

            <Carousel images={carouselItems}/>
            <div className={"text-red-500 text-center my-4 text-2xl"}>
                {product.cost} ₴
            </div>
            <div className={"flex justify-between px-10 my-5 aeroport-light"}>
                <button
                    onClick={() => addItem({name: product.title, cost: product.cost, img: product.img} as BasketItem)}
                    className={"border border-[#282828]  px-6 py-2 "}>У кошик
                </button>
                <a href="https://www.atomic-shop.ua/akrapovic-s-bm-t-3h-slip-on-line-titanium-bmw-m2-competition-m2-cs-f87n-opf-gpf-2018-2020-ece-type-approval">
                    <button className={"bg-[#20A000] text-white px-6 py-2"}>
                        На сайт
                    </button>
                </a>

            </div>

            <AudioComponentCustom audio={audio}/>

            <div className={"bg-[#EEEDEE] flex justify-around px-2 py-4"}>
                {product.characteristics.map(char => (
                    <div className={"aeroport-light"}>
                        <p className={"text-[12px]"}>{char.name}</p>
                        <p className={"text-[24px]"}>{char.value}</p>
                        <div className={"bg-[#282828] h-[1px] w-full my-2"}/>
                        <pre className={"text-[12px]"}>{char.description}</pre>
                    </div>
                ))}
            </div>



            <div className={"aeroport-light text-[#282828] p-[20px]"}>
                <p className={"aeroport-medium"}>{product.titleBeforeDesc}</p>
                <p className={"aeroport-light mt-4"}>
                    {product.description.split('\n').map(item => (
                        <p>{item}</p>
                    ))}
                </p>
            </div>
            <div className={"max-w-screen overflow-x-scroll mb-10"}>
                <div
                    className={"grid grid-cols-9 w-[700px] text-[16px] overflow-x-scroll text-center aeroport-light gap-1 p-2 "}>
                    <div className={"col-span-2 "}></div>
                    <div className={"col-span-1"}>Од.виміру</div>
                    <div className={"col-span-2"}>Інші виробники</div>
                    <div className={"col-span-2"}>Akrapovic</div>
                    <div className={"col-span-2"}>Макс. посилення</div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Макс.потужність</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>kW</p>
                        <p>HP (m)</p>
                        <p>HP (i)</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>439.2 / 6100 rpm</p>
                        <p>597.1 / 6100 rpm</p>
                        <p>589 / 6100 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>443.4 / 6100 rpm</p>
                        <p>602.8 / 6100 rpm</p>
                        <p>594.6 / 6100 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>+ 8.3 / 5700 rpm</p>
                        <p>+ 11.3 / 5700 rpm</p>
                        <p>+ 11.1 / 5700 rpm</p>
                    </div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Макс.крутний момент</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>Nm</p>
                        <p>lb-ft</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>740 / 2900 rpm</p>
                        <p>545.8 / 2900 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>748 / 3050 rpm</p>
                        <p>551.7 / 3050 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p> + 21.3 / 2300 rpm</p>
                        <p>+ 15.7 / 2300 rpm</p>
                    </div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Вага</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>kg</p>
                        <p>lb</p>
                        <p>%</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>28.95</p>
                        <p>63.8</p>
                        <p></p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>19.52 - 9.4</p>
                        <p>43 - 20.8</p>
                        <p></p>

                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>- 9.4</p>
                        <p> - 20.8</p>
                        <p> - 32.6</p>
                    </div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Час встановлення</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>min</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>180</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                    </div>
                </div>
                <div className={"aeroport-light text-lg flex items-center justify-center"}>
                    Гортайте<i className=" ml-2 bi bi-arrow-right"></i>
                </div>
            </div>

            <div className={"grid grid-cols-2 gap-4"}>
                <div className={"col-span-2"}>
                    <img src={img4} alt=""/>
                </div>
                <div className={"col-span-2"}>
                    <img className={"w-5/6 flex justify-start"} src={img5} alt=""/>
                </div>
                <div className={"col-span-2"}>
                    <img src={img6} alt=""/>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default ProductPage4;