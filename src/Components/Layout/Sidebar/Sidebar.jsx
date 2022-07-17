import styles from "./Sidebar.module.css"
import cn from 'classnames';
import { NavLink } from 'react-router-dom';


export const Sidebar = ({ ...props }) => {
    return (
          <>
           <NavLink to="/" >Home</NavLink>
           <NavLink to="/battle" >Battle</NavLink>
          </>
    )
};