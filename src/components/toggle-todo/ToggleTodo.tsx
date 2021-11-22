import { useEffect, memo  } from 'react';
import { TodosStatus } from '../../models';
import { useTodos, useSetTodos } from '../../hooks';
import { Checkbox } from '../shared';

interface Props {
    id: string;
    status: string;
    checked?:boolean;
}
const ToggleTodo: React.FC<Props> = ({ id, checked, status }) => {
    const todos = useTodos();
    const setTodos = useSetTodos()!;
    const i = todos.findIndex(todo => todo.id === id);
    let timer:  NodeJS.Timeout;

    useEffect(() => {
        return () => {
            clearTimeout(timer);
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleStatus = (e:React.ChangeEvent<HTMLInputElement>) => {  
        const updatedTodos = [...todos];

        if(e.target.checked) {
            updatedTodos[i].status = TodosStatus.COMPLETED;
        } else {
            updatedTodos[i].status = TodosStatus.ACTIVE;
        }

        timer = setTimeout(()=> {
            setTodos(updatedTodos);  
        }, 1000);
    }
    
    return (
        <>
            <Checkbox 
                checked={ checked } 
                changeHandler={ toggleStatus } 
                grayOut={ status === 'completed' ? true : false } />
        </>
    )
}

export default memo(ToggleTodo);
