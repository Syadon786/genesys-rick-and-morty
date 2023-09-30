import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { CellAlignment, ItemConfiguration } from 'components';

import classes from './tableCell.module.scss';

interface TableCellProps<T extends ItemConfiguration> {
  accessor?: (row: T) => ReactNode;
  alignment?: CellAlignment;
  row: T;
  accessorKey: string;
}

export const TableCell = <T extends ItemConfiguration>({
  accessor,
  row,
  alignment,
  accessorKey,
}: TableCellProps<T>) => (
  <td className={classNames(alignment && classes[alignment], classes.cell)}>
    {accessor ? accessor(row) : row[accessorKey]}
  </td>
);
