import React from "react";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoForm } from "../components/TodoForm/Index";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../TodoContext/index";
import { TodosError } from "../components/TodosError/Index";
import { TodosLoading } from "../components/TodosLoading/Index";
import { EmptyTodos } from "../components/EmptyTodos/Index";

import { Modal } from "../components/modal/Index";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    editTodo,
    setopenModal,
    setActionModal,
    setOldTodoValue,
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && !searchedTodos.length && <EmptyTodos />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            onEdit={() => editTodo(todo.text)}
            setopenModal={setopenModal}
            setActionModal={setActionModal}
            setOldTodoValue={setOldTodoValue}
          />
        ))}
      </TodoList>
    
      {!!openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}
      <CreateTodoButton
        setopenModal={setopenModal}
        setActionModal={setActionModal}
      />
    </React.Fragment>
  );
}
export { AppUI };
