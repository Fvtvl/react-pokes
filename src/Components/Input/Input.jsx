import styles from "./Input.module.css"
import cn from 'classnames';

export const Input = ({  className, ...props }) => {
    return (
        <input className={cn(className, styles.input, {

        })} {...props}>
        </input>
 
    );
};

