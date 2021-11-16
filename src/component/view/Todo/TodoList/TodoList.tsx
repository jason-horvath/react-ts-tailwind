import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { TodoItemInterface } from '@interface';
import TodoItem from '@view/Todo/TodoItem/TodoItem';

interface TodoListProps {
  title: string;
};

const TodoList: FC<TodoListProps> = (props): JSX.Element => {
  const { title } = props;
  const todos: TodoItemInterface[] = useSelector((state: RootStateOrAny) => state.todo.value);
  return (
    <div className="todo-list">
      <h4>{title}</h4>
      {todos.map((todo: TodoItemInterface) => {
        return <TodoItem {...todo} />
      })}
    </div>
  );
}

export default TodoList;