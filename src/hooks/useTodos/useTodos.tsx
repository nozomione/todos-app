import { useContext } from 'react';
import { todosContext, setTodosContext } from './../../contexts';

const useTodos = () => useContext(todosContext);
const useSetTodos = () => useContext(setTodosContext);

export { useTodos, useSetTodos }