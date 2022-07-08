import React from 'react';
import '../../css/TodoCounter.css';

function TodoCounter({ total, complete }) {
  return (
    <h2 className="TodoCounter">Has completado {total} de {complete} TODOs</h2>
  );
}

export { TodoCounter };
