import { useEffect, memo, useState, DragEvent } from 'react';
import { TodosStatus } from '../../models';
import { useTodos, useSetTodos } from '../../hooks';
import { ListHeader } from './list-header';
import { ToggleTodo } from '../toggle-todo';
import { DeleteTodoButton } from '../delete-todo';
import { EditTodo, EditTodoButton } from '../edit-todo';
import styles from './ListTodos.module.scss';

interface Props {
    type: string
}

export type todoIdType = {
    id: string;
    i?:number;
}
const ListTodos: React.FC<Props> = ({ type }) => {
    const todos = useTodos();
    const setTodos = useSetTodos()!;
    const [ edit, setEdit ] = useState(false);
    const [ todoId, setTodoId ] = useState<todoIdType>({ id: '' });
    const [ dropOver, setDropOver ] = useState(false);
    const activeTodos = todos.filter( todo => todo.status === TodosStatus.ACTIVE);
    const completedTodos = todos.filter( todo => todo.status === TodosStatus.COMPLETED);

    useEffect(() => {
            setTodos([
                {
                    id: Math.random().toString(36).substr(2, 10),
                    text: 'Finish reading a book',
                    status: TodosStatus.ACTIVE
                },
                {
                    id: Math.random().toString(36).substr(2, 10),
                    text: 'Take my dog out to a doggy park',
                    status: TodosStatus.ACTIVE
                },
                {
                    id: Math.random().toString(36).substr(2, 10),
                    text: 'Donate my clothes',
                    status: TodosStatus.COMPLETED
                }
            ]) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setEditStatus = (status: boolean) => {
        setEdit(status)
    }

    const setSelectedTodo = (id: string, i?: number) => {
        setTodoId({
            id,
            i
        });
    }

    const dragStartHandle = (e: DragEvent<HTMLLIElement>, id:string) => {
        e.dataTransfer.setData('text/plain', id);
        e.dataTransfer.effectAllowed = 'move';
        e.currentTarget.style.cursor = 'grab'
        
    }

    const dragEndHandle = (e: DragEvent<HTMLLIElement>) => {
        e.currentTarget.classList.remove('active');
        e.currentTarget.style.cursor = 'pointer'
    }

    const dragOverHandle = (e: DragEvent) =>{
        if (e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
          e.preventDefault();
          setDropOver(true);
        }
      }

    const dropHandle = (e: DragEvent) => {
        e.preventDefault();
        const todoId = e.dataTransfer.getData('text/plain');
        const ul = e.currentTarget.querySelector('ul') as HTMLUListElement;
        const hasTodo = ul.querySelector(`li[data-id="${todoId}"]`) != null;
        if(hasTodo) {
            setDropOver(false);
            return;
        }
        moveTodo(todoId);
        setDropOver(false);
      }
    
    const dragLeaveHandle = (_: DragEvent) => {
        setDropOver(false);
      }
    
    const moveTodo = (id:string) => {
        const updatedTodo = [...todos];
        const i = todos.findIndex(todo => todo.id === id);
        updatedTodo[i].status = 
            todos[i].status === 'active' ? TodosStatus.COMPLETED : TodosStatus.ACTIVE;
        setTodos(updatedTodo);
    }
    const renderActiveTodos = ()=> 
        activeTodos.map(todo => (
            <li key={ todo.id } 
                data-id={ todo.id }
                draggable="true"
                onDragStart={ e => dragStartHandle(e, todo.id) }
                onDragEnd={ dragEndHandle }>
                <div className={ styles["btn-utility"] }>
                    <ToggleTodo id={ todo.id } status="active"  />
                    { edit && todo.id === todoId.id ?  
                         <EditTodo 
                            todoId={ todoId } 
                            setEditStatus={ setEditStatus } 
                            setSelectedTodo={ setSelectedTodo }/> : 
                         <h3>{ todo.text }</h3> 
                    }
                </div>
                <div className={ styles["btn-utility"] }>
                    <EditTodoButton 
                        id={ todo.id } 
                        setEditStatus={ setEditStatus } 
                        setSelectedTodo={ setSelectedTodo } />
                    <DeleteTodoButton id={ todo.id }/>
                </div>
            </li>
        )
    );

    const renderCompletedTodos = ()=> 
        completedTodos.map(todo => (
            <li 
                key={ todo.id } 
                data-id={ todo.id } 
                draggable="true"
                onDragStart={ e => dragStartHandle(e, todo.id) }
                onDragEnd={ dragEndHandle }>
                <div className={ styles["btn-utility"] }>
                    <ToggleTodo 
                        id={ todo.id } 
                        checked={ true } 
                        status="completed" />
                    <h3>{ todo.text }</h3>
                </div>
                <DeleteTodoButton id={ todo.id }/>
            </li>
        )
    );

    return (
        <>
            <section 
                className={ dropOver ? 
                    `${styles["project-list"]} ${styles["project-list--"+type]} ${styles.droppable}` :
                    `${styles["project-list"]} ${styles["project-list--"+type]}` }
                onDragOver={ dragOverHandle } 
                onDrop={ dropHandle }
                onDragLeave={ dragLeaveHandle }>
                <ListHeader 
                    type={ type } 
                    activeCount={ activeTodos.length } 
                    completedCount={ completedTodos.length }/>
                { activeTodos.length === 0 && type === "active" && 
                    <p>Currently you have no active Todo to display.</p> }
                { completedTodos.length === 0 && type === "completed" && 
                    <p>Currently you have no completed Todo to display.</p> }
                <ul>
                    { type === TodosStatus.ACTIVE && renderActiveTodos() }
                    { type === TodosStatus.COMPLETED && renderCompletedTodos() }
                </ul>
            </section>
        </>
    )
}

export default memo(ListTodos);
