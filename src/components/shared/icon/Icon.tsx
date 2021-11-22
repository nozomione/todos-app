import { memo } from 'react';

interface Props {
    name: string;
    path: string;
}

const Icon: React.FC<Props> = ({ name, path }) => {
    return (
        <svg className={ name } aria-hidden="true">
           <use xlinkHref={ path } />
        </svg>
    )
}

export default memo(Icon);