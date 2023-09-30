import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { CellAlignment } from 'components';

import classes from './tableHeaderCell.module.scss';

interface TableHeaderCellProps {
  alignment?: CellAlignment;
  header: ReactNode | string;
}

export const TableHeaderCell = ({
  alignment,
  header,
}: TableHeaderCellProps) => (
  <th
    className={classNames(alignment && classes[alignment], classes.headerCell)}
  >
    {header}
  </th>
);
