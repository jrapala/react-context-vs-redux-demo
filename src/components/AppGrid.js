import React, { memo } from 'react';
import { useDebouncedState } from '../utils/utils';
import Grid from './Grid';
import { useAppDispatch } from '../dispatch-context';

const AppGrid = memo(() => {
  const dispatch = useAppDispatch();
  const [rows, setRows] = useDebouncedState(50);
  const [columns, setColumns] = useDebouncedState(50);
  const updateGridData = () => dispatch({ type: 'UPDATE_GRID' });

  return (
    <Grid
      onUpdateGrid={updateGridData}
      rows={rows}
      handleRowsChange={setRows}
      columns={columns}
      handleColumnsChange={setColumns}
    />
  );
});

export default AppGrid;
