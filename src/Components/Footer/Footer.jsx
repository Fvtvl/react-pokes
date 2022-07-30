import styles from "./Footer.module.css"
import cn from 'classnames';
import { format } from "date-fns"

export const Footer = ({  className, ...props }) => {
    return (
        <footer className={styles.footer}>
            <div>
            PokeDex © {format(new Date(), "yyyy")}
            </div>
            <a href="#" target="_blanc">Fvtv</a>
            <a href="#" target="_blanc">GitHub</a>
        </footer>
 
    );
};