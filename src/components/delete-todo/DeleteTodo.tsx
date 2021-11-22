import { memo } from 'react';
import { AlertTheme, ButtonTheme } from '../../models';
import { 
    useTodos, 
    useSetTodos, 
    useModal, 
    useSetModal, 
    useSetAlert} from '../../hooks';
import { Button } from '../shared';

const DeleteTodo: React.FC = () => {
    const todos = useTodos();
    const setTodos = useSetTodos()!;
    const modal = useModal();
    const setModal = useSetModal()!;
    const setAlert = useSetAlert()!;
    const i = todos.findIndex(todo=> todo.id === modal.todoId);
 
    const handleClick = () => {
        setTodos(todos.filter(todo => todo.id !== modal.todoId));
        showAlert()
        cancel();
    }

    const cancel = () => {
        setModal(
            {
                show: false
            }
        )
    }    

    const showAlert = () => {
        setAlert(
            {
                show: true,
                text: `${todos[i].text} is deleted`,
                theme: AlertTheme.INFO,
                icon:  true,
                iconClass: "icon--xs",
                iconName: 'info'
            }
        )
    }
    
    const h2Style = {
        marginBottom: "1rem",
        fontWeight: "normal",
        textAlign: "center"
    } as React.CSSProperties;

    const divStyle = {
        display: "flex",
        justifyContent: "center"
    } as React.CSSProperties;

    return (
        <>
            <h2 style={ h2Style }>
                Are you sure you want to delete 
                <strong>{ todos[i].text }</strong>?
            </h2>
            <div style={ divStyle }>
                <Button type="button" 
                    theme={ ButtonTheme.PRIMARY } 
                    clickHandler={ handleClick }>
                    Yes
                </Button> 
                <Button type="button" 
                    theme={ ButtonTheme.TERTIARY } 
                    clickHandler={ cancel }>
                    No
                </Button> 
            </div>
        </>
    )
}

export default memo(DeleteTodo)
