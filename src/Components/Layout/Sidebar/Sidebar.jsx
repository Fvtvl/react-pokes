import style from "./Sidebar.module.css"
import cn from 'classnames';
import { NavLink } from 'react-router-dom';


export const Sidebar = ({ ...props }) => {
    return (
          <>
          <nav className={style.container}>
           <NavLink className={style.nav} to="/" >Home</NavLink><br></br>
           <NavLink className={style.nav} to="/battle" >Battle</NavLink>
           </nav>
          </>
    )
};