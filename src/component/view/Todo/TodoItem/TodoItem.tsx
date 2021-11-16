import { FC } from 'react';
import { TodoItemInterface } from '@interface';

const TodoItem: FC<TodoItemInterface> = (props): JSX.Element => {
  const { id, title, description, completed } = props;
  return (
    <div className="todo-item">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

export default TodoItem;