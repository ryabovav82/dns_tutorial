import './Aside.css';
import { NavLink } from 'react-router-dom';
import React, {useState} from 'react';

const Aside = (props) => {

    const [openId, setId] = useState(null);

    const menuHendler = (id) => {
        if (id === openId) {
            setId(null);
        } else {
            setId(id);
        }
    }

    return(
        <aside className="aside">
            <nav>
                <ul className="aside_items">
                    {props.dataAside.map( (item, id) => {
                        const subMenuRender = item.submenu.map( (item1, id1) => {return(
                            <NavLink className="aside_sub_link" to={`/chapter-${id}_subchapter-${id1}`} key={id1}>
                                <li className={"aside_sub_item"}>
                                    {item1}
                                </li>
                            </NavLink>
                        )})
                        
                        return(
                        <li className="aside_item">
                            <div className={`aside_sub_item_check ${id===openId ? "active" : ""}`}></div>
                            <div className="aside_link" onClick={()=> menuHendler(id)} key={id}>{item.menu}</div>  
                                
                                <div className={`asside_sub_item-collapse ${id===openId ? "open" : ""}`}>
                                <ul className="sub_ocifrovka">
                                    {subMenuRender}  
                                </ul>
                            </div>             
                        </li>
                    )})}
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;