import React from "react";
import HeaderHome from "./components/HeaderHome";
import CardProduct from "./components/CardProduct";
import Home from "./components/Baitap1/Home";
import Header from "./components/Baitap1/Header";
import DataBinding from "./databinding/DataBinding";
import DemoEventHandler from "./eventHandler/DemoEventHandler";
import ConditionRendering from "./conditionalRendering/ConditionRendering";
import DemoState from "./state/DemoState";
import ChangeAvatar from "./state/ChangeAvatar";
import ChangeColorCar from "./state/ChangeColorCar";
import DemoProps from "./props/DemoProps";
import ShoesShop from "./props/ShoesShop/ShoesShop";


const App = () => {
  return (
    // đặt tên in hoa chữ đầu để nhấn mạnh component tự tạo
    // Fragment <> : không bị lỗi cú pháp react và không dư thẻ div
    <> 
    <div className="container py-5">
    {/* <DataBinding /> */}

    {/* <DemoEventHandler /> */}
    {/* <ConditionRendering /> */}
    {/* <DemoState /> */}
    {/* <ChangeAvatar />
    <ChangeColorCar /> */}
    {/* <DemoProps /> */}
    <ShoesShop />

    </div>
    














    {/* <Home />

    <div className="container">
      <h1>Hello React</h1>
      <HeaderHome />
      <HeaderHome />
      <HeaderHome />
      <CardProduct />
      <CardProduct />
      
    </div> */}
    </>
  );
};

export default App;
