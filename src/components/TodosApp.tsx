import { memo } from 'react';
import { TodosProvider, AlertProvider, ModalProvider } from '../contexts';
import { TodosStatus } from '../models';
import { useMatchMedia } from '../hooks';
import { Portal, Alert } from './shared';
import { TodosAppHeader } from './todos-app-header';
import { AddTodo } from './add-todo';
import { ListTodos } from './list-todos';

const TodosApp = () => {
    const isW800 = useMatchMedia('(max-width: 1080px)');

    const todoAppStyle = {
        rules: (match: boolean) => ({
            width: match ? "100%" : "80%",
            margin: "0 auto"
        })
    } 

    return (
        <div style={ todoAppStyle.rules(isW800) }>
            <TodosAppHeader />
            <TodosProvider>
                <AlertProvider>
                    <ModalProvider>
                        <AddTodo />
                        <ListTodos type={ TodosStatus.ACTIVE }/>
                        <ListTodos type={ TodosStatus.COMPLETED }/>  
                    </ModalProvider>
                    <Portal>
                        <Alert />
                    </Portal>
                </AlertProvider>
            </TodosProvider>
        </div>
    )
}

export default memo(TodosApp);
