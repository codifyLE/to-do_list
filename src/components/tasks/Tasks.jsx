const Tasks = ({ tasks, setTasks }) => {
  const changeTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    console.log(id);
    console.log(tasks);
  };
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  return (
    <ul className="todo__items">
      {tasks.map(({ id, completed, text, date }) => (
        <div className={`todo__item ${completed && `completed`}`} key={id}>
          <span className="todo__task">{text}</span>
          <span
            className="todo__action todo__action_complete"
            onClick={() => changeTask(id)}
          ></span>
          <span
            className="todo__action todo__action_delete"
            onClick={() => deleteTask(id)}
          ></span>
          <div className="todo__date">{date}</div>
        </div>
      ))}
    </ul>
  );
};
export default Tasks;
