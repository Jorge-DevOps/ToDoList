import React from 'react';
import '../../css/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setopenModal(prevState => !prevState)
    props.setActionModal("Add")
  };
  
  return (
    <button
      className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
