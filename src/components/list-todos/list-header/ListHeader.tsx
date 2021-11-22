import { memo } from 'react';
import { Icon } from '../../shared';
import { icons } from '../../../utilities/icons';

interface Props {
    type: string;
    activeCount: number;
    completedCount: number;
}
const ListHeader: React.FC<Props> = ({ type, activeCount, completedCount }) => {
    
    return (
        <header>
            <Icon name="icon--xs" path={ icons.list } />
            <h2>
                { type.toUpperCase() } 
                <span>( { type === "active" ? activeCount : completedCount } )</span>
            </h2>
        </header>
    )
}

export default memo(ListHeader);
