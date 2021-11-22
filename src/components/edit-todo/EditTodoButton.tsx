import { memo } from 'react';
import { InputRole } from '../../models';
import { useTodos } from '../../hooks';
import { Icon, Input } from '../shared';
import { icons } from '../../utilities/icons';
import styles from './EditTodoButton.module.scss';

interface Props {
    id: string;
    setEditStatus: (s:boolean) => void;
    setSelectedTodo: (id: string, i?: number) => void;
}
const EditTodoButton: React.FC<Props> = ({ id, setSelectedTodo, setEditStatus }) => {
    const todos = useTodos();
    const i = todos.findIndex(todo => todo.id === id);

    const toggleEdit = () => {
            setSelectedTodo(id, i);
            setEditStatus(true);
    }

    return (
        <div className={ styles["edit-todo-btn"] }>
            <span className="sr-only">Delete</span>
            <Icon name="icon--sm" path={ icons.edit } />
            <Input 
                type="checkbox" 
                role={ InputRole.CHECKBOX } 
                changeHandler={ toggleEdit } 
            />
        </div>
    )
}

export default memo(EditTodoButton);