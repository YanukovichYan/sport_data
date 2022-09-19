import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addEvents} from "./redux/eventsSlice";
import "./App.css";

import {Router} from "./router/Router";
import Country from "./components/sidebar/Country/Country";
import EmptyMain from "./components/main/EmptyMain/EmptyMain";
import SidebarHeader from "./components/sidebar/SidebarHeader/SidebarHeader";
import BetContainer from "./components/betCart/BetContainer/BetContainer";
import Main from "./components/main/Main/Main";
import Sport from './components/sidebar/Sport/Sport';
import EventMarketsContainer from "./components/main/EventMarketsContainer/EventMarketsContainer";
import {Route, Routes} from "react-router-dom";

const ws = new WebSocket(
    "wss://srv.kralbet.com/sport/?EIO=3&transport=websocket"
);

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        ws.onopen = () => {
            ws.send(
                '42["subscribe-PreliveEvents",{"market_group":"prelive","locale":"tr_TR"}]'
            );
        };
        ws.onmessage = (e) => {
            if (e.data === "2") {
                ws.send("2");
            }
            if (e.data.startsWith("42")) {
                const arrayDataParse = JSON.parse(e.data.substring(2));
                const data = arrayDataParse[1];
                if (data.digest_type === "init") {
                    dispatch(addEvents(data.events))
                }
                // if (data.digest_type === "diff") {
                // }
                // console.log(data)
            }
        };
    }, []);

    return (
        <div className="container">
            <Routes>
                <Route index element={<SidebarHeader/>}/>
                <Route path="/:sport" element={<SidebarHeader/>}/>
                <Route path="/:sport/:country" element={<SidebarHeader/>}/>
                <Route path="/:sport/:country/*" element={<SidebarHeader/>}/>
            </Routes>
            <Routes>
                <Route path="*" element={<EmptyMain/>}/>
                <Route path="/:sport/:country/:league/*" element={<Main/>}/>
                <Route path="/:sport/:country/:league/market/:id" element={<EventMarketsContainer/>}/>
            </Routes>

            {/*<Routes>*/}
            {/*    <Route index element={<SidebarHeader/>}/>*/}
            {/*    <Route path="/:sport" element={<SidebarHeader/>}/>*/}
            {/*    <Route path="/:sport/:country" element={<SidebarHeader/>}/>*/}
            {/*    <Route path="/:sport/:country" element={<SidebarHeader/>}/>*/}
            {/*/!*</Routes>*!/*/}
            {/*/!*<Routes>*!/*/}
            {/*    <Route path="/:sport/:country/empty" element={<EmptyMain/>}/>*/}
            {/*    /!*<Route path="/:sport/:country/:league/*" element={<Main/>}/>*!/*/}
            {/*    /!*<Route path="/:sport/:country/:league/market/:id" element={<EventMarketsContainer/>}/>*!/*/}
            {/*</Routes>*/}
            <BetContainer/>
        </div>
    );
}

export default App;
