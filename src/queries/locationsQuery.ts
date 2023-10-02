import { useQuery, QueryFunctionContext } from '@tanstack/react-query';

import { locationService } from 'services';

const queryKeys = {
  all: [{ scope: 'locations' }] as const,
  location: (url?: string) => [{ entity: 'location', url }] as const,
};

interface UseLocationProps {
  url?: string;
  enabled: boolean;
}

const fetchLocation = async ({
  queryKey: [{ url }],
}: QueryFunctionContext<ReturnType<(typeof queryKeys)['location']>>) => {
  if (url) {
    return await locationService.getLocation(url);
  }
};

export const useLocation = ({ enabled, url }: UseLocationProps) => {
  const { data, ...rest } = useQuery({
    queryKey: queryKeys.location(url),
    queryFn: fetchLocation,
    enabled,
  });

  return {
    location: data,
    ...rest,
  };
};
