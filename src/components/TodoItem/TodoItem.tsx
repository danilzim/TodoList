import {useDispatch} from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../../store/todoSlice';

import './TodoItem.css';

const TodoItem = ({id, text, completed}) => {
  const dispatch = useDispatch();
 
  return (
    <li className="todo-item">
      <input className="checkbox" type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))}/>
            <span className="task">{text}</span>
            <button className="button-delete" onClick={() => dispatch(removeTodo({id}))} ><img src="./edit.svg">
            </img></button>
            <button className="button-delete" onClick={() => dispatch(removeTodo({id}))} ><img src="./close.svg">
            </img></button>
    </li>
  )
}

export default TodoItem;
