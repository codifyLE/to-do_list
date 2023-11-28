import { useEffect, useRef, useState } from "react";
import Input from "./components/input/Input";
import Select from "./components/select/Select";
import Tasks from "./components/tasks/Tasks";

function App() {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [],
  );
  const [selectValue, setSelectValue] = useState("all");
  const id = useRef(0);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    if (selectValue === "active") {
      setFilteredTasks(tasks.filter((task) => !task.completed));
    } else if (selectValue === "completed") {
      setFilteredTasks(tasks.filter((task) => task.completed));
    } else {
      setFilteredTasks(tasks);
    }
  }, [tasks, selectValue]);

  return (
    <div className="todo">
      <Input setTasks={setTasks} id={id} />
      <Select
        setFilteredTasks={setFilteredTasks}
        setSelectValue={setSelectValue}
      />
      <Tasks tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
