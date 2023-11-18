import './Header.css';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return(
        <header className="header">
            <NavLink className="header_logo" to="/" >DNS</NavLink>
            <div>
                <input className="header__input" placeholder="Поиск" name="myInput"/>
            </div>
            <nav>
                <ul className="header__items">
                    <li className="header__items"><a href="#" className="header__link">FAQ</a></li>
                    <li className="header__items"><a href="#" className="header__link">сообщить о ошибке</a></li>
                    <li className="header__items"><a href="#" className="header__link">отзыв</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;