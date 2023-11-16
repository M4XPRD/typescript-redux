import { RootState } from 'store';

const selectAllTodos = (state: RootState) => state.todos;

export default selectAllTodos;
