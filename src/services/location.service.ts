import { Location } from 'models';
import { request } from 'utils';

class LocationService {
  getLocation = async (url: string) => {
    return request<Location>({
      url,
    });
  };
}

export const locationService = new LocationService();
