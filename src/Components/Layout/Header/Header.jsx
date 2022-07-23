import styles from "./Header.module.css"
import cn from 'classnames';
import { format } from "date-fns"

export const Header = ({className,  ...props }) => {
    return (
        <body className={cn(className, styles.header, {

        })} {...props}>
            <div>
            PokeDex © {format(new Date(), "yyyy")}
            </div>
            <a href="#" target="_blanc">Fvtv</a>
            <a href="#" target="_blanc">GitHub</a>
        </body>
 
    );
};