import style from "./Header.module.css"
import cn from 'classnames';
import { NavLink } from 'react-router-dom';


export const Header = ({ ...props }) => {
    return (
        <nav className={style.header}>
            <div>Pokemon</div>
           <NavLink className={style.link} to="/" >goHome</NavLink><br></br>
           <NavLink className={style.link} to="/battle" >goBattle</NavLink>
        </nav>
    )
};