import { FC } from 'react';
import TodoList from '@view/Todo/TodoList/TodoList';
import TodoAdd from '@view/Todo/TodoAdd/TodoAdd';

interface TodoPageProps {
  title: string;
};

const TodoPage: FC<TodoPageProps> = (props): JSX.Element => {
  const { title } = props;
  return (
    <div className="todo-page">
      <h3>{title}</h3>
      <TodoList title="Todo List" />
      <TodoAdd title="Todo Add" />
    </div>
  );
}

export default TodoPage;