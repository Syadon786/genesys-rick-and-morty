import React, { useEffect, useState, useMemo, useCallback } from 'react';

import { Character } from 'models';
import {
  ColumnConfiguration,
  Table,
  Avatar,
  Page,
  StatusIndicator,
} from 'components';
import { characterService } from 'services';

const HomePage = () => {
  const [items, setItems] = useState<Character[]>([]);

  useEffect(() => {
    const getCharacters = async () => {
      setItems((await characterService.getCharacters()).results);
    };
    getCharacters();
  }, []);

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
    [avatarAccessor, statusAccessor]
  );

  return (
    <Page title="Rick and Morty Characters">
      <Table columns={columnConfiguration} items={items} />
    </Page>
  );
};

export default HomePage;
