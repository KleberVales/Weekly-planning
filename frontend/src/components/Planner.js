import React from 'react';

const Planner = ({ days, onTaskChange }) => {
    return (
        <div className="planner">
            {days.map((day, index) => (
                <div key={index} className="day">
                    <h3>{day}</h3>
                    <input
                        type="text"
                        placeholder={`Adicione uma tarefa para ${day}`}
                        onChange={(e) => onTaskChange(day, e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Planner;
