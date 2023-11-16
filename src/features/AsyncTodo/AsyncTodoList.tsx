import TodoItem from 'components/TodoItem';
import useAppDispatch from 'redux-hook';
import { Todo } from 'types';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import selectAsyncTodos from './asyncTodoSelector';
import { fetchAllTodos } from './todoAsyncActions';

const AsyncTodoList = () => {
  const { list } = useSelector(selectAsyncTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id']) => {
    // dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id: Todo['id']) => {
    // dispatch(toggleTodo(id));
  };

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

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

export default AsyncTodoList;
