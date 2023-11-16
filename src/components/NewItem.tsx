import { useRef } from 'react'; // Для неуправляемой формы

interface NewItemProps {
  placeholder: string,
  handleClick: (text: string) => void,
}

const NewItem = ({ handleClick, placeholder }: NewItemProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        ref={inputRef}
      />
      <button type="button" onClick={onClick}>Add todo</button>
    </>
  );
};

export default NewItem;
