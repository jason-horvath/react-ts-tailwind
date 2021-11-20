import { FC } from 'react';
import { useDispatch } from 'react-redux'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Card } from '@block';
import { TodoItemInterface } from '@interface';
import { todoActions } from '@store/actions';
import './TodoItem.css';

const TodoItem: FC<TodoItemInterface> = (props): JSX.Element => {
  const { id, title, description, completed } = props;
  const dispatch = useDispatch();
  const { removeTodo, toggleTodoCompleted } = {...todoActions};

  return (
    <Card
      className={(completed ? 'completed' : '') + "todo-item card"}
      title={title}
      onClick={(e) => dispatch(toggleTodoCompleted)}
    >
      <CancelPresentationIcon className="todo-item__remove" onClick={(e) => dispatch(removeTodo(id))}/>
      <p>{description}</p>
    </Card>
  );
}

export default TodoItem;