import { Episode } from 'models';
import { request } from 'utils';

class EpisodeService {
  getEpisode = async (url: string) => {
    return request<Episode>({
      url,
    });
  };
}

export const episodeService = new EpisodeService();
