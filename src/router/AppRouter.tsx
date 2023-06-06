import React from 'react';
import {Route, Routes} from "react-router-dom";
import ProductPage1 from "../pages/ProductPage1";
import OrderPage from "../pages/OrderPage";
import ProductPage2 from "../pages/ProductPage2";
import ProductPage3 from "../pages/ProductPage3";
import ProductPage4 from "../pages/ProductPage4";
import ProductPage5 from "../pages/ProductPage5";
import ProductPage6 from "../pages/ProductPage6";
import ProductPage7 from "../pages/ProductPage7";
import ProductPage8 from "../pages/ProductPage8";
import ProductPage9 from "../pages/ProductPage9";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/product/1"} element={<ProductPage1/>}/>
            <Route path={"/product/2"} element={<ProductPage2/>}/>
            <Route path={"/product/3"} element={<ProductPage3/>}/>
            <Route path={"/product/4"} element={<ProductPage4/>}/>
            <Route path={"/product/5"} element={<ProductPage5/>}/>
            <Route path={"/product/6"} element={<ProductPage6/>}/>
            <Route path={"/product/7"} element={<ProductPage7/>}/>
            <Route path={"/product/8"} element={<ProductPage8/>}/>
            <Route path={"/product/9"} element={<ProductPage9/>}/>

            <Route path={"/order"}  element={<OrderPage/>}/>
        </Routes>
    );
};

export default AppRouter;