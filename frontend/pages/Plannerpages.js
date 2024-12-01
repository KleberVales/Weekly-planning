import React, { useState } from "react";

function PlannerPage() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = prompt("Digite a tarefa:");
    if (newTask) setTasks([...tasks, newTask]);
  };

  return (
    <div className="planner-page">
      <h1>Planner Semanal</h1>
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlannerPage;
