import { CharacterResponse, Character } from 'models';
import { request, Service } from 'utils';

interface CharactersQueryOptions {
  page?: number;
  filter?: string;
}

class CharacterService extends Service {
  getCharacters = async ({ page = 1, filter }: CharactersQueryOptions) => {
    const filterQuery = filter ? `&name=${filter}` : '';
    return request<CharacterResponse>({
      resource: `${this.resource}/?page=${page}${filterQuery}`,
    });
  };

  getCharacter = async (id: number) => {
    return request<Character>({
      resource: `${this.resource}/${id}`,
    });
  };
}

export const characterService = new CharacterService('/character');
