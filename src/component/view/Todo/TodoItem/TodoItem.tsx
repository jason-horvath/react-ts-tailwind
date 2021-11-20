import { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { Card } from '@block';
import { TodoItemInterface } from '@interface';
import { todoActions } from '@store/actions';
import { isDoubleClick } from '@utility/mouse/isDoubleClick';
import './TodoItem.css';

const TodoItem: FC<TodoItemInterface> = (props): JSX.Element => {
  const { id, title, description, completed } = props;
  const dispatch = useDispatch();
  const { removeTodo, toggleTodoCompleted } = {...todoActions};

  const dispatchRemoveTodo = () => {
    dispatch(removeTodo(id))
  }
  const dispatchToggleTodoCompleted = (e: MouseEvent) => {
    if (isDoubleClick(e)) dispatch(toggleTodoCompleted(id));
  }

  return (
    <Card
      className={(completed ? 'completed ' : '') + "todo-item card"}
      title={title}
      onClick={dispatchToggleTodoCompleted}
    >
      <CancelPresentationIcon className="todo-item__remove" onClick={dispatchRemoveTodo}/>
      <p>{description}</p>
    </Card>
  );
}

export default TodoItem;