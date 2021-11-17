import { FC } from 'react';
import TodoList from '@view/Todo/TodoList/TodoList';
import TodoAdd from '@view/Todo/TodoAdd/TodoAdd';
import './TodoView.css';

interface TodoViewProps {
  title: string;
};

const TodoView: FC<TodoViewProps> = (props): JSX.Element => {
  const { title } = props;
  return (
    <div className="todo-view">
      <div className="todo-view__col">
        <TodoList title="Todo List" />
      </div>
      <div className="todo-view__col">
        <TodoAdd title="Todo Add" />
      </div>
      
    </div>
  );
}

export default TodoView;