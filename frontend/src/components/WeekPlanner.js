import React from 'react';
import TaskItem from './TaskItem';

function WeekPlanner() {
  const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
      {daysOfWeek.map((day) => (
        <div key={day} style={{ flex: 1, margin: '0 10px', textAlign: 'center' }}>
          <h3>{day}</h3>
          <TaskItem />
        </div>
      ))}
    </div>
  );
}

export default WeekPlanner;
