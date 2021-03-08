import React from 'react';
import useInterval from 'use-interval';

import Cell from './Cell';
import '../App.css';

function Interval({ onInterval, interval }) {
  useInterval(onInterval, interval);
  return null;
}

const Grid = ({
  onUpdateGrid,
  rows,
  handleRowsChange,
  columns,
  handleColumnsChange,
}) => {
  const [keepUpdated, setKeepUpdated] = React.useState(false);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <button type="button" onClick={onUpdateGrid}>
            Update Grid Data
          </button>
        </div>
        <div>
          <label htmlFor="keepUpdated">Keep Grid Data updated</label>
          <input
            id="keepUpdated"
            checked={keepUpdated}
            type="checkbox"
            onChange={(e) => setKeepUpdated(e.target.checked)}
          />
          {keepUpdated ? (
            <Interval onInterval={onUpdateGrid} interval={500} />
          ) : null}
        </div>
        <div>
          <label htmlFor="rows">Rows to display: </label>
          <input
            id="rows"
            defaultValue={rows}
            type="number"
            min={1}
            max={100}
            onChange={(e) => handleRowsChange(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="columns">Columns to display: </label>
          <input
            id="columns"
            defaultValue={columns}
            type="number"
            min={1}
            max={100}
            onChange={(e) => handleColumnsChange(e.target.value)}
          />
        </div>
      </form>
      <div className="grid">
        {Array.from({ length: rows }).map((r, row) => (
          <div key={row} className="row">
            {Array.from({ length: columns }).map((c, column) => (
              <Cell key={column} row={row} column={column} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
