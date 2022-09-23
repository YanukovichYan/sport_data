import { Routes, Route } from "react-router-dom";

import SidebarHeader from "../components/sidebar/SidebarHeader/SidebarHeader";
import EmptyMain from "../components/main/EmptyMain/EmptyMain";
import Main from "../components/main/Main/Main";
import Sport from "../components/sidebar/Sport/Sport";
import BetContainer from "../components/betCart/BetContainer/BetContainer";
import Events from "../components/main/Events/Events";
import MainContainer from "../components/main/MainContainer/MainContainer";
import App from "../App";
import EventMarketsContainer from "../components/main/EventMarketsContainer/EventMarketsContainer";
import React from "react";




export const Router = () => {
    return (
        <Router>
            {/*<Routes>*/}
            {/*    <Route index element={<SidebarHeader/>}/>*/}
            {/*    <Route path="/:sport" element={<SidebarHeader/>}/>*/}
            {/*    <Route path="/:sport/:country" element={<SidebarHeader/>}/>*/}
            {/*    <Route path="/:sport/:country/*" element={<SidebarHeader/>}/>*/}
            {/*</Routes>*/}
            {/*<Routes>*/}
            {/*    <Route path="*" element={<EmptyMain/>}/>*/}
            {/*    <Route path="/:sport/:country/:league/*" element={<Main/>}/>*/}
            {/*    <Route path="/:sport/:country/:league/market/:id" element={<EventMarketsContainer/>}/>*/}
            {/*</Routes>*/}
        </Router>

    );
};
