import React from "react";
import "../../css/TodoForm.css";
import { TodoContext } from "../../TodoContext/index";

function TodoForm() {
  const { addTodo, setopenModal, editTodo, actionModal, oldTodoValue,newTodoValue,setNewTodoValue  } =  React.useContext(TodoContext);
  const onCancel = () => {
    setopenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (actionModal === "Edit") {
      editTodo();
    } else {
      addTodo(newTodoValue);
    }
    onCancel();
  };
  const onChangeTexArea = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To do </label>
      {actionModal === "Edit" && (<textarea
        value={newTodoValue}
        onChange={onChangeTexArea}
        placeholder={oldTodoValue}
      ></textarea>)}
        {actionModal === "Add" && (<textarea
        value={newTodoValue}
        onChange={onChangeTexArea}
        placeholder="Add to new to do"
      ></textarea>)}
      <div className="form_buttons">
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
