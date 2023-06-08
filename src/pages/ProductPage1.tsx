import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";


// @ts-ignore
import img1 from '../assets/prod1-assets/img1.png'// @ts-ignore
import img2 from '../assets/prod1-assets/img2.png'// @ts-ignore
import img3 from '../assets/prod1-assets/img3.png'// @ts-ignore
import img4 from '../assets/prod1-assets/img4.png'// @ts-ignore
import img5 from '../assets/prod1-assets/img5.jpg'// @ts-ignore
import img6 from '../assets/prod1-assets/img6.jpg'// @ts-ignore
import img7 from '../assets/prod1-assets/img7.jpg'// @ts-ignore
import img8 from '../assets/prod1-assets/img8.jpg'// @ts-ignore
import img9 from '../assets/prod1-assets/img9.jpg'// @ts-ignore
import audio from '../assets/prod1-assets/1.mp3'
import {BasketItem} from "../model/BasketItem";
import AudioComponentCustom from "../components/AudioComponentCustom";

const ProductPage1 = () => {
    const product = {
        title: "AKRAPOVIC S-PO/TI/24 Slip-On Race Line (Titanium)",
        characteristics: [
            {name: "Потужність", value: "+ 5.6 Kw", description: "at 4950 rpm"},
            {name: "Крутний момент", value: "+ 19.3 Nm", description: "at 2250 rpm"},
            {name: "Вага", value: "- 7.6 kg", description: ""},
        ],
        titleBeforeDesc: "ЛИШЕ СЕРТИФІКОВАНІ ТОВАРИ ВІД ОФІЦІЙНОГО ПРЕДСТАВНИКА!",
        cost: 326991.00,
        img: img5,
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
        img5, img6, img7, img8, img9
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
                <a href="https://www.atomic-shop.ua/akrapovic-s-po-ti-24-slip-on-race-line-titanium-for-porsche-718-cayman-gt4-rs-2022-2023">
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
                        <p>372.4 / 8350 rpm</p>
                        <p>506.3 / 8350 rpm</p>
                        <p>499.4 / 8350 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>373.3 / 8350 rpm</p>
                        <p>507.5 / 8350 rpm</p>
                        <p>500.6 / 8350 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>+ 5.6 / 4950 rpm</p>
                        <p>+ 7.6 / 4950 rpm</p>
                        <p>+ 7.5 / 4950 rpm</p>
                    </div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Макс.крутний момент</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>Nm</p>
                        <p>lb-ft</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>471.5 / 6300 rpm</p>
                        <p>347.8 / 6300 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>475.3 / 6100 rpm</p>
                        <p>350.6 / 6100 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>+ 19.3 / 2250 rpm</p>
                        <p>+ 14.2 / 2250 rpm</p>
                    </div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Вага</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>kg</p>
                        <p>lb</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>17.1</p>
                        <p>37.7</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>9.5 - 7.6</p>
                        <p>20.9 - 16.8</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>- 7.6</p>
                        <p>- 16.8</p>
                    </div>


                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Шум продукту</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>dB</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>96.5 / 3750 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>103.5 / 3750 rpm</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>7</p>
                    </div>

                    <div className={"col-span-9 h-[1px] bg-gray-700 w-full"}/>

                    <div className={"col-span-2 flex flex-col justify-center items-center"}>Час встановлення</div>
                    <div className={"col-span-1 flex flex-col gap-3"}>
                        <p>min</p>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                    </div>
                    <div className={"col-span-2 flex flex-col gap-3"}>
                        <p>210</p>
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
    );
};

export default ProductPage1;