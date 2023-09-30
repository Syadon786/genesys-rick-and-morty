import React, { ReactNode } from 'react';

interface TableRowProps {
  children?: ReactNode;
  className?: string;
}

export const TableRow = ({ className, children }: TableRowProps) => (
  <tr className={className}>{children}</tr>
);
