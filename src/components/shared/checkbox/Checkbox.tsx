import { memo } from 'react';
import { CheckboxInterface } from '../../../models';
import styles from './Checkbox.module.scss';

const Checkbox: React.FC<CheckboxInterface> = ({ 
    changeHandler, 
    clickHandler, 
    value, 
    name, 
    placeholder, 
    checked,
    grayOut
}) => {
    return (
        <div className={ grayOut ? 
            `${styles["custom-checkbox"]} ${styles["custom-checkbox--grayout"]}` 
            : styles["custom-checkbox"] }>
            <input 
                type="checkbox"
                onChange={ changeHandler }
                onClick={ clickHandler }
                value={ value }
                name={ name }
                placeholder={ placeholder }
                checked={ checked }>
            </input>
            <label htmlFor={ name }></label>
        </div>
    )
}

export default memo(Checkbox);


