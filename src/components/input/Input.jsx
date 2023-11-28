import { useState } from "react";

const Input = ({ setTasks, id }) => {
  const [value, setValue] = useState("");

  const handleGetInputValue = (event) => {
    event.preventDefault();
    setTasks((prev) => [
      ...prev,
      {
        id: id.current,
        text: value,
        completed: false,
        date: new Date().toLocaleString().slice(0, -3),
      },
    ]);
    id.current++;
    setValue("");
  };

  return (
    <form className="todo__input">
      <input
        className="todo__text"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="todo__add" onClick={handleGetInputValue}></button>
    </form>
  );
};

export default Input;
