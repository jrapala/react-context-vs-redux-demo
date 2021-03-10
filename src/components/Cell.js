import React, { memo } from 'react';
import { useAppState } from '../state-context';
import { useAppDispatch } from '../dispatch-context';

const Cell = memo(({ row, column }) => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const cell = state.grid[row][column];
  const handleClick = () => dispatch({ type: 'UPDATE_GRID_CELL', row, column });

  return (
    <button
      className="cell"
      onClick={handleClick}
      style={{
        color: cell > 50 ? 'white' : 'black',
        backgroundColor: `rgba(50, 10, 100, ${cell / 100})`,
      }}
    >
      {Math.floor(cell)}
    </button>
  );
});

export default Cell;
