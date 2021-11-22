import { createContext, useState } from 'react';
import { TodoInterface } from '../models';

export const todosContext = createContext<TodoInterface[]>([]);
export const setTodosContext =  createContext<React.Dispatch<React.SetStateAction<TodoInterface[]>> | null>(null); 
const TodosContextProvidor = todosContext.Provider;
const SetTodosContextProvidor = setTodosContext.Provider;

const TodosProvider: React.FC = ({ children }) => {
    const [ todos, setTodos ] = useState<TodoInterface[]>([]);

    return (
        <TodosContextProvidor value={ todos }>
            <SetTodosContextProvidor value={ setTodos }>
                { children }
            </SetTodosContextProvidor>
        </TodosContextProvidor>
    );
}

export default TodosProvider;