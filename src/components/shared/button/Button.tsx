import { memo } from 'react';
import { ButtonInterface } from '../../../models';
import styles from './Button.module.scss';

const Button:React.FC<ButtonInterface> = ({
    type, 
    theme, 
    children, 
    clickHandler
}) => {
    return (
        <button 
            type={ type } 
            className={ `${styles["btn"]} ${styles["btn--"+theme]}` } 
            onClick={ clickHandler }>
            { children }
        </button>
    )
}

export default memo(Button);


