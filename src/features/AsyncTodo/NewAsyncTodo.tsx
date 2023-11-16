import useAppDispatch from 'redux-hook';
import AddNewItem from 'components/NewItem';
import { createTodo } from './todoAsyncActions';

const NewAsyncTodo = () => {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(createTodo(title));
  };

  return (
    <AddNewItem
      placeholder="Add new todo"
      handleClick={handleNewTodo}
    />
  );
};

export default NewAsyncTodo;
