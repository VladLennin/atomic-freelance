import React, {useEffect, useState} from 'react';
import {BasketItem} from "../model/BasketItem";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
// @ts-ignore
import img5 from "../assets/prod5-assets/5.png";// @ts-ignore
import img6 from "../assets/prod5-assets/6.png";// @ts-ignore
import img7 from "../assets/prod5-assets/7.png";// @ts-ignore
import img8 from "../assets/prod5-assets/8.png";// @ts-ignore
import img9 from "../assets/prod5-assets/9.png";// @ts-ignore
import img10 from "../assets/prod5-assets/10.png";// @ts-ignore
import img11 from "../assets/prod5-assets/11.png";// @ts-ignore
import img1 from "../assets/prod5-assets/1.png";// @ts-ignore
import img3 from "../assets/prod5-assets/3.png";// @ts-ignore
import img2 from "../assets/prod5-assets/2.png";// @ts-ignore
import img4 from "../assets/prod5-assets/4.png";
import AudioComponentCustom from "../components/AudioComponentCustom";
// @ts-ignore
import audio from "../assets/prod5-assets/5.mp3";

const ProductPage5 = () => {

    const product = {
        title: "AKRAPOVIC MTP-BM/SS/1H Задня частина вихлопу Evolution для BMW F30 335i і F32 435i (з насадками)",
        characteristics: [
            {name: "Потужність", value: "+5.2 kW", description: "at 5850 rpm"},
            {name: "Крутний момент", value: "+10.7 Nm", description: "at 3500 rpm"},
            {name: "Вага", value: "-0.8 kg", description: ""},
        ],
        titleBeforeDesc: "ЛИШЕ СЕРТИФІКОВАНІ ТОВАРИ ВІД ОФІЦІЙНОГО ПРЕДСТАВНИКА!",
        cost: 123536.00,
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
        img5, img6, img7, img8, img9, img10, img11
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
                <a href="https://www.atomic-shop.ua/akrapovic-mtp-bm-ss-1h-evolution-line-ss-bmw-335i-f30-f31-2012-2015-ec-approval">
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
                        <p>222.9 / 6000 rpm</p>
                        <p>303.1 / 6000 rpm</p>
                        <p>299 / 6000 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>227.6 / 6100 rpm</p>
                        <p>309.4 / 6100 rpm</p>
                        <p>305.2 / 6100 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>+ 5.2 / 5850 rpm</p>
                        <p>+ 7.1 / 5850 rpm</p>
                        <p>+ 7 / 5850 rpm</p>
                    </div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Макс.крутний момент</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>Nm</p>
                        <p>lb-ft</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>426.9 / 2650 rpm</p>
                        <p>314.9 / 2650 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>433.5 / 3500 rpm</p>
                        <p>	319.7 / 3500 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>+ 10.7 / 3500 rpm</p>
                        <p>+ 7.9 / 3500 rpm</p>
                    </div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Вага</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>kg</p>
                        <p>lb</p>
                        <p>%</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>21.2</p>
                        <p>46.7</p>
                        <p></p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>20.4 - 0.8</p>
                        <p>245 - 1.7</p>
                        <p></p>

                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>- 0.8</p>
                        <p>- 1.7</p>
                        <p>- 3.8</p>
                    </div>
                </div>
                <div className={"aeroport-light text-lg flex items-center justify-center"}>
                    Гортайте<i className=" ml-2 bi bi-arrow-right"></i>
                </div>
            </div>

            <div className={"grid grid-cols-2 gap-4"}>
                <div className={"col-span-2"}>
                    <img src={img1} alt=""/>
                </div>
                <div className={"col-span-2"}>
                    <img className={"w-5/6 flex justify-start"} src={img3} alt=""/>
                </div>
                <div className={"col-span-2 flex justify-end"}>
                    <img className={"w-5/6"} src={img2} alt=""/>
                </div>
                <div className={"col-span-2"}>
                    <img src={img4} alt=""/>
                </div>
            </div>

            <Footer/>
        </>
    )
};

export default ProductPage5;