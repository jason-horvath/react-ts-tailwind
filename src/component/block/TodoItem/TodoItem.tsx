import { FC } from 'react';

interface TodoItemProps {
  title: string;
};

const TodoItem: FC<TodoItemProps> = (props): JSX.Element => {
  const { title } = props;
  return (
    <div className="todo-item">{title}</div>
  );
}

export default TodoItem;