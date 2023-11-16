import { RootState } from 'store';

const selectAsyncTodos = (state: RootState) => state.asyncTodos;

export default selectAsyncTodos;
