import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PlannerPage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        api.get('/tasks').then((response) => setTasks(response.data));
    }, []);

    return (
        <div>
            <h1>Planner Semanal</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlannerPage;
