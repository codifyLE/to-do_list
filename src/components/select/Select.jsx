const Select = ({ setFilteredTasks, setSelectValue }) => {
  return (
    <select
      className="todo__options"
      onChange={(event) => setSelectValue(event.target.value)}
    >
      <option value="all">Все</option>
      <option value="active">Активные</option>
      <option value="completed">Завершённые</option>
    </select>
  );
};

export default Select;
