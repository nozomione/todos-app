import { memo } from 'react';
import { InputInterface } from '../../../models';

const Input:React.FC<InputInterface> = ({
    type, 
    role, 
    changeHandler, 
    clickHandler, 
    value, 
    placeholder, 
    checked,
    children,
    focus
}) => {
    return (  
        <input 
            type={ type } 
            className={ `input-${role}` } 
            onChange={ changeHandler }
            onClick={ clickHandler }
            value={ value }
            placeholder={ placeholder }
            checked={ checked } 
            autoFocus={ focus }
            >
            { children }
        </input>
    )
}

export default memo(Input);


