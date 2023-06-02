import React from 'react';
import {Route, Routes} from "react-router-dom";
import productPage from "../pages/ProductPage";
import ProductPage from "../pages/ProductPage";
import OrderPage from "../pages/OrderPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<ProductPage/>}/>
            <Route path={"/order"}  element={<OrderPage/>}/>
        </Routes>
    );
};

export default AppRouter;