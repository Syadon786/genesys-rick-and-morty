import React, { useMemo } from 'react';

import { Table, ColumnConfiguration } from 'components';
import { Episode } from 'models';

type EpisodeDetails = Pick<Episode, 'air_date' | 'name' | 'episode' | 'id'>;

interface EpisodesTableProps {
  episodes: EpisodeDetails[];
}

export const EpisodesTable = ({ episodes }: EpisodesTableProps) => {
  const columns = useMemo<ColumnConfiguration<EpisodeDetails>[]>(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Air date',
        accessorKey: 'air_date',
      },
      {
        header: 'Episode',
        accessorKey: 'episode',
      },
    ],
    []
  );
  return <Table columns={columns} items={episodes} />;
};
