import React from 'react';
import '../../css/TodoCounter.css';
import { TodoContext } from "../../customHooks/useTodos";

function TodoCounter({ totalTodos, completedTodos } ) {

  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
