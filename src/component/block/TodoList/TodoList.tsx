import { FC } from 'react';

interface TodoListProps {
  title: string;
};

const TodoList: FC<TodoListProps> = (props): JSX.Element => {
  const { title } = props;
  return (
    <div className="todo-list">{title}</div>
  );
}

export default TodoList;