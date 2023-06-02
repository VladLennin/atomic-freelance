import React, {useEffect, useState} from 'react';
import {BasketItem} from "../model/BasketItem";
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com';


const OrderPage = () => {

    const [items, setItems] = useState<BasketItem[]>([]);

    const [totalCost, setTotalCost] = useState<number>(0)
    const [orderAccepted, setOrderAccepted] = useState(false)
    useEffect(() => {
        let temp = 0
        for (let i = 0; i < items.length; i++) {
            temp += (items[i].cost * items[i].count)
        }
        setTotalCost(temp)
    }, [items])

    useEffect(() => {
        const storedItems = localStorage.getItem('basket');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(items));
    }, [items]);


    return (
        <>
            <Link to={"/"}>
                <div className={"flex gap-2 mt-4 ml-4 aeroport-light"}>
                    <i className="bi bi-arrow-left"></i>
                    <p>Назад</p>
                </div>
            </Link>
            {   !orderAccepted?
                <div className={"flex flex-col mt-10 items-center h-screen aeroport-medium p-2"}>
                    <p className={"text-2xl"}>Створити замовлення</p>
                    <div className={"h-[1px] bg-[#686868] w-full my-1"}/>
                    <div className={"grid grid-cols-3 gap-4 m-5"}>
                        <p>Імʼя</p>
                        <input placeholder={"Імʼя..."} className={"border rounded col-span-2 p-1"} type="text"/>
                        <p>Прізвище</p>
                        <input placeholder={"Прізвище..."} className={"border rounded  col-span-2 p-1"} type="text"/>
                        <p>Телефон</p>
                        <input placeholder={"Телефон..."} className={"border rounded  col-span-2 p-1"} type="text"/>
                        <p>Пошта</p>
                        <input placeholder={"Пошта..."} className={"border rounded  col-span-2 p-1"} type="text"/>
                    </div>
                    <div className={"h-[1px] bg-[#686868] w-full my-2"}/>

                    <div className={"px-2 mt-5"}>
                        <p className={"my-2 text-center text-2xl"}>Деталі замовлення</p>
                        <div className={"h-[1px] bg-[#686868] w-full my-2"}/>

                        {
                            items.map((item, index) => (
                                <div className={"flex items-center justify-between"}>
                                    <img className={"h-[50px] mr-2 border rounded"} src={item?.img} alt=""/>
                                    <p>{item.name}</p>
                                    <div className={"flex items-center"}>

                                        <div className={"text-2xl flex flex-col items-center justify-center mr-3"}>
                                            <p className={"text-xl"}>{item.count}</p>
                                        </div>
                                    </div>

                                </div>
                            ))
                        }
                        <div className={"h-[1px] bg-[#686868] w-full my-2"}/>
                        <p className={"mt-4"}>До сплати: {totalCost} грн</p>
                        <div className={"flex justify-center"}>
                            <button onClick={() => {
                                setOrderAccepted(true)
                            }} className={"w-3/4 text-center py-2 mt-5 text-xl bg-gray-300"}>
                                Підтвердити замовлення
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div className={"text-3xl aeroport-medium h-screen flex flex-col items-center justify-center"}>
                    <p>Дякуємо за замовлення!</p>
                </div>
            }
        </>
    );
};

export default OrderPage;