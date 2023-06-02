import React, {FC, useEffect, useState} from 'react';
// @ts-ignore
import logo from '../assets/logo.svg'
// @ts-ignore
import sideBarBtn from '../assets/sidebar-btn.svg'
// @ts-ignore
import basketBtn from '../assets/basket.svg'
import BasketSideBar from "./BasketSideBar";
import {BasketItem} from "../model/BasketItem";


interface HeaderProps {
    countItemsInBasket: number;
    basketItems: BasketItem[];
    removeItem: (index: number) => any;
    setBasketItems: (basketItems: BasketItem[]) => any;
    increaseCount:(index:number)=>any;
    decreaseCount:(index:number)=>any;
}

const Header: FC<HeaderProps> = ({countItemsInBasket, basketItems, removeItem, setBasketItems, increaseCount, decreaseCount}) => {
    const [basket, setBasket] = useState(false)
    const closeBasket = () => {
        setBasket(false)
    }


    return (
        <>
            <BasketSideBar increaseCount={increaseCount} decreaseCount={decreaseCount} setBasketItems={setBasketItems} removeItem={removeItem} basketItems={basketItems} close={closeBasket} isActive={basket}/>
            <div className={"h-[60px] bg-[#F2F2F2] border w-full flex justify-around"}>
                <button>
                    <img src={sideBarBtn} alt=""/>
                </button>
                <img className={"w-[160px]"} src={logo} alt=""/>
                <button className={"relative"} onClick={() => {
                    setBasket(true)
                }}>
                    <img src={basketBtn} alt=""/>
                    {countItemsInBasket !== 0 &&
                        <div
                            className={"absolute top-4 text-[12px] -right-1 bg-red-500 rounded-full text-white px-[5px]"}>
                            {countItemsInBasket}
                        </div>
                    }
                </button>

            </div>
        </>
    );
};

export default Header;