import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

import {
  Table,
  Pagination,
  StatusIndicator,
  Avatar,
  ColumnConfiguration,
} from 'components';
import { Character } from 'models';

import classes from './charactersTable.module.scss';

type CharactersTableProps = {
  items: Character[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const CharactersTable = ({
  items,
  onPageChange,
  page,
  totalPages,
}: CharactersTableProps) => {
  const avatarAccessor = useCallback(
    ({ image, name }: Character) => (
      <Avatar src={image} alt={`Avatar of ${name}`} />
    ),
    []
  );

  const statusAccessor = useCallback(
    (row: Character) => <StatusIndicator status={row.status} />,
    []
  );

  const nameAccessor = useCallback(
    ({ id, name }: Character) => <Link to={`/profile/${id}`}>{name}</Link>,
    []
  );

  const columnConfiguration = useMemo<ColumnConfiguration<Character>[]>(
    () => [
      {
        header: 'Avatar',
        accessorKey: 'avatar',
        alignment: 'center',
        accessor: avatarAccessor,
      },
      {
        header: 'Name',
        accessorKey: 'name',
        accessor: nameAccessor,
      },
      {
        header: 'Species',
        accessorKey: 'species',
      },
      {
        header: 'Status',
        accessorKey: 'status',
        accessor: statusAccessor,
      },
    ],
    [avatarAccessor, nameAccessor, statusAccessor]
  );

  return (
    <Table
      columns={columnConfiguration}
      items={items}
      footer={
        <Pagination
          className={classes.pagination}
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      }
    />
  );
};
