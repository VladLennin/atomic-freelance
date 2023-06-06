import React, {useEffect, useState} from 'react';
import {BasketItem} from "../model/BasketItem";
import {useNavigate} from "react-router-dom";
import axios from "axios";
// @ts-ignore
import logo from "../assets/logo.svg"
const OrderPage = () => {

    const [items, setItems] = useState<BasketItem[]>([]);

    const [totalCost, setTotalCost] = useState<number>(0)
    const [orderAccepted, setOrderAccepted] = useState(false)

    const [order, setOrder] = useState({
        name: "",
        surname: "",
        phoneNumber: "",
        email: "",
        basket: "",
        date: new Date().toLocaleDateString()+" " + new Date().toLocaleTimeString()
    })

    const navigate = useNavigate()

    useEffect(() => {
        let temp = 0
        for (let i = 0; i < items.length; i++) {
            temp += (items[i].cost * items[i].count)
        }
        setTotalCost(temp)


    }, [items])

    useEffect(() => {
        genOrderRowForEmail().then(res => {
            setOrder({...order, basket: res})
        })
    }, [totalCost])

    useEffect(() => {
        const storedItems = localStorage.getItem('basket');
        if (storedItems) {
            setItems(JSON.parse(storedItems));

        }
    }, []);

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(items));
    }, [items]);

    const genOrderRowForEmail = async () => {
        let result = "\n"
        for (let i = 0; i < items.length; i++) {
            result += `${i+1}. ${items[i].name} ---- ${items[i].cost} грн ---- ${items[i].count} шт. \n\n `
        }
        result += `Загальна сума ---- ${totalCost} грн`
        return result
    }

    const sendOrderOnEmail = () => {
        if (order.name !== "" &&
            order.surname !== "" &&
            order.basket !== "" &&
            order.phoneNumber !== "" &&
            order.email !== ""
        ) {
            axios.post("http://localhost:5002/send-email", {
                userData: order,
            })
            localStorage.setItem("basket","")
            setOrderAccepted(true)
        }
    }


    return (
        <>
            <button onClick={() => navigate(-1)} className={"flex gap-2 mt-4 ml-4 aeroport-light"}>
                <i className="bi bi-arrow-left"></i>
                <p>Назад</p>
            </button>
            {!orderAccepted ?
                <div className={"flex flex-col mt-10 items-center  aeroport-medium p-2 pb-40"}>
                    <p className={"text-2xl"}>Створити замовлення</p>
                    <div className={"h-[1px] bg-[#686868] w-full my-1"}/>
                    <div className={"grid grid-cols-3 gap-4 m-5"}>
                        <p>Імʼя</p>
                        <input onChange={e => {
                            setOrder({...order, name: e.target.value})
                        }} placeholder={"Імʼя..."} className={"border rounded col-span-2 p-1"} type="text"/>
                        <p>Прізвище</p>
                        <input onChange={e => {
                            setOrder({...order, surname: e.target.value})
                        }} placeholder={"Прізвище..."} className={"border rounded  col-span-2 p-1"} type="text"/>
                        <p>Телефон</p>
                        <input onChange={e => {
                            setOrder({...order, phoneNumber: e.target.value})
                        }} placeholder={"Телефон..."} className={"border rounded  col-span-2 p-1"} type="text"/>
                        <p>Пошта</p>
                        <input onChange={e => {
                            setOrder({...order, email: e.target.value})
                        }} placeholder={"Пошта..."} className={"border rounded  col-span-2 p-1"} type="text"/>
                    </div>
                    <div className={"h-[1px] bg-[#686868] w-full my-2"}/>

                    <div className={"px-2 mt-5"}>
                        <p className={"my-2 text-center text-2xl"}>Деталі замовлення</p>
                        <div className={"h-[1px] bg-[#686868] w-full my-2"}/>
                        {
                            items.map((item, index) => (
                                <div className={"flex items-center justify-between mt-4"}>
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
                                sendOrderOnEmail()
                            }} className={"w-3/4 text-center py-2 mt-5 text-xl bg-gray-300"}>
                                Підтвердити замовлення
                            </button>
                        </div>
                    </div>
                </div>
                :
                <div onClick={() => console.log(order)}
                     className={"text-2xl aeroport-medium h-screen flex flex-col items-center justify-center"}>
                    <img className={"w-1/2 mb-5"} src={logo} alt=""/>
                    <p className={"text-center"}>Дякуємо за замовлення!</p>

                </div>
            }
        </>
    );
};

export default OrderPage;