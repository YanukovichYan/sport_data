import Container from "./components/Container/Container";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addEvents} from "./redux/eventsSlice";

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
            //     // dispatch()
            // }
            // console.log(data)

        }
    };
    }, []);

    return (
        <div>
            <Container/>
        </div>
    );
}

export default App;
