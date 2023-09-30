import React, { ReactElement } from 'react';

import { TableCell, TableHeaderCell, TableRow } from 'components';

import classes from './table.module.scss';

export type CellAlignment = 'left' | 'center' | 'right';

export interface ColumnConfiguration<T> {
  accessorKey: string;
  header: ReactElement | string;
  accessor?: (row: T) => ReactElement | string;
  alignment?: CellAlignment;
}

export interface ItemConfiguration {
  id: number;
  [key: string]: any;
}

interface TableProps<T extends ItemConfiguration> {
  columns: ColumnConfiguration<T>[];
  items: T[];
}

export const Table = <T extends ItemConfiguration>({
  columns,
  items,
}: TableProps<T>) => (
  <table className={classes.container}>
    <thead>
      <TableRow className={classes.headerRow}>
        {columns.map(({ accessorKey, header, alignment }) => (
          <TableHeaderCell
            key={accessorKey}
            alignment={alignment}
            header={header}
          />
        ))}
      </TableRow>
    </thead>
    <tbody>
      {items.map((row) => (
        <TableRow className={classes.itemRow} key={row.id}>
          {columns.map(({ accessor, accessorKey, alignment }) => (
            <TableCell
              key={`${row.id}-${accessorKey}`}
              accessorKey={accessorKey}
              row={row}
              accessor={accessor}
              alignment={alignment}
            />
          ))}
        </TableRow>
      ))}
    </tbody>
  </table>
);
