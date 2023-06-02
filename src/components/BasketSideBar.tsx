import React, {FC, useEffect, useState} from 'react';
import {BasketItem} from "../model/BasketItem";
import {Link} from "react-router-dom";

interface BasketProps {
    isActive: boolean;
    close: () => any;
    basketItems: BasketItem[];
    removeItem: (index: number) => any;
    setBasketItems: (items: BasketItem[]) => any;
    increaseCount: (index: number) => any;
    decreaseCount: (index: number) => any;
}

const BasketSideBar: FC<BasketProps> = ({
                                            isActive,
                                            close,
                                            basketItems,
                                            removeItem,
                                            setBasketItems,
                                            decreaseCount,
                                            increaseCount
                                        }) => {

    const [totalCost, setTotalCost] = useState<number>(0)
    useEffect(() => {
        let temp = 0
        for (let i = 0; i < basketItems.length; i++) {
            temp += (basketItems[i].cost * basketItems[i].count)
        }
        setTotalCost(temp)
    }, [basketItems])

    return (
        <div
            className={(isActive ? " h-3/4 " : " h-[0px] ") + " flex flex-col justify-between fixed w-full duration-300  z-50 bg-[#EEEDEE] border-b-2 shadow-2xl aeroport-medium"}>
            {
                isActive &&
                <>
                    <div className={"p-3"}>
                        <p className={"text-2xl text-center"}>Кошик</p>
                        <div className={"h-[1px] bg-[#686868] my-2"}/>
                        <div className={"text-[14px] mt-10"}>

                            {basketItems.length !== 0 ?
                                basketItems.map((item, index) => (
                                    <div className={"flex items-center justify-between"}>
                                        <img className={"h-[50px] mr-2 border rounded"} src={item?.img} alt=""/>
                                        <p>{item.name}</p>
                                        <div className={"flex items-center"}>

                                            <div className={"text-2xl flex flex-col items-center justify-center mr-3"}>
                                                <button onClick={() => decreaseCount(index)}>-
                                                </button>
                                                <p className={"text-xl"}>{item.count}</p>
                                                <button onClick={() => increaseCount(index)}>+
                                                </button>
                                            </div>
                                            <button className={"hover:text-red-500 duration-300 text-xl"}
                                                    onClick={() => removeItem(index)}><i className="bi bi-trash"></i>
                                            </button>
                                        </div>

                                    </div>
                                ))
                                :
                                <div className={"flex text-2xl h-full items-center justify-center"}>
                                    <p> Кошик порожній</p>
                                </div>
                            }
                        </div>

                        {basketItems.length !== 0 &&
                            <>
                                <div className={"h-[1px] bg-[#686868] my-2"}/>
                                <div>
                                    Сума до оплати: {totalCost} грн
                                </div>
                                <div className={"flex justify-center "}>
                                    <div className={"w-3/4 text-center py-2 mt-5 text-xl bg-gray-300"}>
                                        <Link to={"/order"}>Замовити</Link>
                                    </div>
                                </div>

                            </>
                        }

                    </div>
                    <div className={"flex justify-center text-3xl mb-1"}>
                        <button onClick={close}>
                            <i className="bi bi-arrow-bar-up"></i>
                        </button>
                    </div>
                </>
            }
        </div>
    )
        ;
};

export default BasketSideBar;