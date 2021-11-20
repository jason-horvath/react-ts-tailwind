import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { TodoItemInterface, TodoStateValueInterface } from '@interface';
import TodoItem from '@view/Todo/TodoItem/TodoItem';
import { Heading } from '@block';

interface TodoListProps {
  title: string;
};

const TodoList: FC<TodoListProps> = (props): JSX.Element => {
  const { title } = props;
  const todos: TodoStateValueInterface = useSelector((state: RootStateOrAny) => state.todo.value);
  return (
    <div className="todo-list">
      <Heading level={4}>{title}</Heading>
      {Object.keys(todos).map((id: string) => {
        let todoItem: TodoItemInterface = todos[id];
        return <TodoItem { ...todoItem} />
      })}
    </div>
  );
}

export default TodoList;