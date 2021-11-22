import { useState, memo } from 'react';
import { useTodos, useSetTodos, useSetAlert } from '../../hooks';
import { AlertTheme , ButtonTheme, InputRole } from '../../models';
import { Button, Input } from '../shared';
import { todoIdType } from './../list-todos';
import styles from './EditTodo.module.scss';

interface Props {
    todoId: todoIdType;
    setEditStatus: (s:boolean) => void;
    setSelectedTodo: (id: string, i?: number) => void;
}
const EditTodo: React.FC<Props> = ({ todoId, setEditStatus, setSelectedTodo }) => {
    const todos = useTodos();
    const setTodos = useSetTodos()!;
    const setAlert = useSetAlert()!;
    const [ text, setText ] = useState('');
    const [ empty, setEmpty ] = useState(false); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(text.trim().length === 0) {
            setEmpty(true);
            return;
        }

        setEmpty(false);
        updateTodos();
        setText('');
        cancel();
        setAlert(
            {
                show: true,
                text: `Successfully saved as ${text}`,
                theme: AlertTheme.SUCCESS,
                icon:  true,
                iconClass: "icon--xs",
                iconName: "success"
            }
        )
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
        setEmpty(false);
        setText(e.target.value);
    }
    
    const updateTodos = ()=> {
        const updatedTodos = [...todos];
        updatedTodos[todoId.i!].text = text;
        setTodos(updatedTodos);
    }

    const cancel = () => {
        setEditStatus(false);
        setSelectedTodo('', undefined);
    }

    return (
        <div className={ empty ? 
            `${styles['edit-todo']} ${styles.error}` : 
            `${styles['edit-todo']}` }>
            <div className={ styles["edit-todo-box"] }>
                <form onSubmit={ handleSubmit }>
                    <Input 
                        type="text" 
                        role={ InputRole.TEXT }
                        value={ text } 
                        changeHandler={ handleChange }
                        placeholder={ todos[todoId.i!].text } 
                        focus={ true }/>
                    { empty &&  
                        <span>&#10035;Please update the todo.</span> }
                    <Button 
                        type="submit" 
                        theme={ ButtonTheme.PRIMARY }>
                        Save
                    </Button>
                    <Button 
                        type="button" 
                        theme={ ButtonTheme.TERTIARY }
                        clickHandler={ cancel }
                    >
                        Cancel
                    </Button>
                </form>
            </div>
            <div 
                className={ styles["edit-todo-overlay"]} 
                onClick={ cancel }>
            </div>
        </div>
    )
}

export default memo(EditTodo);
