import { FC } from 'react';

interface TodoPageProps {
  title: string;
};

const TodoPage: FC<TodoPageProps> = (props): JSX.Element => {
  const { title } = props;
  return (
    <div className="todo-page">{title}</div>
  );
}

export default TodoPage;