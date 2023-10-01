import React, { ReactNode } from 'react';

import { TableCell, TableHeaderCell, TableRow } from 'components';

import classes from './table.module.scss';

export type CellAlignment = 'left' | 'center' | 'right';

export interface ColumnConfiguration<T> {
  accessorKey: string;
  header: ReactNode;
  accessor?: (row: T) => ReactNode;
  alignment?: CellAlignment;
}

export interface ItemConfiguration {
  id: number;
  [key: string]: any;
}

interface TableProps<T extends ItemConfiguration> {
  columns: ColumnConfiguration<T>[];
  items: T[];
  footer?: ReactNode;
}

export const Table = <T extends ItemConfiguration>({
  columns,
  items,
  footer,
}: TableProps<T>) => (
  <table className={classes.container}>
    <thead>
      <TableRow className={classes.header}>
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
        <TableRow className={classes.row} key={row.id}>
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
    {footer && (
      <tfoot>
        <TableRow className={classes.footer}>{footer}</TableRow>
      </tfoot>
    )}
  </table>
);
