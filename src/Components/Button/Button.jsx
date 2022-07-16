import styles from "./Button.module.css"
import cn from 'classnames';

export const Button = ({  className, ...props }) => {
    return (
        <button className={cn(className, styles.button, {

        })} {...props} role="button">
        </button>
 
    );
};