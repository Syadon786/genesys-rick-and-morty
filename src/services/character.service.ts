import { CharacterResponse } from 'models';
import { request } from 'utils';

class CharacterService {
  resource: string;

  constructor(resource: string) {
    this.resource = resource;
  }

  getCharacters = async (page: number = 1) => {
    return request<CharacterResponse>({
      resource: `${this.resource}/?page=${page}`,
    });
  };
}

export const characterService = new CharacterService('/character');
