import './Main.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Chapter00 from './Chapter00/Chapter00';
import Chapter01 from './Chapter01/Chapter01';

const Main = (props) => {
    return(
        <main className="main">
            <Routes>
                <Route path="/" element={<MainPage dataMain={props.dataMain}/>} />
                <Route path="/chapter-0_subchapter-0" element={<Chapter00 dataMain={props.dataMain[0].chapter00}/>} />
                <Route path="/chapter-0_subchapter-1" element={<Chapter01 dataMain={props.dataMain[1].chapter01}/>} />
            </Routes>
        </main>
    )
}

export default Main;