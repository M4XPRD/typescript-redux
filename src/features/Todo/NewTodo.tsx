import useAppDispatch from 'redux-hook';
import AddNewItem from 'components/NewItem';
import { addTodo } from './todoSlice';

const NewTodo = () => {
  const dispatch = useAppDispatch();

  const handleNewTodo = (title: string) => {
    dispatch(addTodo(title));
  };

  return (
    <AddNewItem
      placeholder="Add new todo"
      handleClick={handleNewTodo}
    />
  );
};

export default NewTodo;
