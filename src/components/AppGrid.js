import React from 'react';
import { useDebouncedState } from '../utils/utils';
import Grid from './Grid';

const AppGrid = () => {
  const [rows, setRows] = useDebouncedState(50);
  const [columns, setColumns] = useDebouncedState(50);

  return (
    <Grid
      onUpdateGrid={() => {}}
      rows={rows}
      handleRowsChange={setRows}
      columns={columns}
      handleColumnsChange={setColumns}
    />
  );
};

export default AppGrid;
