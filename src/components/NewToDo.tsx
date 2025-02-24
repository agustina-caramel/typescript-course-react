import React, { useRef } from 'react';
import './NewToDo.css';

type NewToDoProps = {
  onAddToDo: (toDoText: string) => void;
};

const NewToDo: React.FC<NewToDoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const toDoSumbitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddToDo(enteredText);
  };

  return (
    <form onSubmit={toDoSumbitHandler}>
      <div className='form-control'>
        <label htmlFor='toDo-text'>ToDo Text</label>
        <input type='text' id='toDo-text' ref={textInputRef}></input>
      </div>
      <button type='submit'>ADD TO DO</button>
    </form>
  );
};

export default NewToDo;
