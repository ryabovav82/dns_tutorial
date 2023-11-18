import './Main.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";

const Main = (props) => {
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<MainPage dataMain={props.dataMain}/>} />
            </Routes>
        </main>
    )
}

export default Main;