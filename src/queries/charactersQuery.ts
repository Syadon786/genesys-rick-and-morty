import { useQuery, QueryFunctionContext } from '@tanstack/react-query';

import { characterService } from 'services';

const queryKeys = {
  all: [{ scope: 'characters' }] as const,
  lists: () => [{ ...queryKeys.all[0], entity: 'list' }] as const,
  list: (page: number, filter: string) =>
    [{ ...queryKeys.lists()[0], page, filter }] as const,
  character: (id: number) => [{ entity: 'character', id }] as const,
};

const fetchCharacters = async ({
  queryKey: [{ page, filter }],
}: QueryFunctionContext<ReturnType<(typeof queryKeys)['list']>>) =>
  await characterService.getCharacters({ page, filter });

export const useCharacters = (page: number, filter: string) => {
  const { data, ...rest } = useQuery({
    queryKey: queryKeys.list(page, filter),
    queryFn: fetchCharacters,
  });

  return {
    items: data?.results ?? [],
    totalPages: data?.info.pages ?? 0,
    ...rest,
  };
};
