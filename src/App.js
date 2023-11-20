
import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import ch00_01 from './images/chapter00/ch00_01.jpg';
import ch00_02 from './images/chapter00/ch00_02.jpg';
import ch00_03 from './images/chapter00/ch00_03.jpg';
import ch00_04 from './images/chapter00/ch00_04.jpg';
import ch00_05 from './images/chapter00/ch00_05.jpg';

import ch01_01 from './images/chapter01/ch01_01.jpg';
import ch01_02 from './images/chapter01/ch01_02.jpg';
import ch01_03 from './images/chapter01/ch01_03.jpg';
import ch01_04 from './images/chapter01/ch01_04.jpg';



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

// const dataMain = [
//     {chapter00: [
//         {
//             id: ['1', '2', '3', '4', '5'],
//             image: [ch00_01, ch00_02, ch00_03, ch00_04, ch00_05],
//             text: ['TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   'TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   'TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   'TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   'TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.']
//         },
//     ]},
//     {chapter01: [
//         {
//             id: ['1', '2', '3', '4'],
//             image: [ch01_01, ch01_02, ch01_03, ch01_04],
//             text: ['2222TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   '22222TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   '222222TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   '222TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.'
//                  ]
//         }
//     ]},
//     {chapter03: [
//         {
//             id: ['1', '2', '3', '4'],
//             image: ['ch2_01.jpg', 'ch02_02.jpg', 'ch02_03.jpg', 'ch02_04.jpg'],
//             text: ['TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   'TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   'TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.',
//                   'TEXT.RU — это сервис проверки уникальности ваших текстов, а также биржи копирайтинга, рерайтинга и переводов.'
//                  ]
//         }
//     ]}
    
// ]

const dataBase = [
    {
        chapter00
    }
];



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
