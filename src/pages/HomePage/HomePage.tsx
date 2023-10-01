import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Character } from 'models';
import {
  ColumnConfiguration,
  Table,
  Avatar,
  Page,
  StatusIndicator,
  SearchInput,
} from 'components';
import { characterService } from 'services';

import classes from './homePage.module.scss';

const HomePage = () => {
  const [items, setItems] = useState<Character[]>();
  const [filter, setFilter] = useState('');

  const handleFilterChange = useCallback((value: string) => {
    setFilter(value);
    console.log(value);
  }, []);

  useEffect(() => {
    const getCharacters = async () => {
      setItems(
        (await characterService.getCharacters({ filter }))?.results ?? []
      );
    };
    getCharacters();
  }, [filter]);

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
    <Page title="Rick and Morty Characters">
      <div className={classes.inputContainer}>
        <SearchInput
          placeholder="Search by name"
          initialValue={filter}
          onChange={handleFilterChange}
        />
      </div>
      {items && items?.length !== 0 ? (
        <Table columns={columnConfiguration} items={items} />
      ) : (
        <div className={classes.noResults}>No results found</div>
      )}
    </Page>
  );
};

export default HomePage;
