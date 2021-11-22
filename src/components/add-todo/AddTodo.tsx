import { useState, FormEvent, ChangeEvent, memo } from 'react';
import { TodosStatus, ButtonTheme, InputRole } from '../../models';
import { useSetTodos } from '../../hooks';
import { Button, Input } from '../shared';
import styles from './AddTodo.module.scss';

const AddTodo: React.FC = () => {
    const [ text, setText ] = useState('');
    const [ empty, setEmpty ] = useState(false); 
    const setTodos = useSetTodos()!;

    const handleSubmit = (e: FormEvent)=> {
        e.preventDefault();
        if(text.trim().length === 0) {
            setEmpty(true);
            return;
        }
        setEmpty(false);
        setTodos( prevState => ([
                ...prevState,
                {
                    id: Math.random().toString(36).substr(2, 10),
                    text: text,
                    status: TodosStatus.ACTIVE,
                    done: false
                }
           ])
        );
        setText('');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmpty(false);
        setText(e.target.value)
    }
 
    return (
        <div className={ empty ?  
            `${styles['add-todo']} ${styles.error}` : 
            `${styles['add-todo']}`}>
            <form onSubmit={ handleSubmit }>
                    <Input
                        type="text" 
                        role={ InputRole.TEXT }
                        value={ text } 
                        changeHandler={ handleChange }
                        placeholder="Add new todo!" 
                        focus={ true }/>
                
                    { empty && 
                        <span>&#10035;Please enter a new todo.</span> }
                <Button type="submit" theme={ ButtonTheme.PRIMARY }>
                    Add Todo
                </Button>
            </form>
        </div>
    )
}

export default memo(AddTodo);
