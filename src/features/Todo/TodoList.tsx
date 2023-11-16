import TodoItem from 'components/TodoItem';
import useAppDispatch from 'redux-hook';
import { Todo } from 'types';
import { useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from './todoSlice';
import selectAllTodos from './todoSelector';

const TodoList = () => {
  const list = useSelector(selectAllTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo['id']) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {list.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          removeTodo={handleRemoveTodo}
          toggleTodo={handleToggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
