
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const dataAside = [
    {menu: "Оцифровка",
        submenu: ["Настройка", "Отправка", "Контроль", "Как заполнять", "Частые ошибки"]},
    {menu: "Подарочные карты", 
        submenu: ["item_1", "item_2", "item_3", "item_4",]},
    {menu: "Подарочные карты", 
        submenu: ["item_1", "item_2", "item_3", "item_4",]},
    {menu: "ITEM", 
        submenu: ["item_1", "item_2", "item_3", "item_4",]},
    {menu: "ITEM", 
        submenu: ["item_1", "item_2", "item_3", "item_4",]},
];

const dataMain = [
    "1", "2", "3"
]



function App() {
  return (
    <BrowserRouter>
        <div className="app_wrapper">
            <Aside dataAside={dataAside}/>
            <Header />
            <Main dataMain={dataMain}/>
            <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
