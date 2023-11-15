import NewTodo from 'features/Todo/NewTodo';
import AsyncTodoList from 'features/AsyncTodo/AsyncTodoList';
import NewAsyncTodo from 'features/AsyncTodo/NewAsyncTodo';
import TodoList from './features/Todo/TodoList';
import './App.css';

const App = () => (
  <div className="App">
    <NewTodo />
    <TodoList />
    <hr />
    <NewAsyncTodo />
    <AsyncTodoList />
  </div>
);

export default App;
