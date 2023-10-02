import { useQueries, QueryFunctionContext } from '@tanstack/react-query';

import { Episode } from 'models';
import { episodeService } from 'services';

const queryKeys = {
  all: [{ scope: 'episodes' }] as const,
  episode: (url?: string) => [{ entity: 'episode', url }] as const,
};

interface UseEpisodeProps {
  urls: string[];
  enabled: boolean;
}

const fetchEpisode = async ({
  queryKey: [{ url }],
}: QueryFunctionContext<ReturnType<(typeof queryKeys)['episode']>>) => {
  if (url) {
    return await episodeService.getEpisode(url);
  }
};

export const useEpisodes = ({ enabled, urls }: UseEpisodeProps) => {
  const results = useQueries({
    queries: [
      ...urls.map((url) => ({
        queryKey: queryKeys.episode(url),
        queryFn: fetchEpisode,
        enabled,
      })),
    ],
  });

  return {
    episodes: results
      .map(({ data }) => data)
      .filter((episode): episode is Episode => episode !== undefined),
  };
};
