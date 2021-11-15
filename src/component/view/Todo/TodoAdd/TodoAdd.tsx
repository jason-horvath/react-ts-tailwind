import { FC, useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { TodoItemInterface } from '@interface';
import { todoActions } from '@store/actions';

interface TodoAddProps {
  title: string;
};

const TodoAdd: FC<TodoAddProps> = (props): JSX.Element => {
  const { title } = props;
  const dispatch = useDispatch();
  const { addTodo } = {...todoActions};
  const todoRef = {
    title: useRef<HTMLInputElement>(null),
    description: useRef<HTMLInputElement>(null)
  };

  const dispatchAddTodo = () => {
    let title = todoRef.title?.current?.value || '';
    let description = todoRef.description?.current?.value || '';
    dispatch(addTodo({title: title, description: description, completed: true}));
  }

  return (
    <div className="todo-add">
      <h4>{title}</h4>
      <input type="text" name="todo-title" ref={todoRef.title} defaultValue=""/>
      <input type="text" name="todo-description" ref={todoRef.description} defaultValue=""/>
      <button aria-label="Add Todo" onClick={dispatchAddTodo}>Add Todo</button>
    </div>
  );
}

export default TodoAdd;