import React from 'react';
import '../../css/TodoItem.css';
import { TodoIcon } from '../TodoIcon/Index';


function TodoItem(props) {

  const onClickButton = () => {
    props.setopenModal(prevState => !prevState)
    props.setActionModal("Edit")
    props.setOldTodoValue(props.text)
  };
  

  return (
    <li className="TodoItem">
        <TodoIcon type="check" color={`${props.completed && 'greenyellow'}`} onclick={props.onComplete}/>
      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <TodoIcon type="edit" color="skyblue" onclick={onClickButton}/>
      
      <TodoIcon type="delete" color="red" onclick={props.onDelete}/>
      
    </li>
  );
}

export { TodoItem };
