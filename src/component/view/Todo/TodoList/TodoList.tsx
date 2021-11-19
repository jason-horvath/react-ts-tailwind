import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { TodoItemInterface } from '@interface';
import TodoItem from '@view/Todo/TodoItem/TodoItem';
import { Heading } from '@block';

interface TodoListProps {
  title: string;
};

const TodoList: FC<TodoListProps> = (props): JSX.Element => {
  const { title } = props;
  const todos: TodoItemInterface[] = useSelector((state: RootStateOrAny) => state.todo.value);
  return (
    <div className="todo-list">
      <Heading level={4}>{title}</Heading>
      {todos.map((todo: TodoItemInterface) => {
        return <TodoItem key={todo.id} { ...todo} />
      })}
    </div>
  );
}

export default TodoList;