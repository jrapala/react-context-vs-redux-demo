import React from 'react';

const Cell = ({ row, column }) => {
  const cell = Math.floor(Math.random() * 100) + 1;

  return (
    <button
      className="cell"
      onClick={() => {}}
      style={{
        color: cell > 50 ? 'white' : 'black',
        backgroundColor: `rgba(50, 10, 100, ${cell / 100})`,
      }}
    >
      {Math.floor(cell)}
    </button>
  );
};

export default Cell;
