import React from "react";
import "../../css/TodoSearch.css";
import { TodoContext } from "../../TodoContext/index";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="search to do"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
