import { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { todoActions } from '@store/actions';
import { isEmpty } from '@utility/value/isEmpty';
import { Button, Input } from '@form';

interface TodoAddProps {
  title: string;
};

const TodoAdd: FC<TodoAddProps> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const { title } = props;
  const { addTodo } = {...todoActions};
  const todoRef = {
    title: useRef<HTMLInputElement>(null),
    description: useRef<HTMLInputElement>(null)
  };
  
  const isValidTodoInput = (): boolean => {
    return !isEmpty(todoRef.title.current?.value) && !isEmpty(todoRef.description.current?.value);
  }
  
  const resetTodoInput = (): void => {
    if ((todoRef.title.current?.value !== undefined) && (todoRef.description.current?.value !== undefined)) {
      todoRef.title.current.value = '';
      todoRef.description.current.value = '';
    }
  }

  const dispatchAddTodo = (): void => {
    if (!isValidTodoInput()) return;

    let title = todoRef.title.current?.value || '';
    let description = todoRef.description.current?.value || '';
    dispatch(addTodo({title: title, description: description, completed: false}));
    resetTodoInput();
  }

  return (
    <div className="todo-add">
      <h4>{title}</h4>
      <div>
        <Input label="Title" type="text" name="todo-title" inputRef={todoRef.title} defaultValue="" placeholder="Title" />
      </div>
      <div>
        <Input label="Description" type="text" name="todo-description" inputRef={todoRef.description} defaultValue="" placeholder="Description"/>
      </div>
      
      <div>
      <Button aria-label="Add Todo" onClick={dispatchAddTodo}>Add Todo</Button>
      </div>
      
    </div>
  );
}

export default TodoAdd;