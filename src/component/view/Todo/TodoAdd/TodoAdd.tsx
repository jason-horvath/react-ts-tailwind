import { FC } from 'react';

interface TodoAddProps {
  title: string;
};

const TodoAdd: FC<TodoAddProps> = (props): JSX.Element => {
  const { title } = props;
  return (
    <div className="todo-add">{title}</div>
  );
}

export default TodoAdd;