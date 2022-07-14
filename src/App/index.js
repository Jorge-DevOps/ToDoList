import React from "react";
import { useTodos } from "../customHooks/useTodos";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoForm } from "../components/TodoForm/Index";
import { CreateTodoButton } from "../components/CreateTodoButton/CreateTodoButton";
import { TodosError } from "../components/TodosError/Index";
import { TodosLoading } from "../components/TodosLoading/Index";
import { EmptyTodos } from "../components/EmptyTodos/Index";

import { Modal } from "../components/modal/Index";
import { TodoHeader } from "../components/TodoHeader/Index";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";

function App() {
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
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    actionModal,
    oldTodoValue,
    newTodoValue,
    setNewTodoValue,
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
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
          <TodoForm
            addTodo={addTodo}
            actionModal={actionModal}
            oldTodoValue={oldTodoValue}
            newTodoValue={newTodoValue}
            setNewTodoValue={setNewTodoValue}
            setopenModal={setopenModal}
            editTodo={editTodo}
          ></TodoForm>
        </Modal>
      )}
      <CreateTodoButton
        setopenModal={setopenModal}
        setActionModal={setActionModal}
      />
    </React.Fragment>
  );
}

export default App;
